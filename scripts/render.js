'use strict';

const $ = selector => document.querySelector(selector);
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const periodEra = period => period.era || 'republica';

function prose(text) {
  return text.split(/\n\s*\n/).map(block => {
    const lines = block.trim().split('\n');
    return lines.length > 1
      ? `<h3>${escapeHTML(lines.shift())}</h3><p>${escapeHTML(lines.join(' '))}</p>`
      : `<p>${escapeHTML(block.trim())}</p>`;
  }).join('');
}

function refs(ids) {
  return `<aside class="sources"><strong>Fontes e documentos para esta leitura</strong><ol>${[...new Set(ids)].map(id => `<li><a href="${sources[id][1]}" target="_blank" rel="noopener noreferrer">${escapeHTML(sources[id][0])} ↗</a></li>`).join('')}</ol></aside>`;
}

function figure(data) {
  if (!data) return '';
  return `<figure><img src="${data[0]}" alt="${escapeHTML(data[1])}" loading="lazy" decoding="async" referrerpolicy="no-referrer"><figcaption>${escapeHTML(data[2])}<br><a href="${data[3]}" target="_blank" rel="noopener noreferrer">Arquivo e metadados no Wikimedia Commons ↗</a>${data[4] ? ` · <a href="${data[4]}" target="_blank" rel="noopener noreferrer">Licença</a>` : ''}</figcaption></figure>`;
}

function cardImage(dossier) {
  if (!dossier.image) return '';
  return `<span class="card-media"><img src="${dossier.image[0]}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer"></span>`;
}

function dossierCard(dossier) {
  return '<button class="card" data-dossier="' + escapeHTML(dossier.id) + '" aria-haspopup="dialog">' +
    cardImage(dossier) +
    '<span class="tag">' + escapeHTML(dossier.date) + '</span>' +
    '<h4>' + escapeHTML(dossier.title) + '</h4>' +
    '<p>' + escapeHTML(dossier.deck) + '</p>' +
    '<span class="action">Aprofundar leitura ↗</span></button>';
}

function dossierGroupsFor(period) {
  const periodDossiers = dossiers.filter(dossier => dossier.period === period.id);
  const assigned = new Set();
  const groups = (dossierThemes[period.id] || []).map(theme => {
    const items = theme.dossierIds
      .map(id => periodDossiers.find(dossier => dossier.id === id))
      .filter(dossier => dossier && !assigned.has(dossier.id));
    items.forEach(dossier => assigned.add(dossier.id));
    return {...theme, items};
  }).filter(group => group.items.length);
  const remaining = periodDossiers.filter(dossier => !assigned.has(dossier.id));
  if (remaining.length) groups.push({id:'outros-temas', title:'Outros temas', items:remaining});
  return groups;
}

function dossierThemeLabel(dossier) {
  const theme = (dossierThemes[dossier.period] || []).find(item => item.dossierIds.includes(dossier.id));
  return theme ? theme.title : 'Outros temas';
}

function renderDossierGroups(period) {
  const groups = dossierGroupsFor(period);
  if (!groups.length) return '<p class="empty-dossiers">Não há dossiês cadastrados para este período.</p>';
  const prefix = 'theme-' + period.id + '-';
  const index = groups.length > 1
    ? '<nav class="theme-index" aria-label="Navegação por tema"><strong>Ir para tema</strong>' +
      groups.map(group => '<button type="button" class="theme-link" data-theme-target="' + prefix + group.id + '">' +
        escapeHTML(group.title) + '<small>' + group.items.length + '</small></button>').join('') + '</nav>'
    : '';
  const sections = groups.map(group => {
    const headingId = prefix + 'heading-' + group.id;
    const count = group.items.length === 1 ? '1 dossiê' : group.items.length + ' dossiês';
    return '<section class="dossier-theme" id="' + prefix + group.id + '" aria-labelledby="' + headingId + '">' +
      '<div class="dossier-theme-heading"><h4 id="' + headingId + '">' + escapeHTML(group.title) + '</h4><span>' + count + '</span></div>' +
      '<div class="cards">' + group.items.map(dossierCard).join('') + '</div></section>';
  }).join('');
  return index + '<div class="dossier-themes">' + sections + '</div>';
}

function printDossierGroups(period) {
  return dossierGroupsFor(period).map(group =>
    '<h3>' + escapeHTML(group.title) + '</h3>' +
    group.items.map(dossier => '<h4>' + escapeHTML(dossier.title) + ' — ' + escapeHTML(dossier.date) +
      '</h4><div class="prose">' + prose(dossier.text) + '</div>' + refs(dossier.refs)).join('')
  ).join('');
}

function society(period) {
  return `<div class="social">${period.social.map(row => `<div><h4>${escapeHTML(row[0])}</h4><p>${escapeHTML(row[1])}</p></div>`).join('')}</div>`;
}

function presidents(period) {
  return `<div class="table-wrap"><table><caption>Mandatos e sucessões relevantes. Intervalos indicam anos de exercício; interinidades por viagens não são enumeradas. Orientações são classificações interpretativas.</caption><thead><tr><th scope="col">Período</th><th scope="col">Presidência</th><th scope="col">Orientação e coalizão</th><th scope="col">Política e transição</th></tr></thead><tbody>${period.presidents.map(row => `<tr>${row.map((cell, i) => i === 1 ? `<th scope="row">${escapeHTML(cell)}</th>` : `<td>${escapeHTML(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function rulers(period) {
  return `<div class="table-wrap"><table><caption>Imperadores e regentes. O quadro resume o exercício do poder central e não substitui a história dos gabinetes ou das províncias.</caption><thead><tr><th scope="col">Período</th><th scope="col">Governante</th><th scope="col">Arranjo político</th><th scope="col">Contexto</th></tr></thead><tbody>${period.rulers.map(row => `<tr>${row.map((cell, i) => i === 1 ? `<th scope="row">${escapeHTML(cell)}</th>` : `<td>${escapeHTML(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function comparison() {
  return `<div class="table-wrap"><table class="comparison"><caption>Realizações e problemas historicamente associados a experiências distintas. A tabela não é uma pontuação e não permite inferir causalidade apenas pela posição ideológica.</caption><thead><tr><th scope="col">Dimensão</th><th scope="col">Direita / centro-direita: contribuições</th><th scope="col">Custos e limites</th><th scope="col">Esquerda / centro-esquerda: contribuições</th><th scope="col">Custos e limites</th></tr></thead><tbody>${comparisons.map(row => `<tr>${row.map((cell, i) => i === 0 ? `<th scope="row">${escapeHTML(cell)}</th>` : `<td>${escapeHTML(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function renderTabs(era) {
  $('#tabs').innerHTML = periods.filter(period => periodEra(period) === era).map(period => `<button id="tab-${period.id}" role="tab" aria-selected="${period.id === active}" aria-controls="panel-${period.id}" tabindex="${period.id === active ? 0 : -1}" data-tab="${period.id}">${escapeHTML(period.tab)}<small>${escapeHTML(period.years)}</small></button>`).join('');
  document.querySelectorAll('[data-era]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.era === era)));
}

function periodDetails(period) {
  if (period.rulers) {
    return `<div class="section-title"><h3>O termômetro da sociedade</h3><span>Interesses e posições em transformação</span></div>${society(period)}<div class="section-title"><h3>Quem governou</h3><span>Imperadores e regentes</span></div>${rulers(period)}`;
  }
  if (period.social) {
    return `<div class="section-title"><h3>O termômetro da sociedade</h3><span>Setores plurais, posições em transformação</span></div>${society(period)}<div class="section-title"><h3>Quem governou</h3><span>Presidências, sucessões e interinos</span></div>${presidents(period)}`;
  }
  return `<div class="section-title"><h3>Realizações, custos e contradições</h3></div>${comparison()}<div class="method prose"><h3>Como usar e confrontar as fontes</h3><p>Constituições e leis registram normas; sua existência não comprova cumprimento. Acervos governamentais preservam documentos e também produzem interpretações. Discursos de autoridades e relatórios de investigação exigem identificação de autoria, objetivo e situação processual. Estudos econômicos dependem de séries, conceitos e modelos. Confronte essas evidências e evite confundir opinião institucional com consenso historiográfico.</p><p>Os textos são uma elaboração editorial em diálogo com as referências indicadas. Classificações e comparações são explicitamente analíticas. A seleção combina documentos primários, instituições de memória e estudos públicos; não pretende tornar equivalentes versões incompatíveis com evidência documental.</p></div><details class="sources"><summary>Bibliografia e acervos consultados (${Object.keys(sources).length} referências)</summary>${refs(Object.keys(sources))}</details>`;
}

function render() {
  $('#panels').innerHTML = periods.map((period, index) => `<section id="panel-${period.id}" class="period" role="tabpanel" aria-labelledby="tab-${period.id}" tabindex="0" ${period.id !== active ? 'hidden' : ''}><div class="period-heading"><div><div class="eyebrow">${escapeHTML(period.kicker)}</div><h2>${escapeHTML(period.title)}</h2><span class="status">${escapeHTML(period.years)}</span></div><div class="period-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</div></div><div class="${period.image ? 'lead-grid' : ''}"><div class="prose">${prose(period.overview)}</div>${figure(period.image)}</div><div class="note">${escapeHTML(period.note)}</div><div class="section-title"><h3>Dossiês por tema</h3><span>Escolha um assunto e abra o dossiê que quer ler</span></div>${renderDossierGroups(period)}${periodDetails(period)}${refs(period.refs)}<div class="reading-actions">${index > 0 ? `<button data-tab="${periods[index - 1].id}">← ${escapeHTML(periods[index - 1].tab)}</button>` : ''}${index < periods.length - 1 ? `<button data-tab="${periods[index + 1].id}">Próxima leitura →</button>` : ''}</div></section>`).join('');
  $('#dossier-count').textContent = dossiers.length;
  $('#period-count').textContent = periods.length;
  renderTabs(currentEra);
}
