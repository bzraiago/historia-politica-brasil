'use strict';
const imperialSources = {
  "imp_independencia": [
    "Arquivo Nacional — Independência na Bahia e guerras de 1822–1823",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/especial-bicentenario-da-independencia/apontamentos-sobre-a-independencia-do-brasil-na-bahia"
  ],
  "imp_maranhao": [
    "Arquivo Nacional — A independência no Maranhão",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/especial-bicentenario-da-independencia/longe-das-margens-do-ipiranga-a-independencia-do-maranhao-1/"
  ],
  "imp_primeiro": [
    "Senado — História do Primeiro Reinado e da Constituinte",
    "https://www.senado.leg.br/senado/hotsites/histsf/Primeiro-Reinado.asp"
  ],
  "imp_constituicao": [
    "Senado — Constituição Política do Império do Brasil, 1824",
    "https://legis.senado.leg.br/norma/579488"
  ],
  "imp_parlamento": [
    "Senado — Fechamento da Assembleia Constituinte de 1823",
    "https://www12.senado.leg.br/noticias/especiais/arquivo-s/1o-parlamento-sofreu-golpe-de-d-pedro-i-mas-lancou-no-pais-bases-da-democracia"
  ],
  "imp_cisplatina": [
    "Arquivo Nacional — Fundo Cisplatina e guerra de 1825–1828",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/conheca-o-acervo/cisplatina-1a"
  ],
  "imp_abdicacao": [
    "Arquivo Nacional — Crise do Primeiro Reinado e abdicação",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/documentos/pedido-de-maioridade-de-d-pedro-ii"
  ],
  "imp_regencia": [
    "Senado — Cronologia parlamentar do período imperial",
    "https://www12.senado.leg.br/senado200anos/passado"
  ],
  "imp_cabanagem": [
    "Arquivo Nacional — Cabanagem e participação popular",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/temas-oitocentistas/cabanagem-a-revolucao-das-201cclasses-infimas201d"
  ],
  "imp_males": [
    "Arquivo Público da Bahia — Documentos da Revolta dos Malês",
    "https://www.ba.gov.br/comunicacao/index.php/noticias/2025-02/365005/arquivo-publico-da-bahia-preserva-documentos-da-revolta-dos-males"
  ],
  "imp_balaiada": [
    "Câmara — Balaiada e seus participantes",
    "https://www.camara.leg.br/noticias/539811-camara-homenageia-os-180-anos-da-revolta-da-balaiada"
  ],
  "imp_farroupilha": [
    "Arquivo Nacional — Proclamação sobre o fim da Farroupilha",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/desafio-paleografico/rio-grandenses"
  ],
  "imp_segundo": [
    "Senado — História do Segundo Reinado",
    "https://www.senado.leg.br/senado/hotsites/histsf/O-Senado-no-2o-Reinado.asp"
  ],
  "imp_praieira": [
    "Arquivo Nacional — Revolta Praieira e disputas em Pernambuco",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/documentos/punicao-aos-rebeldes-da-revolta-praieira"
  ],
  "imp_terras": [
    "Presidência — Lei de Terras de 1850, texto original",
    "https://www.planalto.gov.br/ccivil_03/leis/lim/lim601.htm"
  ],
  "imp_indigenas": [
    "Arquivo Nacional — Indígenas na construção do Império",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/temas-oitocentistas/indigenas-na-construcao-do-imperio"
  ],
  "imp_trafico": [
    "Senado — Lei de 1831, pressão britânica e fim do tráfico atlântico",
    "https://www12.senado.leg.br/noticias/especiais/arquivo-s/marinha-britanica-forcou-brasil-a-acabar-com-trafico-negreiro"
  ],
  "imp_liberdade": [
    "Arquivo Nacional — Ações de liberdade na Justiça imperial",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/temas-oitocentistas/escravizados-e-a-conquista-da-liberdade-na-justica-do-imperio"
  ],
  "imp_abolicao": [
    "Arquivo Nacional — Legislação abolicionista e mobilização social",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/temas-oitocentistas/legislacao-abolicionista-no-imperio"
  ],
  "imp_ventre": [
    "Senado — Manuscrito da Lei do Ventre Livre de 1871",
    "https://www2.senado.leg.br/jspui/handle/id/496715"
  ],
  "imp_guerra": [
    "Biblioteca Nacional — Contexto histórico da Guerra do Paraguai",
    "https://bndigital.bn.gov.br/dossies/guerra-do-paraguai/contexto-historico/"
  ],
  "imp_guerra_acervo": [
    "Arquivo Nacional — Guerra do Paraguai e consequências",
    "https://exposicoesvirtuais.an.gov.br/index.php/galerias/93-exposicoes/brasil/saiba-mais/298-guerra-do-paraguai.html"
  ],
  "imp_eleicoes": [
    "Senado — Lei Saraiva e restrição eleitoral em 1881",
    "https://webstories.senado.leg.br/web-stories/eleicoes-180-anos-da-lei-que-organizou-o-voto-no-brasil/"
  ],
  "imp_constituicao_1824_original": [
    "Câmara dos Deputados — Constituição de 1824, texto original (arts. 90–95)",
    "https://www2.camara.leg.br/legin/fed/consti/1824-1899/constituicao-35041-25-marco-1824-532540-publicacaooriginal-14770-pl.html"
  ],
  "imp_eleicoes_1846": [
    "Câmara dos Deputados — Lei eleitoral de 19 de agosto de 1846, texto original",
    "https://www2.camara.leg.br/legin/fed/leimp/1824-1899/lei-387-19-agosto-1846-555122-publicacaooriginal-83186-pl.html"
  ],
  "imp_lei_saraiva_1881_original": [
    "Câmara dos Deputados — Decreto nº 3.029/1881 (Lei Saraiva), texto original",
    "https://www2.camara.leg.br/legin/fed/decret/1824-1899/decreto-3029-9-janeiro-1881-546079-publicacaooriginal-59786-pl.html"
  ],
  "imp_regulamento_eleitoral_1881": [
    "Câmara dos Deputados — Decreto nº 8.213/1881, regulamento eleitoral e alistamento",
    "https://www2.camara.leg.br/legin/fed/decret/1824-1899/decreto-8213-13-agosto-1881-546457-publicacaooriginal-60487-pe.html"
  ],
  "imp_religiao_constituicao_an": [
    "Arquivo Nacional — Constituição de 1824: religião do Império e limites ao culto público",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/documentos/constituicao-para-o-imperio-do-brasil"
  ],
  "imp_religiao_codigocriminal": [
    "Presidência da República — Código Criminal de 1830, art. 276, culto de religiões diferentes da oficial",
    "https://www.planalto.gov.br/ccivil_03/leis/lim/lim-16-12-1830.htm"
  ],
  "imp_religiao_pluralidade": [
    "Arquivo Nacional — Liberdade religiosa e limites aos cultos não católicos no Império",
    "https://mapa.arquivonacional.gov.br/images/publicacoes/190anosMJ/ministerio-da-justica/assets/basic-html/page-25.html"
  ],
  "imp_religiao_irmandades": [
    "Arquivo Nacional — Irmandades, devoção leiga e assistência comunitária",
    "https://historialuso.arquivonacional.gov.br/index.php/historia-luso-brasileira/assuntos/listadetemas/irmandades"
  ],
  "imp_religiao_feijo": [
    "Senado Federal — Diogo Antônio Feijó, sacerdote e regente",
    "https://www25.senado.leg.br/web/senadores/senador/-/perfil/1574"
  ],
  "imp_religiao_questao": [
    "Senado Federal e Arquivo Nacional — Atas do Conselho de Estado sobre a Questão Religiosa (1875–1880)",
    "https://www.senado.leg.br/publicacoes/anais/pdf/ace/atas10-terceiro_conselho_de_estado_1875-1880.pdf"
  ],
  "imp_religiao_questao_1873": [
    "Senado Federal e Arquivo Nacional — Atas do Conselho de Estado (1868–1873), documentos da Questão Religiosa",
    "https://www.senado.gov.br/publicacoes/anais/pdf/ACE/ATAS8-Terceiro_Conselho_de_Estado_1868-1873.pdf"
  ],
  "imp_religiao_vital": [
    "Fundaj — Dom Vital, bispo de Olinda durante a Questão Religiosa",
    "https://pesquisaescolar.fundaj.gov.br/pt-br/artigo/dom-vital/"
  ],
  "imp_religiao_isabel": [
    "Santuário Nacional de Aparecida — Visitas de Pedro I, Pedro II e princesa Isabel; promessa e coroa",
    "https://www.a12.com/santuario/historia-de-nossa-senhora-aparecida-1800"
  ],
  "imp_religiao_coroacao": [
    "Santuário Nacional de Aparecida — Coroação da imagem em 1904 e autorização de Pio X",
    "https://www.a12.com/santuario/noticias/110-anos-da-coroacao-de-nossa-senhora-aparecida-a-plenitude-da-bem-aventuranca"
  ],
  "imp_religiao_bn": [
    "Biblioteca Nacional Digital — Nossa Senhora Aparecida e a cronologia da doação de Isabel",
    "https://bndigital.bn.gov.br/artigos/12-de-outubro-dia-de-nossa-senhora-da-conceicao-aparecida/"
  ],
  "imp_religiao_abolicao": [
    "Santa Sé — Leão XIII, encíclica In Plurimis aos bispos do Brasil (5 de maio de 1888)",
    "https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_05051888_in_plurimis.html"
  ],
  "imp_religiao_victor": [
    "Diocese da Campanha — Biografia de Francisco de Paula Victor e beatificação",
    "https://diocesedacampanha.org.br/beato-padre-victor/"
  ],
  "imp_religiao_victor_acta": [
    "Santa Sé — Acta Apostolicae Sedis: processo de beatificação e vida de Francisco de Paula Victor",
    "https://press.vatican.va/archive/aas/documents/2019/acta-agosto2019.pdf"
  ],
  "imp_religiao_nhachica": [
    "Santa Sé — Carta apostólica de beatificação de Nhá Chica (2013)",
    "https://press.vatican.va/roman_curia/secretariat_state/parolin/2013/documents/rc_seg-st_20130504_beata-nha-chica_lt.html"
  ],
  "imp_religiao_galvao": [
    "Santa Sé — Biografia oficial de Frei Antônio de Sant’Anna Galvão (1739–1822)",
    "https://www.vatican.va/news_services/liturgy/saints/ns_lit_doc_20070511_frei-galvao_po.html"
  ],
  "imp_religiao_galvao_canonizacao": [
    "Santa Sé — Homilia da canonização de Frei Galvão, São Paulo, 11 de maio de 2007",
    "https://www.vatican.va/content/benedict-xvi/pt/homilies/2007/documents/hf_ben-xvi_hom_20070511_canonization-brazil.html"
  ],
  "imp_religiao_paulina": [
    "Santa Sé — Biografia oficial de Amábile Lúcia Visintainer, Santa Paulina",
    "https://press.vatican.va/news_services/liturgy/2002/documents/ns_lit_doc_20020519_paulina_po.html"
  ],
  "imp_religiao_paulina_canonizacao": [
    "Santa Sé — Homilia da canonização de Santa Paulina, 19 de maio de 2002",
    "https://www.vatican.va/content/john-paul-ii/pt/homilies/2002/documents/hf_jp-ii_hom_20020519_canonization.html"
  ],
  "imp_religiao_nhachica_diocese": [
    "Diocese da Campanha — Vida de Nhá Chica e devoção em Baependi",
    "https://diocesedacampanha.org.br/beata-nha-chica-intercedei-por-nos/"
  ],
  "imp_religiao_republica": [
    "Presidência da República — Decreto nº 119-A, de 7 de janeiro de 1890: liberdade de cultos e extinção do padroado",
    "https://www.planalto.gov.br/ccivil_03/decreto/1851-1899/d119-a.htm"
  ],
  "imp_religiao_constituicao_1891": [
    "Presidência da República — Constituição de 1891, texto original",
    "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao91.htm"
  ],
  "imp_religiao": [
    "Funarte — Questão Religiosa e relações entre Igreja e Estado",
    "https://funartemaisdigital.funarte.gov.br/periodicos/o-cetro-contra-o-baculo/"
  ],
  "imp_republica": [
    "Senado — Advento da República e fim das instituições imperiais",
    "https://www.senado.leg.br/senado/hotsites/histsf/Senado-no-Advento-da-Republica.asp"
  ],
  "imp_mulheres": [
    "Imprensa Nacional — Mulheres e resistência no Primeiro Reinado",
    "https://www.gov.br/imprensanacional/pt-br/canais_atendimento/exposicao-especial-in-setembro-2025-texto-final-e-book-26-09-p.pdf"
  ],
  "imp_publica_pesquisa": [
    "USP — Pesquisa sobre os escravizados da nação e o usufruto da Casa Imperial",
    "https://teses.usp.br/teses/disponiveis/8/8137/tde-31082012-100444/publico/2012_IlanaPeliciariRocha_VRev.pdf"
  ],
  "imp_isabel_bn": [
    "Senado — Atuação política da princesa Isabel no abolicionismo",
    "https://www12.senado.leg.br/noticias/especiais/arquivo-s/cem-anos-da-morte-da-princesa-isabel-a-regente-que-reinou-alem-do-machismo"
  ],
  "imp_isabel_bndigital": [
    "Biblioteca Nacional Digital — Isabel, financiamento de alforrias e camélias do Leblon",
    "https://bndigital.bn.gov.br/princesa-isabel-2/"
  ],
  "imp_camelias_1889": [
    "Hemeroteca da Biblioteca Nacional — Memória das camélias entregues a Isabel em 1888, publicada em 1889",
    "https://hemeroteca-pdf.bn.gov.br/085669/per085669_1889_00150.pdf"
  ],
  "imp_imprensa_segundo": [
    "Senado — Críticas e charges da imprensa a Pedro II",
    "https://www12.senado.leg.br/noticias/especiais/arquivo-s/parlamento-derrubou-planos-de-d-pedro-i-de-restringir-a-liberdade-de-imprensa"
  ],
  "imp_isabel_museu": [
    "Museu Imperial — Camélias, Quilombo do Leblon e política abolicionista",
    "https://museuimperial.museus.gov.br/wp-content/uploads/2024/10/Anuario-2023-com_OCR.pdf"
  ],
  "imp_fala_1888": [
    "Senado — Fala do Trono de Isabel e tramitação da Lei Áurea",
    "https://www12.senado.leg.br/noticias/especiais/arquivo-s/senado-e-camara-aprovaram-lei-aurea-em-5-dias/senado-e-camara-aprovaram-lei-aurea-em-5-dias"
  ],
  "imp_lei_aurea": [
    "Senado — Manuscrito da Lei Áurea, 1888",
    "https://www2.senado.leg.br/jspui/handle/id/385454?mode=full"
  ],
  "imp_decreto_1866": [
    "Câmara — Decreto de 1866 sobre liberdade para serviço no Exército",
    "https://www2.camara.leg.br/legin/fed/decret/1824-1899/decreto-3725-a-6-novembro-1866-554505-publicacaooriginal-73127-pe.html"
  ],
  "imp_lei_1871": [
    "Câmara — Lei de 1871 que libertou escravizados da nação",
    "https://www2.camara.leg.br/legin/fed/leimp/1824-1899/lei-2040-28-setembro-1871-538828-publicacaooriginal-35591-pl.html"
  ],
  "imp_reg_1871": [
    "Câmara — Decreto de 1871 sobre cartas de alforria e supervisão estatal",
    "https://www2.camara.leg.br/legin/fed/decret/1824-1899/decreto-4815-11-novembro-1871-552245-publicacaooriginal-69351-pe.html"
  ],
  "imp_lei_1831": [
    "Câmara — Lei de 1831 contra o tráfico atlântico, texto original",
    "https://www2.camara.leg.br/legin/fed/lei_sn/1824-1899/lei-37659-7-novembro-1831-564776-publicacaooriginal-88704-pl.html"
  ],
  "imp_lei_1850": [
    "Câmara — Lei Eusébio de Queirós, texto original de 1850",
    "https://www2.camara.leg.br/legin/fed/leimp/1824-1899/lei-581-4-setembro-1850-559820-publicacaooriginal-82230-pl.html"
  ],
  "imp_lei_1885": [
    "Câmara — Lei dos Sexagenários, texto original de 1885",
    "https://www2.camara.leg.br/legin/fed/leimp/1824-1899/lei-3270-28-setembro-1885-543466-publicacaooriginal-53780-pl.html"
  ],
  "imp_lei_1888": [
    "Câmara — Lei Áurea, texto original de 1888",
    "https://www2.camara.leg.br/legin/fed/leimp/1824-1899/lei-3353-13-maio-1888-533138-publicacaooriginal-16269-pl.html"
  ],
  "imp_reforma_pendente": [
    "Fundação Joaquim Nabuco — Propostas de terra e colônias para libertos não convertidas em lei",
    "https://pesquisaescolar.fundaj.gov.br/pt-br/artigo/reforma-agraria-no-brasil/"
  ],
  "imp_voto_1891": [
    "Senado — Constituição republicana de 1891, regras do voto",
    "https://legis.senado.leg.br/norma/579489/publicacao/15636401"
  ],
  "imp_pos_abolicao": [
    "Artigo acadêmico — Participação política e exclusão após a abolição",
    "https://new.scielo.br/j/rdp/a/4qbWNFtvGbrYJbkJjH5nhKs/?ilang=en&lang=pt"
  ],
  "imp_orcamento1888": [
    "Câmara — Lei 3.349/1887: orçamento para 1888, arts. 1º–2º (fonte primária)",
    "https://www2.camara.leg.br/legin/fed/leimp/1824-1899/lei-3349-20-outubro-1887-542995-publicacaooriginal-52683-pl.html"
  ],
  "imp_dotacao": [
    "Senado — Dotações, tributação e despesas da monarquia",
    "https://www12.senado.leg.br/noticias/materias/2016/12/02/orcamento-taxava-dono-de-escravo-e-previa-salario-para-pedro-ii"
  ],
  "imp_escolas1827": [
    "Arquivo Nacional — Lei das escolas de primeiras letras, 1827 (transcrição e contexto)",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/documentos/lei-de-criacao-das-escolas-de-primeiras-letras"
  ],
  "imp_ensino": [
    "Arquivo Nacional — Acervo do ensino primário e reformas educacionais",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/conheca-o-acervo/serie-educacao-ensino-primario-ie5-93"
  ],
  "imp_couto": [
    "Câmara — Decreto 1.331-A/1854: instrução na Corte, inclusive art. 69 (fonte primária)",
    "https://www2.camara.leg.br/legin/fed/decret/1824-1899/decreto-1331-a-17-fevereiro-1854-590146-publicacaooriginal-115292-pe.html"
  ],
  "imp_observatorio": [
    "Observatório Nacional — História institucional desde 1827",
    "https://www.gov.br/observatorio/pt-br/acesso-a-informacao/institucional/historico"
  ],
  "imp_minas": [
    "UFOP — Fundação da Escola de Minas e formação científica",
    "https://ufop.br/noticias/escola-de-minas-132-anos-de-tradio"
  ],
  "imp_museus": [
    "MAST — O lugar da educação nos museus; cursos públicos e Museu Nacional",
    "https://www.gov.br/mast/pt-br/imagens/publicacoes/2017/o-lugar-da-educacao-nos-museus-museu-de-ideias-edicao-2017-2.pdf"
  ],
  "imp_ferrovias": [
    "DNIT — Histórico das ferrovias brasileiras",
    "https://www.gov.br/dnit/pt-br/assuntos/ferrovias/historico"
  ],
  "imp_eletricidade": [
    "Museu Histórico de Campos / Prefeitura — Iluminação elétrica em 1883",
    "https://campos.rj.gov.br/exibirNoticia.php?id_noticia=46381"
  ],
  "imp_banco": [
    "Arquivo Nacional / MAPA — Banco do Brasil, 1853–1866",
    "https://mapa.arquivonacional.gov.br/index.php/assuntos/15-dicionario/65-dicionario-da-administracao-publica-brasileira-do-periodo-imperial/261-banco-do-brasil-1853-1866"
  ],
  "imp_maua": [
    "Biblioteca Nacional — Exposição de Mauá aos credores, 1878 (catálogo da fonte primária)",
    "https://cpbn.bn.gov.br/planor/handle/20.500.12156.6/35103?locale-attribute=en&show=full"
  ],
  "imp_prata": [
    "Multirio / Prefeitura do Rio — Intervenções imperiais na região do Prata",
    "https://multirio.rio.rj.gov.br/index.php/historia-do-brasil/brasil-monarquico/8979-quest%C3%B5es-platinas-a%C3%A7%C3%B5es-militares-no-segundo-imp%C3%A9rio"
  ],
  "imp_christie": [
    "Revista de História / USP — Questão Christie em perspectiva global (pesquisa)",
    "https://www.scielo.br/j/rh/a/GCHp3LSsRgm6R344QSJgz5c/"
  ],
  "imp_popularidade": [
    "Hendrik Kraay, Varia Historia — Reis negros, cabanos e Guarda Negra (pesquisa, 2019)",
    "https://www.scielo.br/j/vh/a/PhJMYwJB8psrd6g7Jy77jJg/"
  ],
  "imp_festas": [
    "Topoi — A quem se deve a abolição: manifestações em Campinas e Piracicaba (pesquisa)",
    "https://www.scielo.br/j/topoi/a/3FfgW9CJNJRhsC7fBzPVLxN/"
  ],
  "imp_cronologia": [
    "Arquivo Nacional / MAPA — Cronologia do período imperial",
    "https://mapa.an.gov.br/index.php/assuntos/79-producao/80-cronologia/509-periodo-imperial-1822-a-1889"
  ],
  "imp_quilos": [
    "Arquivo Nacional — Sistema métrico decimal e resistência à implantação",
    "https://historialuso.an.gov.br/glossario/index.php/verbetes-glossario/35-verbetes-iniciados-em-s/465-sistema-metrico-decimal"
  ],
  "imp_seca": [
    "María Verónica Secreto, HCS/Fiocruz — Seca de 1877–1879, trabalhadores e mercado (pesquisa)",
    "https://www.scielo.br/j/hcsm/a/ynZxC9TkBJS5GdCnjKXmGKd/"
  ],
  "imp_migracao_seca": [
    "Janille Campos Maia, UEMA — Exilados do sertão: migração cearense na seca de 1877 (pesquisa)",
    "https://www.outrostempos.uema.br/index.php/outros_tempos_uema/article/view/830"
  ],
  "imp_censo1872": [
    "IBGE — População recenseada em 1872 e população declarada escravizada",
    "https://www.ibge.gov.br/casabrasil/sudene-recife/noticias-sudene-recife/noticia?n=19179-casa-brasil-ibge-sudene-conecta-dados-divulga-pesquisas-tecnologia-e-inclusao-em-evento-com-os-comites-do-grupo-mulheres-do-brasil"
  ],
  "imp_const1988": [
    "Planalto — Constituição de 1988, texto atualizado: arts. 14, 196, 205 e 231",
    "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
  ],
  "imp_bell": [
    "Arquivo Nacional — Brasil na Exposição da Filadélfia, 1876",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/documentos/exposicao-internacional-da-filadelfia-1876/"
  ],
  "imp_bell_medalha": [
    "Museu Imperial — Medalha de 1876 e encontro de Pedro II com Bell (acervo)",
    "https://dami.museuimperial.museus.gov.br/handle/acervo/7689"
  ],
  "imp_telefone": [
    "Biblioteca Nacional — Dia do Telefone e demonstração de Bell",
    "https://bndigital.bn.gov.br/artigos/efemerides-10-de-marco-dia-do-telefone/"
  ],
  "imp_telegrafos": [
    "Arquivo Nacional / MAPA — Repartição dos Telégrafos",
    "https://mapa.arquivonacional.gov.br/index.php/assuntos/15-dicionario/65-dicionario-da-administracao-publica-brasileira-do-periodo-imperial/336-reparticao-dos-telegrafos"
  ],
  "imp_egito": [
    "Biblioteca Nacional — Viagens ao Egito e fotografias da coleção imperial",
    "https://bndigital.bn.gov.br/exposicoes/uma-viagem-ao-mundo-antigo-egito-e-pompeia-nas-fotografias-da-colecao-d-thereza-christina-maria/egito/"
  ],
  "imp_oriente": [
    "FUNAG — Do Rio de Janeiro a Istambul: relações Brasil–Império Otomano (pesquisa)",
    "https://funag.gov.br/biblioteca/download/1194-Do-Rio-de-Janeiro-a-Istambul_05_05_2017_v_11.pdf"
  ],
  "imp_arabes": [
    "FUNAG — Relações entre o Brasil e o mundo árabe; diário de Damasco, 1876",
    "https://funag.gov.br/loja/download/3-Relacoes_entre_o_Brasil_e_o_mundo_arabe.pdf"
  ],
  "imp_diarios": [
    "Museu Imperial — Transcrições dos diários de D. Pedro II (1840–1891)",
    "https://museuimperial.museus.gov.br/diarios/"
  ],
  "imp_viagem_fapesp": [
    "Pesquisa FAPESP — Diários de viagem e registros de D. Pedro II (2025)",
    "https://revistapesquisa.fapesp.br/museu-imperial-expoe-diarios-de-viagem-de-dom-pedro-ii/"
  ],
  "imp_viagem1_diario1": [
    "Museu Imperial — Diário, primeira viagem ao exterior, volume 11 (1871)",
    "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL11.pdf"
  ],
  "imp_viagem1_diario2": [
    "Museu Imperial — Diário, primeira viagem ao exterior, volume 12 (1871)",
    "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL12.pdf"
  ],
  "imp_viagem1_diario3": [
    "Museu Imperial — Diário, Egito e Europa, volume 13 (1871)",
    "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL13.pdf"
  ],
  "imp_viagem1_contexto": [
    "Via Atlântica / Universidade de São Paulo — Diário, Egito e interesses de Pedro II",
    "https://revistas.usp.br/viaatlantica/en/article/view/198342/216038"
  ],
  "imp_viagem1_ciencia": [
    "Arquivo Nacional — Escola de Minas de Ouro Preto e a iniciativa de Pedro II",
    "https://mapa.arquivonacional.gov.br/index.php/assuntos/15-dicionario/65-dicionario-da-administracao-publica-brasileira-do-periodo-imperial/314-escola-de-minas"
  ],
  "imp_viagem1_escola": [
    "Universidade Federal de Minas Gerais — Estudo sobre a Escola de Minas e o contato com Auguste Daubrée",
    "https://repositorio.ufmg.br/server/api/core/bitstreams/b03b2fbe-dc82-4a89-9cf4-3da49c0b785c/content"
  ],
  "imp_viagem2_itinerario": [
    "Museu Imperial — Itinerário aos Estados Unidos, 1876, Anuário do Museu Imperial",
    "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/1975-Vol.36.pdf"
  ],
  "imp_viagem2_diario_us": [
    "Museu Imperial — Diário, segunda viagem ao exterior, América do Norte, volume 17 (1876)",
    "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL17.pdf"
  ],
  "imp_viagem2_oriente": [
    "FUNAG / Ministério das Relações Exteriores — Do Rio de Janeiro a Istambul, estudo das relações com o Império Otomano",
    "https://funag.gov.br/biblioteca-nova/produto/1-177-do_rio_de_janeiro_a_istambul_contrastes_e_conexoes_entre_o_brasil_e_o_imperio_otomano_1850_1919_"
  ],
  "imp_viagem2_diario_oriente": [
    "Museu Imperial — Diário da segunda viagem ao exterior, Oriente Médio, volume 18 (1876)",
    "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL18.pdf"
  ],
  "imp_viagem2_diario_jerusalem": [
    "Museu Imperial — Diário da segunda viagem ao exterior, Oriente Médio, volume 19 (1876)",
    "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL19.pdf"
  ],
  "imp_viagem2_diario_egito": [
    "Museu Imperial — Diário da segunda viagem ao exterior, Egito, volume 20 (1876)",
    "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL20.pdf"
  ],
  "imp_viagem2_diario_egito2": [
    "Museu Imperial — Diário da segunda viagem ao exterior, Egito, volume 21 (1876)",
    "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL21.pdf"
  ],
  "imp_viagem2_tecnologia": [
    "Biblioteca Nacional Digital — Pedro II na Exposição da Filadélfia e contato com o telefone de Bell",
    "https://bndigital.bn.gov.br/artigos/imperio-do-brasil-d-pedro-ii-na-exposicao-do-centenario-da-independencia-dos-estados-unidos-em-1876/"
  ],
  "imp_viagem3_diario": [
    "Museu Imperial — Diário da terceira viagem ao exterior, volume 27 (1887–1888)",
    "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL27.pdf"
  ],
  "imp_viagem3_diario2": [
    "Museu Imperial — Diário da terceira viagem ao exterior, volume 28 (1888)",
    "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL28.pdf"
  ],
  "imp_viagem3_saude": [
    "SciELO / Universidade Federal do Rio de Janeiro — A viagem de 1887–1888 e o tratamento de saúde de Pedro II",
    "https://www.scielo.br/j/anp/a/WgRXS8LrvTVLfjZHsSvvqcC/"
  ],
  "imp_imagens_monarca": [
    "UFF — Diferentes vozes, diferentes imagens: representações e petições a Pedro II (tese)",
    "https://www.historia.uff.br/stricto/td/1935.pdf"
  ],
  "imp_paris": [
    "Biblioteca Nacional — Victor Hugo e a visita de Pedro II a Paris, 1877",
    "https://bndigital.bn.gov.br/francebr/victor_hugo_port.htm"
  ],
  "imp_fotografia": [
    "Biblioteca Nacional — Coleção Thereza Christina Maria e aquisição de fotografias",
    "https://www.gov.br/bn/pt-br/atuacao/colecoes-e-servicos-aos-leitores/manuscritos/artigos-manuscritos/thereza-christina-maria"
  ]
};
