# Direção de Design — IVOEI Turismo

## Três direções consideradas

| Tema | Introdução breve | Probabilidade |
|---|---|---:|
| Atlas de Boutique | Uma linguagem de diário de viagem refinado, com campos claros, papel texturizado e foco na curadoria humana. Transmite intimidade e raridade sem recorrer a luxo ostensivo. | 0,07 |
| Roteiro Editorial Noturno | Uma experiência cinematográfica de agência premium: fotografia de grande escala, espaços escuros, tipografia editorial e dourado controlado para valorizar o caráter reservado das tarifas. | 0,04 |
| Brasil Modernista Solar | Um sistema inspirado em cartazes culturais brasileiros, com azuis minerais, amarelos terrosos e composições gráficas vigorosas. Aproxima turismo, festa e diversidade regional. | 0,09 |

## Abordagem escolhida — Roteiro Editorial Noturno

### Movimento de design

A direção adota o **editorial de viagem contemporâneo**, com a atmosfera fotográfica e sofisticada de uma revista de destinos de luxo. A referência de jornada visual é a cadência de uma campanha impressa premium: imagem, respiro, informação objetiva e convite pessoal à conversa.

### Princípios centrais

1. **A fotografia conduz a emoção.** Imagens naturais, amplas e sem saturação artificial apresentam a viagem antes da oferta.
2. **A exclusividade é discreta.** O dourado funciona como selo de acesso e orientação, nunca como ruído visual.
3. **A curadoria humana é visível.** Textos e microinterações reforçam que há um especialista por trás de cada consulta.
4. **A conversão é contextual.** Formulários, CTAs e detalhes de pacote surgem como continuidade da descoberta, e não como interrupção agressiva.

### Filosofia de cor

O fundo carvão quase preto cria o silêncio visual de uma sala de embarque exclusiva e faz a fotografia ganhar profundidade. O dourado IVOEI (`#C9A84C`) é reservado a sinais de valor, seletores ativos e CTAs principais; ele sugere acesso, procedência e atenção especializada. O branco marfim (`#F5F5F0`) mantém legibilidade quente, enquanto grafite azulado (`#1E293B`) diferencia superfícies e controles sem perder o tom noturno.

### Paradigma de layout

O site se comporta como um **itinerário vertical cinematográfico**: a navegação introduz uma rota, o herói ocupa toda a primeira janela, e cada seção entra como um novo capítulo com margens assimétricas, títulos deslocados e linhas-guia douradas. Os cards não ficam em uma grade central genérica: alternam faixas panorâmicas, trilhos horizontais e composições de sobreposição para preservar ritmo editorial.

### Elementos de assinatura

1. Uma **linha de rota dourada** com pequenos marcadores pontuais, presente em transições de seção e módulos de preço.
2. O **selo de tarifa secreta**, em metal dourado escovado e tipografia condensada, sempre sobre as imagens de produto.
3. **Numeração editorial de capítulos** — 01, 02, 03 — em corpo ampliado e baixa opacidade para ancorar a narrativa visual.

### Filosofia de interação

Cada clique aprofunda a viagem: filtros revelam pins por período, cards convidam a consultar condições e o fluxo de formulário avança em passos simples e claros. O feedback é calmo e preciso, com estados de carregamento que reforçam a sensação de consulta exclusiva, em vez de prometer disponibilidade em tempo real.

### Animação

Entradas de conteúdo usam apenas opacidade e deslocamentos sutis, com escalonamento curto de 40–70 ms entre itens. Fotos recebem aproximação muito lenta somente em hover, CTAs têm pressão discreta no clique e modais entram com fade, leve elevação e foco imediato. A duração padrão fica entre 160 e 280 ms, respeitando `prefers-reduced-motion`.

### Sistema tipográfico

**Playfair Display** é a voz de destinos, experiências e manchetes, com alto contraste, caixa normal e quebras generosas. **Inter** organiza preços, campos, informações de pacote e comandos em pesos 400, 500 e 700, com letras espaçadas apenas em selos e botões. Títulos evitam a caixa-alta extensa; CTAs e rótulos têm caixa-alta controlada para sustentar precisão.

### Essência da marca

**A IVOEI Turismo é a franquia para quem quer viajar melhor pelo Brasil e pelo mundo usando oportunidades emitidas por milhas, com curadoria humana até o retorno.**

Personalidade: **seletiva, acolhedora e experiente**.

### Voz da marca

As manchetes soam sensoriais e seguras; CTAs são diretos, sem urgência artificial; microcopy esclarece o próximo passo com serenidade. Evitar fórmulas genéricas e promessas vagas.

> “O destino é público. A tarifa, nem sempre.”

> “Conte a rota. Um especialista IVOEI cuida do que acontece depois.”

### Wordmark e marca gráfica

O wordmark IVOEI terá desenho em serif de contraste, com espaçamento elegante e o “O” trabalhado como uma janela de aeronave. A marca gráfica independente será uma **janela de avião abstrata atravessada por uma rota ascendente**, sem texto, com traços dourados sobre transparência para uso em favicon e navegação.

### Cor assinatura

**Ouro de Embarque — `#C9A84C`**: um dourado quente, sóbrio e reconhecível, empregado como sinal de acesso à experiência IVOEI.

## Style Decisions

- Cada capítulo passa a abrir com uma composição panorâmica assimétrica, alternando o lado da fotografia protagonista e da narrativa de curadoria antes do trilho de ofertas.
- A rota dourada deixa de ser apenas decorativa: ela conecta capítulo, pacote em destaque, trilho de opções e preço, com marcadores visíveis como uma assinatura do percurso IVOEI.
- Os cards secundários funcionam como fichas de curadoria reservada: imagem dominante, menos texto simultâneo e CTAs de consulta discretos, em vez de aparência de marketplace.
- A busca do herói é uma consulta reservada: usa menos sinais transacionais, reforça a escuta humana e torna o ouro um marcador de acesso.
- A página alterna três composições de capítulo: narrativa com foto à esquerda, narrativa com foto à direita e panorama com uma coluna de percurso lateral; assim, a sequência não se comporta como um catálogo uniforme.
- O wordmark usa uma interpretação gráfica do “O” como janela de aeronave, conectando o nome da marca à ideia de deslocamento sem depender apenas do ícone.
- Os dezoito capítulos seguem uma rotação deliberada entre três famílias: **percurso lateral**, com narrativa conectada por uma rota vertical; **assimetria imagem+narrativa**, que privilegia um destino de cada vez; e **panorama imersivo**, no qual a imagem domina a página como abertura de revista.
- O ouro é aplicado como acesso reservado e não como preenchimento recorrente: dá ênfase à consulta principal, aos pontos da rota, aos selos de tarifa e aos valores-chave.

## Reorientação de Design — Atlas Solar de Curadoria

### Movimento de design

A IVOEI passa do editorial noturno para um **editorial de viagem solar e contemporâneo**, inspirado na clareza de operadoras internacionais de alta curadoria. A tela branca funciona como página de revista e galeria de destinos: ela devolve protagonismo à fotografia real, melhora a leitura do produto e permite que cada tipo de viagem tenha cor e energia próprias.

### Princípios centrais

1. **A página é clara; o destino é intenso.** Fundo de papel quente e grandes áreas de respiro deixam as imagens, os lugares e os preços conduzirem a atenção.
2. **Produto sem ambiguidade.** Todo valor é apresentado como referência **por pessoa**, com fonte, período e condições de confirmação próximos da oferta.
3. **A fotografia é específica.** A imagem precisa representar o local, o tipo de viagem e a emoção da chamada; não é decoração reutilizável entre destinos incompatíveis.
4. **Curadoria antes de urgência.** Comparações e descontos somente reforçam uma oportunidade já explicada e verificável; o especialista continua sendo o centro da conversa.

### Filosofia de cor

O **Marfim de Rota** (`#F7F5F0`) substitui o carvão como área dominante e aproxima o portal das referências internacionais claras. O **Azul Cartográfico** (`#173D5B`) ancora cabeçalho, tipografia de preço e confiança. O **Coral de Partida** (`#E85543`) chama atenção para ações e economia quando sustentada por dados. Azul oceânico, verde mata e amarelo sol aparecem em pequenas etiquetas de categoria, nunca como gradientes. O dourado deixa de ser preenchimento recorrente e vira acabamento pontual da marca.

### Paradigma de layout

O portal opera como um **atlas aberto**: hero fotográfico claro, barra de busca que flutua sobre papel, coleções em mosaicos de tamanhos variáveis e ofertas em fichas horizontais de leitura rápida. Os capítulos deixam de repetir longos trilhos escuros; passam a alternar uma imagem de destino, informação de produto e uma única ação de consulta.

### Elementos de assinatura

1. Um filete de rota azul com pontos coral conecta filtros, foto, preço e ação.
2. Uma etiqueta editorial de destino, com cor de categoria e local/período legíveis.
3. Um módulo de preço em duas linhas: referência anterior riscada **somente quando comprovada**, seguida do valor atual **por pessoa**.

### Tipografia, voz e marca

**DM Serif Display** dá escala humana a títulos e destinos. **Manrope** organiza toda a informação funcional com clareza, evitando a aparência corporativa genérica. As manchetes são específicas e luminosas; CTAs soam consultivos: “Ver esta rota” e “Montar com especialista”. A marca continua seletiva, acolhedora e experiente, mas agora se apresenta com mais luz, contraste e precisão comercial.

> “Veja o lugar. Entenda a rota. Decida com alguém que conhece o caminho.”

## Style Decisions — Atlas Solar

- O **Marfim de Rota** é a sensação dominante: o azul cartográfico fica reservado a momentos de contraste, cabeçalho e rodapé, não a sequências extensas de catálogo.
- O filete de rota azul, pontuado por marcadores coral, conecta busca, seleção, destino, preço e consulta; ele é a assinatura visual obrigatória da IVOEI.
- O wordmark e o “O” em forma de janela de aeronave ganham escala suficiente na navegação para funcionar como memória de marca.
- O preço é uma ficha de curadoria: “valor de referência”, “por pessoa”, disponibilidade e condição de confirmação são lidos juntos. Preço riscado só entra quando a franquia documentar a comparação.
