/** IVOEI — extensão editorial da Parte 2: lazer, romance, gastronomia e compras. */
import type { TravelCategory } from "@/data/travelData";

const imageHost = ["https://images", "unsplash.com"].join(".");
const image = (id: string) => `${imageHost}/photo-${id}?auto=format&fit=crop&w=1200&q=82`;

const makeCatalogue = (items: [string, string][]) => items.map(([destination, note]) => ({ destination, note }));

export const part2Categories: TravelCategory[] = [
  {
    id: "parques-nacionais",
    number: "07",
    shortLabel: "Parques brasileiros",
    title: "Diversão Brasileira — Os Maiores Parques de Lazer do País",
    subtitle: "Do Beach Park ao Beto Carrero: os parques nacionais que crianças amam e adultos redescobrem.",
    cards: [
      { id: "beach-park", destination: "Beach Park & Fortaleza · CE", title: "O Maior Parque Aquático do Hemisfério Sul", summary: "Toboáguas, mar e resort frente à praia em uma viagem que combina adrenalina e descanso no Ceará.", inclusions: "Voo para Fortaleza · Resort frente mar · Acesso ilimitado", price: "R$ 2.190", installment: "10x de R$ 219", image: image("1520250497591-112f2f40a3f4") },
      { id: "beto-carrero", destination: "Beto Carrero World · SC", title: "O Maior Parque da América Latina", summary: "Mais de sessenta atrações, shows temáticos e dias inteiros de diversão em Penha, Santa Catarina.", inclusions: "Voo para Navegantes · Transfer · Hotel · 2 dias de parque", price: "R$ 1.890", installment: "10x de R$ 189", image: image("1500530855697-b586d89ba3ee") },
      { id: "hot-park", destination: "Rio Quente & Hot Park · GO", title: "Piscinas Termais de 37°C", summary: "Águas naturalmente aquecidas, termas e toboáguas em um complexo que reúne relaxamento e diversão.", inclusions: "Voo para Goiânia · Transfer · Hotel on-site · Termais", price: "R$ 1.990", installment: "10x de R$ 199", image: image("1544550285-f813152fb2fd") },
      { id: "olimpia", destination: "Olímpia · SP", title: "A Capital Brasileira dos Parques Aquáticos", summary: "Resorts e acesso a parques em uma cidade desenhada para fins de semana de lazer em família.", inclusions: "Transfer de SP · Resort · 3 dias de parque", price: "R$ 1.490", installment: "10x de R$ 149", image: image("1531058020387-3be344556be6") },
      { id: "hopi-hari", destination: "Hopi Hari & Wet'n Wild · SP", title: "A Montanha-Russa que Deu Nome ao Grito", summary: "Velocidade, parque aquático e duas experiências de entretenimento a poucos quilômetros de Campinas.", inclusions: "Transfer · Hotel parceiro · Combo de parques", price: "R$ 1.190", installment: "10x de R$ 119", image: image("1533105079780-92b9be482077") },
      { id: "arraial-parque", destination: "Arraial d'Ajuda · BA", title: "Toboáguas na Mata Atlântica", summary: "Parque aquático, natureza nativa e a Praia do Mucugê a poucos minutos: o sul da Bahia por inteiro.", inclusions: "Voo para Porto Seguro · Balsa · Pousada · Eco Parque", price: "R$ 2.290", installment: "10x de R$ 229", image: image("1507525428034-b723cf961d3e") },
    ],
    catalogue: makeCatalogue([
      ["Tauá Resort Olímpia · SP", "Resort termal, spa e gastronomia."], ["Parque Aquático WB Kids · SP", "Atrações suaves para crianças em Vinhedo."], ["Parque da Mônica · SP", "Infância em forma de experiência temática."], ["Acqua Lokos · PE", "Toboáguas no interior de Pernambuco."], ["Acqua Park Marupiara · AM", "Lazer com referências amazônicas em Manaus."], ["Thermas Water Park · SP", "Piscinas termais perto de Campinas."], ["Parque Ecológico de Itu · SP", "Trilhas, aventura e natureza no interior."], ["Lagoinha do Norte · SC", "Esportes aquáticos em Florianópolis."], ["Parque das Nações Indígenas · MS", "Cultura e fauna do Pantanal em Campo Grande."], ["Parque Aquático El Dorado · GO", "Piscinas termais em Caldas Novas."], ["Caldas Novas · GO", "Termais públicas e privadas em Goiás."], ["Wet'n Wild Salvador · BA", "Parque aquático e praia lado a lado."], ["Safari Jaguarium · GO", "Safári em solo brasileiro próximo a Brasília."], ["Nativus Parque Natural · GO", "Ecoparque, rio termal e trilhas."], ["Vila Ventura Mairiporã · SP", "Rafting, arvorismo e rapel perto de São Paulo."], ["Terra Mágica Florybal · RS", "Personagens do folclore gaúcho em Canela."], ["Parque Natural do Caraça · MG", "Santuário, montanhas e lobos-guará."], ["X-Park Natal · RN", "Tirolesa, arvorismo e bóia-cross."], ["Zoo Safári de São Paulo", "Animais vistos do próprio carro."], ["Parque das Aves · PR", "Araras voando livres junto às Cataratas."],
    ]),
  },
  {
    id: "romance-brasil",
    number: "08",
    shortLabel: "Romance no Brasil",
    title: "A Dois no Brasil — Romance, Natureza e Momentos que Ficam Para Sempre",
    subtitle: "Lua de mel ou escapada a dois no Brasil mais bonito. Com suporte IVOEI, cada detalhe está resolvido.",
    cards: [
      { id: "milagres", destination: "São Miguel dos Milagres · AL", title: "O Segredo Mais Romântico de Alagoas", summary: "Piscinas naturais tranquilas, ostras frescas e um silêncio que a cidade grande esqueceu.", inclusions: "Voo para Maceió · Transfer · Pousada boutique · Canoa", price: "R$ 1.890", installment: "10x de R$ 189", image: image("1507525428034-b723cf961d3e") },
      { id: "monte-verde", destination: "Monte Verde · MG", title: "Lareira, Fondue e o Frio que Aproxima", summary: "Chalés de madeira, lareira e a pequena cidade mineira perfeita para se isolar com conforto.", inclusions: "Transfer de SP · Chalé privativo · Jantar de fondue", price: "R$ 1.490", installment: "10x de R$ 149", image: image("1518005020951-eccb494ad742") },
      { id: "noronha-romance", destination: "Fernando de Noronha · PE", title: "O Paraíso que Pede Dois para Ser Vivido", summary: "Golfinhos, mergulho e praias de visibilidade rara para uma viagem de mar, natureza e tempo junto.", inclusions: "Voo · Pousada design · Barco com golfinhos · Mergulho", price: "R$ 4.900", installment: "10x de R$ 490", image: image("1469474968028-56623f02e42e") },
      { id: "vinhedos", destination: "Vale dos Vinhedos · RS", title: "Vinho, Cantina e a Itália que o Sul Construiu", summary: "Degustações, queijos e pousada em vinhedo no coração da vitivinicultura brasileira.", inclusions: "Voo para Porto Alegre · Transfer · Pousada · Degustação", price: "R$ 1.790", installment: "10x de R$ 179", image: image("1506377247377-2a5b3b417ebb") },
      { id: "jeri-romance", destination: "Jericoacoara · CE", title: "Lagoa do Paraíso ao Pôr do Sol", summary: "Chegar de 4x4, brindar na duna e dormir em pousada de design: Jeri desacelera o coração.", inclusions: "Voo para Fortaleza · Transfer 4x4 · Pousada · Sundowner", price: "R$ 2.490", installment: "10x de R$ 249", image: image("1510414842594-a61c69b5ae57") },
      { id: "petropolis", destination: "Petrópolis · RJ", title: "A Cidade Imperial Mais Romântica do Brasil", summary: "Palácios, museus e o frio da Serra Fluminense em uma escapada cheia de história.", inclusions: "Transfer do Rio · Hotel histórico · Tour Museu Imperial", price: "R$ 1.290", installment: "10x de R$ 129", image: image("1449824913935-59a10b8d2000") },
    ],
    catalogue: makeCatalogue([
      ["Trancoso · BA", "O Quadrado iluminado e jantar ao ar livre."], ["Corumbau · BA", "Bangalôs, reserva marinha e isolamento."], ["Caraíva · BA", "Rio, fogueira e praia sem carros."], ["Praia do Rosa · SC", "Pousadas na encosta e baleias."], ["Visconde de Mauá · RJ", "Chalés e cachoeiras no campo."], ["Penedo · RJ", "Sauna e charme escandinavo."], ["Cunha · SP", "Cerâmica, cachoeiras e ateliês."], ["Garopaba · SC", "Frutos do mar e atlântico sul."], ["São Joaquim · SC", "Neve, altitude e romance alpino."], ["Lençóis · BA", "Cachoeiras e céu sem poluição luminosa."], ["Alter do Chão · PA", "Tapajós, ilhas de areia e pôr do sol."], ["Anavilhanas · AM", "Eco-lodge e lua sobre o Rio Negro."], ["Ilha do Mel · PR", "Barco, trilha e praias sem barulho."], ["Morro de São Paulo · BA", "Quatro praias e pousadas boutique."], ["Boipeba · BA", "Recifes e uma Bahia ainda remota."], ["Cumuruxatiba · BA", "Baleias-jubarte e praias virgens."], ["Itacaré · BA", "Surf, mata e restaurantes com terraço."], ["Tiradentes · MG", "Pousada colonial e gastronomia."], ["Lavras Novas · MG", "Frio mineiro e aldeia discreta."], ["Brumadinho · MG", "Arte e natureza ao ar livre."],
    ]),
  },
  {
    id: "romance-mundo",
    number: "09",
    shortLabel: "Romance no mundo",
    title: "Lua de Mel no Mundo — Os Destinos que Transformam um Casal em Lenda",
    subtitle: "Maldivas, Santorini, Veneza. Destinos que só existem em fotos — até você ir com a IVOEI.",
    cards: [
      { id: "maldivas", destination: "Maldivas · Oceano Índico", title: "O Destino de Lua de Mel Mais Desejado", summary: "Bangalôs sobre lagoas claras, café da manhã de barco e mergulho à porta do quarto.", inclusions: "Voo para Malé · Hidroavião · Bangalô sobre a água · Mergulho", price: "R$ 14.900", installment: "10x de R$ 1.490", image: image("1514282401047-d79a71a590e8") },
      { id: "santorini-romance", destination: "Santorini · Grécia", title: "Oia ao Entardecer, Villa e Mar Egeu",
        summary: "Casas brancas, vinho assyrtiko e o azul do mar como cenário para uma viagem a dois com tempo para viver cada detalhe.",
        inclusions: "Voo para Atenas + ferry · Villa com piscina · Sundowner · Valor por pessoa", price: "R$ 11.900", installment: "10x de R$ 1.190", image: image("1533105079780-92b9be482077") },
      { id: "veneza", destination: "Veneza · Itália", title: "A Cidade que Vale Cada Momento", summary: "Uma gôndola pelo Gran Canale ao entardecer é a maneira mais italiana de celebrar a dois.", inclusions: "Voo · Hotel boutique · Passeio privativo de gôndola", price: "R$ 9.900", installment: "10x de R$ 990", image: image("1520175480921-4edfa2983e0f") },
      { id: "mendoza-romance", destination: "Mendoza · Argentina", title: "Malbec, Andes e Jantar com Vista para a Neve", summary: "Bodega, vinhedos, vinhoterapia e a Cordilheira dos Andes como cenário de uma viagem íntima.", inclusions: "Voo · Pousada em bodega · Degustação privativa", price: "R$ 5.900", installment: "10x de R$ 590", image: image("1473973266408-ed4e27abdd47") },
      { id: "loire", destination: "Vale do Loire · França", title: "Castelos que Parecem Conto de Fadas", summary: "Estradas entre châteaux, visitas guiadas e jantares de château: romance europeu com tempo para respirar.", inclusions: "Voo para Paris · Carro · 3 castelos · Pousada em château", price: "R$ 10.900", installment: "10x de R$ 1.090", image: image("1502602898657-3e91760cbb34") },
      { id: "bora-bora", destination: "Bora Bora · Polinésia Francesa", title: "O Paraíso que Justifica Qualquer Distância", summary: "Um atól de muitas tonalidades de azul e um bangalô sobre a água para mudar o ritmo do mundo.", inclusions: "Voo para Papeete · Lancha · Bangalô 5 estrelas · Snorkeling", price: "R$ 18.900", installment: "10x de R$ 1.890", image: image("1505881502353-a1986add3762") },
    ],
    catalogue: makeCatalogue([
      ["Seychelles", "Granito, coral e tartarugas gigantes."], ["Fiji", "Ilhas privadas e hospitalidade íntima."], ["Amalfi & Positano", "Limoncello e enseadas italianas."], ["Ilha de Skye", "Penhascos, castelos e uísque."], ["Kyoto Imperial", "Becos, jardins e templos dourados."], ["Praga Romântica", "Ponte Carlos ao amanhecer."], ["Hallstatt · Áustria", "Lago alpino e casas medievais."], ["Kotor · Montenegro", "Fiorde do Adriático e cidade murada."], ["Rota de Oia · Espanha", "Aldeia medieval e tapas."], ["Dubrovnik · Croácia", "Muralhas sobre o Adriático."], ["Inle Lake · Myanmar", "Flores flutuantes e pescadores."], ["Capri & Anacapri", "Gruta Azul e Mediterrâneo."], ["Mykonos · Grécia", "Moinhos, praias e vida elegante."], ["Phuket & Phi Phi", "Baías de calcário no Sudeste Asiático."], ["Ubud · Bali", "Arrozais, spas e jantares tropicais."], ["Porto · Portugal", "Adegas, Ribeira e vinho do Porto."], ["Cartagena · Colômbia", "Flores, muralhas e pôr do sol."], ["Oaxaca · México", "Mezcal, mole e arquitetura colonial."], ["Lake Como · Itália", "Villas centenárias e paisagens de cinema."], ["Quebec City · Canadá", "Neve, fondue e cidade murada."],
    ]),
  },
  {
    id: "gastronomia-mundo",
    number: "10",
    shortLabel: "Alta gastronomia",
    title: "Gastronomia de Destino — Comer Bem é Uma Forma de Viajar",
    subtitle: "Paris, Tóquio, Lima, Toscana. Destinos onde a comida não é acompanhamento — é o espetáculo principal.",
    cards: [
      { id: "paris-gastro", destination: "Paris · França", title: "Uma Estrela Michelin Por Noite", summary: "Tasting menus, boulangeries e bistrôs em uma cidade onde gastronomia é uma forma de arte cotidiana.", inclusions: "Voo · Hotel no 6° arrondissement · Reserva Michelin", price: "R$ 11.900", installment: "10x de R$ 1.190", image: image("1504674900247-0877df9cc836") },
      { id: "tokyo-gastro", destination: "Tóquio · Japão", title: "A Cidade das Estrelas Michelin", summary: "Omakase, ramen e izakayas em uma capital onde cada refeição pode transformar a viagem.", inclusions: "Voo · Hotel Shinjuku/Ginza · Omakase · JR Pass", price: "R$ 13.900", installment: "10x de R$ 1.390", image: image("1504674900247-0877df9cc836") },
      { id: "toscana", destination: "Toscana · Itália", title: "Trufa Negra, Brunello e Colinas Eternas", summary: "Caça à trufa, agriturismo e vinhos em fazendas que guardam séculos de história italiana.", inclusions: "Voo para Florença · Transfer · Agriturismo · Caça à trufa", price: "R$ 10.500", installment: "10x de R$ 1.050", image: image("1473973266408-ed4e27abdd47") },
      { id: "lima-gastro", destination: "Lima · Peru", title: "A Capital da Gastronomia da América Latina", summary: "Ceviche fresco e restaurantes celebrados em uma cidade que usa o Pacífico e os Andes como despensa.", inclusions: "Voo · Hotel Miraflores/Barranco · Reserva premiada", price: "R$ 5.900", installment: "10x de R$ 590", image: image("1533777857889-4be7c70b33f7") },
      { id: "san-sebastian", destination: "San Sebastián · Espanha", title: "Estrelas Michelin e Pintxos", summary: "Uma cidade pequena em que comer bem não é programa especial: é a forma mais natural de viver.", inclusions: "Voo para Bilbao · Transfer · Hotel boutique · Tour de pintxos", price: "R$ 9.900", installment: "10x de R$ 990", image: image("1515443961218-a51367888e4b") },
      { id: "napa", destination: "Napa Valley · EUA", title: "O Vale que Mudou o Vinho Americano", summary: "Vinhedos, degustações privadas e uma hospitalidade de luxo discreto próxima a São Francisco.", inclusions: "Voo para São Francisco · Transfer · Inn · Degustação", price: "R$ 12.900", installment: "10x de R$ 1.290", image: image("1506377247377-2a5b3b417ebb") },
    ],
    catalogue: makeCatalogue([
      ["Copenhague", "A inovação New Nordic em sua origem."], ["Bordeaux · França", "O berço do vinho fino mundial."], ["Bangkok", "Street food e fine dining na mesma rua."], ["Modena · Itália", "Balsâmico e alta cozinha italiana."], ["Catalunha", "A rota do legado de Ferran Adrià."], ["Joanesburgo", "Braai, vinhos e cozinha sul-africana."], ["Singapura", "Hawker centers e estrelas Michelin."], ["Cidade do México", "Alta cozinha mexicana contemporânea."], ["Montevidéu", "Parrilla, Tannat e honestidade uruguaia."], ["Lyon · França", "Bouchons e tradição gastronômica."], ["Mumbai", "A cozinha de rua mais intensa da Índia."], ["Marraquexe", "Tagines, cuscuz e chá de hortelã."], ["Oaxaca", "Mole, mezcal e cultura viva."], ["Bologna", "A origem da ragu italiana."], ["Porto", "Francesinha, bacalhau e adegas."], ["Beirute", "Mezze e vida noturna cosmopolita."], ["Istambul", "Dois continentes no mesmo prato."], ["Bodega Garzón", "Vinhos uruguaios em cenário rural."], ["Uco Valley", "Vinhedos de altitude em Mendoza."], ["Salvador", "A força da comida baiana."],
    ]),
  },
  {
    id: "sabores-brasil",
    number: "11",
    shortLabel: "Sabores do Brasil",
    title: "Sabores do Brasil — Uma Viagem de Paladar Pelo País Mais Diverso do Mundo",
    subtitle: "Do queijo canastra ao açaí do Pará. A gastronomia regional brasileira é patrimônio que se come.",
    cards: [
      { id: "minas", destination: "Minas Gerais · MG", title: "Queijo, Cachaça e Café", summary: "Queijarias de montanha, pão de queijo e café colhido no dia em uma rota que traduz Minas em sabor.", inclusions: "Voo para BH · Transfer · Rota das queijarias · Fazenda de café", price: "R$ 1.490", installment: "10x de R$ 149", image: image("1466637574441-749b8f19452f") },
      { id: "salvador-gastro", destination: "Salvador · BA", title: "Culinária que Conta a História da Bahia", summary: "Acarajé, moqueca e vatapá em um roteiro ao lado de quem cozinha com memória e território.", inclusions: "Voo · Hotel Pelourinho · Tour com chef local", price: "R$ 1.890", installment: "10x de R$ 189", image: image("1520454974749-611b7248ffdb") },
      { id: "serra-gaucha-gastro", destination: "Serra Gaúcha · RS", title: "Cantina de Família e Espumante Brasileiro", summary: "Galeto, polenta, vinhedos e degustações no roteiro que revela a herança italiana do Sul.", inclusions: "Voo · Transfer · Pousada no vinhedo · Degustação", price: "R$ 1.590", installment: "10x de R$ 159", image: image("1506377247377-2a5b3b417ebb") },
      { id: "belem-gastro", destination: "Belém do Pará · PA", title: "Açaí, Pirarucu e a Cozinha Mais Original", summary: "Ver-o-Peso, jambu e tucupi em uma cidade onde a diversidade amazônica chega inteira ao prato.", inclusions: "Voo · Hotel histórico · Tour no Ver-o-Peso com chef", price: "R$ 1.790", installment: "10x de R$ 179", image: image("1500534623283-312aade485b7") },
      { id: "espirito-santo", destination: "Espírito Santo · ES", title: "Moqueca Capixaba, Panela de Barro e Mar Azul", summary: "Frutos do mar e uma cozinha litorânea autêntica em um estado que ainda guarda bons segredos.", inclusions: "Voo para Vitória · Hotel beira-mar · Jantar de moqueca", price: "R$ 1.490", installment: "10x de R$ 149", image: image("1507525428034-b723cf961d3e") },
      { id: "pantanal-gastro", destination: "Pantanal · MS", title: "Pintado, Urucum e Paçoca de Carne-Seca", summary: "Uma gastronomia direta, de rio e cerrado, para conhecer o Pantanal por todos os sentidos.", inclusions: "Voo para Campo Grande · Transfer · Pescaria + jantar", price: "R$ 1.990", installment: "10x de R$ 199", image: image("1469474968028-56623f02e42e") },
    ],
    catalogue: makeCatalogue([
      ["Recife & Olinda · PE", "Bolo de rolo, tapioca e sururu."], ["Fortaleza · CE", "Carne de sol, baião e lagosta."], ["São Luís · MA", "Cuxá, camarão e cajuína."], ["Natal · RN", "Ginga com tapioca e camarão."], ["João Pessoa · PB", "Cuscuz e tapioca na cidade oriental."], ["Aracaju · SE", "Caranguejo e rituais do Mercadão."], ["Manaus · AM", "Tacacá, jaraqui e frutas amazônicas."], ["Porto Velho · RO", "Tucunaré e cozinha ribeirinha."], ["Goiânia · GO", "Empadão, pequi e guariroba."], ["Cuiabá · MT", "Pintado, suã e caldo de piranha."], ["Florianópolis · SC", "Ostras, camarão e mariscos."], ["Curitiba · PR", "Barreado e Santa Felicidade."], ["Porto Alegre · RS", "Costela, chimarrão e Brique."], ["São Paulo · Liberdade", "Ramen, sushi e doces mochis."], ["São Paulo · Bixiga", "A culinária italiana e libanesa da capital."], ["Região das Missões · RS", "Cozinha das reduções missioneiras."], ["Blumenau · SC", "Cervejas artesanais e culinária alemã."], ["Tiradentes · MG", "Chefs e tradição colonial."], ["Diamantina · MG", "Linguiça, pão de queijo e doce de leite."], ["São João do Meriti · RJ", "Feira popular de madrugada."],
    ]),
  },
  {
    id: "compras-globais",
    number: "12",
    shortLabel: "Turismo de compras",
    title: "Viaje e Economize — Os Destinos Onde Comprar é Parte da Experiência",
    subtitle: "Outlets, tax-free e shoppings exclusivos. A IVOEI organiza sua rota de compras com transfer, hotel e expertise.",
    cards: [
      { id: "sawgrass", destination: "Miami & Sawgrass Mills · EUA", title: "O Maior Outlet ao Ar Livre do Mundo", summary: "Lojas, transfer e hotel pensados para transformar seu roteiro na Flórida em uma experiência eficiente.", inclusions: "Voo · Hotel em Aventura/Miami Lakes · Transfer diário", price: "R$ 7.200", installment: "10x de R$ 720", image: image("1500530855697-b586d89ba3ee") },
      { id: "ny-black-friday", destination: "Nova York · EUA", title: "Black Friday na Quinta Avenida", summary: "SoHo, Macy's e uma cidade inteira em ritmo de compras, com roteiro que também preserva boas mesas e tempo livre.", inclusions: "Voo · Hotel em Midtown · Roteiro de compras", price: "R$ 9.500", installment: "10x de R$ 950", image: image("1485871981521-5b1fd3805eee") },
      { id: "milao", destination: "Milão & Serravalle · Itália", title: "O Outlet de Grife Mais Desejado da Europa", summary: "Moda, arquitetura e outlet com transfer para reunir compras e atmosfera italiana na mesma viagem.", inclusions: "Voo · Hotel central · Transfer Serravalle · Tax refund", price: "R$ 8.900", installment: "10x de R$ 890", image: image("1529260830199-42c24126f198") },
      { id: "panama", destination: "Cidade do Panamá · Panamá", title: "A Maior Zona Franca do Hemisfério", summary: "Cidade contemporânea, Canal e zona franca em um roteiro de compras organizado com tranquilidade.", inclusions: "Voo · Hotel financeiro · Transfer para Colón", price: "R$ 4.900", installment: "10x de R$ 490", image: image("1520250497591-112f2f40a3f4") },
      { id: "dubai-shopping", destination: "Dubai · Emirados Árabes", title: "O Maior Festival de Compras do Mundo", summary: "Shoppings, marcas e uma cidade que mistura hospitalidade de alto padrão com experiências no deserto.", inclusions: "Voo · Hotel 5 estrelas · Guia de compras", price: "R$ 8.500", installment: "10x de R$ 850", image: image("1512453979798-5ea266f8880c") },
      { id: "ciudad-este", destination: "Foz & Ciudad del Este", title: "Compras na Fronteira Mais Movimentada", summary: "Transfer, guia e orientação para uma viagem que alia cataratas, compras e organização.", inclusions: "Voo · Hotel em Foz · Transfer · Guia de compras", price: "R$ 1.990", installment: "10x de R$ 199", image: image("1433086966358-54859d0ed716") },
    ],
    catalogue: makeCatalogue([
      ["Las Vegas Premium Outlets", "Moda e entretenimento em uma única cidade."], ["Woodbury Common · Nova York", "Marcas internacionais a 90 minutos de Manhattan."], ["Bicester Village · Londres", "Outlet de grife com transfer do centro."], ["La Roca Village · Barcelona", "Marcas europeias próximas a Barcelona."], ["Maasmechelen · Bélgica", "Outlet premium no coração da Europa."], ["Harajuku & Shibuya · Tóquio", "Streetwear e moda japonesa."], ["Dongdaemun · Seul", "Moda vinte e quatro horas por dia."], ["Chatuchak · Bangkok", "Mercado de fim de semana monumental."], ["Jaipur · Índia", "Joias e lapidários tradicionais."], ["Mong Kok · Hong Kong", "Eletrônicos e moda asiática."], ["Medina de Fez · Marrocos", "Couro, tapetes e artesanato."], ["Grand Bazaar · Istambul", "Milhares de lojas e séculos de comércio."], ["Free Port de Curaçao", "Tax-free no Caribe holandês."], ["Andorra", "Eletrônicos e compras entre França e Espanha."], ["Orchard Road · Singapura", "Shoppings e tax refund em escala global."], ["Ushuaia · Argentina", "Zona franca no fim do mundo."], ["Shannon · Irlanda", "Whiskey e cristais direto de fábrica."], ["Auckland · Nova Zelândia", "Arte maori e artesanato local."], ["Design District · Miami", "Moda de luxo em distrito de arte."], ["Zona Franca de Manaus", "Eletrônicos com incentivos locais."],
    ]),
  },
];
