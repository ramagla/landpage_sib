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
        kind: "embed",
        src: "https://www.canva.com/design/DAHBM7tNMqc/-aacnKOEKIm6pdH1LqX_jA/watch?embed",
        canvasUrl: "https://www.canva.com/design/DAHBM7tNMqc/-aacnKOEKIm6pdH1LqX_jA/watch",
        title: "Dashboard de Qualidade de Fornecimento em operação",
        caption:
          "Atalhos (F228/TB001), filtros em offcanvas, KPIs (F045/Serviço Externo/IQG/IQF-IP), velocímetro do IQG e últimos relatórios F045.",
      },
    ],
  },

  {
  title: "Cadastro de Fornecedores — Qualificação (TB001)",
  description:
    "Centraliza o cadastro e a manutenção do fornecedor qualificado (TB001) com foco em rastreabilidade, conformidade e padronização do processo de homologação, certificação e auditoria. A tela foi estruturada para reduzir erro de preenchimento e garantir que os campos críticos estejam consistentes com as regras do SGQ, automatizando status, score e frequências conforme a auditoria/certificação e o tipo de fornecimento.\n\n" +

    "Principais funcionalidades do cadastro:\n\n" +

    "• Fluxo claro por modo (Cadastro/Edição), com cabeçalho contextual e mensagens de sucesso/erro em toast, reduzindo retrabalho e aumentando a confiabilidade do registro.\n\n" +

    "• Organização em seções (accordion) para preenchimento rápido e sem ruído:\n" +
    "  – Campos Automáticos: próximos prazos, classe/frequência, status e score em modo somente leitura (protege a integridade dos cálculos).\n" +
    "  – Dados Gerais: nome do fornecedor, produto/serviço, certificação, status do fornecedor, data de homologação e lead time.\n" +
    "  – Auditoria: data, tipo (F154/CQI), nota (%), vencimento da certificação e avaliação de risco.\n" +
    "  – Especialista de Segurança: nome, cargo e contato do especialista responsável.\n" +
    "  – Anexos: inclusão do certificado do fornecedor com controle de tamanho e formato.\n\n" +

    "• Regras inteligentes para evitar inconsistência e padronizar o SGQ:\n" +
    "  – Produto “Calibração” com certificação “NBR-ISO 17025 RBC”: oculta seções e campos não aplicáveis e força qualificação (reduz campo indevido e acelera cadastro).\n" +
    "  – “Material do Cliente” e “Prestador de Serviços”: ajusta automaticamente o status e limpa campos de auditoria/risco quando não são mandatórios.\n" +
    "  – CQIs (CQI-9/11/12): padroniza frequência e status conforme regra operacional, com cálculo automático de próximas datas.\n\n" +

    "• Cálculo e preenchimento automático de prazos:\n" +
    "  – Próxima auditoria e próxima avaliação de risco são calculadas a partir da data e do resultado/regra aplicável.\n" +
    "  – A avaliação de risco acompanha o vencimento quando aplicável, garantindo consistência entre certificação e risco.\n\n" +

    "• Qualidade de dados e governança:\n" +
    "  – Validação dinâmica por campo (feedback visual) e validação de nota (0–100, aceitando vírgula/ponto), reduzindo erro de digitação.\n" +
    "  – Controle do anexo de certificado: limite de tamanho (ex.: 5MB) e renomeação padronizada do arquivo para rastreabilidade.\n" +
    "  – Em edição, suporte a substituição/remoção do certificado com limpeza do arquivo físico, mantendo o cadastro consistente.\n\n" +

    "Resultado: um cadastro de fornecedores robusto e guiado por regras, com automações de status/prazos/score e controle de evidências (certificados), reduzindo falhas de registro e fortalecendo a rastreabilidade e a conformidade na gestão do fornecimento.",
  evidence: [
    {
      kind: "embed",
      src: "https://www.canva.com/design/DAHBM9b3IbM/PtJTSlzTFTdp9NYEGZFSNQ/watch?embed",
      canvasUrl: "https://www.canva.com/design/DAHBM9b3IbM/PtJTSlzTFTdp9NYEGZFSNQ/watch",
      title: "Cadastro de Fornecedor Qualificado (TB001) em operação",
      caption:
        "Form em accordion, campos automáticos (status/score/prazos), regras condicionais (Calibração + RBC / Material do Cliente), validações e anexo de certificado.",
    },
  ],
},

{
  title: "Cadastro de Normas Técnicas — Referência oficial (F045)",
  description:
    "Concentra o cadastro e a manutenção de Normas Técnicas (com PDF, composição química e faixas de tração) que servem como referência oficial para validações e consultas do processo de inspeção. O fluxo foi desenhado para garantir padronização, reduzir erro de digitação e manter rastreabilidade: a norma vira um “guia mestre” reutilizável, com dados estruturados para análises consistentes e auditorias.\n\n" +

    "Principais funcionalidades do cadastro:\n\n" +

    "• Cabeçalho da norma (identificação e governança):\n" +
    "  – Nome da norma (ex.: NBR/ASTM) como chave de leitura nas telas e relatórios.\n" +
    "  – Vínculo de norma (tração/equivalência) para relacionamento e rastreabilidade entre referências.\n" +
    "  – Anexo do PDF oficial com suporte a remoção controlada em edição (aplica ao salvar), preservando integridade do cadastro.\n\n" +

    "• Composição química por Tipo ABNT (estrutura para validação):\n" +
    "  – Cadastro por linhas (uma linha por Tipo ABNT), com campos min/max para elementos (C, Mn, Si, P, S, Cr, Ni, Cu, Al).\n" +
    "  – Campos opcionais: quando a norma não define limites, o campo fica em branco (evita “falsos alarmes” e distorções).\n" +
    "  – Formset com inclusão e exclusão de linhas sem quebrar o fluxo (linhas extras podem permanecer vazias).\n\n" +

    "• Faixas de resistência à tração (controle mecânico e conversão):\n" +
    "  – Definição por Tipo ABNT e faixa de bitola (mín/max), resistência mín/máx e dureza.\n" +
    "  – Alternância de entrada em MPa (conversão visual), com garantia de salvamento em kgf/mm² para manter padrão interno.\n" +
    "  – Reversão automática para kgf/mm² antes do submit, evitando inconsistência na persistência.\n\n" +

    "• Qualidade do dado e UX operacional:\n" +
    "  – Layout em seções com instruções objetivas (o que preencher e o que deixar em branco) para reduzir retrabalho.\n" +
    "  – Tabelas editáveis com ação rápida de adicionar/excluir linhas e validações por campo.\n" +
    "  – Tooltips e microtextos para orientar preenchimento correto (especialmente em composição e tração).\n\n" +

    "• Ciclo de vida e controle (lista + aprovação):\n" +
    "  – Listagem com filtros (nome, possui tração, possui composição), KPIs de cadastro e ações (ver/editar/baixar/excluir).\n" +
    "  – Fluxo de aprovação: marca a norma como aprovada, registra usuário e data/hora da aprovação para auditoria.\n\n" +

    "Resultado: normas técnicas padronizadas e rastreáveis (PDF + dados estruturados), reduzindo divergências de interpretação, fortalecendo auditorias e aumentando a confiabilidade das validações e análises do processo.",
  evidence: [
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/cadastro-norma-tecnica.mp4",
      title: "Cadastro de Norma Técnica em operação",
      caption:
        "Cabeçalho com PDF/vínculo, composição química por Tipo ABNT (formset), faixas de tração com conversão MPa ⇄ kgf/mm², e fluxo de salvar/editar.",
    },
  ],
},

{
  title: "Cadastro de Matéria-Prima — Catálogo técnico (MP)",
  description:
    "Centraliza o cadastro e a manutenção do Catálogo de Matérias-Primas, Tratamentos e Embalagens, padronizando descrição, localização e atributos técnicos para garantir rastreabilidade e consistência do processo (recebimento, inspeção e qualificação). O fluxo foi desenhado para reduzir erro de digitação, orientar o preenchimento por seções e aplicar regras automáticas conforme o tipo de item.\n\n" +

    "Principais funcionalidades do cadastro:\n\n" +

    "• Estrutura guiada por seções (accordion) para preenchimento rápido e sem ruído:\n" +
    "  – Identificação: Tipo (Matéria-Prima/Tratamento/Embalagem), Código e Descrição.\n" +
    "  – Dimensões: Bitola Ø, Tolerância, Largura e Tolerância de Largura (com orientação clara para itens tipo Fita).\n" +
    "  – Normas e Propriedades: vínculo com Norma e Tipo ABNT/Classe, além do Tipo de Material.\n" +
    "  – Localização: posição física padronizada no estoque.\n\n" +

    "• Regras inteligentes por Tipo (governança do dado):\n" +
    "  – Ao selecionar “Tratamento” ou “Embalagem”, o sistema oculta seções não aplicáveis, desabilita campos e exibe alerta informativo, evitando cadastro indevido.\n" +
    "  – No backend, o form limpa automaticamente os campos técnicos e remove vínculo de norma quando o tipo não exige norma (evita inconsistência e garante integridade).\n\n" +

    "• Vínculo com Norma + Tipo ABNT/Classe (dinâmico):\n" +
    "  – Norma com Select2 para busca e seleção rápida.\n" +
    "  – Tipo ABNT/Classe carregado dinamicamente conforme a norma selecionada, reduzindo erro e garantindo consistência com a referência técnica.\n" +
    "  – Em edição, reidrata o Tipo ABNT salvo após recarregar as opções.\n\n" +

    "• Padronização automática e qualidade do cadastro (no save):\n" +
    "  – Localização sempre em maiúsculo.\n" +
    "  – Descrição com normas reconhecidas em maiúsculo (ex.: DIN, NBR, SAE, EN) e capitalização inteligente do restante.\n" +
    "  – Classe, Tipo ABNT e Tipo de Material com capitalização padronizada.\n" +
    "  – Extração automática de bitola a partir da descrição quando possível (ex.: ‘Ø1,20’), acelerando cadastro.\n\n" +

    "• Listagem operacional com filtros e indicadores:\n" +
    "  – Filtros em offcanvas com Select2 (código, descrição, norma, tipo material, tipo ABNT e tipo de cadastro).\n" +
    "  – Indicadores (cards) para leitura rápida: total de registros, Carbono, Inox e Outros.\n" +
    "  – Ações por permissões: visualizar, editar e excluir, mantendo governança por perfil.\n\n" +

    "• Importação por Excel (ganho de escala):\n" +
    "  – Upload validado (.xls/.xlsx) com feedback de progresso.\n" +
    "  – Validação de colunas obrigatórias e tratamento de valores vazios.\n" +
    "  – Criação/atualização por código (update_or_create), com normalização do tipo ‘Tratamento’ (limpa campos e desvincula norma/Tipo ABNT).\n" +
    "  – Mensagens de sucesso/alerta com contagem de importados/atualizados e apontamento de erros por linha.\n\n" +

    "• Visualização/Impressão (evidência):\n" +
    "  – Tela de visualização com layout A4 e botão de imprimir, removendo elementos da interface no modo print.\n\n" +

    "Resultado: um catálogo de MP robusto e padronizado, com vínculo técnico (Norma/ABNT), regras por tipo (MP/Tratamento/Embalagem), filtros e importação em massa — reduzindo falhas de cadastro, acelerando consultas e fortalecendo rastreabilidade e conformidade.",
  evidence: [
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/cadastro-materia-prima.mp4",
      title: "Cadastro de Matéria-Prima (Catálogo) em operação",
      caption:
        "Form em accordion, regras para Tratamento/Embalagem, Select2 (Norma/Tipo ABNT dinâmico), listagem com filtros offcanvas e importação via Excel.",
    },
  ],
},

{
  title: "TB050 — Relação de Matérias-Primas (F045, Etiquetas e Certificados)",
  description:
    "Centraliza o controle de recebimento de matéria-prima por relatório, garantindo rastreabilidade ponta a ponta desde a entrada (TB050) até a inspeção formal (F045), com gestão de rolos, evidências, impressão de etiquetas com QR Code, anexos de certificados e decisão de status automatizada para reduzir risco de fornecimento e proteger o fluxo produtivo.\n\n" +

    "Principais funcionalidades da TB050:\n\n" +

    "• Lista operacional com filtros em offcanvas:\n" +
    "  – Período (data inicial/final), status, nº do rolo, nº do relatório, nº do certificado.\n" +
    "  – Filtros por Fornecedor e Matéria-Prima com Select2 para agilidade em bases grandes.\n\n" +

    "• Indicadores (KPIs) imediatos para priorização:\n" +
    "  – Total de registros, Aprovados, Reprovados e Atrasados (dias), favorecendo tomada de decisão rápida.\n\n" +

    "• Fluxo completo de cadastro e manutenção:\n" +
    "  – Novo/Editar/Visualizar TB050 com consistência visual e foco em auditoria.\n" +
    "  – Status inicial controlado (ex.: “Aguardando F045”) e atualização automática conforme resultado do F045.\n\n" +

    "• Importação via Excel (ganho de produtividade e padronização):\n" +
    "  – Upload de planilha para criar relações e rolos em lote.\n" +
    "  – Tratamento de erros com relatório de inconsistências para correção controlada.\n\n" +

    "• Gestão de rolos (rastreamento físico do lote):\n" +
    "  – Modal por registro para visualizar rolos, editar peso e adicionar novos.\n" +
    "  – Geração automática do nº do rolo quando aplicável, evitando duplicidade e mantendo histórico coerente.\n\n" +

    "• Geração do Relatório F045 integrada à TB050:\n" +
    "  – Modal “Gerar F045” com seleção do relatório e validação de norma aprovada.\n" +
    "  – Formulário com campos do certificado (tração, dureza etc.) e observações.\n" +
    "  – Composição química dinâmica por elemento (campos *_user) com validação por faixa quando não estiver em modo condicional.\n" +
    "  – Avaliação interna baseada nos rolos (bitola/espessura/largura, tração, dureza e itens qualitativos), consolidando laudos.\n\n" +

    "• Decisão de status e rastreabilidade de evidência:\n" +
    "  – Status consolidado (Aprovado / Reprovado / Aprovado Condicionalmente) conforme laudos e regras.\n" +
    "  – Registro de assinatura (nome, CN/email e data) e vinculação de assinatura eletrônica com hash + QR de validação.\n\n" +

    "• Etiquetas e certificados na prática (chão de fábrica):\n" +
    "  – Seleção de rolos para impressão de etiquetas com QR Code por rolo.\n" +
    "  – Definição de quantidade de etiquetas por rolo e geração de PDF.\n" +
    "  – Download do certificado anexado diretamente no registro TB050 quando existir.\n\n" +

    "Resultado: um fluxo único e robusto para recebimento e inspeção de matéria-prima, com trilha auditável (TB050 → rolos → F045 → impressão/etiquetas → assinatura/validação), reduzindo retrabalho, aumentando conformidade e elevando previsibilidade do fornecimento.",
  evidence: [
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/tb050-lista-filtros.mp4",
      title: "TB050 — Lista, filtros e KPIs em operação",
      caption:
        "Offcanvas de filtros (período/status/rolo/relatório/certificado), indicadores (total/aprovados/reprovados/atrasados) e ações principais (novo/importar/gerar F045).",
    },
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/tb050-rolos-etiquetas.mp4",
      title: "TB050 — Gestão de rolos e impressão de etiquetas",
      caption:
        "Modal de rolos (editar peso/adicionar), seleção de rolos e geração de etiquetas com QR Code em PDF.",
    },
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/f045-geracao-assinatura.mp4",
      title: "F045 — Geração, validações e assinatura eletrônica",
      caption:
        "Campos do certificado + composição química dinâmica, avaliação por rolo, status consolidado, assinatura eletrônica com hash e QR de validação e visualização PDF.",
    },
  ],
},

{
  title: "Serviços Externos — Controle + Inspeção (Trat. Superficial)",
  description:
    "Centraliza o controle de envios e retornos de serviços externos (ex.: tratamento superficial), garantindo rastreabilidade operacional e evidência formal de inspeção. O fluxo integra: cadastro do envio (pedido/OP/NF/fornecedor/código BM), controle de retornos diários (entregas parciais), cálculo automático de saldo, previsão e atraso, índice de pontualidade (IP) e a inspeção final com geração de relatório em PDF e assinatura eletrônica validável.\n\n" +

    "Principais funcionalidades do módulo:\n\n" +

    "• Lista operacional com filtros em offcanvas (decisão rápida):\n" +
    "  – Filtros por Pedido, Código BM, Fornecedor, Status (OK/Atenção Saldo) e período de envio.\n" +
    "  – Select2 nos filtros para busca rápida em bases grandes.\n\n" +

    "• Indicadores (KPIs) de leitura imediata:\n" +
    "  – Total Enviados, Total OK, Pendentes (com saldo) e Com Atraso (atraso_em_dias > 0).\n" +
    "  – Colunas de acompanhamento: saldo, status, status da inspeção, atraso, IP, datas de envio/retorno.\n\n" +

    "• Cadastro/Edição do Serviço Externo (com campos automáticos):\n" +
    "  – Seleção guiada de fornecedor (somente qualificados de “Trat. Superficial” e status Ativo/Em Homologação).\n" +
    "  – Código BM filtrado exclusivamente para itens do tipo “Tratamento”, evitando erro de vínculo.\n" +
    "  – Lead Time puxado automaticamente do fornecedor e cálculo automático de Previsão de Entrega.\n" +
    "  – Campo de Data Negociada (opcional) para substituir a previsão e medir atraso real conforme acordo.\n\n" +

    "• Controle de Retornos Diários (entregas parciais com rastreio):\n" +
    "  – Formset para registrar múltiplas entregas (data + quantidade) com inclusão e exclusão controladas.\n" +
    "  – Atualização automática da Data de Retorno com base na última entrega registrada.\n" +
    "  – Cálculo do saldo (Quantidade Enviada – Total Retornado) e status:\n" +
    "    – “Atenção Saldo” quando ainda há saldo a receber.\n" +
    "    – “OK” quando o total retornado fecha o enviado.\n\n" +

    "• Atraso e IP (pontualidade) calculados por regra:\n" +
    "  – Atraso em dias considera Data Negociada (se existir) ou a Previsão calculada pelo Lead Time.\n" +
    "  – IP é gerado por faixas de atraso (demérito), padronizando avaliação de pontualidade conforme critério do processo.\n\n" +

    "• Inspeção de Serviço Externo (qualidade + evidência):\n" +
    "  – Criação/edição da inspeção vinculada 1:1 ao serviço.\n" +
    "  – Registro do nº do certificado + anexo do certificado (PDF) para rastreabilidade.\n" +
    "  – Checklist objetivo por critério (OK/NOK): inspeção visual, espessura da camada e salt spray.\n" +
    "  – Aprovação condicional com campo de observações obrigatório quando ativada.\n" +
    "  – Status geral calculado automaticamente: Aprovado / Reprovado / Aprovado Condicionalmente.\n\n" +

    "• Relatório em PDF com assinatura eletrônica e validação:\n" +
    "  – Geração de relatório consolidado com dados do serviço, retornos, resultados e observações.\n" +
    "  – Assinatura eletrônica com hash e QR Code para validação do documento, reforçando integridade e auditoria.\n\n" +

    "• Importação via Excel (escala e padronização):\n" +
    "  – Importa serviços e retornos em lote, validando fornecedor/código BM/quantidade e datas.\n" +
    "  – Log de erros por linha em arquivo de saída e mensagens de retorno para controle do usuário.\n\n" +

    "Resultado: controle completo de serviços externos com rastreabilidade de entrega, medição objetiva de pontualidade (IP), inspeção formal com evidências (certificado + PDF assinado) e histórico auditável, reduzindo risco de falha no fornecimento e aumentando previsibilidade operacional.",
  evidence: [
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/servico-externo-lista-kpis.mp4",
      title: "Serviços Externos — Lista, filtros e KPIs",
      caption:
        "Offcanvas de filtros, indicadores (enviados/OK/pendentes/atrasados) e ações (novo serviço, nova inspeção, importar Excel).",
    },
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/servico-externo-cadastro-retornos.mp4",
      title: "Serviço Externo — Cadastro e retornos diários",
      caption:
        "Form em accordion, lead time automático, previsão/atraso/IP, e controle de retornos (formset) com atualização de saldo e status.",
    },
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/servico-externo-inspecao-pdf.mp4",
      title: "Inspeção de Serviço Externo — Checklist, certificado e PDF assinado",
      caption:
        "Checklist (OK/NOK), aprovação condicional com observações, anexo de certificado e relatório em PDF com assinatura eletrônica e QR de validação.",
    },
  ],
},

{
  title: "Relatórios e Indicadores — IQG, IQF, Inspeções e 8.2 (Compras x Faturamento)",
  description:
    "Consolida relatórios formais e indicadores estratégicos do processo de fornecimento, transformando dados operacionais (inspeções, atrasos, status e faturamento/compras) em painéis prontos para auditoria e tomada de decisão. O conjunto foi estruturado com foco em: filtro por período/ano/semestre, visualização objetiva (gráficos + tabelas), análise automática por meta, impressão padronizada em A4 e registro de plano de ação.\n\n" +

    "Principais relatórios e indicadores:\n\n" +

    "• Relatório de Avaliação Semestral do Fornecedor (F228 — IQG):\n" +
    "  – Filtros por ano, semestre, fornecedor e tipo (matéria-prima ou serviço).\n" +
    "  – Cálculo do IQG com ponderação (IQF 50% + IP 30% + IQS 20%) e classificação automática (A/B/C) com mensagem orientada à ação.\n" +
    "  – Gráfico em velocímetro (IQG) para leitura executiva e seção de “Classificação e Ações Recomendadas”.\n" +
    "  – Conteúdo pronto para impressão com rodapé institucional e padronização do formulário.\n\n" +

    "• Relatório IQF anual (Indicador por mês com meta):\n" +
    "  – Filtro por ano.\n" +
    "  – Gráfico por mês + tabela com IQF (%) e média geral, destacando meses fora da meta.\n" +
    "  – Geração automática de comentários quando houver desvio e bloco de “Plano de Ação / Melhoria”.\n\n" +

    "• Relatório Analítico de Inspeções 100% (visão gerencial):\n" +
    "  – Top 10 fornecedores com mais falhas (priorização de ação).\n" +
    "  – Taxa de reprovação por fornecedor (%).\n" +
    "  – Tempo médio por inspeção (min) para gestão de capacidade.\n" +
    "  – Evolução temporal de falhas (tendência).\n" +
    "  – Identificação de inspeções críticas (alto volume + alto NOK) com lista objetiva para investigação.\n\n" +

    "• Indicador 8.2 — Compras x Faturamento (SGQ):\n" +
    "  – Filtro por ano e apuração trimestral.\n" +
    "  – Cálculo protegido contra divisão por zero e gráfico com linha de meta (≤ 30%).\n" +
    "  – Média geral do ano com sinalização visual (OK/atenção) e comentários automáticos por trimestre.\n" +
    "  – Estrutura completa: objetivo, meta, análise, forma de cálculo e plano de ação, pronta para auditoria.\n\n" +

    "Padrões de governança e auditoria aplicados:\n\n" +
    "• Impressão padronizada em A4 (com ocultação automática de filtros/elementos de tela).\n" +
    "• Cabeçalho institucional com objetivo, meta e responsável.\n" +
    "• Análise de dados + plano de ação no próprio relatório, evitando relatórios “mudos” e fortalecendo evidência.\n\n" +

    "Resultado: um pacote único de indicadores e relatórios formais, com cálculo consistente e leitura rápida por meta, permitindo priorização de ações corretivas, acompanhamento executivo e evidência imediata para auditorias e gestão do fornecimento.",
  evidence: [
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/relatorios-f228-iqg.mp4",
      title: "Relatório F228 — Avaliação Semestral (IQG) em operação",
      caption:
        "Filtro por ano/semestre/fornecedor/tipo, cálculo IQG com classificação A/B/C, velocímetro e impressão padronizada.",
    },
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/relatorio-iqf-anual.mp4",
      title: "Indicador IQF anual — gráfico, média e plano de ação",
      caption:
        "Filtro por ano, IQF por mês com meta, comentários automáticos e bloco de plano de ação.",
    },
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/relatorio-inspecao-analitico.mp4",
      title: "Relatório Analítico — Inspeções 100% e falhas",
      caption:
        "Top 10 falhas, taxa de reprovação, tempo médio, evolução temporal e inspeções críticas.",
    },
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/indicador-8-2.mp4",
      title: "Indicador 8.2 — Compras x Faturamento",
      caption:
        "Apuração trimestral, média geral, meta ≤ 30%, comentários automáticos e impressão completa com forma de cálculo.",
    },
  ],
},

{
  title: "F223 — Controle / Acompanhamento (Inspeção 100%)",
  description:
    "Organiza o acompanhamento das inspeções 100% com foco em rastreabilidade, priorização e resposta rápida a falhas (ex.: “Falha de Banho”). O F223 consolida, em uma única tela, indicadores operacionais, filtros por fornecedor/período/OP/código e uma listagem detalhada por inspeção, permitindo gestão diária do processo, evidência para o SGQ e suporte direto à comunicação com áreas internas e fornecedores.\n\n" +

    "Principais funcionalidades do F223:\n\n" +

    "• Ações principais no topo (fluxo do dia a dia):\n" +
    "  – Nova Inspeção (com controle por permissão).\n" +
    "  – Verificar Estoque (atalho para checagem de devolução/estoque relacionado).\n" +
    "  – Importar Excel (cadastro em lote com governança por permissão).\n" +
    "  – Filtros em offcanvas para reduzir ruído e acelerar busca.\n\n" +

    "• Indicadores (KPIs) para decisão imediata:\n" +
    "  – Total de Inspeções.\n" +
    "  – Aprovadas.\n" +
    "  – Reprovadas.\n" +
    "  – Total de Horas Gastas (visão de esforço/capacidade).\n\n" +

    "• Filtros em offcanvas (consulta rápida e precisa):\n" +
    "  – Fornecedor (Select2).\n" +
    "  – Data início / data fim.\n" +
    "  – Nº OP.\n" +
    "  – Código do item (Código BrasMol).\n\n" +

    "• Listagem analítica por inspeção (rastreabilidade completa):\n" +
    "  – Data, fornecedor, OP, código, hora início/fim e duração.\n" +
    "  – Quantidade total e quantidade Não OK.\n" +
    "  – Status com destaque visual: OK (badge verde) ou falha (ex.: “FALHA DE BANHO” em badge vermelho).\n" +
    "  – Responsável (nome formatado para leitura rápida).\n" +
    "  – Observações em modal (consulta sem sair da tela, preservando contexto).\n\n" +

    "• Comunicação rápida (copiar tabela para e-mail):\n" +
    "  – Botão para copiar um recorte da tabela com formatação HTML (cabeçalho, zebra e destaque de NOK), facilitando envio imediato do status sem retrabalho.\n\n" +

    "• Governança e consistência:\n" +
    "  – Ações de editar/excluir protegidas por permissões.\n" +
    "  – Paginação padronizada e estado vazio com mensagem clara quando não há registros.\n\n" +

    "Resultado: um controle operacional robusto do F223 para Inspeção 100%, com indicadores e filtros para priorização, leitura analítica por registro, evidência rastreável e apoio direto à comunicação rápida com as áreas e fornecedores.",
  evidence: [
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/f223-lista-kpis-filtros.mp4",
      title: "F223 — Lista, KPIs e filtros em operação",
      caption:
        "KPIs (total/aprovadas/reprovadas/horas), filtros offcanvas (fornecedor/período/OP/código) e navegação paginada.",
    },
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/f223-observacoes-status.mp4",
      title: "F223 — Status, duração e observações",
      caption:
        "Status (OK/Falha), cálculo de duração por inspeção, modal de observações e ações por permissão.",
    },
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/f223-copiar-email.mp4",
      title: "F223 — Copiar tabela formatada para e-mail",
      caption:
        "Cópia em HTML com estilo (cabeçalho/zebra/destaque de NOK) para colar direto no e-mail.",
    },
  ],
},

{
  title: "Inventários — Contagem por QR Code, Divergências, Consolidação e Exportação",
  description:
    "Estrutura o processo de inventário com rastreabilidade e governança, desde a criação do inventário (por data de corte e tipo) até a consolidação final e exportação para o ERP. O fluxo foi desenhado para uso operacional (coleta por QR Code), controle de divergências e trilha auditável: contagens registradas por ordem, confronto automático, resolução por 3ª contagem ou ajuste manual justificado e exportação com histórico.\n\n" +

    "Principais funcionalidades do inventário:\n\n" +

    "• Criação e gestão do ciclo (por data de corte e tipo):\n" +
    "  – Cadastro do inventário com título, descrição, data de corte e tipo (MP / PA).\n" +
    "  – Status controlado por etapas: Aberto → 1ª Contagem → 2ª Contagem → Conferência/Confronto → Consolidado → Exportado.\n\n" +

    "• Lista operacional com filtros e KPIs:\n" +
    "  – Filtros por título, status e intervalo de data de corte.\n" +
    "  – Cards de acompanhamento: total, abertos, em contagem, em conferência e exportados.\n\n" +

    "• Detalhe com visão por item + pendências:\n" +
    "  – Paginação configurável e visão rápida de C1/C2/C3 por item.\n" +
    "  – Indicadores de pendência: itens sem 1ª contagem e itens sem 2ª contagem.\n" +
    "  – Contador de divergências abertas e botões de ação liberados conforme status.\n\n" +

    "• Contagens (1ª / 2ª / 3ª) com leitura por QR Code:\n" +
    "  – Registro por ordem (C1, C2, C3) com usuário, data/hora e origem (QR).\n" +
    "  – Leitura tolerante ao padrão de QR do recebimento (ex.: CODIGO;ETIQUETA;PESO;LOCAL;FORNECEDOR), aceitando vírgula/ponto.\n" +
    "  – Resolução automática do item:\n" +
    "    – Se vier ETIQUETA no QR: ela vira a identidade do rolo/lote (cria item novo se não existir).\n" +
    "    – Se não vier ETIQUETA: busca por CÓDIGO e cria se necessário.\n\n" +

    "• Regras diferentes para MP x PA (evita distorção de contagem):\n" +
    "  – MP (Matéria-prima): etiqueta não pode repetir no mesmo inventário (unicidade condicional).\n" +
    "  – PA (Produto acabado): repetição é permitida e o sistema soma leituras na mesma contagem (ideal para múltiplas leituras de peças iguais).\n\n" +

    "• Confronto e divergências (governança e rastreabilidade):\n" +
    "  – Geração automática de divergências quando:\n" +
    "    – faltar C1 ou C2, ou\n" +
    "    – C1 ≠ C2.\n" +
    "  – Ao existir C3 (terceira contagem), a divergência é considerada resolvida.\n" +
    "  – Tela dedicada para listar somente pendências reais e acelerar a resolução.\n\n" +

    "• Ajuste manual com justificativa (controle e auditoria):\n" +
    "  – Opção de resolver via 3ª contagem normal ou “AJUSTE_MANUAL”.\n" +
    "  – Ajuste manual exige justificativa e registra responsável e data/hora, mantendo trilha auditável.\n\n" +

    "• Consolidação com confirmação e bloqueio por divergência:\n" +
    "  – Tela de confirmação exibe total de itens, contagens realizadas e divergências.\n" +
    "  – Bloqueia consolidação se houver divergências abertas.\n" +
    "  – Regra de quantidade final por item:\n" +
    "    – Se houver C3: usa C3.\n" +
    "    – Se C1 = C2: usa valor.\n" +
    "    – Se C1 e C2 diferentes: usa média.\n" +
    "    – Se só houver C1: usa C1; senão, zera.\n\n" +

    "• Exportação para ERP com histórico:\n" +
    "  – Geração de CSV (CODIGO_ITEM;ETIQUETA;QTD_CONSOLIDADA;LOCAL;FORNECEDOR;DATA_CORTE).\n" +
    "  – Registra a exportação em histórico (arquivo salvo + usuário + data), e atualiza status para “Exportado”.\n" +
    "  – Permissões específicas: consolidar inventário e exportar inventário.\n\n" +

    "Resultado: inventário confiável e auditável, com coleta rápida por QR Code, tratamento de divergências com resolução controlada, consolidação segura e exportação padronizada para o ERP — reduzindo erro humano, retrabalho e risco de inconsistência no estoque.",
  evidence: [
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/inventario-lista-kpis.mp4",
      title: "Inventários — Lista, filtros e KPIs",
      caption:
        "Filtros por status/data de corte, cards de acompanhamento e acesso ao detalhe por inventário.",
    },
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/inventario-contagem-qrcode.mp4",
      title: "Inventário — Contagem por QR Code (C1/C2/C3)",
      caption:
        "Leitura por QR (código/etiqueta/peso/local/fornecedor), regras MP x PA e registro automático de contagens.",
    },
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/inventario-divergencias-ajuste.mp4",
      title: "Inventário — Divergências, 3ª contagem e ajuste manual",
      caption:
        "Confronto, divergências por falta/diferença, resolução por C3 ou ajuste manual com justificativa.",
    },
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/inventario-consolidar-exportar.mp4",
      title: "Inventário — Consolidação e exportação para ERP",
      caption:
        "Confirmação, bloqueio por divergência, cálculo de quantidade consolidada e exportação CSV com histórico.",
    },
  ],
},

{
  title: "Estoque Intermediário — WIP rastreável (QR, movimentações e saldo por etapa)",
  description:
    "Controla o estoque intermediário (WIP) entre processos, garantindo rastreabilidade por etiqueta/lote/OP, visibilidade de saldo por etapa e disciplina de movimentação. O objetivo é eliminar “estoque invisível” no chão de fábrica, padronizar entradas/saídas e permitir decisão rápida sobre disponibilidade, pendências e riscos de atraso.\n\n" +

    "Principais funcionalidades do estoque intermediário:\n\n" +

    "• Registro de entrada no intermediário (origem rastreável):\n" +
    "  – Entrada por leitura de QR Code/etiqueta (quando aplicável) ou seleção assistida (código/descrição).\n" +
    "  – Vínculo com OP/ordem/etapa de origem (ex.: saída de processo anterior, retorno de serviço externo, ou movimentação interna).\n" +
    "  – Registro de quantidade/peso, data/hora e responsável, formando trilha de auditoria.\n\n" +

    "• Estrutura por localização e etapa (organização física):\n" +
    "  – Controle por “local” (rua/prateleira/box) e por etapa (ex.: aguardando processo, aguardando inspeção, liberado).\n" +
    "  – Padronização de local e alertas para itens sem localização definida.\n\n" +

    "• Saída / consumo controlado (evita baixa errada):\n" +
    "  – Baixa vinculada à OP/etapa de destino (consumo real) com validação de saldo.\n" +
    "  – Suporte a saídas parciais (retira parte, mantém saldo) sem perder rastreabilidade.\n" +
    "  – Regra de bloqueio quando item está com status restrito (ex.: em inspeção, reprovado, quarentena).\n\n" +

    "• Inventário e conferência do intermediário (controle do WIP):\n" +
    "  – Conferência rápida por leitura de etiqueta/QR (batimento por local) e apontamento de divergências.\n" +
    "  – Relatório de itens parados (idade do estoque) para priorização e redução de lead time.\n\n" +

    "• Indicadores e alertas (gestão diária):\n" +
    "  – Total de itens no intermediário, saldo por etapa e saldo por local.\n" +
    "  – Itens com maior tempo parados (aging) e itens com risco de atraso por OP.\n" +
    "  – Pendências: itens sem OP, sem local, com saldo negativo (tentativa de baixa), ou com divergência.\n\n" +

    "• Rastreabilidade e auditoria:\n" +
    "  – Histórico completo de movimentações por item (entrada/transferência/saída), com usuário e timestamp.\n" +
    "  – Consulta rápida por etiqueta, OP, código, fornecedor/origem e local.\n\n" +

    "Resultado: um estoque intermediário governado e rastreável, com movimentações padronizadas, saldo confiável por etapa/local e indicadores para atacar paradas, reduzir perdas e aumentar previsibilidade do fluxo produtivo.",
  evidence: [
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/estoque-intermediario-visao-geral.mp4",
      title: "Estoque Intermediário — Visão geral, saldo e filtros",
      caption:
        "Lista com filtros (OP/etapa/local/etiqueta), KPIs de saldo e alertas de itens parados/divergências.",
    },
    {
      kind: "video",
      src: "/media/qualidade-fornecimento/estoque-intermediario-entrada-saida.mp4",
      title: "Estoque Intermediário — Entrada/saída com QR e vínculo por OP",
      caption:
        "Entrada por QR/etiqueta, baixa parcial por OP e histórico de movimentações por item.",
    },
  ],
}






],

};
