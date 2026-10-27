# Arquivo História do Brasil

Atlas interativo do Brasil Império (1822–1889) e da República (1889–Presente). O projeto é estático e pode ser aberto diretamente pelo arquivo `index.html`, sem instalação ou etapa de compilação. Imagens e fontes externas precisam de internet.

## Estrutura

```text
index.html                  Estrutura da página e pontos de montagem da interface
styles/
  main.css                 Aparência, responsividade e impressão
scripts/
  data/
    imperial-sources.js    Fontes do Império
    sources.js             Fontes da República e catálogo conjunto
    imperial-periods.js    Primeiro Reinado, Regências e Segundo Reinado
    periods.js             Etapas republicanas e lista conjunta de períodos
    imperial-dossiers.js   Dossiês sobre o Império
    dossiers.js            Dossiês republicanos e lista conjunta
    imperial-images.js     Imagens, legendas e licenças do Império
    comparisons.js         Quadro de comparação dos modelos políticos
  render.js                Funções que transformam os dados em HTML
  app.js                   Navegação entre Império e República, pesquisa, diálogo e impressão
```

Os arquivos JavaScript são carregados na ordem acima, pois compartilham as constantes globais do projeto. Ao acrescentar conteúdo, edite os arquivos em `scripts/data/`. Ajustes visuais ficam em `styles/main.css`; mudanças no comportamento da página ficam em `scripts/app.js`. Preserve a ordem dos elementos `<script>` em `index.html`.

Os três panoramas e os 32 dossiês imperiais incluem imagens do Wikimedia Commons. Cada dossiê mostra uma miniatura no cartão e, ao abrir, uma legenda com autoria, data, contexto e link para o arquivo e sua licença quando aplicável. Imagens de contexto e representações posteriores são identificadas como tais.

## Método editorial

Cada período apresenta panorama, grupos sociais, governantes e referências. Os dossiês aprofundam acontecimentos e distinguem texto legal, prática histórica e interpretação. O dossiê da Casa Imperial apresenta a condição jurídica dos escravizados da nação, os estabelecimentos em que trabalhavam, as alforrias documentadas e o debate público contemporâneo. Os textos sobre a abolição situam as decisões de Pedro II e Isabel nas atribuições constitucionais da Coroa, nas votações parlamentares e na mobilização social. Documentos da época e acervos públicos têm prioridade na apuração. Fontes monarquistas ajudam a registrar a perspectiva da família imperial; jornais adversários são identificados como participantes das disputas políticas de seu tempo.

## Ampliação do Império — 27/10/2026

O acervo reúne 32 dossiês imperiais e 36 republicanos. Os 17 textos imperiais anteriores foram aprofundados, e os três panoramas foram revistos. Os novos eixos cobrem economia e bancos; orçamento da Casa Imperial; ensino; ciência; infraestrutura; diplomacia; popularidade; população e seca; protestos; comparação histórica; cenários alternativos; e quatro leituras sobre viagens e curiosidades de Pedro II.

O cálculo orçamentário usa as rubricas 1 a 8 do artigo 2º da Lei 3.349/1887: 1.090 contos, aproximadamente 0,77% da despesa geral prevista para 1888. Esse subtotal não representa todo o custo da monarquia. Os indicadores recentes têm ano e universo explícitos; os cenários alternativos não são previsões.

As curiosidades distinguem o encontro documentado com Graham Bell, Paris e o Oriente Médio da viagem ao Japão que não ocorreu. Os relatos de empréstimos para viagens aparecem como alegações ainda não comprovadas nesta pesquisa, sem inventar contratos, bancos ou valores. O catálogo identifica documentos primários, acervos e pesquisas acadêmicas. Cada dossiê preserva referências próprias, e `text` e `overview` usam blocos multilinha para facilitar a edição.

## Verificação técnica

Execute `node tests/atlas.test.cjs` para conferir os vínculos entre períodos, dossiês e fontes, além da alternância entre Império e República e do conteúdo gerado para impressão. A carta de 1889 atribuída a Isabel sobre indenização aos libertos aparece como documento de autenticidade disputada; o atlas não a trata como prova de uma política já aprovada.
