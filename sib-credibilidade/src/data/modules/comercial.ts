import type { Module } from "../types";

export const comercialModule: Module = {
  id: "comercial",
  name: "Comercial",
  icon: "🤝",
  summary:
    "Gestão comercial, clientes, propostas, contratos, indicadores de vendas e histórico de negociações.",
  features: [
    {
  title: "Dashboard — Comercial (Cotações, Pré-Cálculo e Viabilidade)",
  description:
    "Centraliza a tomada de decisão do Comercial com base no fluxo de Cotação e Pré-Cálculo, consolidando valor movimentado, status das cotações, eficiência de conversão por valor, margem média e evolução por gráficos. O dashboard foi desenhado para uso diário: filtrar período, identificar onde está o valor (clientes/itens/setor/segmento) e continuar rapidamente o trabalho a partir dos últimos pré-cálculos.\n\n" +

    "Principais funcionalidades do dashboard:\n\n" +

    "• Banner operacional com foco em rastreabilidade (SGQ/IATF):\n" +
    "  – Mensagem de orientação e disciplina do processo, com atalhos diretos para:\n" +
    "    – Acompanhamento do fluxo do Pré-Cálculo.\n" +
    "    – Abertura do Mapa de Clientes.\n\n" +

    "• Filtro por período (data início/fim) com feedback do período ativo:\n" +
    "  – Permite análise comparável (sem misturar janelas) e leitura objetiva do recorte.\n\n" +

    "• Cards resumo (KPIs do período):\n" +
    "  – Cotações em acompanhamento (Aprovadas / Em análise / Perdidas).\n" +
    "  – Valor movimentado no período (com quebra por status).\n" +
    "  – Eficiência de conversão (%) baseada em valor, com fórmula explícita.\n" +
    "  – Clientes ativos e reativados.\n" +
    "  – Margem média no período (%).\n\n" +

    "• Blocos de acompanhamento (capacidade e andamento):\n" +
    "  – Ordens de Desenvolvimento em andamento (Amostras e Novos Itens).\n" +
    "  – Viabilidade por área (Comercial/Custos/Técnica) com contagem por resultado (Viável/Alterações/Inviável).\n\n" +

    "• Últimos Pré-Cálculos — continue de onde parou:\n" +
    "  – Lista rolável com cotação/cliente, item, quantidade estimada, preço unitário, valor total, data de atualização e status.\n" +
    "  – Atalhos diretos: abrir o F011 (visualizar pré-cálculo) e ir para a precificação.\n\n" +

    "• Análises por gráficos e tabelas (priorização por valor):\n" +
    "  – Pré-Cálculos por mês (ritmo de entrada).\n" +
    "  – Tipo de item por mês (Cotação x Corrente).\n" +
    "  – Top 5 clientes por valor e Top 5 itens por valor.\n" +
    "  – Pré-Cálculo por setor primário (tabela) e distribuição de faturamento por setor (pizza).\n" +
    "  – Cotações por segmento (doughnut).\n\n" +

    "Resultado: um painel único e objetivo para gestão de cotação/pré-cálculo, com KPIs e análises por valor, permitindo priorização de carteira, revisão de margem e gestão de capacidade (OD/viabilidade) com rastreabilidade.",
  evidence: [
    {
      kind: "video",
      src: "/media/comercial/dashboard-comercial.mp4",
      title: "Dashboard Comercial em operação",
      caption:
        "Filtro por período, cards (cotações/valor/conversão/clientes/margem), OD e viabilidade, últimos pré-cálculos e gráficos (mês/tipo/top clientes/top itens/setor/segmento).",
    },
  ],
},

{
  title: "Dashboard — Faturamento (Metas, Vendas, Devoluções e Ficha)",
  description:
    "Consolida o acompanhamento de faturamento em um painel com abas, mantendo um único filtro de período para todas as visões. A navegação por abas organiza o conteúdo por objetivo (metas, vendas, devoluções e ficha), e o dashboard inicializa os gráficos somente da aba ativa, garantindo desempenho e consistência de leitura.\n\n" +

    "Principais funcionalidades do dashboard:\n\n" +

    "• Filtro único por período (De/Até) válido para todas as abas:\n" +
    "  – Mantém a mesma janela de análise ao alternar entre Metas, Vendas, Devoluções e Ficha.\n" +
    "  – Campo oculto 'tab' preserva a aba ativa após recarregar.\n\n" +

    "• Abas organizadas por contexto de gestão:\n" +
    "  – Metas: foco em atingimento, evolução e leitura executiva.\n" +
    "  – Vendas: visão do realizado no período e comportamento por recortes.\n" +
    "  – Devoluções: controle de impacto e análise de retorno.\n" +
    "  – Ficha: visão consolidada para auditoria/consulta.\n\n" +

    "• Inicialização inteligente de gráficos por aba:\n" +
    "  – Ao trocar a aba, o sistema chama apenas o init correspondente (Metas/Vendas/Devoluções/Ficha).\n" +
    "  – Mantém consistência e evita recarregar tudo desnecessariamente.\n\n" +

    "Resultado: um dashboard de faturamento sólido para gestão e auditoria, com período único, navegação por abas e inicialização controlada dos gráficos, permitindo leitura clara e rápida sem perda de contexto.",
  evidence: [
    {
      kind: "video",
      src: "/media/comercial/dashboard-faturamento.mp4",
      title: "Dashboard de Faturamento em operação",
      caption:
        "Filtro único de período, abas (Metas/Vendas/Devoluções/Ficha) e inicialização de gráficos conforme aba ativa.",
    },
  ],
},

{
  title: "Cadastro de Clientes (CNPJ, Documentação, Contato e Adimplência)",
  description:
    "Centraliza o cadastro e a manutenção de clientes, transportadoras e fornecedores, garantindo padronização, rastreabilidade e agilidade na operação do Comercial. A feature foi desenhada para reduzir retrabalho: consulta automática por CNPJ, prevenção de duplicidade, anexos por tipo (formset), organização por acordeão e regras de exibição conforme o tipo de cadastro.\n\n" +

    "Escopo do cadastro:\n" +
    "• Cadastro unificado por Tipo de Cadastro:\n" +
    "  – Cliente / Transportadora / Fornecedor (com regras específicas de exibição de campos).\n" +
    "  – Vínculo opcional de transportadora ao cliente (relacionamento self FK).\n\n" +

    "• Consulta e preenchimento automático via CNPJ:\n" +
    "  – Botão “Buscar dados” consulta a BrasilAPI (CNPJ) e preenche razão social, nome fantasia, endereço, número, complemento, bairro, cidade, CEP, UF e IE (quando disponível).\n" +
    "  – Feedback imediato para CNPJ inválido/não encontrado.\n\n" +

    "• Prevenção de duplicidade (controle operacional e integridade):\n" +
    "  – Validação em tempo real: ao sair do campo, o sistema consulta endpoint interno de verificação e exibe alerta se o CNPJ já existir.\n" +
    "  – Bloqueio de envio do formulário quando detectado duplicado (evita cadastro repetido).\n" +
    "  – Integridade de banco: CNPJ é único no model.\n\n" +

    "• Documentação e anexos (formset):\n" +
    "  – Upload de logotipo do cliente.\n" +
    "  – Inclusão de múltiplos documentos anexados por tipo (ex.: Cartão CNPJ, IE/IM, Carta IPI, Ficha Cadastral, Suframa, Normas e Outros).\n" +
    "  – Adicionar/remover documentos dinamicamente no formulário.\n" +
    "  – Remoção segura: marca DELETE e oculta o bloco, mantendo consistência do formset.\n\n" +

    "• Organização por acordeão (UX para cadastro completo sem poluir a tela):\n" +
    "  – Documentação (tipo de cadastro, logotipo e documentos).\n" +
    "  – Dados cadastrais (CNPJ, razão social, IE, endereço completo).\n" +
    "  – Contato (nome, cargo, e-mail, departamento, telefone).\n" +
    "  – Transportadora associada (seleção quando aplicável).\n" +
    "  – Outros dados (status, tipo de cliente, dados fiscais/comerciais e observações).\n\n" +

    "• Regras por Tipo de Cadastro (campos exibidos/ocultados automaticamente):\n" +
    "  – Transportadora: habilita campo “Coleta” e oculta apenas campos comerciais (ICMS/CFOP/condição/código BM), mantendo documentação e observações.\n" +
    "  – Fornecedor: mantém obrigatórios mínimos e oculta logotipo/documentos, contato, transportadora, observação e adimplência, além dos campos comerciais.\n" +
    "  – Cliente: exibe todas as seções completas.\n\n" +

    "• Adimplência (controle e evidência):\n" +
    "  – Status de adimplência (Adimplente/Inadimplente).\n" +
    "  – Anexo de comprovante (PDF) para evidenciar a situação, exibindo badge e link quando disponível.\n\n" +

    "• Padronização automática no salvamento:\n" +
    "  – Normaliza campos de contato (nome/cargo/departamento) com formatação de siglas.\n" +
    "  – Normaliza “Código BM” em caixa alta.\n\n" +

    "• Operação completa no ciclo de uso (lista → filtros → cadastro → visualização → impressão):\n" +
    "  – Lista de clientes com filtros (razão social, CNPJ, cidade, status, tipo de cadastro, tipo de cliente e código BM) e padrão exibindo ativos quando não filtrado.\n" +
    "  – Indicadores no topo (total, por tipo, atualizadas no mês) e paginação.\n" +
    "  – Visualização detalhada com seções: dados gerais, endereço, anexos, contato, transportadora (se houver), outros dados, itens relacionados e ferramentas vinculadas.\n" +
    "  – Layout preparado para impressão (estilos específicos e quebra de página).\n\n" +

    "Permissões e segurança:\n" +
    "• Acesso controlado por permissões (listar/cadastrar/editar/excluir/importar), mantendo governança do módulo Comercial.\n\n" +

    "Resultado: um cadastro robusto, auditável e orientado à operação diária, com prevenção de falhas (duplicidade), ganho de velocidade (autofill por CNPJ) e organização por seções, suportando anexos e evidências (documentos e adimplência) para uso contínuo no fluxo comercial.",
  evidence: [
    {
      kind: "video",
      src: "/media/comercial/cadastro-clientes.mp4",
      title: "Cadastro de Clientes — fluxo completo",
      caption:
        "Cadastro/edição com acordeão, busca por CNPJ (BrasilAPI), verificação de duplicidade, anexos por tipo (formset), regras por tipo de cadastro (cliente/transportadora/fornecedor) e adimplência com comprovante.",
    },
    {
      kind: "video",
      src: "/media/comercial/clientes-lista-e-filtros.mp4",
      title: "Lista de Clientes — filtros, indicadores e ações",
      caption:
        "Filtros (razão social, CNPJ, cidade, status, tipo, tipo de cadastro, código BM), indicadores do período e ações por permissão (visualizar/editar/excluir), incluindo modal de anexos e badge de adimplência.",
    },
    {
      kind: "video",
      src: "/media/comercial/cliente-visualizar-e-imprimir.mp4",
      title: "Detalhes do Cliente — visualização e impressão",
      caption:
        "Tela de detalhes com dados gerais, documentos anexados, contato, transportadora associada, outros dados (ICMS/CFOP/condição/código BM/observações) e seções relacionadas (itens e ferramentas) com estilos de impressão.",
    },
  ],
},

{
  title: "Cadastro de Itens (Cliente, Desenho, Segurança, Fontes Homologadas e Preço por Vigência)",
  description:
    "Gerencia o cadastro completo de itens vinculados a clientes, suportando rastreabilidade técnica (desenho/revisão), atributos de segurança, fontes homologadas e controle de preço por vigência. A feature foi desenhada para operação diária do Comercial e integração natural com o fluxo de Cotação/Pré-Cálculo.\n\n" +

    "Estrutura do cadastro (campos e regras principais):\n" +
    "• Vínculo obrigatório com Cliente (somente cadastros do tipo “Cliente”):\n" +
    "  – Lista ordenada por razão social e exibindo razão social + CNPJ no select.\n\n" +

    "• Identificação do item:\n" +
    "  – Código Interno (único e normalizado em CAIXA ALTA).\n" +
    "  – Descrição, NCM e Lote Mínimo.\n" +
    "  – Código/Descrição no Cliente (opcionais).\n" +
    "  – Tipo de Peça (Mola/Estampado/Aramado/Mão de Obra) e Tipo de Item (Cotação/Corrente).\n\n" +

    "• Regra operacional para itens de “Cotação” (padronização e rastreabilidade):\n" +
    "  – Código do item é forçado para ser o mesmo do Código do Desenho.\n" +
    "  – Código Interno fica somente leitura quando Tipo do Item = Cotação.\n" +
    "  – Código do Desenho torna-se obrigatório nesse cenário.\n\n" +

    "• Rastreabilidade técnica:\n" +
    "  – Upload de arquivo de Desenho.\n" +
    "  – Revisão e Data da Revisão (com normalização em CAIXA ALTA para revisão).\n" +
    "  – Código do Desenho e Código de Amostra (normalizados em CAIXA ALTA).\n\n" +

    "• Características e flags de controle:\n" +
    "  – Automotivo OEM, Requisito Específico do Cliente e Item de Segurança.\n" +
    "  – Status Ativo/Inativo.\n\n" +

    "• Controles de segurança / simbologia:\n" +
    "  – Flags: Possui MP, TS, M1, L1 e L2.\n" +
    "  – Upload de imagens de símbolos correspondentes (MP/TS/M1/L1/L2).\n\n" +

    "• Fontes Homologadas (qualidade de fornecimento):\n" +
    "  – Seleção múltipla de fornecedores qualificados como fontes homologadas do item.\n\n" +

    "Preço de venda com histórico por vigência (ItemPreco):\n" +
    "• Cadastro do preço diretamente no formulário do item (campos auxiliares):\n" +
    "  – Preço de Venda (R$) e Vigência (início).\n" +
    "  – Validação cruzada: não permite informar preço sem vigência e nem vigência sem preço.\n" +
    "• Histórico persistido por (item + vigência):\n" +
    "  – update_or_create evita duplicidade e mantém consistência.\n" +
    "  – Restrição única em banco para (item, vigência).\n" +
    "• Preço vigente:\n" +
    "  – O vigente é determinado pela maior vigência <= data de referência.\n" +
    "  – A listagem carrega o preço vigente em memória para evitar N+1 no template.\n\n" +

    "IPI com conversão segura:\n" +
    "• Campo IPI (%) aceita vírgula ou ponto:\n" +
    "  – Converte “9,75” para decimal corretamente.\n" +
    "  – Valida formato e retorna erro amigável quando inválido.\n\n" +

    "Lista de Itens (operação e indicadores):\n" +
    "• Filtros:\n" +
    "  – Código, Status, Tipo de Item e Tipo de Peça.\n" +
    "• Indicadores no contexto filtrado:\n" +
    "  – Total de itens.\n" +
    "  – Total Automotivo OEM.\n" +
    "  – Total de Itens de Segurança.\n" +
    "  – Total com desenho anexado.\n" +
    "• Paginação e ordenação para navegação diária.\n\n" +

    "Operações completas e governança:\n" +
    "• Cadastrar / Editar / Visualizar / Excluir item com controle por permissão.\n" +
    "• Exclusão protegida:\n" +
    "  – Se houver vínculo protegido, impede exclusão e informa ao usuário.\n\n" +

    "Importação de Itens via Excel (ganho de escala):\n" +
    "• Upload de planilha e leitura por pandas.\n" +
    "• Coluna de cliente aceita:\n" +
    "  – “CNPJ do Cliente” (recomendado) ou “Cliente”.\n" +
    "• Colunas obrigatórias:\n" +
    "  – Código, Descrição, NCM, Lote Mínimo e coluna do cliente.\n" +
    "• Tratativas e normalizações:\n" +
    "  – Código normalizado em CAIXA ALTA e prevenção de duplicidade por código.\n" +
    "  – Localiza cliente por CNPJ (somente dígitos) ou por razão social (match exato).\n" +
    "  – Mapeia Tipo de Item/Tipo de Peça/Status por equivalências.\n" +
    "  – Converte booleanos (sim/true/1/etc.) e datas.\n" +
    "  – IPI inválido é descartado e contabilizado no resumo.\n" +
    "• Resultado ao final:\n" +
    "  – Mensagem consolidada com criados, ignorados (duplicados/sem cliente), linhas inválidas e IPIs descartados.\n\n" +

    "Resultado: um cadastro de itens robusto, padronizado e auditável, com rastreabilidade técnica (desenho/revisão), atributos de segurança, fontes homologadas e governança de preços por vigência, além de importação em lote para acelerar implantação e manutenção do cadastro.",
  evidence: [],
},

{
  title: "Cadastro de Ferramentas (Blocos, Cálculo de Materiais, MO/Serviços e Cotação por Link)",
  description:
    "Gerencia o cadastro completo de ferramentas com rastreabilidade, custo detalhado e fluxo de cotação. A feature combina: cadastro da ferramenta, composição de materiais via Bloco (itens com medidas/peso), cálculo automático por fórmulas (matriz/punção/flange/carros/formadores), mão de obra e serviços terceiros em formsets, e envio de solicitação de cotação por e-mail com link público (token) para preenchimento de valores.\n\n" +

    "Cadastro de Ferramentas (dados principais):\n" +
    "• Identificação e rastreabilidade:\n" +
    "  – Código (único e normalizado em caixa alta).\n" +
    "  – Descrição (padronizada no salvamento).\n" +
    "  – Vida útil (em peças).\n" +
    "  – Tipo (Ferramenta Nova / Adaptação / Dispositivo / Outros).\n" +
    "  – Cliente Proprietário (vinculado ao cadastro de clientes).\n" +
    "  – Upload do desenho em PDF.\n" +
    "  – Observações em editor rico (CKEditor).\n\n" +

    "Materiais por Bloco (composição e rastreabilidade de peso):\n" +
    "• Cadastro de Blocos (BlocoFerramenta):\n" +
    "  – Número do bloco (normalizado em caixa alta).\n" +
    "• Itens do Bloco (ItemBloco):\n" +
    "  – Nº Item, Medidas (ex.: 25,4x94x165), Material (SAE 1020 / VND / SAE D2) e Peso do Aço.\n" +
    "  – Cálculo automático de Volume e Peso Total a partir das medidas (persistido no item).\n" +
    "  – Formset configurado para iniciar com 7 linhas no cadastro (quando bloco ainda não existe).\n" +
    "• Indicadores e filtros de Blocos:\n" +
    "  – Lista de blocos com filtro por número e material.\n" +
    "  – Indicadores: total de blocos, total de itens, peso total geral, totais por material (SAE 1020/VND/SAE D2) e peso médio por bloco.\n\n" +

    "Cálculo de materiais na Ferramenta (fórmulas + bloco):\n" +
    "• Campos técnicos para cálculo (Forma de Cálculo: PADRAO):\n" +
    "  – Passo, Largura da Tira/Perímetro, Nº Matrizes, Nº Punções, Nº Carros, Nº Formadores.\n" +
    "• Pesos calculados automaticamente (properties):\n" +
    "  – kg_matriz (SAE D2), kg_puncao (SAE D2), kg_flange (SAE P20), kg_carros (SAE 1020), kg_formadores (SAE D2).\n" +
    "• Integração com Bloco:\n" +
    "  – Ao salvar ferramenta com bloco, o sistema soma e persiste pesos do bloco para SAE 1020 e VND.\n" +
    "  – SAE D2 do bloco é considerado no fluxo de cotação e agrupamentos.\n\n" +

    "Mão de obra e serviços terceiros (custo detalhado por formsets):\n" +
    "• Mão de Obra (MaoDeObraFerramenta):\n" +
    "  – Tipos: Ferramentaria / Projeto / MO Externa.\n" +
    "  – Horas e Valor/Hora (total por linha = horas x valor/hora).\n" +
    "• Serviços (ServicoFerramenta):\n" +
    "  – Tipos: Eletro erosão, Rolamento, Rolete, Taxa Administrativa, Tratamento térmico.\n" +
    "  – Quantidade e Valor Unitário (total por linha = quantidade x valor unitário).\n\n" +

    "Valor total e status de cotação:\n" +
    "• Valor Total da ferramenta:\n" +
    "  – Soma materiais (peso x valor unitário), serviços e mão de obra.\n" +
    "• Status de Cotação (status_cotacao):\n" +
    "  – OK quando materiais e serviços necessários estão preenchidos.\n" +
    "  – Aguardando Cotação quando faltam valores.\n\n" +

    "Fluxo de cotação por link (token) e e-mail:\n" +
    "• Enviar Cotação:\n" +
    "  – Gera token UUID e registra data/hora de envio.\n" +
    "  – Envia e-mail com resumo (código, descrição, tipo, cliente, desenho, observações) e link público para resposta.\n" +
    "  – No corpo, agrupa materiais por tipo e detalha pesos do bloco e das fórmulas.\n" +
    "• Responder Cotação (formulário público por token):\n" +
    "  – Exibe serviços pendentes (valor unitário em branco).\n" +
    "  – Exibe materiais agrupados (SAE 1020, VND, SAE D2, SAE P20) para preenchimento.\n" +
    "  – Regras de agrupamento:\n" +
    "    – SAE 1020: preenche valor unitário e replica para carros.\n" +
    "    – SAE D2: preenche valor unitário e replica para matriz/punção/formadores.\n" +
    "    – SAE P20: valor unitário para flange.\n" +
    "  – Ao finalizar (sem pendências), direciona para tela de “cotação finalizada”.\n\n" +

    "AJAX e automações operacionais:\n" +
    "• AJAX Materiais do Bloco:\n" +
    "  – Retorna SAE 1020 (Kg), VND (Kg) e SAE D2 (Kg) do bloco selecionado.\n" +
    "• AJAX Presets da Forma de Cálculo:\n" +
    "  – Retorna valores padrão (PADRAO) para campos técnicos.\n" +
    "• AJAX Valor/Hora por Centro de Custo:\n" +
    "  – Busca custo atual por tipo (Ferramentaria/Projeto) considerando vigência.\n\n" +

    "Lista e governança (UI e permissões):\n" +
    "• Lista de Ferramentas:\n" +
    "  – Filtros: código e tipo.\n" +
    "  – Indicadores: total, novas, adaptações e outros.\n" +
    "  – Ações por permissão: visualizar, editar, excluir.\n" +
    "  – Botão “Enviar” aparece quando status está “Aguardando Cotação”.\n" +
    "• Acesso a Blocos pela lista de ferramentas (atalho) conforme permissão.\n\n" +

    "Resultado: um cadastro de ferramentas orientado a custo e rastreabilidade, com composição por bloco, cálculo automático de materiais, detalhamento de MO/serviços e um fluxo de cotação auditável via e-mail e link público por token.",
  evidence: [
    {
      kind: "video",
      src: "/media/comercial/ferramentas-cadastro.mp4",
      title: "Ferramentas — cadastro/edição com cálculos e formsets",
      caption:
        "Cadastro por acordeão, bloco + materiais calculados (matriz/punção/flange/carros/formadores), mão de obra e serviços (inline formsets), e validação geral do formulário.",
    },
    {
      kind: "video",
      src: "/media/comercial/ferramentas-lista.mp4",
      title: "Ferramentas — lista, filtros, indicadores e ações",
      caption:
        "Filtros (código/tipo), indicadores (novas/adaptações/outros/total), status de cotação e ações (visualizar/editar/excluir/enviar cotação) por permissão.",
    },
    {
      kind: "video",
      src: "/media/comercial/ferramentas-cotacao-link.mp4",
      title: "Ferramentas — envio de cotação e resposta via link (token)",
      caption:
        "Envio por e-mail com link público, preenchimento de valores unitários (materiais agrupados e serviços), e finalização quando não há pendências.",
    },
    {
      kind: "video",
      src: "/media/comercial/blocos-ferramentas.mp4",
      title: "Blocos — cadastro, itens, filtros e indicadores",
      caption:
        "Cadastro/edição de bloco com itens (medidas/material/peso), cálculo automático de volume/peso total, filtros por número/material e indicadores (totais e peso médio).",
    },
  ],
},
{
  title: "Centros de Custo (Custo do Setor por Vigência + Histórico de Alterações)",
  description:
    "Mantém o cadastro de Centros de Custo com controle de vigência e histórico automático de alterações de custo, garantindo rastreabilidade de mudanças e leitura correta do custo vigente no período.\n\n" +

    "Cadastro e dados principais:\n" +
    "• Campos do Centro de Custo:\n" +
    "  – Nome do Centro de Custo.\n" +
    "  – Custo do Setor (custo_atual).\n" +
    "  – Início da Vigência (vigencia).\n" +
    "  – Observação em editor rico (CKEditor5).\n\n" +

    "Vigência e leitura do custo:\n" +
    "• Propriedade custo_vigente:\n" +
    "  – Quando a vigência já está ativa (vigencia <= hoje), retorna o custo_atual.\n" +
    "  – Quando a vigência é futura, tenta retornar o custo anterior a partir do histórico (quando houver).\n\n" +

    "Histórico automático de custos:\n" +
    "• Ao editar um Centro de Custo, se o custo_atual for alterado:\n" +
    "  – O sistema cria um registro em HistoricoCustoCentroDeCusto contendo custo_anterior, novo_custo e alterado_em.\n\n" +

    "Lista com filtros, indicadores e modal de histórico:\n" +
    "• Filtro via Offcanvas:\n" +
    "  – Select por “Centros de Custos” (na prática: filtra pelo nome do centro via parâmetro GET 'departamento').\n" +
    "• Indicadores (cards):\n" +
    "  – Vigentes (vigencia <= hoje).\n" +
    "  – Futuros (vigencia > hoje).\n" +
    "  – Total de Centros.\n" +
    "• Tabela:\n" +
    "  – Exibe nome, custo vigente (ou “Sem custo vigente”), data de vigência e ações.\n" +
    "• Modal “Histórico de Custos” por centro:\n" +
    "  – Lista custo anterior, vigência, data da alteração e novo custo.\n" +
    "  – Mostra aviso fixo sobre custos com vigência futura.\n\n" +

    "Paginação e permissões:\n" +
    "• Paginação: 10 registros por página.\n" +
    "• Permissões por operação:\n" +
    "  – view_centrodecusto para listar/visualizar.\n" +
    "  – add_centrodecusto para cadastrar.\n" +
    "  – change_centrodecusto para editar.\n" +
    "• A lista exige também a permissão adicional 'comercial.acesso_comercial' (validação no decorator aplicado na view de listagem).",
  evidence: [],
},

{
  title: "Metas de Faturamento (CRUD + Filtros Offcanvas + KPIs do Período)",
  description:
    "Gerencia metas mensais de faturamento com listagem filtrável e KPIs calculados sobre o recorte ativo, suportando operação simples (cadastrar/editar/excluir) e leitura rápida do total e média das metas.\n\n" +

    "Cadastro de metas:\n" +
    "• Campos:\n" +
    "  – Ano.\n" +
    "  – Mês (select).\n" +
    "  – Valor da Meta (R$).\n\n" +

    "Lista com filtros (Offcanvas) e consistência numérica:\n" +
    "• Filtros disponíveis:\n" +
    "  – Ano (de) e Ano (até).\n" +
    "  – Mês.\n" +
    "  – Valor mínimo e Valor máximo.\n" +
    "• Tratativa de valores:\n" +
    "  – Conversão segura para Decimal, aceitando entrada com vírgula (padrão BR) e removendo separador de milhar quando enviado.\n\n" +

    "KPIs (calculados sobre o queryset filtrado):\n" +
    "• Qtde de metas.\n" +
    "• Soma das metas.\n" +
    "• Média das metas.\n" +
    "• Meta Ano Atual (soma das metas do ano corrente dentro do recorte).\n\n" +

    "Tabela e ações:\n" +
    "• Exibe Ano, Mês (get_mes_display quando disponível) e Valor formatado.\n" +
    "• Ações por permissão:\n" +
    "  – Editar (change_metafaturamento).\n" +
    "  – Excluir (delete_metafaturamento).\n" +
    "• Botão “Nova Meta” condicionado à permissão add_metafaturamento.\n\n" +

    "Paginação e ordenação:\n" +
    "• Ordenação: ano desc e mês asc.\n" +
    "• Paginação: 20 registros por página.\n\n" +

    "Permissões:\n" +
    "• view_metafaturamento para listar.\n" +
    "• add_metafaturamento para cadastrar.\n" +
    "• change_metafaturamento para editar.\n" +
    "• delete_metafaturamento para excluir.",
  evidence: [],
},


{
  title: "Cotações (Abertura, Filtros, Status por Pré-Cálculo, Validade e Alertas)",
  description:
    "Centraliza o fluxo de abertura e acompanhamento de cotações, com numeração amigável, filtros operacionais, indicadores gerenciais e leitura automática do andamento por item (via Pré-Cálculo). O objetivo é permitir que o Comercial enxergue rapidamente: quais cotações estão em aberto, quais itens estão aprovados/reprovados/em análise, qual o total aprovado por valor e se o pacote está completo.\n\n" +

    "Cadastro e estrutura da cotação:\n" +
    "• Numeração automática (mais amigável para operação):\n" +
    "  – Exibe o número como 5000 + id (ex.: id=1 → Nº 5001).\n" +
    "• Campos do cadastro:\n" +
    "  – Data de abertura (timestamp, padrão timezone.now).\n" +
    "  – Tipo: Novo | Atualização.\n" +
    "  – Responsável (usuário) e Cliente.\n" +
    "  – Frete: CIF | FOB.\n" +
    "  – Condição de pagamento e ICMS (%): herdados do cliente, porém editáveis na cotação.\n" +
    "  – Validade da proposta (dias) e campos de envio (data_envio_proposta e data_hora_envio_proposta).\n" +
    "  – Observações em editor rico (CKEditor5), com texto inicial padrão ao criar nova cotação.\n\n" +

    "Auto-preenchimento ao selecionar cliente (AJAX):\n" +
    "• Ao escolher o cliente, o sistema busca via endpoint e preenche:\n" +
    "  – Condição de pagamento.\n" +
    "  – ICMS (%).\n" +
    "• Observação técnica relevante:\n" +
    "  – O template possui modal/JS preparado para aviso de “cliente inadimplente”, porém o endpoint atualmente configurado para cotações retorna apenas cond_pagamento e icms (não retorna inadimplente/url_relatorio), então o modal não dispara com o código atual.\n\n" +

    "Lista de cotações (operação diária):\n" +
    "• Filtros via Offcanvas:\n" +
    "  – Período (Data de abertura De/Até).\n" +
    "  – Tipo (Novo/Atualização).\n" +
    "  – Cliente.\n" +
    "  – Responsável (usuários ativos do Comercial, filtrados por funcionário Ativo e local contendo “Comercial”).\n" +
    "  – Frete (CIF/FOB).\n" +
    "• Indicadores (cards):\n" +
    "  – Total de cotações do tipo Atualização.\n" +
    "  – Total de cotações do tipo Novo.\n" +
    "  – Total geral de cotações.\n" +
    "  – Abertas no mês atual.\n\n" +

    "Status por itens (integração com Pré-Cálculo):\n" +
    "• Status por cotação é calculado a partir dos pré-cálculos vinculados:\n" +
    "  – Contagem por status do item (exibido como badges: Aprovado / Solicitação de Amostras / Em Análise / Não avaliado).\n" +
    "  – Total aprovado por valor: soma preco_selecionado apenas quando o item está aprovado.\n" +
    "  – Completo?: para cada pré-cálculo, verifica desenvolvimento_item.completo; a cotação fica completa somente se todos estiverem completos.\n" +
    "  – Quando não há pré-cálculos: campo “Completo?” retorna “-”.\n\n" +

    "Itens por cotação (modal dedicado):\n" +
    "• A lista possui modal “Itens da Cotação” exibindo:\n" +
    "  – Item, Status, Periodicidade e Qtde estimada (derivados de analise_comercial_item).\n\n" +

    "Validade (controle de prazo):\n" +
    "• Exibição da validade na lista:\n" +
    "  – Mostra dias restantes para vencer, “Vence hoje” ou “Vencida há X dias”.\n" +
    "  – Regra adicional: se todos os itens estiverem reprovados, a validade aparece como “Reprovada”.\n\n" +

    "Alertas (In-App) ao criar cotação do tipo “Novo”:\n" +
    "• Ao salvar uma cotação do tipo Novo, o sistema dispara alertas para destinatários configurados:\n" +
    "  – Usa configurações ativas dos tipos SOLICITACAO_COTACAO_MATERIAL e SOLICITACAO_COTACAO_SERVICO.\n" +
    "  – Se não houver destinatários configurados, envia ao responsável da cotação.\n" +
    "  – Registra título/mensagem, tipo COTACAO_CRIADA, referência e URL de destino.\n\n" +

    "CRUD e governança:\n" +
    "• Operações:\n" +
    "  – Cadastrar / Editar / Excluir / Listar.\n" +
    "• Exclusão protegida:\n" +
    "  – Se houver vínculos protegidos (ex.: Pré-Cálculos ou Ordens), bloqueia e informa.\n" +
    "• Permissões:\n" +
    "  – view_cotacao, add_cotacao, change_cotacao, delete_cotacao.\n" +
    "  – Ação “Pré-Cálculo” na lista aparece somente se o usuário possuir view_cotacao e view_precalculo.\n\n" +

    "Resultado: um controle de cotações orientado à operação diária, com filtros e KPIs, leitura automática do andamento por item (pré-cálculo), total aprovado por valor, validação de completude e alertas quando uma cotação do tipo “Novo” é criada.",
  evidence: [
    {
      kind: "video",
      src: "/media/comercial/cotacoes-lista-e-status.mp4",
      title: "Cotações — lista, filtros, validade e status por item",
      caption:
        "Offcanvas de filtros, indicadores, modal de itens, contagem por status (Aprovado/Em análise/etc.), total aprovado e validação de completude.",
    },
    {
      kind: "video",
      src: "/media/comercial/cotacoes-cadastro.mp4",
      title: "Cotações — cadastro/edição com auto-preenchimento",
      caption:
        "Cadastro com CKEditor, validade da proposta e preenchimento automático de condição de pagamento/ICMS ao selecionar cliente.",
    },
  ],
}



  ],
};
