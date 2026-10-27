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
  "imp_casa_1869": [
    "Hemeroteca da Biblioteca Nacional — Mordomia da Casa Imperial sobre alforrias e escravizados da nação, 1869",
    "https://hemeroteca-pdf.bn.gov.br/359696/per359696_1869_00001.pdf"
  ],
  "imp_opiniao_1869": [
    "Hemeroteca da Biblioteca Nacional — Crítica abolicionista à Casa Imperial, 1869",
    "https://hemeroteca-pdf.bn.gov.br/359696/per359696_1869_00077.pdf"
  ],
  "imp_publica_pesquisa": [
    "USP — Pesquisa sobre os escravizados da nação e o usufruto da Casa Imperial",
    "https://teses.usp.br/teses/disponiveis/8/8137/tde-31082012-100444/publico/2012_IlanaPeliciariRocha_VRev.pdf"
  ],
  "imp_isabel_bn": [
    "Senado — Atuação política da princesa Isabel no abolicionismo",
    "https://www12.senado.leg.br/noticias/especiais/arquivo-s/cem-anos-da-morte-da-princesa-isabel-a-regente-que-reinou-alem-do-machismo"
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
  "imp_carta_1889": [
    "Fundação Palmares — Artigo que atribui a Isabel uma carta sobre indenização aos libertos",
    "https://www.gov.br/palmares/pt-br/midias/arquivos/artigos-institucionais/artigo-49.pdf"
  ],
  "imp_carta_critica": [
    "Revista de História da USP — Análise da carta atribuída a Isabel e de sua autenticidade disputada",
    "https://www.scielo.br/j/rh/a/jC4pBfbSXpRJ7KK4g3hjZBD/?format=pdf&lang=pt"
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
  "imp_telegrafos": [
    "Arquivo Nacional / MAPA — Repartição dos Telégrafos",
    "https://mapa.arquivonacional.gov.br/index.php/assuntos/15-dicionario/65-dicionario-da-administracao-publica-brasileira-do-periodo-imperial/336-reparticao-dos-telegrafos"
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
  "imp_alfabetizacao2022": [
    "IBGE — Censo 2022: alfabetização e desigualdades (15 anos ou mais)",
    "https://educa.ibge.gov.br/criancas/brasil/2848-nosso-povo/22320-alfabetizacao.html"
  ],
  "imp_const1988": [
    "Planalto — Constituição de 1988, texto atualizado: arts. 14, 196, 205 e 231",
    "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
  ],
  "imp_plebiscito": [
    "TSE — Plebiscito de 1993 e resultados documentais",
    "https://www.tse.jus.br/eleicoes/plebiscitos-e-referendos/plebiscito-1993/plebiscito-de-1993"
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
  "imp_japao": [
    "Biblioteca Nacional — Japão no acervo de Pedro II; o imperador não visitou o país",
    "https://bndigital.bn.gov.br/artigos/18-de-junho-113-anos-da-imigracao-japonesa-no-brasil/"
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
    "Pesquisa Fapesp — Diários de viagem preservados pelo Museu Imperial (2025)",
    "https://revistapesquisa.fapesp.br/museu-imperial-expoe-diarios-de-viagem-de-dom-pedro-ii/"
  ],
  "imp_imagens_monarca": [
    "UFF — Diferentes vozes, diferentes imagens: representações e petições a Pedro II (tese)",
    "https://www.historia.uff.br/stricto/td/1935.pdf"
  ],
  "imp_paris": [
    "Biblioteca Nacional — Victor Hugo e a visita de Pedro II a Paris, 1877",
    "https://bndigital.bn.gov.br/francebr/frances/victor_hugo.htm"
  ],
  "imp_fotografia": [
    "Biblioteca Nacional — Coleção Thereza Christina Maria e aquisição de fotografias",
    "https://www.gov.br/bn/pt-br/atuacao/colecoes-e-servicos-aos-leitores/manuscritos/artigos-manuscritos/thereza-christina-maria"
  ]
};
