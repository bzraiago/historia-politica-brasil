'use strict';

let active = 'primeiro-reinado';
let currentEra = 'imperio';
let lastFocus = null;
let fontSize = 0;
const modal = $('#modal');
const lastTabByEra = { imperio: 'primeiro-reinado', republica: 'velha' };

function selectTab(id, scroll = true) {
  const period = periods.find(item => item.id === id);
  if (!period) return;
  active = id;
  currentEra = periodEra(period);
  lastTabByEra[currentEra] = id;
  renderTabs(currentEra);
  document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
    panel.hidden = panel.id !== `panel-${id}`;
  });
  if (scroll) $('#panel-' + id).scrollIntoView({ block: 'start' });
  updateProgress();
}

function openDossier(id) {
  const dossier = dossiers.find(item => item.id === id);
  if (!dossier) return;
  lastFocus = document.activeElement;
  $('#modal-label').textContent = `DOSSIÊ / ${periods.find(period => period.id === dossier.period).tab}`;
  $('#modal-body').innerHTML = `<div class="eyebrow">${escapeHTML(dossier.date)}</div><h2 id="modal-title">${escapeHTML(dossier.title)}</h2><p class="deck">${escapeHTML(dossier.deck)}</p>${figure(dossier.image)}<article class="prose">${prose(dossier.text)}</article>${refs(dossier.refs)}`;
  modal.showModal();
  document.body.style.overflow = 'hidden';
  modal.scrollTop = 0;
  $('#close').focus();
}

function navigate(id) {
  if (modal.open) modal.close();
  selectTab(id);
  try { history.replaceState(null, '', '#' + id); }
  catch (error) { /* A navegação local continua sem histórico. */ }
}

function search() {
  const raw = $('#busca').value.trim();
  const query = normalize(raw);
  const out = $('#resultados');
  out.replaceChildren();
  out.hidden = !query;
  if (!query) { $('#search-status').textContent = ''; return; }

  const matches = [];
  periods.forEach(period => {
    const content = [period.tab, period.title, period.overview, period.note, JSON.stringify(period.social || []), JSON.stringify(period.rulers || period.presidents || []), period.id === 'analise' ? JSON.stringify(comparisons) : ''].join(' ');
    if (normalize(content).includes(query)) {
      matches.push({type:'tab', id:period.id, title:period.tab, detail:periodEra(period) === 'imperio' ? 'Brasil Império • panorama e sociedade' : 'Brasil República • panorama e sociedade'});
    }
  });
  dossiers.forEach(dossier => {
    if (normalize([dossier.title, dossier.deck, dossier.text].join(' ')).includes(query)) {
      matches.push({type:'dossier', id:dossier.id, title:dossier.title, detail:periods.find(period => period.id === dossier.period).tab});
    }
  });

  const heading = document.createElement('strong');
  heading.textContent = matches.length ? `${matches.length} resultados para “${raw}”` : `Nenhum resultado para “${raw}”. Tente outro termo.`;
  out.append(heading);
  matches.forEach(item => {
    const button = document.createElement('button');
    button.dataset[item.type] = item.id;
    button.append(document.createTextNode(item.title));
    const small = document.createElement('small');
    small.textContent = item.detail;
    button.append(small);
    out.append(button);
  });
  $('#search-status').textContent = `${matches.length} resultados encontrados.`;
}

function preparePrint() {
  $('#print-area').innerHTML = `<h1>Arquivo História do Brasil</h1><p>Império e República • 1822–Presente • República: recorte de 21/10/2026 • Império: revisão de 27/10/2026 • Texto integral dos períodos e dossiês.</p>${periods.map(period => `<section><h2>${escapeHTML(period.tab)} — ${escapeHTML(period.years)}</h2><div class="prose">${prose(period.overview)}</div><p>${escapeHTML(period.note)}</p>${period.social ? `<h3>Sociedade</h3>${society(period)}<h3>${period.rulers ? 'Imperadores e regentes' : 'Presidências'}</h3>${period.rulers ? rulers(period) : presidents(period)}` : comparison()}${dossiers.filter(dossier => dossier.period === period.id).map(dossier => `<h3>${escapeHTML(dossier.title)} — ${escapeHTML(dossier.date)}</h3><div class="prose">${prose(dossier.text)}</div>${refs(dossier.refs)}`).join('')}${refs(period.refs)}</section>`).join('')}`;
}

function updateProgress() {
  const height = document.documentElement.scrollHeight - innerHeight;
  $('#progress').style.width = (height > 0 ? Math.min(100, Math.max(0, scrollY / height * 100)) : 100) + '%';
}

render();

document.addEventListener('click', event => {
  const era = event.target.closest('[data-era]');
  const tab = event.target.closest('[data-tab]');
  const dossier = event.target.closest('[data-dossier]');
  if (era) navigate(lastTabByEra[era.dataset.era]);
  if (tab) navigate(tab.dataset.tab);
  if (dossier) openDossier(dossier.dataset.dossier);
});

$('#tabs').addEventListener('keydown', event => {
  const tabs = [...document.querySelectorAll('#tabs [role="tab"]')];
  const index = tabs.indexOf(document.activeElement);
  if (index < 0) return;
  let next = index;
  if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
  else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = tabs.length - 1;
  else return;
  event.preventDefault();
  const id = tabs[next].dataset.tab;
  navigate(id);
  $('#tab-' + id).focus();
});

$('#busca').addEventListener('input', search);
$('#clear').addEventListener('click', () => { $('#busca').value = ''; search(); $('#busca').focus(); });
$('#font').addEventListener('click', () => {
  fontSize = (fontSize + 1) % 3;
  document.documentElement.style.setProperty('--reading', [1.08, 1.2, 1.34][fontSize] + 'rem');
  $('#font').textContent = fontSize === 2 ? 'A padrão' : 'A+';
});
$('#close').addEventListener('click', () => modal.close());
modal.addEventListener('close', () => {
  document.body.style.overflow = '';
  if (lastFocus && lastFocus.isConnected) lastFocus.focus();
});
modal.addEventListener('click', event => {
  const bounds = modal.getBoundingClientRect();
  if (event.target === modal && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) modal.close();
});
document.addEventListener('error', event => {
  if (event.target.tagName === 'IMG') {
    if (event.target.closest('.card-media')) {
      event.target.closest('.card-media').hidden = true;
      return;
    }
    event.target.hidden = true;
    const note = document.createElement('p');
    note.className = 'image-error';
    note.textContent = 'Imagem indisponível nesta conexão. A legenda e o link para o acervo permanecem abaixo.';
    event.target.after(note);
  }
}, true);
$('#print').addEventListener('click', () => { preparePrint(); window.print(); });
window.addEventListener('beforeprint', preparePrint);
window.addEventListener('scroll', updateProgress, {passive:true});
window.addEventListener('resize', updateProgress);
window.addEventListener('hashchange', () => selectTab(location.hash.slice(1), true));

const initial = location.hash.slice(1);
if (periods.some(period => period.id === initial)) selectTab(initial, false);
updateProgress();
