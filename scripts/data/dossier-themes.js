'use strict';

const dossierThemes = {
  "primeiro-reinado": [
    { id: "formacao-do-estado", title: "Independência e formação do Estado", dossierIds: ["independencias", "constituicao1824"] },
    { id: "guerras-e-crise", title: "Guerra, fronteiras e crise sucessória", dossierIds: ["cisplatina-abdicacao"] }
  ],
  "regencias": [
    { id: "instituicoes", title: "Regências e organização do poder", dossierIds: ["regencia-estado"] },
    { id: "revoltas-e-resistencias", title: "Revoltas, resistência e repressão", dossierIds: ["cabana-balaiada", "males", "farroupilha-sabinada"] }
  ],
  "segundo-reinado": [
    { id: "politica-e-crise", title: "Instituições, política e crise da monarquia", dossierIds: ["politica-imperial", "fim-imperio"] },
    { id: "escravidao-e-emancipacao", title: "Escravidão, emancipação e pós-abolição", dossierIds: ["trafico-cafe", "leis-emancipacao", "abolicao-imperio", "casa-imperial-escravidao", "isabel-camelias", "pos-abolicao-projetos"] },
    { id: "sociedade-e-territorio", title: "Sociedade, território e vida cotidiana", dossierIds: ["terra-indigenas", "cotidiano-populacao", "protestos-modernizacao", "popularidade-monarquia"] },
    { id: "economia-e-modernizacao", title: "Economia, educação e modernização", dossierIds: ["economia-financas-imperio", "custos-casa-imperial", "educacao-imperial", "ciencia-imperial", "tecnologia-infraestrutura"] },
    { id: "guerras-e-diplomacia", title: "Guerras, fronteiras e diplomacia", dossierIds: ["guerra-paraguai", "diplomacia-prata"] },
    { id: "casa-imperial-e-religiao", title: "Casa Imperial, religião e viagens", dossierIds: ["igreja-religiao-imperio", "viagens-bell-telefone", "viagens-europa-oriente", "pedro-japao", "viagens-paisana-financiamento"] },
    { id: "comparacoes-e-cenarios", title: "Comparações históricas e cenários", dossierIds: ["comparar-imperio-republica", "alternativas-historicas"] }
  ],
  "velha": [
    { id: "sociedade-e-cidadania", title: "Conflitos sociais e cidadania", dossierIds: ["canudos", "vacina", "chibata", "trabalho-terra"] },
    { id: "politica-e-ruptura", title: "Disputas políticas e ruptura de 1930", dossierIds: ["tenentismo", "ruptura1930"] }
  ],
  "vargas": [
    { id: "constituicao-e-direitos", title: "Constituição, participação e direitos do trabalho", dossierIds: ["constitucionalizacao", "clt"] },
    { id: "movimentos-e-repressao", title: "Movimentos políticos e repressão", dossierIds: ["anl-aib", "levantes1935", "estado-novo"] },
    { id: "propaganda-e-cultura", title: "Propaganda, cultura e censura", dossierIds: ["dip"] },
    { id: "guerra-e-transicao", title: "Guerra mundial e queda de Vargas", dossierIds: ["fim-vargas"] }
  ],
  "populista": [
    { id: "governos-e-crises", title: "Governos e crises políticas", dossierIds: ["dutra", "tonelero", "janio"] },
    { id: "desenvolvimento", title: "Desenvolvimento e industrialização", dossierIds: ["jk"] },
    { id: "reformas-e-polarizacao", title: "Reformas e polarização", dossierIds: ["reformas"] }
  ],
  "ditadura": [
    { id: "golpe-e-repressao", title: "Golpe, autoritarismo e repressão", dossierIds: ["golpe1964", "ai5", "doi-codi"] },
    { id: "economia-e-desigualdade", title: "Crescimento econômico e desigualdade", dossierIds: ["milagre"] },
    { id: "abertura-e-mobilizacao", title: "Abertura e mobilização social", dossierIds: ["abertura"] }
  ],
  "nova": [
    { id: "constituicao-e-mobilizacao", title: "Constituição, participação e mobilização", dossierIds: ["constituicao1988", "junho2013"] },
    { id: "economia-e-politicas-sociais", title: "Economia e políticas sociais", dossierIds: ["plano-real", "lula-social"] },
    { id: "governos-e-crises", title: "Governos, eleições e crises", dossierIds: ["collor", "dilma2016", "temer-bolsonaro", "presente"] },
    { id: "justica-e-instituicoes", title: "Justiça e responsabilização institucional", dossierIds: ["lava-jato"] }
  ],
  "analise": [
    { id: "correntes-e-projetos", title: "Correntes ideológicas e projetos de país", dossierIds: ["liberalismo", "nacionalismo", "comunismo", "fascismo"] }
  ]
};
