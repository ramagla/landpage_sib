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
}



  ],
};
