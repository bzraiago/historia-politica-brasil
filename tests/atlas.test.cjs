const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(match => match[1]);
const elements = new Map();
const getElement = selector => {
  if (!elements.has(selector)) elements.set(selector, {
    innerHTML: '', textContent: '', value: '', hidden: false, style: {},
    addEventListener() {}, focus() {}, scrollIntoView() {}, replaceChildren() {}, append() {}
  });
  return elements.get(selector);
};
const eraButtons = ['imperio', 'republica'].map(era => ({dataset:{era}, setAttribute(name, value) {this[name] = value;}}));
const panels = new Map();
const document = {
  querySelector: getElement,
  querySelectorAll(selector) {
    if (selector === '[data-era]') return eraButtons;
    if (selector === '[role="tabpanel"]') return [...panels.values()];
    return [];
  },
  documentElement: {scrollHeight: 1000, style: {setProperty() {}}},
  activeElement: null,
  addEventListener() {},
  createElement(tagName) {return {tagName, dataset:{}, append() {}, textContent:''};},
  createTextNode(value) {return value;}
};
const context = vm.createContext({
  document, window: {addEventListener() {}, print() {}}, location: {hash:''},
  history: {replaceState() {}}, innerHeight: 500, scrollY: 0,
  console
});
for (const script of scripts) {
  const file = path.join(root, script);
  assert.ok(fs.existsSync(file), `${script} não existe`);
  vm.runInContext(fs.readFileSync(file, 'utf8'), context, {filename:script});
}

const model = vm.runInContext('({periods, dossiers, sources})', context);
assert.equal(model.periods.length, 9);
assert.ok(model.dossiers.length >= 50);
assert.equal(model.periods.filter(period => period.era === 'imperio').length, 3);
assert.equal(new Set(model.periods.map(period => period.id)).size, model.periods.length);
assert.equal(new Set(model.dossiers.map(dossier => dossier.id)).size, model.dossiers.length);
for (const item of [...model.periods, ...model.dossiers]) {
  assert.ok((item.refs || []).length, `Sem fontes: ${item.id}`);
  for (const reference of item.refs) assert.ok(model.sources[reference], `Fonte ausente: ${reference} em ${item.id}`);
}
for (const dossier of model.dossiers) assert.ok(model.periods.some(period => period.id === dossier.period), `Período ausente: ${dossier.id}`);

for (const period of model.periods) panels.set(`panel-${period.id}`, {id:`panel-${period.id}`, hidden:period.id !== 'primeiro-reinado'});
assert.match(getElement('#panels').innerHTML, /id="panel-primeiro-reinado"/);
assert.match(getElement('#panels').innerHTML, /id="panel-velha"/);
assert.match(getElement('#tabs').innerHTML, /Primeiro Reinado/);
assert.doesNotMatch(getElement('#tabs').innerHTML, /República Velha/);
assert.equal(getElement('#dossier-count').textContent, model.dossiers.length);

vm.runInContext("selectTab('velha', false)", context);
assert.match(getElement('#tabs').innerHTML, /República Velha/);
assert.doesNotMatch(getElement('#tabs').innerHTML, /Primeiro Reinado/);
assert.equal(eraButtons[1]['aria-pressed'], 'true');
assert.equal(panels.get('panel-velha').hidden, false);
assert.equal(panels.get('panel-primeiro-reinado').hidden, true);

vm.runInContext("selectTab('segundo-reinado', false); preparePrint()", context);
assert.match(getElement('#tabs').innerHTML, /Segundo Reinado/);
assert.match(getElement('#print-area').innerHTML, /Imperadores e regentes/);
assert.match(getElement('#print-area').innerHTML, /República Velha/);
console.log(`${model.periods.length} períodos, ${model.dossiers.length} dossiês e ${Object.keys(model.sources).length} fontes válidas; alternância e impressão verificadas.`);
