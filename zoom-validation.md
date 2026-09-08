# Validação do zoom dos cards

A folha de estilos do preview foi inspecionada no navegador. A consulta `matchMedia('(hover: hover) and (pointer: fine)')` retornou `true`, enquanto `matchMedia('(prefers-reduced-motion: reduce)')` retornou `false` no ambiente de validação.

A regra carregada foi confirmada como:

```css
@media (hover: hover) and (pointer: fine) {
  .destination-card:hover .destination-card__media .destination-card__photo,
  .destination-card:focus-within .destination-card__media .destination-card__photo {
    transform: scale(1.055);
  }
}
```

O contêiner `.destination-card__media` mantém `overflow: hidden`, a fotografia usa `transition: transform 0.62s cubic-bezier(0.23, 1, 0.32, 1)` e a ampliação ocorre somente no elemento da imagem. A regra alternativa para `prefers-reduced-motion: reduce` remove a transição e neutraliza o transform. Em touch, a media query de hover não é aplicada.

A checagem visual desktop e mobile confirmou que a área textual, os controles e a altura dos cards não sofrem deslocamento. TypeScript e os 9 testes Vitest também passaram após a alteração.

## Estado hover em runtime

Após disparar `mouseover` no primeiro card em desktop, o componente passou a `data-hovered="true"`. A medição computada após 80 ms registrou `transform: matrix(1.0234, 0, 0, 1.0234, 0, 0)`, em transição para a escala final `1.055`; o valor inicial era `none`. A altura do card permaneceu `668.546875px` e a altura da mídia permaneceu `240px`, com `overflow: hidden`. Portanto, a imagem ampliou durante a transição sem deslocar conteúdo, controles ou dimensões do card.
