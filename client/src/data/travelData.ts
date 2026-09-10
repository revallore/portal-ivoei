/** Conteúdo da Parte 1 do briefing IVOEI — usado pela experiência editorial noturna. */

export type Package = {
  id: string;
  destination: string;
  title: string;
  summary: string;
  inclusions: string;
  price: string;
  /** Preço anterior documentado para a mesma rota, período e composição. */
  referencePrice?: string;
  /** Só pode ser true após a franquia validar o histórico comercial da comparação. */
  hasVerifiedReferencePrice?: boolean;
  installment: string;
  image: string;
};

export type CatalogueItem = {
  destination: string;
  note: string;
};

export type TravelCategory = {
  id: string;
  number: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  cards: Package[];
  catalogue: CatalogueItem[];
};

const image = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=82`;

export const travelCategories: TravelCategory[] = [
  {
    id: "praias",
    number: "01",
    shortLabel: "Praias brasileiras",
    title: "Praias Brasileiras — Mar Cristalino, Tarifa Secreta",
    subtitle:
      "Do Nordeste encantado ao Sul deslumbrante. Emitido por milhas, com suporte humano de ponta a ponta.",
    cards: [
      {
        id: "porto-de-galinhas",
        destination: "Porto de Galinhas · PE",
        title: "Piscinas Naturais, Maré Certa e Dias de Mar",
        summary:
          "Porto de Galinhas combina água morna, jangada até os recifes e tempo de sobra para transformar cada manhã em um mergulho no Nordeste.",
        inclusions: "Voo direto · Resort frente mar · Passeio de jangada incluso · Valor por pessoa",
        price: "R$ 1.890",
        installment: "10x de R$ 189",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=82",
      },
      {
        id: "maceio-maragogi",
        destination: "Maceió & Maragogi · AL",
        title: "O Caribe Brasileiro Existe",
        summary:
          "Areia branca, piscinas naturais e uma transparência que faz entender por que Maragogi ganhou seu apelido.",
        inclusions: "Voo · Hotel beira-mar · Passeio às piscinas naturais",
        price: "R$ 1.590",
        installment: "10x de R$ 159",
        image: image("1507525428034-b723cf961d3e"),
      },
      {
        id: "trancoso",
        destination: "Porto Seguro & Trancoso · BA",
        title: "Descobrimento com Alma Boho",
        summary:
          "O Quadrado de Trancoso à noite, com lampiões e música ao vivo, transforma a Bahia em refúgio de quem procura o extraordinário.",
        inclusions: "Voo · Pousada boutique · City tour histórico",
        price: "R$ 1.790",
        installment: "10x de R$ 179",
        image: image("1520454974749-611b7248ffdb"),
      },
      {
        id: "natal-pipa",
        destination: "Natal & Pipa · RN",
        title: "Dunas, Golfinhos e Liberdade",
        summary:
          "Dunas costeiras e golfinhos selvagens compõem um roteiro completo entre duas paisagens inesquecíveis do Rio Grande do Norte.",
        inclusions: "Voo · Hotel · Passeio de buggy nas dunas",
        price: "R$ 1.490",
        installment: "10x de R$ 149",
        image: image("1500375592092-40eb2168fd21"),
      },
      {
        id: "jeri",
        destination: "Fortaleza & Jericoacoara · CE",
        title: "A Praia Sem Asfalto Mais Desejada",
        summary:
          "Para chegar, você atravessa dunas em 4x4. O percurso já faz parte do ritual até o pôr do sol mais famoso do Ceará.",
        inclusions: "Voo para Fortaleza · Transfer 4x4 · Pousada em Jeri",
        price: "R$ 1.990",
        installment: "10x de R$ 199",
        image: image("1510414842594-a61c69b5ae57"),
      },
      {
        id: "florianopolis",
        destination: "Florianópolis · SC",
        title: "42 Praias, Uma Ilha de Possibilidades",
        summary:
          "Joaquina para o surf, Jurerê para o lifestyle e Campeche para natureza pura: a Ilha da Magia reúne todos os ritmos.",
        inclusions: "Voo · Hotel · Roteiro personalizado por praias",
        price: "R$ 1.390",
        installment: "10x de R$ 139",
        image: image("1494783367193-149034c05e8f"),
      },
    ],
    catalogue: [
      ["Arraial do Cabo · RJ", "Águas translúcidas e mergulho de nível internacional."],
      ["Búzios · RJ", "Vielas, restaurantes beira-mar e um pôr do sol inesquecível."],
      ["Ilha Grande · RJ", "Trilhas, praias selvagens e o silêncio que a cidade deve."],
      ["Trindade · RJ", "Cachoeiras que desembocam diretamente no mar."],
      ["Paraty · RJ", "Centro colonial e praias surpreendentes a poucos minutos de barco."],
      ["Ubatuba · SP", "102 praias e Mata Atlântica nativa em equilíbrio."],
      ["Ilhabela · SP", "Cachoeiras, trilhas e veleiros em uma ilha preservada."],
      ["Guarapari · ES", "Mar calmo e quentinho no litoral capixaba."],
      ["Anchieta · ES", "Mergulho entre ruínas coloniais submersas."],
      ["Porto Belo & Bombinhas · SC", "Águas cristalinas no Sul do Brasil."],
      ["Torres · RS", "Falésias vulcânicas e turismo radical."],
      ["Garopaba · SC", "Surf catarinense e Praia do Rosa a quinze minutos."],
      ["Praia do Rosa · SC", "Baleia-franca de julho a novembro e pousadas na encosta."],
      ["Praia dos Carneiros · PE", "Capelinha, coqueiros e mar esmeralda."],
      ["São Miguel dos Milagres · AL", "Piscinas naturais tranquilas e ostras frescas."],
      ["Corumbau · BA", "Reserva extrativista, mar e um fim de mundo gostoso."],
      ["Cumuruxatiba · BA", "Baleias-jubarte observadas diretamente da praia."],
      ["Alter do Chão · PA", "O autêntico Caribe Amazônico, de água doce."],
      ["Algodoal · PA", "Dunas brancas em uma ilha sem carros."],
      ["Canoa Quebrada · CE", "Falésias alaranjadas e forró na Broadway local."],
    ].map(([destination, note]) => ({ destination, note })),
  },
  {
    id: "classicos",
    number: "02",
    shortLabel: "Clássicos nacionais",
    title: "Brasil Além do Mar — Serras, Cidades e Natureza Selvagem",
    subtitle:
      "Os destinos que todo brasileiro precisa conhecer, agora acessíveis com tarifa secreta de milhas.",
    cards: [
      {
        id: "gramado-canela",
        destination: "Gramado & Canela · RS",
        title: "A Europa que o Brasil Construiu",
        summary:
          "Fondue à beira da lareira, casas de chocolate e a Cascata do Caracol: Gramado e Canela convidam a pausar e contemplar.",
        inclusions: "Voo + transfer · Hotel boutique · Tour do chocolate",
        price: "R$ 1.690",
        installment: "10x de R$ 169",
        image: image("1518005020951-eccb494ad742"),
      },
      {
        id: "rio-classico",
        destination: "Rio de Janeiro · RJ",
        title: "A Cidade que Abraça com os Braços do Cristo",
        summary:
          "Pão de Açúcar ao entardecer, Ipanema ao pôr do sol e a energia que faz do Rio muito mais do que uma cidade.",
        inclusions: "Voo · Hotel zona sul · Cristo e bondinho",
        price: "R$ 1.290",
        installment: "10x de R$ 129",
        image: image("1483729558449-99ef09a8c325"),
      },
      {
        id: "foz-iguacu",
        destination: "Foz do Iguaçu · PR",
        title: "As Cataratas que Fazem Pausar",
        summary:
          "275 quedas d'água, névoa e um patrimônio natural que só ganha escala quando você chega perto.",
        inclusions: "Voo · Hotel · Trilha das Cataratas + Macuco Safari",
        price: "R$ 1.590",
        installment: "10x de R$ 159",
        image: image("1433086966358-54859d0ed716"),
      },
      {
        id: "campos-jordao",
        destination: "Campos do Jordão · SP",
        title: "Inverno com Fondue e Festival de Música",
        summary:
          "A cidade mais alta do Brasil recebe música erudita, gastronomia serrana e noites que convidam ao abraço.",
        inclusions: "Transfer premium · Hotel de montanha · Ingresso ao festival",
        price: "R$ 1.190",
        installment: "10x de R$ 119",
        image: image("1464822759023-fed622ff2c3b"),
      },
      {
        id: "lencois",
        destination: "Lençóis Maranhenses · MA",
        title: "Dunas Claras, Lagoas Azuis e um Brasil Improvável",
        summary:
          "Entre Barreirinhas e as lagoas sazonais, a paisagem muda a cada curva do 4x4 — uma viagem para quem quer trocar pressa por horizonte.",
        inclusions: "Voo para São Luís · Transfer 4x4 · Pousada em Barreirinhas · Valor por pessoa",
        price: "R$ 1.890",
        installment: "10x de R$ 189",
        image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=82",
      },
      {
        id: "bonito",
        destination: "Bonito · MS",
        title: "O Aquário Natural Mais Incrível do Planeta",
        summary:
          "Flutuação em águas cristalinas, grutas e peixes livres ao seu redor, sem vidro entre você e a natureza.",
        inclusions: "Voo para Campo Grande · Transfer · Flutuação inclusa",
        price: "R$ 2.190",
        installment: "10x de R$ 219",
        image: image("1470252649378-9c29740c9fa8"),
      },
    ],
    catalogue: [
      ["Ouro Preto · MG", "Igrejas barrocas, becos de pedra e história do ouro."],
      ["Tiradentes · MG", "Charme mineiro e Festival de Gastronomia em agosto."],
      ["São João del-Rei · MG", "Trem histórico, prata nos altares e tradição."],
      ["Diamantina · MG", "Seresta, becos e um patrimônio que permanece vivo."],
      ["Chapada Diamantina · BA", "Grutas, trilhas e cachoeiras monumentais."],
      ["Chapada dos Veadeiros · GO", "Cerrado, cristais e turismo de transformação."],
      ["Chapada dos Guimarães · MT", "Cânions avermelhados e cachoeiras surpreendentes."],
      ["Pantanal Sul · MS", "Safári fotográfico com onças, tuiuiús e capivaras."],
      ["Pantanal Norte · MT", "Pousadas-fazenda no coração da planície alagada."],
      ["Manaus & Encontro das Águas · AM", "Os rios Negro e Solimões em um fenômeno singular."],
      ["Anavilhanas · AM", "Floresta, silêncio e biodiversidade no Rio Negro."],
      ["Jalapão · TO", "Dunas douradas e fervedouros sem multidão."],
      ["Fernando de Noronha · PE", "Paraíso ecológico de acesso controlado."],
      ["Alcântara · MA", "Ruínas setecentistas e a base de foguetes."],
      ["Paraty · RJ", "Praias selvagens e literatura no centro histórico."],
      ["Visconde de Mauá · RJ", "Chalés, cachoeiras e descanso de montanha."],
      ["Serra do Cipó · MG", "Trilhas, cânions e a Cachoeira da Farofa."],
      ["Iguaçu — Lado Argentino", "A vista superior das cataratas em Puerto Iguazú."],
      ["São Thomé das Letras · MG", "Pedras, mística e pôr do sol memorável."],
      ["Itacaré · BA", "Surf, mata e gastronomia com vista para o mar."],
    ].map(([destination, note]) => ({ destination, note })),
  },
  {
    id: "internacionais",
    number: "03",
    shortLabel: "Internacionais",
    title: "Os Sonhos que Todo Brasileiro Tem — Agora ao Alcance das Milhas",
    subtitle:
      "Destinos internacionais inesquecíveis com tarifa secreta B2B. Você planeja, a IVOEI emite.",
    cards: [
      {
        id: "orlando-disney",
        destination: "Orlando & Disney · EUA",
        title: "Dias de Parque, Noites Leves e Memórias em Família",
        summary:
          "Uma base confortável para alternar atrações, descanso e os pequenos rituais que fazem a primeira viagem à Disney durar muito além das fotos.",
        inclusions: "Voo internacional · Resort Disney area · Ingressos · Valor por pessoa",
        price: "R$ 7.900",
        installment: "10x de R$ 790",
        image: image("1569587112025-0d460e81a126"),
      },
      {
        id: "nova-york",
        destination: "Nova York · EUA",
        title: "A Cidade que Nunca Dorme",
        summary:
          "Times Square, Central Park, museus e uma cidade que se transforma em ritual de passagem para quem vive com intensidade.",
        inclusions: "Voo direto · Hotel em Manhattan · City pass",
        price: "R$ 8.900",
        installment: "10x de R$ 890",
        image: image("1485871981521-5b1fd3805eee"),
      },
      {
        id: "paris",
        destination: "Paris · França",
        title: "A Cidade que Faz Todo Mundo Voltar",
        summary:
          "Da Torre Eiffel ao bistrô com croissant quente, Paris é uma experiência estética que muda o padrão de beleza.",
        inclusions: "Voo · Hotel boutique no centro · Tour guiado",
        price: "R$ 9.500",
        installment: "10x de R$ 950",
        image: image("1502602898657-3e91760cbb34"),
      },
      {
        id: "portugal",
        destination: "Lisboa & Porto · Portugal",
        title: "O Destino que Brasileiro Mais Ama no Exterior",
        summary:
          "Azulejos, vinho verde e a familiaridade da língua em um roteiro entre as duas cidades mais cativantes de Portugal.",
        inclusions: "Voo · Hotéis em Lisboa e Porto · Transfer entre cidades",
        price: "R$ 6.900",
        installment: "10x de R$ 690",
        image: image("1555881400-74d7acaacd8b"),
      },
      {
        id: "miami",
        destination: "Miami & Outlets · EUA",
        title: "Sol, Compras e South Beach",
        summary:
          "Praia, arte em Wynwood e compras em um dos maiores outlets a céu aberto do mundo, tudo em uma mesma viagem.",
        inclusions: "Voo · Hotel South Beach · Transfer para outlets",
        price: "R$ 7.200",
        installment: "10x de R$ 720",
        image: image("1500530855697-b586d89ba3ee"),
      },
      {
        id: "buenos-aires",
        destination: "Buenos Aires · Argentina",
        title: "Tango, Bife de Chorizo e Cultura",
        summary:
          "Cafés, praças e tango no San Telmo fazem de Buenos Aires um convite próximo, elegante e cheio de sabor.",
        inclusions: "Voo · Hotel em Palermo ou Recoleta · Show de tango",
        price: "R$ 3.900",
        installment: "10x de R$ 390",
        image: image("1589909202802-8f4aadce1849"),
      },
    ],
    catalogue: [
      ["Cancún & Playa del Carmen · México", "All-inclusive, cenotes e ruínas maias."],
      ["Roma · Itália", "Vaticano, Coliseu e a história do Ocidente."],
      ["Londres · Reino Unido", "Pubs históricos, museus e arquitetura britânica."],
      ["Amsterdã · Holanda", "Canais, bicicletas e tulipas na primavera."],
      ["Tóquio · Japão", "Tecnologia, sushi e uma cidade sempre um passo à frente."],
      ["Bali · Indonésia", "Templos, arrozais e jantares com vista para vulcões."],
      ["Maldivas", "Bangalôs sobre a água e silêncio de outro mundo."],
      ["Dubai · EAU", "Deserto, vidro e excessos na medida certa."],
      ["Santorini · Grécia", "Cúpulas azuis e o pôr do sol de Oia."],
      ["Machu Picchu · Peru", "A cidade perdida dos Incas em um lugar de altitude."],
      ["Santiago & Punta Arenas · Chile", "Capital moderna e Patagônia selvagem."],
      ["Cartagena · Colômbia", "Cidade murada, flores nos balcões e Caribe."],
      ["Cusco & Vale Sagrado · Peru", "Mercados, ruínas e o legado Inca."],
      ["Amsterdã & Bruges", "Dois países, canais medievais e chocolate belga."],
      ["Praga · República Tcheca", "Castelos, arquitetura gótica e cerveja artesanal."],
      ["Edimburgo · Escócia", "Whisky, castelo e paisagem dramática."],
      ["Istambul · Turquia", "Europa e Ásia no mesmo Bósforo."],
      ["Marrakech · Marrocos", "Ruelas, especiarias e riads intimistas."],
      ["Montevidéu · Uruguai", "Rambla, cafés e um ritmo que desacelera."],
      ["Atacama & Santiago · Chile", "Deserto extremo e capital cosmopolita."],
    ].map(([destination, note]) => ({ destination, note })),
  },
  {
    id: "cruzeiros-nacionais",
    number: "04",
    shortLabel: "Cruzeiros nacionais",
    title: "Navios Brasileiros — Experiência de Alto Mar na Costa que Você Ama",
    subtitle:
      "Cruzeiros exclusivamente na costa brasileira. Embarque, relaxe e deixe o mar fazer o resto.",
    cards: [
      {
        id: "mini-cruzeiro",
        destination: "Santos & Camboriú · Brasil",
        title: "Dois Dias de Mar Sem Sair do Brasil",
        summary:
          "Sexta você embarca; domingo desembarca renovado. Buffet, shows e oceano como fundo de tela para o fim de semana.",
        inclusions: "Cabine · Pensão completa · Shows a bordo",
        price: "R$ 1.190",
        installment: "10x de R$ 119",
        image: image("1540946485063-a40da27545f8"),
      },
      {
        id: "nordeste-navio",
        destination: "Santos, Salvador & Ilhéus",
        title: "Bahia Vista pelo Mar",
        summary:
          "Acorde em Salvador e desembarque em Ilhéus em uma rota que reúne alguns dos litorais mais vibrantes do país.",
        inclusions: "Cabine exterior · Pensão completa · Excursões",
        price: "R$ 2.890",
        installment: "10x de R$ 289",
        image: image("1530053969600-caed2596d242"),
      },
      {
        id: "carnaval-navio",
        destination: "Rio & Salvador · Carnaval",
        title: "A Festa com Vista para o Horizonte",
        summary:
          "Fantasia, samba ao vivo, camarote privativo e oceano como plateia: a versão premium da maior festa do mundo.",
        inclusions: "Cabine · Programação carnavalesca · All-inclusive",
        price: "R$ 3.490",
        installment: "10x de R$ 349",
        image: image("1500375592092-40eb2168fd21"),
      },
      {
        id: "natal-navio",
        destination: "Costa brasileira · Natal & Réveillon",
        title: "Fogos de Artifício Vistos do Convés",
        summary:
          "Ceia servida com cuidado, espumante na hora certa e a virada vista de um lugar que poucas famílias esquecem.",
        inclusions: "Cabine familiar · Ceia de Natal · Réveillon a bordo",
        price: "R$ 3.990",
        installment: "10x de R$ 399",
        image: image("1544986581-efac024faf62"),
      },
      {
        id: "sul-bordo",
        destination: "Floripa & Camboriú · Sul",
        title: "O Sul Visto pelo Melhor Ângulo",
        summary:
          "Portos charmosos e a costa de Santa Catarina em uma volta que combina mar, cidades vibrantes e descanso.",
        inclusions: "Cabine · Pensão completa · Excursões terrestres",
        price: "R$ 2.490",
        installment: "10x de R$ 249",
        image: image("1528181304800-259b08848526"),
      },
      {
        id: "travessia",
        destination: "Recife a Santos · Atlântico",
        title: "De Recife a Santos pelo Atlântico",
        summary:
          "Uma travessia completa pelo litoral brasileiro, com sete portos e uma nova paisagem a cada manhã.",
        inclusions: "Cabine · Tudo incluso · 7 portos em 10 noites",
        price: "R$ 4.590",
        installment: "10x de R$ 459",
        image: image("1510414842594-a61c69b5ae57"),
      },
    ],
    catalogue: [
      ["Rota Amazônica Fluvial", "Boto, floresta e rios da maior biodiversidade do mundo."],
      ["Cruzeiro Pantaneiro", "Barco-hotel e safári fotográfico pelo Rio Paraguai."],
      ["Rota Histórica", "Santos, Paraty e Búzios em uma única navegação."],
      ["Cruzeiro Cultura", "Rio, Ilha Grande e Angra dos Reis."],
      ["Fernando de Noronha por Navio", "Ancoragem próxima ao arquipélago preservado."],
      ["Cruzeiro Gastronômico Nordeste", "Chefs e sabores regionais no alto-mar."],
      ["Cruzeiro Carnaval Salvador", "A bordo e na rua, em uma mesma temporada."],
      ["Rota Sul Extremo", "Santos, Porto Alegre, Torres e Tramandaí."],
      ["Cruzeiro Junino Nordeste", "Forró, quadrilha e comida típica em junho."],
      ["Cruzeiro Natureza Amazônica", "Reservas extrativistas e guias especializados."],
      ["Rota Ilhas Tropicais", "Boipeba, Morro de São Paulo e Tinharé."],
      ["Cruzeiro Família Verão", "Experiências para crianças e descanso adulto."],
      ["Rota Espírito Santo", "Vitória, Guarapari e litoral capixaba."],
      ["Cruzeiro Réveillon Premium", "Jantar de gala e brinde em alto-mar."],
      ["Rota Integrada", "Navio e floresta em uma viagem pelo Pará."],
      ["Cruzeiro de Bodas de Ouro", "Jantar privativo, spa e upgrades de cabine."],
      ["Rota Cultural Nordeste", "Fortaleza, Natal, Recife e Salvador."],
      ["Cruzeiro de Aventura Sul", "Surf, trilha e tirolesa em paradas selecionadas."],
      ["Rota Exclusiva Abrolhos", "Corais e baleia-jubarte no Atlântico Sul."],
      ["Rock a Bordo", "Shows de bandas nacionais com mar aberto."],
    ].map(([destination, note]) => ({ destination, note })),
  },
  {
    id: "cruzeiros-internacionais",
    number: "05",
    shortLabel: "Cruzeiros internacionais",
    title: "Alto Mar Internacional — Os Roteiros de Navio Mais Desejados do Planeta",
    subtitle:
      "Cruzeiros premium com operadoras internacionais. A IVOEI emite com tarifa B2B — você embarca com tudo resolvido.",
    cards: [
      {
        id: "cococay",
        destination: "Caribe · Royal Caribbean",
        title: "A Ilha Particular Mais Incrível do Caribe",
        summary:
          "Praia privativa, tirolesa sobre o mar e um pool deck memorável. O navio já é o destino; a ilha é o bônus.",
        inclusions: "Cabine · Dia na ilha privativa · Bebidas selecionadas",
        price: "R$ 8.900",
        installment: "10x de R$ 890",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=82",
      },
      {
        id: "mediterraneo",
        destination: "Grécia · Mediterrâneo",
        title: "Santorini, Mykonos e Atenas",
        summary:
          "Acordar com vista para o vulcão, desembarcar em Mykonos e visitar o Partenon: a Grécia em um único roteiro.",
        inclusions: "Cabine exterior · Excursões · Tour em Atenas",
        price: "R$ 11.900",
        installment: "10x de R$ 1.190",
        image: image("1533105079780-92b9be482077"),
      },
      {
        id: "alasca",
        destination: "Alasca · EUA",
        title: "Geleiras, Ursos e o Fim do Mundo",
        summary:
          "Fiords monumentais, geleiras no mar e vida selvagem em uma viagem para sentir a dimensão da natureza.",
        inclusions: "Cabine com varanda · Observação de vida selvagem · Caiaque",
        price: "R$ 13.500",
        installment: "10x de R$ 1.350",
        image: image("1469474968028-56623f02e42e"),
      },
      {
        id: "danubio",
        destination: "Danúbio · Europa",
        title: "Viena, Budapeste e Bratislava de Navio-Boutique",
        summary:
          "Cidades centenárias, navios menores e portas de canal: a experiência silenciosa e sofisticada do cruzeiro fluvial.",
        inclusions: "Navio-boutique · Tours em Viena e Budapeste · Degustação",
        price: "R$ 18.900",
        installment: "10x de R$ 1.890",
        image: image("1529260830199-42c24126f198"),
      },
      {
        id: "bahamas",
        destination: "Bahamas · Caribe",
        title: "Nassau, Pig Beach e o Mar Mais Azul",
        summary:
          "Embarque em Miami e acorde nas Bahamas: três noites que combinam praias, snorkel e histórias para contar.",
        inclusions: "Cruzeiro 3 noites · Dia em Pig Beach · Snorkeling",
        price: "R$ 5.900",
        installment: "10x de R$ 590",
        image: image("1500534314209-a25ddb2bd429"),
      },
      {
        id: "noruega",
        destination: "Noruega · Fiordes",
        title: "Fiordes de 1.000 Metros e Sol à Meia-Noite",
        summary:
          "Paredes de rocha, quedas d'água e o sol que não se põe. A Noruega precisa ser vista para ser acreditada.",
        inclusions: "Cabine com varanda · Geirangerfjord · Trilha opcional",
        price: "R$ 14.900",
        installment: "10x de R$ 1.490",
        image: image("1483347756197-71ef80e95f73"),
      },
    ],
    catalogue: [
      ["Caribe Oriental", "Ilhas Virgens e Porto Rico na mesma rota."],
      ["Mediterrâneo Ocidental", "Barcelona, Riviera Francesa e Monte Carlo."],
      ["Japão & Coreia do Sul", "Tóquio, Osaka, Busan e Jeju."],
      ["Austrália & Nova Zelândia", "Pacífico Sul entre Sydney e Queenstown."],
      ["Dubai ao Cairo", "Emirados, canal de Suez e Alexandria."],
      ["Transatlântico Europa–Brasil", "Quinze dias de travessia com conforto."],
      ["Caribe Sul", "Aruba e Curaçao em águas holandesas."],
      ["Cruzeiro Ártico", "Svalbard, gelo eterno e natureza extrema."],
      ["Península Antártica", "Expedição ao continente mais puro."],
      ["Nova Zelândia Exclusiva", "Milford Sound, Auckland e paisagens Maori."],
      ["Ilhas Canárias", "Verão atlântico durante todo o ano."],
      ["Costa Rica & Panamá", "Canal do Panamá, café e praias."],
      ["Escandinávia Clássica", "Copenhague, Estocolmo, Helsinki e Tallinn."],
      ["Mar Negro", "Rota cultural de vinhos e cozinha caucasiana."],
      ["Galápagos Expedition", "Vida selvagem onde Darwin teve sua epifania."],
      ["Amazônia de Navio", "Iquitos a Manaus pelos rios da selva viva."],
      ["Cuba & Haiti Cultural", "Havana vintage e o Caribe francês."],
      ["Polinésia Francesa", "Bora Bora, Moorea e atóis translúcidos."],
      ["Seychelles & Maurício", "Tartarugas gigantes e praias sem multidão."],
      ["Rota das Especiarias", "Bali, Java, Komodo e Sulawesi."],
    ].map(([destination, note]) => ({ destination, note })),
  },
  {
    id: "parques",
    number: "06",
    shortLabel: "Parques temáticos",
    title: "Parques Mágicos — Onde o Mundo Real Para de Fazer Sentido",
    subtitle:
      "Os maiores e mais icônicos complexos de entretenimento do mundo. Com pacote IVOEI, você só pensa em se divertir.",
    cards: [
      {
        id: "universal",
        destination: "Universal Orlando · EUA",
        title: "O Que Mais Sua Imaginação Quiser",
        summary:
          "Mundos imersivos, velocidade e hotéis on-site em um parque feito para adultos que não abandonaram sua criança interior.",
        inclusions: "Voo · Hotel On-Site · Park-to-Park Ticket",
        price: "R$ 8.500",
        installment: "10x de R$ 850",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82",
      },
      {
        id: "disney",
        destination: "Walt Disney World · EUA",
        title: "A Magia que Justifica Qualquer Viagem",
        summary:
          "Quatro parques, sete dias e uma alegria que não tem idade. A Disney é um destino para voltar mais de uma vez.",
        inclusions: "Voo · Resort Disney on-site · 7-Day Park Hopper",
        price: "R$ 10.900",
        installment: "10x de R$ 1.090",
        image: image("1534430480872-3498386e7856"),
      },
      {
        id: "disney-paris",
        destination: "Disneyland Paris · França",
        title: "Magia Americana com Charme Europeu",
        summary:
          "Um castelo no coração da Europa e Paris a quarenta minutos de trem: duas experiências em uma única viagem.",
        inclusions: "Voo para Paris · Hotel Disney · 2 dias nos parques",
        price: "R$ 9.200",
        installment: "10x de R$ 920",
        image: image("1502602898657-3e91760cbb34"),
      },
      {
        id: "europa-park",
        destination: "Europa-Park · Alemanha",
        title: "O Maior Parque da Alemanha",
        summary:
          "Mais de cem atrações e dezoito países temáticos em um parque que poucos brasileiros ainda descobriram.",
        inclusions: "Voo para Frankfurt · Transfer · Hotel · 2 dias",
        price: "R$ 8.100",
        installment: "10x de R$ 810",
        image: image("1513883049090-d0b7439799bf"),
      },
      {
        id: "ferrari-world",
        destination: "Ferrari World · Abu Dhabi",
        title: "A Montanha-Russa Mais Rápida do Mundo",
        summary:
          "Velocidade, engenharia e o maior parque coberto do mundo para quem transforma adrenalina em memória.",
        inclusions: "Voo · Hotel 5 estrelas · Ferrari World + Yas Marina",
        price: "R$ 9.800",
        installment: "10x de R$ 980",
        image: image("1512453979798-5ea266f8880c"),
      },
      {
        id: "tokyo-parks",
        destination: "Tóquio · Japão",
        title: "DisneySea, Sanrio e a Magia Japonesa",
        summary:
          "Design, música e atenção ao detalhe em parques que levam o entretenimento a uma escala surpreendente.",
        inclusions: "Voo · Hotel Shinjuku · DisneySea + Sanrio · JR Pass",
        price: "R$ 13.900",
        installment: "10x de R$ 1.390",
        image: image("1492571350019-22de08371fd3"),
      },
    ],
    catalogue: [
      ["Islands of Adventure", "Hulk, super-heróis e um castelo imponente."],
      ["SeaWorld Orlando", "Vida marinha e montanhas-russas de água."],
      ["Legoland Florida", "Atrações suaves e criações gigantes para crianças."],
      ["Busch Gardens Tampa", "Safári e adrenalina na mesma experiência."],
      ["PortAventura · Espanha", "Parque mediterrâneo e Ferrari Land adjacente."],
      ["Futuroscope · França", "Tecnologia e experiências imersivas."],
      ["Efteling · Holanda", "Contos de fadas em um parque histórico."],
      ["Phantasialand · Alemanha", "Design cinematográfico em formato boutique."],
      ["Warner Bros World · Abu Dhabi", "Aventura indoor monumental."],
      ["Movie Park Germany", "Nickelodeon e experiências de cinema."],
      ["Universal Studios Japan", "Super Nintendo World e fantasia japonesa."],
      ["Lotte World · Seul", "Parque indoor com castelo e pista de gelo."],
      ["Everland · Coreia do Sul", "Atrações velozes e tradição coreana."],
      ["Ocean Park · Hong Kong", "Montanhas-russas sobre o mar e pandas."],
      ["Disneyland Hong Kong", "Magia concentrada com filas menores."],
      ["Adventure World · Japão", "Santuário de pandas e atrações familiares."],
      ["Gardaland · Itália", "Montanhas-russas com vista para os Alpes."],
      ["Parc Astérix · França", "A alternativa gaulesa à Disney."],
      ["Dollywood · EUA", "Smoky Mountains e montanhas-russas de madeira."],
      ["Hersheypark · EUA", "Chocolate, parques e diversão em família."],
    ].map(([destination, note]) => ({ destination, note })),
  },
];

export type EventPin = {
  id: string;
  city: string;
  event: string;
  period: string;
  type: "popular" | "shows" | "cultural" | "gastronomy";
  position: { x: number; y: number };
  copy: string;
  image: string;
};

export const eventPins: EventPin[] = [
  { id: "rio-carnaval", city: "Rio de Janeiro · RJ", event: "Carnaval da Sapucaí", period: "Fev", type: "popular", position: { x: 67, y: 64 }, copy: "O maior espetáculo da Terra acontece a poucos metros de você. Uma noite aqui muda sua vida.", image: image("1483729558449-99ef09a8c325") },
  { id: "salvador", city: "Salvador · BA", event: "Carnaval dos Trios Elétricos", period: "Fev", type: "popular", position: { x: 76, y: 47 }, copy: "Axé, abadá e milhões de pessoas na maior festa de rua do mundo. Seu bloco só espera você.", image: image("1520454974749-611b7248ffdb") },
  { id: "olinda", city: "Recife & Olinda · PE", event: "Galo da Madrugada", period: "Fev", type: "popular", position: { x: 79, y: 39 }, copy: "Frevo, bonecos gigantes e alegria pura nas ladeiras de Olinda.", image: image("1500375592092-40eb2168fd21") },
  { id: "caruaru", city: "Caruaru · PE", event: "Forró do Rei", period: "Jun", type: "popular", position: { x: 75, y: 41 }, copy: "Quadrilhas, xaxado e o forró mais genuíno do Nordeste.", image: image("1510414842594-a61c69b5ae57") },
  { id: "campina", city: "Campina Grande · PB", event: "O Maior São João do Mundo", period: "Jun", type: "popular", position: { x: 80, y: 38 }, copy: "Trinta dias de festa, artistas nacionais e culinária do interior.", image: image("1483347756197-71ef80e95f73") },
  { id: "parintins", city: "Parintins · AM", event: "Festival Folclórico de Parintins", period: "Jun", type: "popular", position: { x: 34, y: 26 }, copy: "Boi Garantido e Boi Caprichoso em uma batalha de arte, cor e tradição no coração da Amazônia.", image: image("1500534623283-312aade485b7") },
  { id: "rockinrio", city: "Rio de Janeiro · RJ", event: "Rock in Rio", period: "Set", type: "shows", position: { x: 63, y: 62 }, copy: "Headliners internacionais, gastronomia e cultura em uma celebração que ocupa a cidade.", image: image("1470229722913-7c0e2dbbafd3") },
  { id: "natal-luz", city: "Gramado · RS", event: "Natal Luz", period: "Nov", type: "shows", position: { x: 54, y: 83 }, copy: "Luzes, neve e espetáculos ao vivo na cidade mais encantadora do Brasil.", image: image("1518005020951-eccb494ad742") },
  { id: "campos-festival", city: "Campos do Jordão · SP", event: "Festival de Inverno", period: "Jul", type: "shows", position: { x: 56, y: 66 }, copy: "Orquestras, saraus e gastronomia de serra em um cenário europeu.", image: image("1464822759023-fed622ff2c3b") },
  { id: "blumenau", city: "Blumenau · SC", event: "Oktoberfest", period: "Out", type: "shows", position: { x: 58, y: 74 }, copy: "Cervejas artesanais, trajes típicos e música ao vivo no coração de Santa Catarina.", image: image("1529260830199-42c24126f198") },
  { id: "cirio", city: "Belém · PA", event: "Círio de Nazaré", period: "Out", type: "cultural", position: { x: 61, y: 27 }, copy: "Uma experiência espiritual que comove e reúne milhões de pessoas pelas ruas de Belém.", image: image("1500534314209-a25ddb2bd429") },
  { id: "paixao", city: "Nova Jerusalém · PE", event: "Paixão de Cristo", period: "Abr", type: "cultural", position: { x: 74, y: 43 }, copy: "Um espetáculo a céu aberto, com grandeza e emoção únicas.", image: image("1513883049090-d0b7439799bf") },
  { id: "canastra", city: "Serra da Canastra · MG", event: "Rota do Queijo e Cachaça", period: "Todos", type: "gastronomy", position: { x: 58, y: 58 }, copy: "Queijo canastra, cachaças artesanais e fazendas centenárias a 1.300 metros de altitude.", image: image("1470252649378-9c29740c9fa8") },
  { id: "vindima", city: "Serra Gaúcha · RS", event: "Vindima e Colheita das Uvas", period: "Fev", type: "gastronomy", position: { x: 53, y: 81 }, copy: "Cantinas familiares, vinhos e culinária italiana durante a época mais saborosa da Serra Gaúcha.", image: image("1518005020951-eccb494ad742") },
];

export const months = ["Todos", "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

export const pinLabels = {
  popular: "Festas populares",
  shows: "Shows e grandes eventos",
  cultural: "Festas religiosas e culturais",
  gastronomy: "Gastronomia regional",
};
