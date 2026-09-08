# Evidência de validação — Lista de Desejos

A vitrine foi verificada no preview em desktop e em captura full-page mobile. O botão do primeiro card alternou de “Adicionar Piscinas Naturais, Maré Certa e Dias de Mar à Lista de Desejos” para “Remover Piscinas Naturais, Maré Certa e Dias de Mar da Lista de Desejos”, com `aria-pressed` controlando o estado visual e o contador do cabeçalho passando para 1.

O dialog aberto pelo botão “MINHA LISTA” apresentou título “Lista de Desejos”, descrição explicativa, ação “CONSULTAR”, ação “LEVAR MINHA SELEÇÃO AO ESPECIALISTA” e botão de fechamento. A inspeção do DOM confirmou `role="dialog"`, `aria-labelledby` e `aria-describedby`; os quatro controles internos foram enumerados com nome acessível, incluindo o rótulo específico de remoção.

A navegação por teclado foi iniciada com `Tab` dentro do dialog, e a inspeção do elemento ativo confirmou foco em um botão de controle da lista com o nome acessível de remoção. A implementação utiliza os componentes de dialog com gerenciamento de foco, além de botões nativos acionáveis por Enter/Espaço e fechamento nativo do componente.

Validações automatizadas: `pnpm check` sem erros de TypeScript; Vitest com 7 testes aprovados, incluindo 3 testes de favoritos e 4 testes dos filtros de ofertas.

## Validação do botão nos cards

A vitrine mantém um botão `wishlist-toggle` em cada `OfferCard`, com `aria-pressed`, `aria-label` dinâmico e estado visual `data-active`. No preview, favoritar “O Caribe Brasileiro Existe” elevou o contador da Lista de Desejos de 1 para 2 e alterou o rótulo para “Remover O Caribe Brasileiro Existe da Lista de Desejos”. O segundo acionamento retornou o contador para 1 e o rótulo de adição, confirmando alternância idempotente sem duplicidade. O botão permanece sobre a mídia, com foco visível, feedback de pressionamento e fallback de `prefers-reduced-motion`.
