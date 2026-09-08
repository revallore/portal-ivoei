# Expansão — Parte 2 do briefing IVOEI

- [x] Extrair integralmente as Seções 07 a 12 do anexo e consolidar os dados de cards e catálogos.
- [x] Criar as novas categorias no catálogo editorial, incluindo atrações nacionais e roteiros românticos.
- [x] Manter as gavetas, os destaques panorâmicos e as chamadas para consulta já existentes.
- [x] Validar tipos, compilação e apresentação responsiva após a atualização.
- [x] Salvar checkpoint e entregar a versão atualizada com a indicação dos próximos insumos.

# Conclusão — Parte 3 do briefing IVOEI

- [x] Extrair integralmente as Seções 13 a 18 e as Camadas 04 e 05 do anexo.
- [x] Adicionar os capítulos finais e os respectivos catálogos ao portal.
- [x] Transformar a captura em um fluxo qualificado de três etapas, preservando a saída para WhatsApp.
- [x] Implementar elementos de prova, transparência e credibilidade previstos no briefing.
- [x] Validar compilação, responsividade e acabamento antes do checkpoint final.

# Benchmark de referências de turismo

- [x] Analisar as experiências de Zarpo, Instaviagem e R11 Travel, incluindo proposta de valor, descoberta, conversão e confiança.
- [x] Pesquisar referências adicionais de turismo e hospitalidade digital com padrões relevantes para a IVOEI.
- [x] Consolidar aprendizados em recomendações exclusivas, distinguindo práticas a adaptar de elementos a evitar.
- [x] Priorizar melhorias por impacto comercial, esforço e adequação ao posicionamento IVOEI.
- [x] Entregar a análise e, após aprovação, implementar o primeiro conjunto de melhorias.

# Evolução do portal baseada no benchmark

- [x] Mapear os componentes e fluxos existentes que serão ampliados, sem descaracterizar o roteiro editorial.
- [x] Criar o módulo “Encontre sua rota” com filtros de intenção, orçamento, janela de viagem e origem.
- [x] Criar coleções IVOEI Indica com entradas editoriais e roteiros de curadoria.
- [x] Inserir um estado pós-consulta com próximos passos, prazo de retorno e limites de disponibilidade.
- [x] Estruturar a área de confiança com dados institucionais pendentes, transparência de tarifa e explicação do método.
- [x] Validar a experiência final e salvar um checkpoint da evolução aprovada.

# Redesign visual e comercial internacional

- [x] Analisar referências internacionais de turismo premium, cruzeiros e curadoria editorial, incluindo estrutura, tipografia, fotografia e conversão.
- [x] Auditar a paleta, o fundo, as fontes, a estrutura de página e a repetição de imagens na versão atual da IVOEI.
- [x] Definir uma direção visual clara, com contraste e cor inspirados em padrões premium internacionais sem perder a identidade IVOEI.
- [x] Reestruturar a apresentação das ofertas, deixando visível que todos os valores são por pessoa e eliminando comparações sem base real.
- [x] Selecionar ou gerar fotografias específicas e não repetidas, alinhadas ao destino e à emoção prometida em cada seção prioritária.
- [x] Implementar a nova direção e validar a experiência em desktop e dispositivos móveis.

# Ajuste de escopo — avançar sem dados institucionais

- [x] Prosseguir com placeholders institucionais sem inventar WhatsApp, CNPJ, Cadastur ou endereço.
- [x] Manter preços atuais como referências por pessoa e não exibir preço anterior riscado sem histórico verificável.
- [x] Restaurar ofertas por seção com fotografias protagonistas e faixa de preço que não cubra as imagens.
- [x] Finalizar a nova paleta de cores e validar a vitrine em desktop e celular.
- [x] Salvar checkpoint da reconstrução visual concluída.

- [x] Adicionar condição explícita de preço anterior validado antes de renderizar qualquer valor riscado.
- [x] Auditar os dados de ofertas e sinalizar ou remover qualquer referência de preço sem comprovação comercial.
- [x] Verificar explicitamente ocorrências de `referencePrice:` em travelData.ts, travelDataPart2.ts e travelDataPart3.ts.
- [x] Registrar a evidência da auditoria; sem preço anterior ativo, manter todos os dados sem comparação riscada.

# Filtros da vitrine de ofertas

- [x] Auditar os dados disponíveis e definir como inferir destino, faixa de preço e estilo sem alterar os preços.
- [x] Implementar busca por destino, faixa de preço e estilo de viagem na vitrine.
- [x] Adicionar contador de resultados, limpeza de filtros e estado vazio acessível.
- [x] Validar os filtros em desktop e celular e salvar checkpoint.

# Revisão de ofertas prioritárias

- [x] Auditar as ofertas em destaque e identificar textos genéricos, benefícios pouco claros e desalinhamentos com as fotos.
- [x] Reescrever títulos, resumos, inclusões e CTAs das ofertas prioritárias com persuasão responsável.
- [x] Manter todos os preços como referência por pessoa e sem promessas de disponibilidade.
- [x] Validar a apresentação revisada em desktop e celular e salvar checkpoint.

# Correções finais da revisão de ofertas

- [x] Concluir a revisão textual das ofertas prioritárias, incluindo Aurora Boreal.
- [x] Substituir o CTA genérico por chamadas específicas nas ofertas prioritárias.
- [x] Salvar novo checkpoint após a revisão final e a validação visual.
- [x] Salvar um novo checkpoint após as alterações finais de copy e CTA das ofertas prioritárias.
- [x] Entregar a versão usando o novo checkpoint, para que o estado revisado possa ser restaurado e validado.

# Lista de Desejos

- [x] Definir o modelo de favoritos e a jornada de consulta a partir da lista.
- [x] Implementar favoritar e desfavoritar ofertas nos cards.
- [x] Criar painel da Lista de Desejos com contador, remoção e estado vazio.
- [x] Persistir a seleção no navegador e encaminhar favoritos para a consulta.
- [x] Validar acessibilidade, responsividade e salvar checkpoint.

# Fechamento — Lista de Desejos

- [x] Validar explicitamente teclado, foco do dialog, nomes acessíveis e estados dos controles da Lista de Desejos.
- [x] Salvar checkpoint final após a implementação e validação da Lista de Desejos.

# Banco aprovado de imagens por destino

- [x] Auditar as imagens genéricas e definir o primeiro lote prioritário de destinos.
- [x] Selecionar ou gerar fotografias específicas com registro de origem e uso aprovado.
- [x] Integrar o lote aprovado ao catálogo sem armazenar mídia no diretório do projeto.
- [x] Validar enquadramento, alt text, desempenho e responsividade das imagens substituídas.
- [x] Salvar checkpoint da primeira atualização do banco de imagens.

- [x] Validar explicitamente o desempenho do lote 01, preferindo URLs comprimidas quando disponíveis e registrando a decisão.
- [x] Confirmar alt text informativo nos cards e uso decorativo somente nas imagens secundárias do painel.

# Banco aprovado de imagens por destino — Lote 02

- [x] Auditar e confirmar as ofertas de Gramado, Rio de Janeiro, Foz do Iguaçu e destinos internacionais prioritários.
- [x] Gerar fotografias específicas e registrar origem autoral, uso aprovado e alt text.
- [x] Integrar o lote 02 ao banco centralizado e aos cards correspondentes.
- [x] Validar carregamento, enquadramento, acessibilidade e responsividade do lote 02.
- [x] Salvar checkpoint da segunda atualização do banco de imagens.

# Interação visual — Zoom nos cards

- [x] Auditar os estilos atuais dos cards e definir escala, duração e área de recorte do zoom.
- [x] Implementar zoom suave somente na fotografia, sem deslocar conteúdo ou controles.
- [x] Respeitar `prefers-reduced-motion` e manter o comportamento adequado em touch.
- [x] Validar hover, responsividade, testes e salvar checkpoint da interação.

- [x] Validar explicitamente o hover do zoom no preview desktop, confirmando que apenas a fotografia amplia sem deslocar conteúdo ou controles.
- [x] Salvar checkpoint após a validação final do zoom e registrar a versão publicada.

# Microinterações — Botões de consulta

- [x] Auditar os estados atuais dos botões de consulta e definir feedback visual curto.
- [x] Implementar hover, foco visível e estado ativo sem alterar o fluxo de consulta.
- [x] Respeitar `prefers-reduced-motion` e manter a interação adequada em touch.
- [x] Validar runtime, desktop, mobile, testes e salvar checkpoint da microinteração.

- [x] Adicionar estado ativo explícito também aos CTAs `text-button consult-button` e validar feedback sem deslocar o layout.
- [x] Salvar checkpoint após a microinteração dos botões de consulta e registrar o versionId publicado.

- [x] Validar em runtime o estado `:active` dos CTAs de consulta de texto e sólidos, confirmando feedback visual e ausência de deslocamento de layout.
- [x] Salvar checkpoint após a validação final das microinterações dos botões de consulta e registrar o `versionId` publicado.

- [x] Validar em runtime o estado `:active` do CTA sólido (`action-button consult-button`), registrando feedback visual e estabilidade de layout.
- [x] Salvar um novo checkpoint após a validação final das microinterações dos CTAs e registrar o novo `versionId` publicado.

- [x] Comparar largura e altura do mesmo CTA sólido antes e durante o `pointerdown` para comprovar ausência de layout shift.
- [x] Salvar checkpoint final das microinterações e registrar o `versionId` publicado no checklist.

# Banco aprovado de imagens por destino — Lote 03

- [x] Auditar o catálogo e definir os próximos destinos ainda não atualizados: Nova York, Lisboa & Porto, Miami, Buenos Aires e Caribe/CocoCay.
- [x] Gerar fotografias específicas e registrar origem autoral, uso aprovado e alt text.
- [x] Integrar o lote 03 ao banco centralizado e aos cards corretos.
- [x] Validar carregamento, enquadramento, acessibilidade e responsividade do lote 03.
- [x] Salvar checkpoint da terceira atualização do banco de imagens.

- [x] Salvar um novo checkpoint após o lote 03 do banco de imagens e registrar o `versionId` publicado no checklist ou em `image-bank.md`.

# Favoritar nos cards de destino

- [x] Auditar se todos os cards usam o botão de favoritar compartilhado e a lógica da Lista de Desejos.
- [x] Garantir visibilidade, estado selecionado, nome acessível e feedback do botão em cada card.
- [x] Validar persistência, remoção, responsividade e ausência de duplicação de favoritos.
- [x] Salvar checkpoint após validar o botão de favoritar nos cards.

- [x] Salvar um novo checkpoint após a validação do botão de favoritar nos cards.
- [x] Registrar o `versionId` publicado desse checkpoint no checklist ou em `wishlist-validation.md`.

# Banco aprovado de imagens por destino — Lote 04

- [x] Auditar o catálogo e definir os próximos destinos ainda não atualizados: Maldivas, Veneza, Bora Bora, Tóquio e Universal Orlando.
- [x] Gerar fotografias específicas e registrar origem autoral, uso aprovado e alt text.
- [x] Integrar o lote 04 ao banco centralizado e aos cards corretos.
- [x] Validar carregamento, enquadramento, acessibilidade e responsividade do lote 04.
- [x] Salvar checkpoint da quarta atualização do banco de imagens.

- [x] Salvar um novo checkpoint após o lote 04 do banco de imagens.
- [x] Registrar o `versionId` publicado do lote 04 no `todo.md` ou em `image-bank.md` após o checkpoint.

# Banco aprovado de imagens por destino — Lote 05

- [x] Auditar e confirmar as cinco ofertas do lote 05: Mediterrâneo, Alasca, Noruega, Bahamas e Danúbio.
- [x] Gerar fotografias específicas e registrar origem autoral, uso aprovado e alt text.
- [x] Integrar o lote 05 ao banco centralizado e aos cards corretos.
- [x] Validar carregamento, enquadramento, acessibilidade e responsividade do lote 05.
- [x] Salvar checkpoint da quinta atualização do banco de imagens.

- [x] Validar no preview os cinco cards do lote 05, confirmando para cada id a imagem persistente, o título correto e o alt text renderizado.
- [x] Registrar em `image-bank.md` a evidência objetiva de associação e acessibilidade do lote 05 no navegador.
- [x] Salvar um novo checkpoint após o lote 05 e registrar o `versionId` publicado no `todo.md` ou `image-bank.md`.

# Correção de associação — Lote 05

- [x] Auditar overrides e ids efetivamente renderizados para Noruega, Bahamas e demais ofertas do lote 05.
- [x] Corrigir banco, alt texts, documentação e testes conforme os ids reais do preview.
- [x] Revalidar os cinco cards no preview, incluindo acessibilidade e responsividade.
- [x] Salvar checkpoint corrigido e registrar o novo versionId publicado.

- [x] Validar no preview os cards `bahamas` e `danubio` até carregarem de fato, com dimensões naturais válidas.
- [x] Registrar evidência objetiva dos cinco cards do lote 05 com destino, título, imagem e alt text.
- [x] Confirmar que a divergência anterior vinha do preview/cache ou aplicar correção real se necessário, rerodando os testes.
- [x] Revalidar desktop/mobile após a correção final do lote 05 antes de marcar a etapa como concluída.

# Banco aprovado de imagens — Experiências e eventos

- [x] Auditar as seções de experiências e eventos e identificar as imagens genéricas restantes: Sapucaí, Carnaval de Veneza, Taj Mahal, Capadócia e Halong Bay.
- [x] Gerar fotografias específicas e registrar origem autoral, uso aprovado e alt text.
- [x] Integrar o lote final ao banco centralizado e aos cards correspondentes.
- [x] Validar associação, carregamento, acessibilidade, enquadramento e responsividade.
- [x] Salvar checkpoint final do banco de imagens e registrar o versionId publicado.

- [x] Validar no preview os cinco cards de experiências e eventos, confirmando para cada id o src persistente, título correto e alt text renderizado.
- [x] Registrar em `image-bank.md` a evidência objetiva da associação real dos cinco cards no navegador.
- [x] Revalidar responsividade desktop/mobile e carregamento dos ativos antes do checkpoint final.

# Atualização — Seção 11 Sabores do Brasil

- [x] Substituir as três fotos da seção 11 pelas fotografias mostradas no anexo.
- [x] Validar carregamento e associação das três imagens no preview.
- [x] Salvar checkpoint publicado da atualização — versionId `9e364d8d`.

# Atualização — Seção 12 Turismo de compras

- [x] Substituir as fotos da seção 12 por imagens de outlets, tax-free e shoppings premium.
- [x] Validar carregamento, associação e coerência visual das novas imagens.
- [x] Salvar checkpoint publicado da atualização — versionId a registrar após publicação.

# Atualização — Seção 08

- [x] Substituir as fotos da seção 08 por imagens específicas coerentes com os textos.
- [x] Validar carregamento, associação e coerência visual das novas imagens no preview.
- [x] Salvar checkpoint publicado da atualização — versionId a registrar após publicação.
- [x] Validar no preview os cards panama, dubai-shopping e ciudad-este, confirmando src e alt no DOM.
- [x] Registrar evidência objetiva da coerência visual das seis imagens renderizadas.
- [x] Validar visualmente no preview os seis cards da seção 12 com cada imagem efetivamente renderizada.
- [x] Registrar no image-bank.md a evidência por card vinculando imagem, destino e atributo visual.
