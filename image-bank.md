# Banco aprovado de imagens — Lote 01

Este lote substitui as imagens genéricas das cinco ofertas prioritárias com fotografias autorais geradas para uso exclusivo no projeto IVOEI Turismo. Os arquivos foram reservados no storage persistente do WebDev e devem ser referenciados pelas URLs abaixo, nunca pelos caminhos locais em `/home/ubuntu/webdev-static-assets/`.

| Id da oferta | Destino | Ativo persistente | Alt text aplicado |
| --- | --- | --- | --- |
| `maceio-maragogi` | Maceió & Maragogi · AL | `/manus-storage/maceio-maragogi-editorial_a625e0ec.jpg` | Maceió & Maragogi: O Caribe Brasileiro Existe |
| `trancoso` | Porto Seguro & Trancoso · BA | `/manus-storage/porto-seguro-trancoso-editorial_4cbaa74b.jpg` | Porto Seguro & Trancoso: Descobrimento com Alma Boho |
| `natal-pipa` | Natal & Pipa · RN | `/manus-storage/natal-pipa-editorial_c6c49a2f.jpg` | Natal & Pipa: Dunas, Golfinhos e Liberdade |
| `jeri` | Fortaleza & Jericoacoara · CE | `/manus-storage/fortaleza-jeri-editorial_9078e900.jpg` | Fortaleza & Jericoacoara: A Praia Sem Asfalto Mais Desejada |
| `florianopolis` | Florianópolis · SC | `/manus-storage/florianopolis-editorial_2589f21c.jpg` | Florianópolis: 42 Praias, Uma Ilha de Possibilidades |

A origem deste lote é **geração autoral dentro do fluxo do projeto**, sem dependência de licenças de terceiros. O critério editorial foi especificidade geográfica, coerência com o texto da oferta, enquadramento horizontal 3:2, ausência de texto/logotipo/marca d’água e compatibilidade com a paleta Riviera Solar.

O restante do catálogo permanece inalterado neste primeiro lote. A próxima rodada deve priorizar as ofertas com maior tráfego ou maior intenção comercial, mantendo o mesmo registro de origem e correspondência de alt text.

## Validação do lote 01

Na inspeção do preview em `#rotas`, os cards de Maceió & Maragogi, Porto Seguro & Trancoso, Natal & Pipa, Fortaleza & Jericoacoara e Florianópolis exibiram as cinco URLs persistentes do banco aprovado. O conteúdo extraído da página confirmou a associação entre cada caminho de imagem, destino e título da oferta; o componente mantém `alt` no formato “destino: título”. O primeiro card de Porto de Galinhas permanece com seu ativo editorial anterior, fora do escopo desta rodada.

## Desempenho e acessibilidade

A medição no preview retornou HTTP 200 e `Content-Type: image/webp` para os cinco caminhos do lote, embora o identificador persistente termine em `.jpg`. Os tamanhos transferidos observados foram aproximadamente 140 KB (Maceió & Maragogi), 373 KB (Trancoso), 292 KB (Natal & Pipa), 91 KB (Jericoacoara) e 287 KB (Florianópolis). Assim, o storage está entregando uma versão WebP comprimida sem exigir uma URL derivada adicional.

Os cards utilizam `loading="lazy"`, `decoding="async"` e `sizes` responsivo. O `alt` é informativo no card principal, combinando destino e título da oferta. A miniatura no painel da Lista de Desejos permanece com `alt=""` porque o título textual do item já identifica a rota imediatamente ao lado da imagem, tratando-a como decoração repetida.

# Banco aprovado de imagens por destino — Lote 02

Este lote amplia a vitrine para cinco ofertas prioritárias, combinando três destinos nacionais de alta intenção e duas rotas internacionais de descoberta recorrente.

| Id da oferta | Destino | Ativo persistente | Alt text aplicado |
| --- | --- | --- | --- |
| `gramado-canela` | Gramado & Canela · RS | `/manus-storage/gramado-canela-editorial_3c42e1d3.jpg` | Gramado & Canela: A Europa que o Brasil Construiu |
| `rio-classico` | Rio de Janeiro · RJ | `/manus-storage/rio-classico-editorial_cbed8137.jpg` | Rio de Janeiro: A Cidade que Abraça com os Braços do Cristo |
| `foz-iguacu` | Foz do Iguaçu · PR | `/manus-storage/foz-iguacu-editorial_57ed991b.jpg` | Foz do Iguaçu: As Cataratas que Fazem Pausar |
| `orlando-disney` | Orlando & Disney · EUA | `/manus-storage/orlando-disney-editorial_2d1b3313.jpg` | Orlando & Disney: Dias de Parque, Noites Leves e Memórias em Família |
| `paris` | Paris · França | `/manus-storage/paris-editorial_2a844622.jpg` | Paris: A Cidade que Faz Todo Mundo Voltar |

As fotografias foram geradas autoralmente para o projeto, sem dependência de licença de terceiros. O enquadramento horizontal 3:2, a ausência de texto/logotipo/marca d’água e a conexão visual com a promessa de cada oferta seguem o padrão do lote 01.

## Validação do lote 02

A inspeção do preview confirmou a associação de Gramado & Canela, Rio de Janeiro, Foz do Iguaçu, Orlando & Disney e Paris com seus novos caminhos persistentes e alt texts compostos por destino e título. A vitrine foi revisada em desktop e mobile; os cards mantiveram a proporção horizontal, leitura dos títulos e chamadas de consulta.

As cinco URLs responderam HTTP 200 como `image/webp`, com tamanhos transferidos de aproximadamente 279 KB (Gramado), 193 KB (Rio), 305 KB (Foz), 193 KB (Orlando) e 270 KB (Paris). O banco centralizado continua usando `loading="lazy"`, `decoding="async"` e `sizes` responsivo nos cards.

## Lote 03 — Internacional de maior intenção

| Oferta | Ativo persistente | Especificidade visual | Alt text | Origem |
|---|---|---|---|---|
| Nova York · EUA | `/manus-storage/nova-york-editorial_5d8a44ba.jpg` | Skyline urbano em blue hour, com referência visual reconhecível de Manhattan e energia metropolitana | Nova York ao entardecer com skyline de Manhattan e luzes da cidade | Fotografia autoral gerada para a IVOEI, sem logos ou texto |
| Lisboa & Porto · Portugal | `/manus-storage/lisboa-porto-editorial_4291f638.jpg` | Rua histórica portuguesa com fachadas azulejadas, luz quente e referência distante ao elétrico tradicional | Rua histórica de Lisboa com fachadas azulejadas e luz de fim de tarde | Fotografia autoral gerada para a IVOEI, sem logos ou texto |
| Miami & Outlets · EUA | `/manus-storage/miami-editorial_9d421109.jpg` | South Beach com mar turquesa, areia clara e arquitetura art déco em segundo plano | South Beach em Miami com mar turquesa e arquitetura art déco | Fotografia autoral gerada para a IVOEI, sem logos ou texto |
| Buenos Aires · Argentina | `/manus-storage/buenos-aires-editorial_afe5c9e7.jpg` | Avenida ou praça histórica arborizada, cafés e atmosfera cultural de tango ao entardecer | Buenos Aires ao entardecer com praça histórica, cafés e atmosfera de tango | Fotografia autoral gerada para a IVOEI, sem logos ou texto |
| Caribe · CocoCay | `/manus-storage/cococay-caribe-editorial_09d6e510.jpg` | Enseada caribenha de areia branca, água turquesa e cabana discreta, sem marca de resort | Enseada privativa no Caribe com água turquesa, areia branca e palmeiras | Fotografia autoral gerada para a IVOEI, sem logos ou texto |

Os ativos foram criados especificamente para uso editorial da IVOEI, em composição horizontal 3:2, sem texto, marcas ou elementos publicitários. As URLs persistentes devem ser consumidas diretamente pelo front-end, preferindo a versão comprimida quando o storage disponibilizar essa variante.

## Validação do lote 03

A checagem direta no preview carregou os cinco ativos persistentes com sucesso, todos em proporção natural 3:2 (`1248 × 832 px`). As respostas observadas foram HTTP 200 e `image/webp`, embora as URLs estáveis mantenham o sufixo `.jpg`: Nova York, aproximadamente 153 KB; Lisboa & Porto, 344 KB; Miami, 180 KB; Buenos Aires, 345 KB; e CocoCay, 303 KB. Os cards usam carregamento lazy, decodificação assíncrona e `sizes` responsivo. A associação dos ids foi protegida por teste unitário e a visualização completa do catálogo foi conferida em desktop.

## Lote 04 — Internacional premium

| Id da oferta | Destino | Ativo persistente | Especificidade visual | Alt text |
|---|---|---|---|---|
| `maldivas` | Maldivas · Oceano Índico | `/manus-storage/maldivas-editorial_ff686270.jpg` | Bangalô sobre lagoa turquesa, barco e luz tropical | Maldivas com bangalô sobre a lagoa turquesa e barco ao fundo |
| `veneza` | Veneza · Itália | `/manus-storage/veneza-editorial_72ff9202.jpg` | Canal histórico, gôndola e ponte de pedra | Canal de Veneza com gôndola passando sob uma ponte histórica |
| `bora-bora` | Bora Bora · Polinésia Francesa | `/manus-storage/bora-bora-editorial_6e86b25b.jpg` | Lagoa turquesa, pico vulcânico e bangalô sobre a água | Bora Bora com lagoa turquesa, montanha vulcânica e bangalô sobre a água |
| `tokyo-gastro` | Tóquio · Japão | `/manus-storage/toquio-editorial_76988a42.jpg` | Rua urbana noturna, travessia e densidade visual de Shibuya | Rua iluminada de Tóquio à noite com movimento urbano e travessia de pedestres |
| `universal` | Universal Orlando · EUA | `/manus-storage/universal-orlando-editorial_e126d456.jpg` | Boulevard de parque, globo ao fundo e visitantes em família | Boulevard de parque temático em Orlando com globo ao fundo e visitantes |

A origem deste lote é **geração autoral específica para a IVOEI**, sem dependência de banco de terceiros, texto, logos ou marcas d’água. As imagens foram criadas em composição horizontal 3:2 para cards responsivos e estão referenciadas no front-end por caminhos persistentes do storage.

## Validação do lote 04

Os cinco ativos responderam no preview com HTTP 200 e `Content-Type: image/webp`, apesar do sufixo `.jpg` nas URLs persistentes. Os tamanhos transferidos observados foram aproximadamente 184 KB (Maldivas), 265 KB (Veneza), 246 KB (Bora Bora), 252 KB (Tóquio) e 200 KB (Universal Orlando). A vitrine manteve `loading="lazy"`, `decoding="async"` e `sizes` responsivo. A renderização desktop e mobile preservou o recorte horizontal, a leitura dos títulos e as chamadas comerciais; o catálogo confirmou a correspondência dos ids com os destinos e alt texts documentados.

## Lote 05 — Cruzeiros internacionais

| Id da oferta | Destino | Ativo persistente | Especificidade visual | Alt text |
|---|---|---|---|---|
| `mediterraneo` | Grécia · Mediterrâneo | `/manus-storage/mediterraneo-editorial_8e3ec292.jpg` | Vila branca sobre falésia, mar azul e navio de cruzeiro ao fundo | Cruzeiro pelo Mediterrâneo diante de vila branca nas ilhas gregas |
| `alasca` | Alasca · EUA | `/manus-storage/alasca-editorial_dba01e92.jpg` | Geleira azul no fiorde, montanhas e embarcação de expedição | Cruzeiro no Alasca diante de geleira azul e montanhas do fiorde |
| `noruega` | Noruega · Fiordes | `/manus-storage/noruega-editorial_086edd7b.jpg` | Fiorde profundo, cachoeira, navio e luz do sol da meia-noite | Cruzeiro pelos fiordes da Noruega com cachoeira e luz do entardecer |
| `bahamas` | Bahamas · Caribe | `/manus-storage/bahamas-cruzeiro-editorial_c9c187d9.jpg` | Banco de areia claro, mar turquesa e barco de snorkel | Cruzeiro nas Bahamas com banco de areia, mar turquesa e barco |
| `danubio` | Danúbio · Europa | `/manus-storage/danubio-editorial_948f9a23.jpg` | Navio-boutique no rio com Parlamento de Budapeste ao entardecer | Cruzeiro fluvial no Danúbio com o Parlamento de Budapeste iluminado |

A origem deste lote é **geração autoral específica para a IVOEI**, sem texto, logos ou marcas d’água. Os ativos foram criados em composição horizontal 3:2 e referenciados por caminhos persistentes do storage para uso otimizado nos cards.

## Validação do lote 05

Os cinco ativos responderam no preview com HTTP 200 e `Content-Type: image/webp`, embora os caminhos persistentes mantenham o sufixo `.jpg`. Os tamanhos transferidos observados foram aproximadamente 182 KB (Mediterrâneo), 233 KB (Alasca), 168 KB (Noruega), 161 KB (Bahamas) e 209 KB (Danúbio). Os cards continuam com `loading="lazy"`, `decoding="async"` e `sizes` responsivo; as capturas desktop/mobile preservaram o enquadramento, a leitura dos preços por pessoa e as CTAs dos cruzeiros.

A inspeção inicial do DOM no preview confirmou `mediterraneo-editorial_8e3ec292.jpg` com alt text “Grécia · Mediterrâneo: Santorini, Mykonos e Atenas” e `alasca-editorial_dba01e92.jpg` com alt text “Alasca · EUA: Geleiras, Ursos e o Fim do Mundo”. Os demais cards do capítulo são carregados sob demanda pelo comportamento lazy e serão verificados após rolagem.

Para completar a validação dos cards fora do primeiro recorte de capítulos, o preview foi preparado com filtro por “Noruega”, permitindo carregar sob demanda a oferta específica antes da conferência final de associação.

A validação filtrada no preview confirmou o card `noruega` com `/manus-storage/noruega-editorial_086edd7b.jpg`, alt text “Noruega · Fiordes: Fiordes de 1.000 Metros e Sol à Meia-Noite” e dimensões naturais `1248 × 832 px`.

A validação filtrada no preview também confirmou os cards `bahamas` e `danubio`: Bahamas exibiu `/manus-storage/bahamas-cruzeiro-editorial_c9c187d9.jpg` com alt text “Bahamas · Caribe: Nassau, Pig Beach e o Mar Mais Azul”; Danúbio exibiu `/manus-storage/danubio-editorial_948f9a23.jpg` com alt text “Danúbio · Europa: Viena, Budapeste e Bratislava de Navio-Boutique”. Como os cards estavam fora da janela visível no momento da leitura, o navegador marcou as imagens como lazy ainda não decodificadas, mas os atributos `src` e `alt` estavam corretos.

Após tornar cada card visível por filtro e rolagem, Danúbio e Bahamas foram confirmados com carregamento real (`loaded: true`) e dimensões naturais `1248 × 832 px`. Danúbio usou `/manus-storage/danubio-editorial_948f9a23.jpg` com alt text “Danúbio · Europa: Viena, Budapeste e Bratislava de Navio-Boutique”; Bahamas usou `/manus-storage/bahamas-cruzeiro-editorial_c9c187d9.jpg` com alt text “Bahamas · Caribe: Nassau, Pig Beach e o Mar Mais Azul”. A divergência anterior era decorrente de cards fora da janela lazy e do preview desatualizado antes do reinício; o banco atual e o runtime filtrado estão coerentes.

## Lote final — Experiências e eventos

| Oferta | Ativo persistente | Alt text editorial | Origem |
|---|---|---|---|
| Sapucaí · Rio de Janeiro | `/manus-storage/sapucai-editorial_54cbac55.jpg` | Rio de Janeiro · Sapucaí: desfile de escola de samba visto do camarote | Fotografia autoral gerada para a IVOEI |
| Carnaval de Veneza | `/manus-storage/veneza-carnaval-editorial_f6364db4.jpg` | Veneza · Carnaval: máscaras, canal e palácios históricos | Fotografia autoral gerada para a IVOEI |
| Taj Mahal ao amanhecer | `/manus-storage/taj-mahal-amanhecer-editorial_4bc5eadc.jpg` | Índia · Taj Mahal: o monumento ao amanhecer entre névoa e jardins | Fotografia autoral gerada para a IVOEI |
| Capadócia em balão | `/manus-storage/capadocia-baloes-editorial_a493bded.jpg` | Turquia · Capadócia: balões sobre chaminés de fada ao nascer do sol | Fotografia autoral gerada para a IVOEI |
| Halong Bay | `/manus-storage/halong-bay-cruzeiro-editorial_7b5c0153.jpg` | Vietnã · Halong Bay: barco tradicional entre formações calcárias | Fotografia autoral gerada para a IVOEI |

A validação filtrada no preview confirmou Halong Bay com carregamento real (`loaded: true`), `/manus-storage/halong-bay-cruzeiro-editorial_7b5c0153.jpg`, alt text “Halong Bay · Vietnã: Ilhas de Pedra que Brotam do Mar” e dimensões naturais `1248 × 832 px`.

A filtragem por Veneza confirmou duas associações distintas no preview: a oferta romântica `veneza` mantém `/manus-storage/veneza-editorial_72ff9202.jpg`, enquanto o card do evento `veneza-carnaval` usa corretamente `/manus-storage/veneza-carnaval-editorial_f6364db4.jpg` com alt text “Veneza · Itália: O Carnaval Mais Elegante e Misterioso”. Não houve colisão entre os ids.

A validação por filtro e rolagem confirmou no preview: Sapucaí (`/manus-storage/sapucai-editorial_54cbac55.jpg`), Carnaval de Veneza (`/manus-storage/veneza-carnaval-editorial_f6364db4.jpg`), Taj Mahal (`/manus-storage/taj-mahal-amanhecer-editorial_4bc5eadc.jpg`) e Capadócia (`/manus-storage/capadocia-baloes-editorial_a493bded.jpg`) carregaram com `loaded: true`, dimensões `1248 × 832 px` e alt texts específicos. Halong Bay exibiu o src e alt corretos, mas permaneceu `loaded: false` e `0 × 0` nesta leitura lazy; será revalidado por carregamento direto antes do checkpoint.

A revalidação direta de Halong Bay confirmou carregamento real do ativo persistente (`loaded: true`) em `0 ms`, com dimensões `1248 × 832 px`. O estado anterior `0 × 0` era apenas o card fora da janela de decodificação lazy, não uma falha do arquivo.

## Seção 11 — Sabores do Brasil, atualização por anexo
| Oferta | Ativo persistente | Alt text editorial | Origem |
|---|---|---|---|
| Queijo, Cachaça e Café | `/manus-storage/section11-minas.jpg_0892f971.png` | Minas Gerais · MG: queijo Canastra, café e montanhas | Recorte do anexo fornecido pelo usuário, limpo para remover elementos de interface |
| Culinária que Conta a História da Bahia | `/manus-storage/section11-salvador.jpg_fb88c763.png` | Salvador · BA: acarajé, moqueca de camarão e praia | Recorte do anexo fornecido pelo usuário, limpo para remover elementos de interface |
| Cantina de Família e Espumante Brasileiro | `/manus-storage/section11-serra.jpg_7eb86a87.png` | Serra Gaúcha · RS: espumante, galeto, polenta e vinhedos | Recorte do anexo fornecido pelo usuário, limpo para remover elementos de interface |

No preview, os três cards renderizaram os novos `src` e alt texts específicos. O carregamento direto confirmou os três ativos com `loaded: true` e dimensões naturais `1248 × 832 px`; o estado inicial fora da janela era apenas lazy loading.

## Seção 12 — Turismo de compras
| Oferta | Ativo persistente | Alt text editorial | Direção visual |
|---|---|---|---|
| O Maior Outlet ao Ar Livre do Mundo | `/manus-storage/section12-sawgrass_8f7a372e.png` | Miami & Sawgrass Mills · EUA: outlet aberto, palmeiras e compras organizadas | Outlet ao ar livre com transfer e sacolas |
| Black Friday na Quinta Avenida | `/manus-storage/section12-new-york_fe6c9ef8.png` | Nova York · EUA: vitrines, sacolas e energia de compras na Quinta Avenida | Compras urbanas premium |
| O Outlet de Grife Mais Desejado da Europa | `/manus-storage/section12-milao_d772382b.png` | Milão & Serravalle · Itália: outlet de grife em vila italiana | Moda, arquitetura e tax refund |
| A Maior Zona Franca do Hemisfério | `/manus-storage/section12-panama_82d90ada.png` | Cidade do Panamá · Panamá: distrito duty-free tropical e organizado | Compras tax-free com conforto |
| O Maior Festival de Compras do Mundo | `/manus-storage/section12-dubai_4e727cf9.png` | Dubai · Emirados Árabes: shopping de luxo e arquitetura contemporânea | Shopping premium e hospitalidade |
| Compras na Fronteira Mais Movimentada | `/manus-storage/section12-ciudad-este_0c8e1317.png` | Foz & Ciudad del Este: avenida comercial de fronteira com compras guiadas | Comércio fronteiriço organizado |

A validação direta no preview confirmou os seis ativos da seção 12 com `loaded: true`, URLs persistentes corretas e dimensões naturais `1248 × 832 px`. Os três primeiros cards também renderizaram no DOM os alt texts específicos; os demais foram confirmados por carregamento direto devido ao lazy loading.

Inspeção visual: Sawgrass mostra outlet aberto com palmeiras, transfer e sacolas; Nova York mostra vitrines urbanas, Manhattan e compradores com sacolas. Ambas refletem diretamente os textos das ofertas, sem logos ou texto artificial.

Inspeção visual: Milão mostra vila de outlet com arcadas italianas, vitrines de moda, transfer e sacolas; Panamá mostra shopping duty-free contemporâneo, palmeiras, compradores e ambiente tropical organizado. Ambas refletem os textos das ofertas, sem logos ou texto artificial.

Inspeção visual: Dubai mostra shopping de luxo com arquitetura grandiosa, hospitalidade e sacolas; Ciudad del Este mostra avenida comercial movimentada, vans de transfer, compradores e ambiente de fronteira organizado. Ambas refletem diretamente as ofertas, sem logos ou texto artificial.

Validação de renderização no preview: o filtro “Sawgrass” exibiu um único card com `/manus-storage/section12-sawgrass_8f7a372e.png`, alt “Miami & Sawgrass Mills · EUA: O Maior Outlet ao Ar Livre do Mundo”, imagem carregada e enquadramento visível no card. A cena renderizada mostra outlet aberto, palmeiras, transfer e sacolas, coerente com o texto.

Validação de renderização no preview: o filtro “Black Friday” exibiu um único card com `/manus-storage/section12-new-york_fe6c9ef8.png`, alt “Nova York · EUA: Black Friday na Quinta Avenida”, imagem carregada e enquadramento visível no card. A cena renderizada mostra vitrines urbanas, Manhattan, táxis e compradores com sacolas, coerente com o texto.

Validação de renderização no preview: o filtro “Serravalle” exibiu um único card com `/manus-storage/section12-milao_d772382b.png`, alt “Milão & Serravalle · Itália: O Outlet de Grife Mais Desejado da Europa”, imagem carregada e enquadramento visível no card. A cena renderizada mostra arcadas italianas, vitrines de moda, transfer e sacolas, coerente com o texto.

Validação de renderização no preview: o filtro “Panamá” exibiu um único card com `/manus-storage/section12-panama_82d90ada.png`, alt “Cidade do Panamá · Panamá: A Maior Zona Franca do Hemisfério”, imagem carregada e enquadramento visível no card. A cena renderizada mostra shopping contemporâneo, palmeiras, compradores e ambiente tropical organizado, coerente com o texto.

Validação de renderização no preview: o filtro “Dubai” exibiu um único card com `/manus-storage/section12-dubai_4e727cf9.png`, alt “Dubai · Emirados Árabes: O Maior Festival de Compras do Mundo”, imagem carregada e enquadramento visível no card. A cena renderizada mostra shopping de luxo, arquitetura grandiosa, hospitalidade e sacolas, coerente com o texto.

Validação de renderização no preview: o filtro “Ciudad del Este” exibiu um único card com `/manus-storage/section12-ciudad-este_0c8e1317.png`, alt “Foz & Ciudad del Este: Compras na Fronteira Mais Movimentada”, imagem carregada e enquadramento visível no card. A cena renderizada mostra avenida comercial movimentada, vans de transfer, compradores e ambiente de fronteira organizado, coerente com o texto.

## Seção 08 — Romance no Brasil
| Oferta | Ativo persistente | Alt text editorial | Direção visual |
|---|---|---|---|
| O Segredo Mais Romântico de Alagoas | `/manus-storage/section08-milagres_ce8e3146.png` | São Miguel dos Milagres · AL: praia tranquila, piscinas naturais e casal | Mar preservado e intimidade |
| Lareira, Fondue e o Frio que Aproxima | `/manus-storage/section08-monte-verde_34f0f9df.png` | Monte Verde · MG: chalé, lareira e fondue a dois | Serra, aconchego e romance |
| O Paraíso que Pede Dois para Ser Vivido | `/manus-storage/section08-noronha_9611b6bc.png` | Fernando de Noronha · PE: golfinhos, falésias e mar azul | Natureza exclusiva e mergulho |
| Vinho, Cantina e a Itália que o Sul Construiu | `/manus-storage/section08-vinhedos_44e34026.png` | Vale dos Vinhedos · RS: vinhedos, vinho e queijo artesanal | Gastronomia e herança italiana |
| Lagoa do Paraíso ao Pôr do Sol | `/manus-storage/section08-jeri_b59ce351.png` | Jericoacoara · CE: lagoa, duna e pôr do sol a dois | Liberdade e viagem boutique |
| A Cidade Imperial Mais Romântica do Brasil | `/manus-storage/section08-petropolis_6cfc0f84.png` | Petrópolis · RJ: jardins imperiais, arquitetura histórica e serra | Patrimônio e escapada romântica |

Validação de renderização no preview: os seis filtros da seção 08 exibiram os cards corretos com src persistente, alt text específico, `loaded: true` e dimensões naturais `1248 × 832 px` para Milagres, Monte Verde, Noronha, Vinhedos, Jericoacoara e Petrópolis.

