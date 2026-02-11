import type { Module } from "../types";

export const metrologiaModule: Module = {
  id: "metrologia",
  icon: "📏",
  name: "Metrologia (Calibração)",
  summary:
    "Controle de instrumentos e dispositivos de medição, calibrações e rastreabilidade metrológica, com foco em prevenção de não conformidades e suporte a auditorias do SGQ.",

  features: [
    {
      title: "Dashboard de Metrologia",
      description:
        "Apresenta uma visão consolidada, operacional e orientada à prevenção de riscos do controle metrológico, centralizando indicadores críticos de calibração e evidências de acompanhamento para suporte à tomada de decisão e auditorias do SGQ. O dashboard organiza, em um único painel, a situação de instrumentos e dispositivos, destacando vencimentos, prioridades e movimentações recentes, reduzindo risco de não conformidade e evitando paradas por falta de controle.\n\n" +

        "Principais funcionalidades do dashboard:\n\n" +

        "• Indicadores operacionais imediatos, incluindo total de ativos no filtro, quantidade de itens vencidos, itens com vencimento dentro da janela configurável (30/60/90 dias) e total de calibrações realizadas no mês.\n\n" +

        "• Alertas de calibração com priorização visual por status (Vencido, Vence hoje e Próximo), exibindo última calibração, próxima calibração e ordenação automática por data, permitindo ação rápida no que é mais crítico.\n\n" +

        "• Filtros gerenciais em painel lateral (offcanvas), com controle por Status (Ativo/Inativo/Todos) e Janela de Alerta (em dias), garantindo análise por contexto sem perder produtividade.\n\n" +

        "• Listas de atualização recente, apresentando Equipamentos recentes e Dispositivos recentes com data de atualização, reforçando rastreabilidade e acompanhamento contínuo das movimentações do módulo.\n\n" +

        "• Experiência de uso otimizada para operação: tooltips orientativos, botões de ação rápida para cronogramas e função de copiar código do equipamento diretamente da tabela de alertas (reduz erro e acelera consulta).\n\n" +

        "• Integração direta com o planejamento: acessos rápidos para Cronograma de Equipamentos e Cronograma de Dispositivos, conectando alerta → ação → execução.\n\n" +

        "• Guia rápido no próprio painel, com recomendações práticas de priorização e disciplina de registro para fechamento do ciclo mensal com evidência (base para auditoria).\n\n" +

        "Todo o conteúdo apresentado é derivado de registros rastreáveis do sistema, considerando regra de vencimento aplicada à frequência de calibração e lógica de alerta por janela configurável, garantindo consistência operacional, transparência e suporte objetivo a auditorias.",
      evidence: [
        {
          kind: "video",
          src: "/media/metrologia/dashboard-metrologia.mp4",
          title: "Dashboard de Metrologia em operação",
          caption:
            "KPIs, alertas de calibração (vencidos/próximos), filtros por status/janela, atalhos de cronograma e listas de itens recentes.",
        },
      ],
    },

     {
    title: "Cadastro de Instrumentos (Tabela Técnica)",
    description:
      "Estrutura o cadastro técnico completo dos instrumentos de medição, garantindo padronização dos dados, redução de erros e rastreabilidade de alterações. O formulário é organizado em seções (acordeão) para facilitar o preenchimento e manter consistência das informações críticas para calibração, auditoria e uso operacional.\n\n" +

      "Principais recursos do cadastro:\n\n" +

      "🔹 Identificação e dados básicos\n" +
      "• Registro de Código do Equipamento e Nome do Equipamento, com padronização automática (código em maiúsculo e nome em formato título).\n" +
      "• Capacidade mínima e máxima de medição, resolução e unidade de medida, garantindo base técnica consistente para controle metrológico.\n\n" +

      "🔹 Tolerância e cálculo de Exatidão Requerida (ER)\n" +
      "• Suporte a dois modos de cálculo de ER: por faixa (% tolerância) ou por tolerância total mínima.\n" +
      "• Exibição da Exatidão Requerida em campo somente leitura, reduzindo erro de interpretação e aumentando confiabilidade do registro.\n\n" +

      "🔹 Controle de calibração e governança\n" +
      "• Registro da frequência de calibração (em meses) e data da última calibração, alimentando o dashboard e os relatórios de vencimento.\n\n" +

      "🔹 Identificação física e evidência\n" +
      "• Número de série, modelo, fabricante e upload de foto do equipamento, fortalecendo rastreabilidade visual e identificação em campo.\n\n" +

      "🔹 Responsável e localização\n" +
      "• Associação de responsável (colaborador), proprietário, localização e status (ativo/inativo), facilitando controle de posse e gestão do parque metrológico.\n\n" +

      "🔹 Rastreabilidade de alterações\n" +
      "• Registro automático do resumo da última alteração (campo de auditoria), listando quais campos foram modificados e seus valores anterior/atual.\n\n" +

      "Resultado: um cadastro técnico auditável, padronizado e preparado para sustentar planejamento de calibração, rastreabilidade e conformidade do SGQ.",
    evidence: [
      {
        kind: "video",
        src: "/media/metrologia/cadastro-instrumentos.mp4",
        title: "Cadastro de Instrumentos (Tabela Técnica) em operação",
        caption:
          "Formulário em acordeão, cálculo de ER, dados técnicos, identificação, foto, responsável/localização e registro de alteração.",
      },
    ],
  },

  {
    title: "Cadastro de Dispositivos (com Cotas e Desenho Anexo)",
    description:
      "Centraliza o cadastro de dispositivos de medição (gabaritos/dispositivos de controle), garantindo padronização, rastreabilidade e suporte direto ao controle de calibração e aferição. O cadastro foi desenhado para ser rápido (3–5 minutos), reduzindo retrabalho e fortalecendo evidências para auditorias.\n\n" +

      "Principais recursos do cadastro:\n\n" +

      "🔹 Identificação e vínculo com cliente\n" +
      "• Registro de código único do dispositivo, quantidade e descrição, com padronização automática (código em maiúsculo e descrição em formato título).\n" +
      "• Vínculo com cliente por seleção (quando disponível), mantendo compatibilidade com cliente legado (texto) quando necessário.\n\n" +

      "🔹 Dados de calibração e armazenagem\n" +
      "• Registro de estudo realizado (quando aplicável), data da última calibração e frequência de calibração (meses).\n" +
      "• Local de armazenagem e unidade de medida padrão das cotas, facilitando uso operacional e consistência.\n\n" +

      "🔹 Anexos (evidência técnica)\n" +
      "• Upload do desenho do dispositivo (arquivo anexado), fortalecendo identificação e consulta técnica rápida.\n\n" +

      "🔹 Cadastro de cotas (formset)\n" +
      "• Cadastro estruturado de cotas por dispositivo (número, valor mínimo e valor máximo), com suporte a inclusão/remoção de linhas e validações no salvamento.\n" +
      "• As cotas ficam vinculadas ao dispositivo e servem como base para rastreabilidade de aferições e evidências de controle.\n\n" +

      "🔹 Rastreabilidade de alterações\n" +
      "• Registro automático do resumo da última alteração no dispositivo, listando mudanças relevantes (descrição, local, frequência, quantidade, última calibração, unidade e desenho anexado).\n\n" +

      "Resultado: um cadastro completo e rastreável de dispositivos, com cotas e evidência técnica anexada, pronto para sustentar calibração, aferições e auditorias.",
    evidence: [
      {
        kind: "video",
        src: "/media/metrologia/cadastro-dispositivos.mp4",
        title: "Cadastro de Dispositivos em operação",
        caption:
          "Cadastro rápido, vínculo com cliente, anexo de desenho e gestão de cotas (mínimo/máximo) com validações e rastreabilidade.",
      },
    ],
  },


  {
  title: "Calibração de Instrumentos — Cálculo automático (L = E + I), status e certificado",
  description:
    "Gerencia o registro de calibrações de instrumentos (Tabela Técnica) com cálculo automático do resultado e rastreabilidade documental. O fluxo garante consistência técnica ao calcular automaticamente L = (Erro do Equipamento + Incerteza) e definir o status (Aprovado/Reprovado) com base na Exatidão Requerida do instrumento, além de manter evidências por certificado anexado e governança de acesso por permissões.\n\n" +

    "Principais funcionalidades:\n\n" +

    "🔹 Cadastro/Edição de calibração com evidência\n" +
    "• Registro de calibração vinculado ao instrumento (Código do Equipamento), com seleção padronizada.\n" +
    "• Campo de Exatidão Requerida (ER) exibido como somente leitura no formulário, reforçando consistência técnica.\n" +
    "• Laboratório vinculado a fornecedor qualificado, limitado a fornecedores ativos do serviço “Calibração”.\n" +
    "• Upload de certificado (PDF/DOC/DOCX) com limite de 5 MB e suporte a remoção segura do anexo durante edição.\n\n" +

    "🔹 Regra técnica aplicada automaticamente (fonte de verdade no backend)\n" +
    "• Cálculo automático de L = (E + I) no salvamento.\n" +
    "• Definição automática do status: Aprovado quando L ≤ Exatidão Requerida do instrumento; caso contrário, Reprovado.\n" +
    "• Quando Aprovado e com data de calibração preenchida, o sistema atualiza automaticamente a data da última calibração do instrumento.\n\n" +

    "🔹 Lista gerencial com KPIs, filtros e rastreabilidade\n" +
    "• Listagem paginada com indicadores consolidados: Total de Calibrações, Aprovadas e Reprovadas.\n" +
    "• Filtros estruturados incluindo código, proprietário, laboratório e tipo de avaliação.\n" +
    "• Exibição clara de E, I, L, Exatidão Requerida, status e data da calibração.\n" +
    "• Ações controladas por permissão: editar, excluir e download direto do certificado quando existir.\n\n" +

    "Resultado: controle metrológico auditável, com regra técnica aplicada automaticamente, evidência documental anexada e consistência entre registro de calibração e cadastro do instrumento.",
  evidence: [
    {
      kind: "video",
      src: "/media/metrologia/instrumentos-fluxo.mp4",
      title: "Calibração de instrumentos (fluxo completo)",
      caption:
        "Cadastro/edição, cálculo automático (L = E + I), status aprovado/reprovado, KPIs da lista e download do certificado.",
    },
  ],
},
{
  title: "Calibração de Dispositivos — Aferição por cotas, status consolidado e anexo",
  description:
    "Controla calibrações de dispositivos com aferição estruturada por cotas, consolidando automaticamente o status final (Aprovado/Reprovado) com base nas aferições registradas. O fluxo integra consulta dinâmica de dados do dispositivo (código da peça, desenho e cotas), permite anexar evidências e mantém consistência com o cadastro ao atualizar automaticamente a data da última calibração do dispositivo.\n\n" +

    "Principais funcionalidades:\n\n" +

    "🔹 Cadastro/Edição com dados dinâmicos do dispositivo\n" +
    "• Seleção do dispositivo e carregamento dinâmico das cotas cadastradas, exibindo mínimo, máximo e (quando em edição) valores aferidos previamente.\n" +
    "• Exibição do código da peça derivado do código do dispositivo e acesso ao desenho anexado quando disponível.\n\n" +

    "🔹 Registro de aferições por cota (fonte de evidência)\n" +
    "• Registro de valores aferidos por cota via processamento dos campos enviados no POST.\n" +
    "• Criação/atualização automática das aferições vinculadas à calibração e à cota correspondente.\n\n" +

    "🔹 Status consolidado e atualização automática\n" +
    "• Consolidação automática do status final do dispositivo: Aprovado somente quando todas as aferições estiverem aprovadas; caso contrário, Reprovado.\n" +
    "• Atualização automática da data da última calibração do dispositivo com base na data da aferição (mantém consistência com cronogramas e dashboard).\n\n" +

    "🔹 Evidência por anexo + remoção segura\n" +
    "• Upload de anexo com limite de 5 MB e suporte a remoção segura durante edição.\n\n" +

    "🔹 Lista gerencial com KPIs e filtros\n" +
    "• Indicadores consolidados: Total de Calibrações, Aprovadas e Reprovadas.\n" +
    "• Filtros por status e período (data início/fim).\n\n" +

    "Resultado: calibração de dispositivos governada por cotas, com status consolidado automaticamente, evidências anexadas e rastreabilidade pronta para auditoria.",
  evidence: [
    {
      kind: "video",
      src: "/media/metrologia/dispositivos-fluxo.mp4",
      title: "Calibração de dispositivos (fluxo completo)",
      caption:
        "Carregamento de cotas, registro de aferições, status consolidado, anexo, filtros/KPIs e rastreabilidade por dispositivo.",
    },
  ],
},
{
  title: "Cronogramas de Calibração (Equipamentos e Dispositivos)",
  description:
    "Consolida e padroniza os cronogramas oficiais de calibração do módulo de Metrologia, oferecendo uma visão rastreável e pronta para auditoria dos prazos, situação e evidências de calibração, com relatórios específicos para Equipamentos e para Dispositivos.\n\n" +

    "Principais funcionalidades dos cronogramas:\n\n" +

    "• Cronograma de Calibração dos Equipamentos (relatório dedicado), com filtros operacionais por Ano, Código, Grandeza e Tipo de Avaliação, além de indicação de atualização automática e impressão padronizada do relatório (CR001 - Rev25).\n\n" +

    "• Montagem inteligente dos dados do cronograma de equipamentos no backend, incluindo: data da última calibração, cálculo de próxima calibração, frequência, laboratório, número do certificado, link do certificado anexado quando disponível, erro do equipamento, incerteza, parâmetro L, exatidão requerida e status da calibração (quando houver registro associado).\n\n" +

    "• Cronograma de Calibração dos Dispositivos (relatório dedicado), com filtros por Ano, Cliente, Código e Estudo, com indicação de atualização automática e impressão padronizada do relatório (CR006 - Rev33).\n\n" +

    "• Consolidação operacional no cronograma de dispositivos com informações de movimentação integradas: última saída registrada, data de retorno (última movimentação), setor associado, situação e observações, garantindo leitura gerencial e rastreabilidade do fluxo do dispositivo.\n\n" +

    "• Cálculo automático da próxima calibração para dispositivos com base na data da última calibração e frequência (em meses), utilizando fechamento no fim do mês (EOM) para padronização de prazos.\n\n" +

    "• Interface orientada a auditoria: cabeçalhos formais, filtros objetivos e botão de impressão integrado, reduzindo retrabalho e aumentando consistência documental.\n\n" +

    "Todo o conteúdo exibido nos cronogramas é derivado de registros estruturados e filtros controlados, reforçando rastreabilidade e evidência objetiva para auditorias e gestão de conformidade.",
  evidence: [
    {
      kind: "video",
      src: "/media/metrologia/cronogramas/cronogramas-calibracao.mp4",
      title: "Cronogramas de calibração em operação (equipamentos e dispositivos)",
      caption:
        "Filtros, geração do relatório (CR001/CR006), cálculo de próxima calibração, visão consolidada e impressão padronizada.",
    },
  ],
  
},




{
  title: "Relatórios de Metrologia — calibração, rastreabilidade e formulários (F062 / F198)",
  description:
    "Centraliza relatórios operacionais e evidências formais do módulo de Metrologia, com foco em calibração, rastreabilidade e apoio a auditorias. Os relatórios consolidam informações do cadastro técnico dos instrumentos e permitem gerar documentos padronizados para rotina e conformidade.\n\n" +

    "Principais relatórios disponíveis:\n\n" +

    "• Relatório de Equipamentos a Calibrar (visão por prazo)\n" +
    "  – Lista separada de equipamentos com calibração vencida e equipamentos próximos do vencimento.\n" +
    "  – Cálculo da próxima calibração com regra de fechamento no fim do mês (EOM), com janela padrão de 30 dias para os próximos.\n" +
    "  – Saída pronta para impressão no template do relatório, facilitando tratativa e evidência interna.\n\n" +

    "• Relatório de Equipamentos por Colaborador (responsável)\n" +
    "  – Seleção do colaborador ativo e listagem dos equipamentos sob sua responsabilidade.\n" +
    "  – Permite selecionar múltiplos equipamentos e gerar documento oficial para coleta/devolução e rastreabilidade.\n" +
    "  – Impressão inclui rodapé do formulário F198 Rev.01, padronizando a evidência do processo.\n\n" +

    "• Solicitação de Orçamento para Calibração — F062\n" +
    "  – Tela de seleção de equipamentos (multi-seleção) + campos obrigatórios: Solicitado por, Aprovado por, Prazo para realização e Descrição do serviço.\n" +
    "  – Geração do formulário de solicitação com lista completa dos equipamentos selecionados (código, série, descrição, fabricante, capacidade, resolução e responsável).\n" +
    "  – Impressão com rodapé padronizado do formulário F062 Rev.01, garantindo governança e evidência do pedido de calibração.\n\n" +

    "Todos os relatórios são controlados por permissões específicas do módulo, garantindo segregação de acesso e rastreabilidade operacional.",
  evidence: [
    {
      kind: "video",
      src: "/media/metrologia/relatorios/relatorios-metrologia.mp4",
      title: "Relatórios de Metrologia em operação",
      caption:
        "Relatório de equipamentos a calibrar (vencidos/próximos), seleção por colaborador (F198) e solicitação de orçamento para calibração (F062) com impressão.",
    },
  ],
},

{
  title: "Análise Crítica Metrológica — geração automática em reprovação e rastreabilidade",
  description:
    "Centraliza o tratamento formal de não conformidades metrológicas quando uma calibração/aferição é reprovada, garantindo registro técnico, rastreabilidade e evidência para auditorias. A Análise Crítica é criada automaticamente pelo sistema sempre que uma calibração de instrumento ou uma calibração de dispositivo for marcada como Reprovada, evitando perda de tratativa e padronizando o registro do desvio.\n\n" +

    "Principais funcionalidades:\n\n" +

    "🔹 Geração automática (Instrumentos)\n" +
    "• Ao salvar uma calibração de instrumento com status “Reprovado”, o sistema cria automaticamente uma Análise Crítica vinculada ao equipamento.\n" +
    "• O registro inclui dados do equipamento (descrição/modelo), data da calibração reprovada e um texto técnico com o motivo, incluindo valores calculados e comparação com a Exatidão Requerida.\n\n" +

    "🔹 Geração automática (Dispositivos)\n" +
    "• Ao salvar uma calibração de dispositivo com status “Reprovado”, o sistema cria automaticamente uma Análise Crítica vinculada ao dispositivo.\n" +
    "• O texto da não conformidade é composto com base nas aferições: lista objetiva das cotas reprovadas, mostrando o valor encontrado e a faixa esperada (mínimo ~ máximo), quando disponível.\n\n" +

    "🔹 Controle de duplicidade (análise em aberto)\n" +
    "• O sistema impede a criação de análises duplicadas para o mesmo item enquanto existir uma Análise Crítica pendente (sem assinatura registrada), mantendo governança e evitando retrabalho.\n\n" +

    "🔹 Gestão completa via módulo (CRUD)\n" +
    "• Rotina completa para listar, cadastrar, visualizar, editar e excluir análises críticas, permitindo tratativa controlada e histórico rastreável.\n\n" +

    "Resultado: sempre que houver reprovação metrológica, o sistema abre automaticamente a tratativa com evidência técnica padronizada, fortalecendo disciplina do SGQ, rastreabilidade e preparação para auditorias.",
  evidence: [
    {
      kind: "video",
      src: "/media/metrologia/analise-critica/analise-critica-metrologia.mp4",
      title: "Análise Crítica Metrológica em operação",
      caption:
        "Geração automática em reprovação (instrumentos/dispositivos), composição do texto técnico com valores e cotas reprovadas, e gestão de análises críticas (listar/visualizar/editar).",
    },
  ],
},


  ],




  
};
