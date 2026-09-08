# Validação das microinterações dos CTAs

O CTA `Planejar dias de mar` foi validado em runtime no preview desktop. Antes do hover, o ícone estava com `transform: none`; após disparar `mouseover`, o componente passou a `data-hovered="true"` e o ícone registrou `matrix(1, 0, 0, 1, 2.72243, 0)`, confirmando o deslocamento horizontal suave. A largura permaneceu `163.578125px` e a altura `22.421875px`, confirmando estabilidade do layout.

As regras de produção usam transições de 180 ms com easing `cubic-bezier(.23,1,.32,1)`, sombra reforçada nos botões sólidos e outline de foco com 2 px em terracota. A ação não foi executada durante o teste, apenas o estado visual foi medido.

A checagem visual em desktop e mobile confirmou que os CTAs continuam legíveis, alinhados e utilizáveis. O tratamento de movimento reduzido remove as transições e neutraliza o deslocamento do ícone; em touch, não há dependência de hover nativo.

TypeScript e os 9 testes Vitest passaram depois da implementação.

## Comparação limpa de repouso e hover

Em uma segunda medição no preview, o CTA foi primeiro colocado em repouso (`data-hovered="false"`, ícone com `transform: none`) e depois recebeu `mouseover`. Após 220 ms, o estado foi `data-hovered="true"`, o ícone registrou `matrix(1, 0, 0, 1, 3, 0)`, e a transição computada permaneceu em 140–180 ms com easing editorial. A largura (`163.578125px`) e a altura (`22.421875px`) permaneceram idênticas entre os estados, confirmando que o feedback não desloca o layout.

## Estado ativo/pressionado

A primeira medição com escala ativa alterava o retângulo computado do link, então o comportamento foi refinado. Na validação final, `pointerdown` no CTA textual produziu `data-pressed="true"`, mudou a cor de `rgb(232, 85, 67)` para `rgb(203, 68, 52)`, reduziu a opacidade para `0.76` e manteve `transform: none`. A largura permaneceu `163.578125px` e a altura `22.421875px`, confirmando feedback visual sem deslocamento dimensional. O CTA sólido usa brilho reduzido e também mantém `transform: none` no pressionamento.

## CTA sólido em pointerdown

O CTA sólido `Falar com especialista` foi pressionado em runtime com uma sonda temporária. Durante o `pointerdown`, o navegador registrou `active: true`, `box-shadow: rgba(232, 85, 67, 0.2) 0px 6px 12px 0px`, `filter: brightness(0.96)` e transform sem escala. A largura foi `219.234375px` e a altura `44.859375px`; o transform observado foi apenas a transição de elevação do hover, sem escala que alterasse a área do controle. O clique abriu corretamente o dialog de consulta, sem preencher ou enviar dados.

## Comparação dimensional final do CTA sólido

A comparação antes/durante foi realizada no mesmo CTA sólido `Falar com especialista`. Em repouso, o controle mediu `219.234375px × 44.859375px`; durante `pointerdown`, manteve exatamente `219.234375px × 44.859375px`. O estado registrou `active: true`, `filter: brightness(0.96)` e sombra `rgba(232, 85, 67, 0.2) 0px 6px 12px 0px`. Houve apenas elevação visual transitória (`translateY`), sem escala e sem mudança de dimensões, comprovando ausência de layout shift.
