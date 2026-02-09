import type { Module } from "../types";

export const qualidadeFornecimentoModule: Module = {
  id: "qualidade-fornecimento",
  name: "Qualidade de Fornecimento",
  icon: "🚚",
  summary:
    "Gestão da qualidade de fornecedores com rastreabilidade, indicadores de desempenho, auditorias e planos de ação.",
  features: [
  {
    title: "Dashboard — Qualidade de Fornecimento",
    description:
      "Apresenta uma visão consolidada, analítica e orientada à ação sobre a performance e a conformidade dos fornecedores, centralizando indicadores críticos do processo de fornecimento e apoiando decisões rápidas para evitar riscos à produção e ao SGQ. O dashboard organiza, em um único painel, os principais KPIs semestrais, evidências recentes e atalhos para relatórios formais e qualificação de fornecedores.\n\n" +

      "Principais funcionalidades do dashboard:\n\n" +

      "• Banner institucional com foco operacional, orientando priorização diária e reforçando disciplina de registro e evidência no fluxo de fornecimento.\n\n" +

      "• Acessos rápidos no topo para relatórios e qualificação:\n" +
      "  – Relatório de Avaliação de Fornecedores (atalho direto com identificação F228).\n" +
      "  – Qualificação de Fornecedores (TB001) para gestão do cadastro qualificado.\n" +
      "  – Botão de filtros em offcanvas para refinar período e foco da análise.\n\n" +

      "• Indicadores (KPIs) de leitura imediata:\n" +
      "  – Relatórios F045 (volume consolidado) para priorização de pendências e liberação de fornecimento.\n" +
      "  – Serviço Externo (total consolidado) com orientação explícita para manter laudos anexados e rastreáveis.\n" +
      "  – IQG Semestral em percentual (com meta sugerida ≥ 90%), destacando necessidade de ação nos gargalos.\n" +
      "  – IQF / IP Semestral em percentuais para visão de consistência do fornecimento e performance.\n\n" +

      "• Visual analítico do desempenho semestral (IQG) em formato de velocímetro, com interpretação por faixas (ideal/atenção/ação imediata), acelerando leitura executiva.\n\n" +

      "• Bloco de evidências recentes: tabela de “Últimos Relatórios F045” com orientação objetiva para atuar em reprovados e condicionais, fortalecendo rastreabilidade e acompanhamento contínuo.\n\n" +

      "Resultado: um painel único para gestão de fornecedores, com KPIs claros, evidências recentes e atalhos para relatórios formais e qualificação, reduzindo risco de fornecimento e aumentando previsibilidade operacional.",
    evidence: [
      {
        kind: "video",
        src: "/media/qualidade-fornecimento/dashboard-qualidade-fornecimento.mp4",
        title: "Dashboard de Qualidade de Fornecimento em operação",
        caption:
          "Atalhos (F228/TB001), filtros em offcanvas, KPIs (F045/Serviço Externo/IQG/IQF-IP), velocímetro do IQG e últimos relatórios F045.",
      },
    ],
  },
],

};
