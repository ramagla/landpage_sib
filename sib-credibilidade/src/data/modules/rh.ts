import type { Module } from "../types";

export const rhModule: Module = {
  id: "rh",
  icon: "👥",
  name: "Recursos Humanos (RH)",
  summary:
    "Gestão completa do ciclo de vida do colaborador, com foco em rastreabilidade, conformidade e padronização, alinhado aos requisitos da IATF 16949.",

  features: [
    {
  title: "Dashboard de RH",
  description:
    "Apresenta uma visão consolidada, analítica e operacional dos principais indicadores de Recursos Humanos, centralizando informações críticas para gestão, planejamento e conformidade do SGQ. O dashboard reúne, em tempo real, dados estruturados provenientes do cadastro de colaboradores, avaliações, treinamentos, comunicados e eventos institucionais, permitindo acompanhamento contínuo do quadro funcional e suporte objetivo a auditorias conforme a IATF 16949.\n\nPrincipais funcionalidades do dashboard:\n\n• Indicadores operacionais imediatos, incluindo total de colaboradores ativos, quantidade de avaliações pendentes, treinamentos agendados e classificação consolidada de desempenho (Ótimo, Bom, Regular e Ruim).\n\n• Listagem dinâmica de colaboradores com avaliações de desempenho abaixo do esperado, permitindo priorização de feedback, planos de desenvolvimento e ações corretivas.\n\n• Visualização de aniversariantes do mês, com base no cadastro oficial de RH, apoiando ações institucionais e comunicação interna.\n\n• Exibição dos comunicados internos mais recentes, com acesso direto ao conteúdo completo e integração ao fluxo de leitura controlada.\n\n• Painel analítico avançado com gráficos interativos de distribuição por faixa etária, escolaridade, gênero, ano de contratação, turnover e tipos de função.\n\n• Comparativo percentual entre funções administrativas e operacionais, com faixas de referência para análise de equilíbrio organizacional.\n\n• Visualização institucional da CIPA e da Brigada de Incêndio, com suporte à impressão oficial.\n\n• Integração com calendário corporativo, incluindo eventos, feriados e exportação ICS.\n\n• Acesso rápido a modais de detalhamento, como avaliações pendentes e treinamentos agendados.\n\nTodo o conteúdo apresentado é derivado de registros rastreáveis do sistema, respeitando perfis de acesso, LGPD e requisitos de auditoria.",
  evidence: [
    {
      kind: "video",
      src: "/media/rh/dashboard-rh.mp4",
      title: "Dashboard de RH em operação",
      caption:
        "Visão geral dos indicadores, painéis analíticos, CIPA, Brigada e acessos rápidos do módulo de Recursos Humanos.",
    },
  ],
},

    {
  title: "Cadastro e Gestão de Colaboradores",
  description:
    "Centraliza o cadastro completo e a gestão do ciclo de vida do colaborador, reunindo informações pessoais, funcionais, organizacionais e legais em um único repositório estruturado, garantindo rastreabilidade, integração entre módulos e suporte a auditorias do SGQ conforme a IATF 16949.\n\n" +

    "🔹 Cadastro Estruturado do Colaborador\n" +
    "• Registro de dados pessoais, funcionais e organizacionais\n" +
    "• Controle de status do colaborador (Ativo, Inativo, Em edição)\n" +
    "• Definição de tipo de colaborador (Operacional ou Administrativo)\n" +
    "• Vínculo com local de trabalho, departamento, cargo inicial e cargo atual\n\n" +

    "🔹 Gestão de Cargos e Histórico\n" +
    "• Atualização controlada de cargo atual\n" +
    "• Registro automático de histórico de cargos, com data de alteração\n" +
    "• Rastreabilidade completa da evolução funcional do colaborador\n\n" +

    "🔹 Organograma e Estrutura Hierárquica\n" +
    "• Integração direta com o organograma organizacional\n" +
    "• Visualização hierárquica de subordinados e responsáveis\n" +
    "• Busca por nome, filtros avançados e expansão por níveis\n" +
    "• Exportação do organograma em PNG e SVG\n\n" +

    "🔹 Prontuário e Gestão Documental\n" +
    "• Cadastro de foto do colaborador para identificação visual\n" +
    "• Anexação de currículo e documentos obrigatórios\n" +
    "• Controle de certificados e formulários legais (ex.: F146)\n\n" +

    "🔹 Integrações Automáticas\n" +
    "• Integração com treinamentos e atualização automática de escolaridade\n" +
    "• Integração com CIPA e Brigada de Incêndio, com controle de vigência\n" +
    "• Vínculo com banco de horas, ocorrências e registros operacionais\n\n" +

    "🔹 Usuário do Sistema e Acessos\n" +
    "• Criação ou vinculação de usuário do sistema ao colaborador\n" +
    "• Definição de permissões e status do usuário\n" +
    "• Geração automática de credenciais iniciais e exigência de troca de senha\n" +
    "• Geração de mensagem de acesso pronta para envio via WhatsApp\n\n" +

    "Todas as informações são validadas por regras de integridade, mantêm histórico rastreável de alterações e servem como evidência objetiva para auditorias, análises gerenciais e melhoria contínua do sistema.",
  evidence: [
    {
      kind: "image",
      src: "/media/rh/cadastro-funcionarios.png",
      title: "Cadastro de Funcionários",
      caption: "Cadastro completo do colaborador, gestão de status, cargos, documentos e integrações com o RH.",
    },
  ],
},

   {
  title: "Integração de Colaboradores (Onboarding)",
  description:
    "Organiza e registra de forma estruturada o processo de integração do colaborador recém-admitido, garantindo padronização, rastreabilidade e evidências objetivas do processo de admissão, em conformidade com os requisitos do SGQ e da IATF 16949.\n\n" +

    "🔹 Registro da Integração\n" +
    "• Criação do registro de integração vinculada a um colaborador ativo\n" +
    "• Definição da data oficial da integração\n" +
    "• Associação automática ao departamento e cargo do colaborador\n\n" +

    "🔹 Checklist de Integração – RH\n" +
    "• Orientação sobre direitos e deveres do colaborador\n" +
    "• Apresentação ao superior hierárquico\n" +
    "• Explicação dos benefícios concedidos pela empresa\n" +
    "• Apresentação da descrição de cargo\n" +
    "• Comunicação da Política da Qualidade\n" +
    "• Registro do tamanho de calçado para fornecimento de EPIs\n\n" +

    "🔹 Checklist de Integração – Departamento\n" +
    "• Apresentação aos colegas de trabalho\n" +
    "• Apresentação do local de trabalho e instalações\n" +
    "• Visita à fábrica\n" +
    "• Orientação sobre regras de segurança do setor\n" +
    "• Entrega de EPIs, ferramentas de trabalho e C.E.C.\n" +
    "• Instruções operacionais pertinentes à função\n\n" +

    "🔹 Treinamentos Requeridos\n" +
    "• Identificação da necessidade de treinamentos adicionais\n" +
    "• Campo específico para descrição dos treinamentos requeridos\n" +
    "• Integração direta com o módulo de Treinamentos\n" +
    "• Geração de evidência para atendimento aos requisitos de competência\n\n" +

    "🔹 Comunicação e Integrações Institucionais\n" +
    "• Controle de inclusão do colaborador em grupo institucional (WhatsApp)\n" +
    "• Registro formal da comunicação inicial com o colaborador\n\n" +

    "🔹 Documentos e Impressão\n" +
    "• Geração de checklist padrão para preenchimento manual\n" +
    "• Geração do documento oficial de integração para impressão\n" +
    "• Upload e controle do PDF da integração\n\n" +

    "🔹 Assinaturas e Rastreabilidade\n" +
    "• Fluxo de assinaturas eletrônicas por papel (Colaborador, Gestor e RH)\n" +
    "• Registro de data, hora e hash de integridade\n" +
    "• Controle de status da integração (Pendente ou Assinada)\n\n" +

    "🔹 Listagem, Filtros e Indicadores\n" +
    "• Listagem completa das integrações realizadas\n" +
    "• Filtros por colaborador, departamento, necessidade de treinamento e grupo WhatsApp\n" +
    "• Indicadores automáticos de integrações realizadas, pendências e percentuais\n\n" +

    "Todo o processo de integração permanece armazenado de forma rastreável, servindo como evidência objetiva para auditorias, análises gerenciais e melhoria contínua do sistema.",
  evidence: [
    {
      kind: "image",
      src: "/media/rh/onboarding.png",
      title: "Onboarding de Funcionários",
      caption: "Checklist de integração do RH e do departamento, controle de treinamentos, documentos e assinaturas.",
    },
  ],
},

   {
  title: "Comunicados Internos e Leitura Controlada",
  description:
    "Centraliza a comunicação institucional com workflow completo, evidências de aprovação/publicação e suporte a auditorias, garantindo rastreabilidade do ciclo de vida do comunicado dentro do SGQ.\n\n" +

    "🔹 Cadastro e Conteúdo\n" +
    "• Registro do comunicado com data, assunto, tipo e departamento responsável\n" +
    "• Conteúdo com editor formatado (suporte a links e imagens)\n" +
    "• Upload opcional de lista de assinaturas como evidência formal\n\n" +

    "🔹 Workflow e Governança\n" +
    "• Status controlados: rascunho, publicado, reprovado e arquivado\n" +
    "• Agendamento de publicação por data/hora (publicação automática)\n" +
    "• Opção de exigir aprovação antes de publicar, com aprovador definido\n\n" +

    "🔹 Aprovação, Reprovação e Notificações\n" +
    "• Aprovação por usuário designado, com registro de data/hora e responsável\n" +
    "• Reprovação com registro do motivo/considerações e responsável\n" +
    "• Envio automático de e-mails ao criador informando aprovação/reprovação\n" +
    "• Envio de e-mail ao aprovador solicitando aprovação, com prévia do comunicado em PNG quando disponível\n\n" +

    "🔹 Evidências, Prévia e Impressão\n" +
    "• Tela de confirmação de aprovação com prévia oficial do comunicado\n" +
    "• Geração de versão de impressão com layout padronizado\n" +
    "• Exportação do comunicado em PNG (download) e suporte a impressão\n\n" +

    "🔹 Consulta, Filtros e Indicadores\n" +
    "• Listagem com filtros por tipo, departamento, período e status (incluindo agendados)\n" +
    "• Cards de indicadores: total de comunicados e consolidação por tipo\n" +
    "• Visualização do motivo da reprovação diretamente na listagem (modal)\n\n" +

    "Observação: o sistema mantém rastreabilidade do workflow e evidências por lista de assinaturas anexada. Caso você deseje leitura controlada por usuário (quem leu/quando leu), é necessário incluir o registro específico de leitura no backend.",
  evidence: [
    {
      kind: "video",
      src: "/media/rh/comunicados-demo.mp4",
      title: "Comunicados Internos em operação",
      caption: "Cadastro, filtros, workflow, aprovação/reprovação, impressão e exportação PNG.",
    },
    {
      kind: "image",
      src: "/media/rh/comunicados-lista.png",
      title: "Lista de Comunicados",
      caption: "Filtros por tipo/departamento/status, indicadores e ações do workflow.",
    },
    {
      kind: "image",
      src: "/media/rh/comunicado-aprovacao.png",
      title: "Confirmação de Aprovação",
      caption: "Prévia oficial do comunicado e ações de aprovar/reprovar com registro e notificação.",
    },
  ],
},

{
  title: "Cadastro e Gestão de Cargos (Descrição de Cargos / DC)",
  description:
    "Centraliza a gestão de Descrições de Cargo (DC), garantindo padronização de responsabilidades, requisitos e rastreabilidade de revisões, com governança por status, assinatura eletrônica por papel (Elaborador/Aprovador) e evidências objetivas para auditorias do SGQ e requisitos de competência.\n\n" +

    "🔹 Estrutura do Cadastro de Cargo (DC)\n" +
    "• Cadastro do nome do cargo e número da DC com normalização automática (formatação e preenchimento)\n" +
    "• Vinculação do cargo ao departamento e ao nível hierárquico (Alta Direção até Operacional)\n" +
    "• Controle de status do cargo (Ativo ou Obsoleto), com filtros e indicadores na listagem\n" +
    "• Upload do arquivo descritivo do cargo (PDF ou DOCX) com validação de tamanho (até 5 MB)\n\n" +

    "🔹 Requisitos, Responsabilidades e Formação (Editor Rico)\n" +
    "• Descrição obrigatória de Responsabilidades e Autoridade (Atividades Primárias)\n" +
    "• Descrição obrigatória de Responsabilidades e Autoridade (Atividades Secundárias)\n" +
    "• Definição de educação mínima, experiência mínima e treinamentos internos e externos\n" +
    "• Campos textuais com editor formatado e validações para impedir conteúdo vazio\n\n" +

    "🔹 Elaboração e Aprovação (Governança)\n" +
    "• Definição de Elaborador e Aprovador vinculados a colaboradores ativos\n" +
    "• Regras de aprovação por nível hierárquico permitido (Diretoria/Gerências/Coordenação/Supervisão)\n" +
    "• Registro de datas de elaboração e aprovação no próprio documento\n\n" +

    "🔹 Assinatura Eletrônica por Papel e Evidências\n" +
    "• Assinatura eletrônica separada por papel (Elaborador e Aprovador) vinculada ao cargo\n" +
    "• Controle de permissão: somente o usuário designado pode assinar no papel correspondente\n" +
    "• Registro de data/hora, hash de assinatura e QR Code para validação\n" +
    "• Impressão do documento com evidência e marca d’água de rascunho até concluir as assinaturas\n" +
    "• Status consolidado do cargo: Em elaboração, Aguardando aprovação, Válido ou Obsoleto conforme revisões x assinaturas\n\n" +

    "🔹 Revisões e Histórico Rastreável\n" +
    "• Registro de revisões com número, data e descrição detalhada da mudança\n" +
    "• Histórico completo de revisões com visualização do conteúdo em modal\n" +
    "• Nova revisão força revalidação do cargo e reenvio de convites de assinatura\n\n" +

    "🔹 Listagem, Filtros e Indicadores\n" +
    "• Listagem com filtros por departamento, cargo, status do cargo e status de assinaturas\n" +
    "• Anotação automática da última revisão (número e data) sem perda de performance\n" +
    "• Indicadores gerenciais: total de cargos, departamento mais frequente, última revisão e cargos sem arquivo\n\n" +

    "🔹 Lacunas e Controles de Risco\n" +
    "• Identificação de cargos sem titular ativo\n" +
    "• Identificação de revisão vencida por período configurável (ex.: > 6 meses)\n" +
    "• Identificação de cargos sem arquivo de descrição anexado\n\n" +

    "🔹 Organograma de Cargos\n" +
    "• Organograma por nível hierárquico com exibição de colaborador(es) ativo(s) por cargo\n" +
    "• Geração de imagem PNG em A4 (paisagem) para evidência documental e auditorias\n\n" +

    "🔹 Convites de Assinatura (Automação)\n" +
    "• Envio de convites por e-mail para assinatura do cargo (Elaborador/Aprovador)\n" +
    "• Disparo automático após edição do cargo para assinaturas pendentes\n" +
    "• Disparo forçado após nova revisão para revalidação completa do documento\n\n" +

    "Todo o fluxo mantém rastreabilidade, validações e evidências padronizadas, apoiando gestão de competências, governança documental e conformidade com auditorias internas e externas.",
  evidence: [
    {
      kind: "image",
      src: "/media/rh/cargos-lista.png",
      title: "Lista de Cargos (DC)",
      caption: "Filtros por status, assinaturas e indicadores de controle.",
    },
    {
      kind: "image",
      src: "/media/rh/cargo-form.png",
      title: "Cadastro/Edição de Cargo",
      caption: "Cadastro com requisitos, treinamentos, nível hierárquico e governança.",
    },
    {
      kind: "image",
      src: "/media/rh/cargo-assinatura.png",
      title: "Assinatura Eletrônica do Cargo",
      caption: "Assinatura por papel (Elaborador/Aprovador) com QR Code e hash de validação.",
    },
    {
      kind: "image",
      src: "/media/rh/cargos-organograma.png",
      title: "Organograma de Cargos",
      caption: "Organograma por níveis com exportação em PNG A4 (paisagem).",
    },
  ],
},

{
  title: "Treinamentos — Gestão completa (cadastro, controle, notificações e relatórios)",
  description:
    "Gerencia o ciclo completo de treinamentos do RH com rastreabilidade e regras de negócio sólidas: cadastro estruturado, filtros avançados, anexos padronizados, automações (avaliação/atualização de escolaridade), notificações por e-mail e relatórios oficiais para evidência e auditoria.\n\n" +

    "🔹 Cadastro e manutenção (dados completos, sem retrabalho)\n" +
    "• Treinamentos internos e externos, com categorização (capacitação, técnico, graduação, pós etc.)\n" +
    "• Participantes por seleção múltipla (M2M) e descrição rica via editor (CKEditor)\n" +
    "• Validações de domínio: data_fim ≥ data_inicio e regras condicionais (ex.: situação obrigatória quando status = Requerido)\n" +
    "• Carga horária normalizada (aceita 8, 8h, 7.5, 7,5 → padroniza em 'h')\n" +
    "• Certificados/anexos com governança: limite 5MB, tipos permitidos (PDF/DOC/DOCX) e nome de arquivo padronizado\n\n" +

    "🔹 Lista operacional com filtros persistentes (visão gerencial)\n" +
    "• Filtros por tipo, status, colaborador, departamento, período (término de/até) e busca livre (curso/instituição)\n" +
    "• Persistência de filtros em sessão para manter contexto de análise\n" +
    "• Paginação, ordenação por data de término e contagem automática de participantes\n" +
    "• Métrica de esforço: cálculo de hora-pessoa no período (carga horária × nº de participantes)\n\n" +

    "🔹 Automação e consistência dos registros\n" +
    "• Ao concluir treinamentos de escolaridade (técnico/graduação/pós), atualiza escolaridade do colaborador automaticamente\n" +
    "• Se 'necessita avaliação' e status concluído: cria/atualiza avaliação de eficácia por participante (padroniza follow-up)\n\n" +

    "🔹 Notificações por e-mail (planejado/requerido) com controle\n" +
    "• Disparo configurável por treinamento (switch no formulário)\n" +
    "• Envio ao criar ou atualizar quando status for Planejado/Requerido e houver mudança relevante (datas, carga, status etc.)\n" +
    "• Enfileiramento pós-commit (transaction.on_commit) para evitar corrida entre worker e persistência do registro\n\n" +

    "🔹 Relatórios e evidências (auditoria / conformidade)\n" +
    "• F003 (Mapeamento de Treinamento) por colaborador, com impressão/PDF e referência a documento/revisão quando disponível\n" +
    "• Levantamento de Necessidades de Treinamento por setor e período (formulário pronto para impressão e assinaturas)\n" +
    "• Relatório por Departamento: consolida horas (hora-pessoa), treinamentos e participantes com filtros via offcanvas\n" +
    "• Dashboard de Treinamentos com indicadores e gráficos (status, categoria e horas por mês)\n\n" +

    "Resultado: uma gestão de treinamentos realmente auditável — do planejamento à evidência final — com padronização, automação e leitura gerencial rápida.",
  evidence: [
    {
      kind: "video",
      src: "/media/rh/treinamentos/treinamentos-fluxo-completo.mp4",
      title: "Treinamentos (fluxo completo)",
      caption:
        "Cadastro, filtros, notificações, relatórios (F003/levantamento) e consolidações por departamento/dashboard.",
    },
  ],
},
{
  title: "Lista de Presença — Registro oficial com QR Check-in, impressão (F013) e aprovação",
  description:
    "Gerencia listas de presença de treinamentos/cursos/eventos com rastreabilidade completa: cadastro estruturado, participantes vinculados, upload de PDF, impressão padronizada (F013), visualização detalhada, exportação para Excel e confirmação de presença via QR/token com validade — além de workflow de aprovação por permissão.\n\n" +

    "🔹 Cadastro estruturado (com regras e evidências)\n" +
    "• Tipo de evento (Treinamento/Curso/Divulgação/Conscientização), assunto e descrição (editor rico)\n" +
    "• Datas (início/fim) e duração (em horas) com validações: fim não pode ser anterior ao início e duração ≥ 0\n" +
    "• Horário início/fim suportado (campos ocultos na UI, preservando dados quando necessário)\n" +
    "• Instrutor e flag 'Necessita Avaliação de Eficácia' para controle de follow-up\n" +
    "• Upload da lista em PDF com governança: apenas PDF, renomeação automática e limite de 5MB\n" +
    "• Seleção múltipla de participantes (Select2) com orientação e redução de erro operacional\n\n" +

    "🔹 Integração automática com Treinamentos + Avaliações (sem retrabalho)\n" +
    "• Ao salvar a lista, processa os dados para criar/atualizar o Treinamento correspondente\n" +
    "• Se 'Finalizado': registra Treinamento como concluído; se 'Em Andamento' e Planejado=Sim: cria/atualiza como planejado\n" +
    "• Participantes da lista são vinculados ao Treinamento automaticamente\n" +
    "• Se necessita avaliação: cria/atualiza Avaliação de Treinamento por participante com status 'Aguardando avaliação'\n\n" +

    "🔹 Lista operacional + filtros e KPIs (gestão rápida)\n" +
    "• Filtros por instrutor, situação, intervalo de datas (aceita datas parciais) e participante\n" +
    "• Paginação e prefetch de participantes (evita N+1 e melhora performance)\n" +
    "• Indicadores: total, finalizadas, em andamento e horas-pessoa (duração × participantes)\n\n" +

    "🔹 Visualização, impressão e padronização documental (F013 Rev.03)\n" +
    "• Visualização detalhada do registro com badges de situação e download do PDF anexado\n" +
    "• Impressão padronizada (F013 Rev.03) com layout pronto para auditoria: tipo, datas, assunto, descrição, duração e instrutor\n" +
    "• Tabela de participantes (nome/setor) com campo de visto e seção do Gestor da Qualidade para marcações\n\n" +

    "🔹 Check-in por QR Code (token por participante + validade)\n" +
    "• Opção de notificar participantes por e-mail com link individual de confirmação\n" +
    "• Token por participante com validade (ex.: 1 dia), evitando reutilização indevida\n" +
    "• Tela de confirmação OK e tela de link expirado (UX clara e rastreável)\n" +
    "• Em edição: se ativar QR depois, envia para todos; se já estava ativo, envia somente para novos participantes\n\n" +

    "🔹 Workflow de aprovação (governança)\n" +
    "• Permissão específica: 'approve_listapresenca' controla quem pode aprovar\n" +
    "• Registro de aprovado_por e data_aprovacao visível na visualização detalhada\n\n" +

    "🔹 Exportação para Excel (evidência e auditoria)\n" +
    "• Exporta listas com campos essenciais (datas, duração, instrutor, situação, participantes) e filtros por instrutor/período\n\n" +

    "Resultado: uma evidência formal e auditável de presença, com automação para não duplicar trabalho no módulo de Treinamentos e governança (aprovação + QR check-in com validade).",
  evidence: [
    {
      kind: "image",
      src: "/media/rh/lista-presenca/impressao-f013.png",
      title: "Lista de Presença (F013) — impressão e auditoria",
      caption:
        "Impressão padronizada com participantes e campos de visto, pronta para auditoria e assinaturas.",
    },
  ],
},

{
  title: "Avaliações de Treinamentos — Efetividade (F148), prazo, anexos e impressão",
  description:
    "Controla a efetividade dos treinamentos de forma auditável, consolidando respostas em um índice de eficácia, controlando prazo por regra (término do treinamento + período em dias) e gerando evidência pronta para impressão no formulário F148.\n\n" +

    "🔹 Cadastro/Edição (formulário em acordeão, orientado à evidência)\n" +
    "• Seleção de colaborador e carregamento dinâmico dos treinamentos vinculados ao funcionário (JSON endpoint), evitando erros de associação\n" +
    "• Campos de controle: data da avaliação e período da avaliação (dias) para cálculo automático do prazo\n" +
    "• Até 3 responsáveis registrados na avaliação (rastreabilidade de validação/gestão)\n" +
    "• Questionário em 3 dimensões (radios obrigatórios):\n" +
    "  I) Grau de conhecimento atual\n" +
    "  II) Aplicação dos conceitos na prática\n" +
    "  III) Resultados obtidos com a aplicação\n" +
    "• Campo de melhorias/resultados com conteúdo rico (permite detalhar evidências e impacto)\n" +
    "• Anexo opcional como comprovante, com validação de tamanho (5MB) e upload padronizado\n\n" +

    "🔹 Cálculo automático da eficácia (cliente + servidor)\n" +
    "• Consolida as 3 respostas em um resultado final objetivo:\n" +
    "  – Se qualquer nota for 1 → 'Pouco Eficaz'\n" +
    "  – Caso contrário, consolida em 'Eficaz' ou 'Muito Eficaz' conforme soma\n" +
    "• Exibe o status em tempo real no formulário com feedback visual (ícone/emoji + cor)\n" +
    "• Reforço de consistência: caso o front não preencha, o servidor calcula automaticamente na validação\n\n" +

    "🔹 Controle de prazo (conformidade e disciplina de follow-up)\n" +
    "• Calcula data limite: data_fim do treinamento + período da avaliação (dias)\n" +
    "• Mostra status 'Dentro do Prazo' ou 'Em Atraso' com exibição do limite\n" +
    "• Verificação também disponível no front (feedback imediato) e no back (fonte de verdade)\n\n" +

    "🔹 Lista de Avaliações com KPIs e filtros (gestão)\n" +
    "• Filtros por: treinamento, colaborador e intervalo de datas\n" +
    "• KPIs no topo: total, muito eficaz, eficaz e pouco eficaz\n" +
    "• Tabela com badges de eficácia (aguardando/pouco/eficaz/muito) e badge de prazo (dentro/atraso)\n" +
    "• Paginação e performance: select_related + paginação padrão\n\n" +

    "🔹 Visualização e impressão (evidência pronta)\n" +
    "• Tela de visualização com mapeamento claro das respostas (I, II, III), responsáveis, melhorias e avaliação geral\n" +
    "• Impressão com destaque da alternativa selecionada e seção de assinaturas\n" +
    "• Rodapé padronizado do formulário: F148 Rev.01\n\n" +

    "Resultado: uma trilha objetiva de eficácia por treinamento, com controle de prazo e documentação pronta para auditoria interna/externa.",
  evidence: [
    {
      kind: "image",
      src: "/media/rh/treinamentos/avaliacoes-lista.png",
      title: "Lista de Avaliações (KPIs + prazo + eficácia)",
      caption:
        "KPIs de efetividade, filtros, badges de prazo e ações (editar/imprimir/anexo).",
    },
    {
      kind: "image",
      src: "/media/rh/treinamentos/avaliacao-impressao-f148.png",
      title: "Impressão (F148 Rev.01)",
      caption:
        "Relatório com respostas destacadas, melhorias e assinaturas, pronto para auditoria.",
    },
  ],
},
{
  title: "Avaliação de Desempenho Anual — F176B, classificação automática e impressão",
  description:
    "Realiza a avaliação anual do colaborador com questionário padronizado (10 critérios), cálculo automático de percentual e classificação final (Ruim/Regular/Bom/Ótimo), filtros gerenciais por colaborador/departamento/período e geração de evidência pronta para auditoria (impressão F176B).\n\n" +

    "🔹 Cadastro/Edição (formulário guiado e auditável)\n" +
    "• Avaliação vinculada a um colaborador ativo, com seleção via Select2 e ordenação por nome\n" +
    "• Preenchimento automático de Cargo e Departamento a partir do colaborador (consulta via endpoint), reduzindo erro de digitação\n" +
    "• Centro de custo normalizado automaticamente (Title Case) para padronização de relatórios\n" +
    "• Questionário com 10 itens obrigatórios (notas 1 a 4):\n" +
    "  – Postura em Segurança do Trabalho\n" +
    "  – Qualidade e Produtividade\n" +
    "  – Trabalho em Equipe\n" +
    "  – Comprometimento\n" +
    "  – Disponibilidade para Mudanças\n" +
    "  – Disciplina\n" +
    "  – Rendimento sob Pressão\n" +
    "  – Proatividade\n" +
    "  – Comunicação\n" +
    "  – Assiduidade\n" +
    "• Avaliações globais em texto rico (CKEditor): visão do avaliador e autoavaliação do avaliado\n" +
    "• Anexo opcional (PDF/DOC/DOCX) com limite de 5MB e renomeação automática do arquivo (padrão por colaborador + data)\n" +
    "• Remoção segura de anexo na edição: apaga o arquivo físico e limpa o campo antes de salvar\n\n" +

    "🔹 Cálculo automático e feedback em tempo real (nota e classificação)\n" +
    "• Soma dos 10 itens e cálculo do percentual (base 40 pontos)\n" +
    "• Classificação automática por faixa:\n" +
    "  – 25% a 45% → Ruim\n" +
    "  – 46% a 65% → Regular\n" +
    "  – 66% a 84% → Bom\n" +
    "  – 85% a 100% → Ótimo\n" +
    "• Barra de status sticky no topo com percentual e progress bar (feedback imediato enquanto o avaliador preenche)\n" +
    "• Ao detectar campos preenchidos, abre automaticamente o acordeão do questionário (reduz cliques e acelera conclusão)\n\n" +

    "🔹 Lista gerencial (KPIs + filtros por offcanvas)\n" +
    "• Filtros: colaborador, departamento e período de avaliação (data início/fim), com validação de formato\n" +
    "• KPIs: total de avaliações e totais por classificação (Ótimo/Bom/Regular/Ruim)\n" +
    "• Tabela com badges por classificação + percentual e ações controladas por permissão (visualizar/editar/excluir/imprimir)\n" +
    "• Paginação para manter performance e leitura confortável\n\n" +

    "🔹 Visualização e impressão (evidência formal)\n" +
    "• Visualização detalhada com:\n" +
    "  – Percentual e classificação (badge)\n" +
    "  – Tradução dos campos numéricos para texto (Ruim/Regular/Bom/Ótimo)\n" +
    "  – Data/hora de geração do relatório\n" +
    "• Impressão completa no formulário F176B Rev.07 com:\n" +
    "  – Tabela do questionário com marcação visual da alternativa selecionada\n" +
    "  – Avaliações globais (avaliador/avaliado)\n" +
    "  – Campos de assinatura do colaborador e do gestor\n\n" +

    "🔹 Fluxo simplificado (cadastro rápido via modal)\n" +
    "• Formulário tipo ‘wizard’ (etapas) com barra de progresso\n" +
    "• Salva via fetch (retorna JSON com ID) e oferece modal de impressão imediata após salvar\n" +
    "• Ideal para coletar avaliações em sequência com menor fricção operacional",
  evidence: [
    {
      kind: "image",
      src: "/media/rh/avaliacao-anual/lista-kpis.png",
      title: "Lista de avaliações anuais (KPIs e filtros)",
      caption:
        "KPIs por classificação, filtros via offcanvas e ações por permissão (visualizar/editar/imprimir).",
    },
    {
      kind: "image",
      src: "/media/rh/avaliacao-anual/impressao-f176b.png",
      title: "Impressão (F176B Rev.07)",
      caption:
        "Relatório com questionário marcado, avaliações globais e campos de assinatura.",
    },
  ],
},

{
  title: "Avaliação de Experiência — Cálculo automático, orientação (Efetivar/Treinamento/Desligar) e impressão (F176A)",
  description:
    "Avalia o desempenho do colaborador no período de experiência com critérios objetivos, cálculo automático de orientação e evidência pronta para auditoria: cadastro em acordeão, filtros gerenciais, visualização detalhada e impressão formal (F176A Rev.05).\n\n" +

    "🔹 Cadastro/Edição (formulário guiado por etapas)\n" +
    "• Identificação do colaborador com seleção apenas de Ativos e busca (Select2)\n" +
    "• Campos de apoio preenchidos automaticamente para reduzir erro: cargo, departamento e superior direto (somente leitura)\n" +
    "• Questionário com 4 critérios pontuados (1 a 4):\n" +
    "  – Adaptação ao Trabalho\n" +
    "  – Interesse\n" +
    "  – Relacionamento Social\n" +
    "  – Capacidade de Aprendizagem\n" +
    "• Campo de Observações para registrar fatos/evidências (texto)\n" +
    "• Anexo opcional com governança: renomeação padronizada e limite de 5MB\n\n" +

    "🔹 Cálculo automático de status e orientação (regra de negócio clara)\n" +
    "• Soma dos pontos e conversão em percentual (base 16 pontos)\n" +
    "• Regra de decisão automática:\n" +
    "  – ≥ 85% → Efetivar (Ótimo)\n" +
    "  – ≥ 66% → Efetivar (Bom)\n" +
    "  – ≥ 46% → Encaminhar p/ Treinamento (Regular)\n" +
    "  – < 46% → Desligar (Ruim)\n" +
    "• Campo “Status da Avaliação” é preenchido automaticamente a partir das respostas\n" +
    "• Exibição com badges/ícones coerentes na lista e na impressão (Efetivar/Treinamento/Desligar)\n\n" +

    "🔹 Controle de prazo (30 dias) para disciplina de follow-up\n" +
    "• Verifica se a avaliação está dentro do prazo padrão de 30 dias\n" +
    "• Retorna status ‘Dentro do Prazo’ ou ‘Em Atraso’ para gestão\n\n" +

    "🔹 Lista gerencial (KPIs + filtros offcanvas)\n" +
    "• Filtros: colaborador e período (data início/fim)\n" +
    "• KPIs no topo: Total de Avaliações, Efetivar, Treinamento e Desligar\n" +
    "• Tabela escaneável com ícones por coluna e badges de orientação\n" +
    "• Ações por permissão: visualizar, editar, imprimir e excluir\n\n" +

    "🔹 Visualização e impressão (evidência auditável)\n" +
    "• Visualização detalhada com o texto completo correspondente às notas escolhidas em cada critério\n" +
    "• Impressão com mapeamento ‘Item avaliado’ → ‘Descrição da resposta’, observações e assinaturas\n" +
    "• Rodapé institucional padronizado: F176A Rev.05\n\n" +

    "Resultado: avaliação objetiva do período de experiência com orientação automatizada e documentação pronta para auditoria e decisão (efetivar, treinar ou desligar).",
  evidence: [
    {
      kind: "image",
      src: "/media/rh/avaliacao-experiencia/lista.png",
      title: "Lista de Avaliações de Experiência",
      caption:
        "KPIs (Efetivar/Treinamento/Desligar), filtros offcanvas e ações por permissão (visualizar/editar/imprimir).",
    },
    {
      kind: "image",
      src: "/media/rh/avaliacao-experiencia/impressao-f176a.png",
      title: "Impressão (F176A Rev.05)",
      caption:
        "Relatório com descrições completas por critério, observações e campos de assinatura.",
    },
  ],
},
{
  title: "Job Rotation — Gestão do ciclo (RH → Colaborador → Gestor) com rastreabilidade",
  description:
    "Controla o processo de Job Rotation do início ao fim: abertura pelo RH, registro de avaliações, evidências (anexos), decisão final e formalização (impressão/PDF) — com governança e trilha auditável.\n\n" +

    "🔹 Cadastro e acompanhamento pelo RH\n" +
    "• Cadastro de avaliação de Job Rotation com seleção de funcionário e cargos envolvidos (cargo atual / nova função)\n" +
    "• Campos para avaliação do gestor e do colaborador, além da avaliação do RH e indicador de disponibilidade de vaga\n" +
    "• Upload de anexo (evidências) e suporte a remoção do anexo na edição\n\n" +

    "🔹 Regras automáticas que reduzem retrabalho\n" +
    "• Se RH marcar “Prorrogar”: o sistema soma dias de prorrogação ao término previsto do ciclo\n" +
    "• Se RH marcar “Apto”: o sistema atualiza automaticamente o cargo atual do funcionário para a nova função (formalização do movimento)\n\n" +

    "🔹 Lista com filtros, totais e paginação\n" +
    "• Listagem das avaliações com filtros e paginação para organização do histórico\n" +
    "• Apuração de totais/resumos do conjunto filtrado para leitura gerencial\n\n" +

    "🔹 Impressão e exportação PDF (padrão de formulário)\n" +
    "• Visualização “imprimível” do Job Rotation e opção de download em PDF\n" +
    "• Padronização do documento com blocos claros: treinamentos realizados/requeridos/propostos e avaliações\n\n" +

    "🔹 Avaliações do Colaborador e do Gestor em duas abas (workflow completo)\n" +
    "• Formulário em DUAS ABAS: Colaborador e Gestor — salvando por etapa, sem misturar responsabilidades\n" +
    "• Ao salvar, o sistema aplica assinatura eletrônica (carimbo com dados do assinante + hash) e gera QR para verificação\n" +
    "• Permite preenchimento via link público com token (quando aplicável), reduzindo atrito de coleta\n\n" +

    "🔹 Automação de disparo (quando RH aprova)\n" +
    "• Ao RH definir “Apto”, o sistema cria (ou garante) os registros de avaliação do Colaborador e do Gestor e envia e-mails com links de preenchimento\n\n" +

    "Resultado prático: um fluxo de Job Rotation que sai do “controle em planilha” e vira processo governado — com evidência, assinatura e documento final pronto para auditoria.",
  evidence: [
    {
      kind: "image",
      src: "/media/rh/jobrotation/lista-jobrotation.png",
      title: "Job Rotation — Lista e gestão",
      caption: "Listagem com filtros/paginação e acesso às ações (visualizar, editar, imprimir/PDF).",
    },
    {
      kind: "image",
      src: "/media/rh/jobrotation/avaliacoes-abas.png",
      title: "Job Rotation — Avaliações em abas + assinatura",
      caption: "Avaliação do Colaborador e do Gestor em abas separadas, com assinatura eletrônica e QR de verificação.",
    },
  ],
},

{
  title: "Matriz de Polivalência — Mapeamento de competências, níveis e evidências",
  description:
    "Gerencia a Matriz de Polivalência dos colaboradores, permitindo mapear competências por função/processo, classificar níveis de domínio, identificar lacunas de capacitação e gerar evidências formais para auditoria e tomada de decisão.\n\n" +

    "🔹 Estrutura da matriz (base organizacional)\n" +
    "• Associação por Departamento / Setor / Função\n" +
    "• Linhas representando colaboradores e colunas representando atividades, processos ou operações\n" +
    "• Suporte a múltiplas matrizes por área (escalável e segmentado)\n\n" +

    "🔹 Níveis de polivalência (leitura rápida e padronizada)\n" +
    "• Classificação por níveis numéricos/visuais (ex.: 0 a 4)\n" +
    "• Significado claro por nível: Não treinado, Em treinamento, Executa com apoio, Executa sozinho, Multiplicador\n" +
    "• Representação visual por cores/badges para leitura imediata\n\n" +

    "🔹 Atualização e governança dos registros\n" +
    "• Atualização manual controlada (gestor/RH) ou vinculada a treinamentos concluídos\n" +
    "• Registro de data da última atualização por célula (rastreabilidade)\n" +
    "• Campo de observações para justificar evolução ou regressão de nível\n\n" +

    "🔹 Análise gerencial (gaps e riscos)\n" +
    "• Identificação rápida de gargalos: atividades críticas com poucos colaboradores habilitados\n" +
    "• Apoio ao planejamento de treinamentos e Job Rotation\n" +
    "• Visão clara de redundância operacional (quem pode substituir quem)\n\n" +

    "🔹 Filtros e navegação\n" +
    "• Filtro por departamento, função e colaborador\n" +
    "• Busca rápida por nome ou atividade\n" +
    "• Persistência de filtros para manter contexto de análise\n\n" +

    "🔹 Impressão e evidência formal\n" +
    "• Impressão da matriz em layout padronizado (formulário interno)\n" +
    "• Cabeçalho com identificação da área, período e responsável\n" +
    "• Documento pronto para auditorias internas/externas (IATF / ISO / SGQ)\n\n" +

    "Resultado: visão clara da capacidade operacional da empresa, redução de riscos por ausência de pessoal-chave e base objetiva para decisões de treinamento, promoção e rotação.",
  evidence: [
    {
      kind: "image",
      src: "/media/rh/matriz-polivalencia/matriz.png",
      title: "Matriz de Polivalência",
      caption:
        "Matriz por função/processo com níveis de domínio, cores e leitura rápida para gestão e auditoria.",
    },
  ],
},
{
  title: "Relatórios e Indicadores — Visão gerencial, evidências e apoio à decisão",
  description:
    "Consolida dados estratégicos do RH em relatórios operacionais e indicadores visuais, permitindo análise rápida de conformidade, desempenho e evolução das pessoas — com saídas prontas para auditoria e gestão.\n\n" +

    "🔹 Indicadores consolidados (KPIs de RH)\n" +
    "• Indicadores de Treinamentos: horas-pessoa, status (planejado/em andamento/concluído) e distribuição por período\n" +
    "• Indicadores de Avaliações: eficácia de treinamentos, desempenho anual e experiência (classificações consolidadas)\n" +
    "• Indicadores de Presença: eventos realizados, participantes e carga horária total\n" +
    "• Indicadores de Polivalência: níveis por função/processo e identificação de gargalos operacionais\n\n" +

    "🔹 Relatórios operacionais (prontos para auditoria)\n" +
    "• Relatórios por colaborador, departamento e período\n" +
    "• Consolidação de histórico individual (treinamentos, avaliações, presença e evolução)\n" +
    "• Relatórios comparativos entre áreas (apoio à priorização de capacitação)\n\n" +

    "🔹 Filtros avançados e persistentes\n" +
    "• Filtros por colaborador, departamento, função, status e intervalo de datas\n" +
    "• Persistência de filtros em sessão para manter contexto analítico\n" +
    "• Combinação livre de filtros para análises específicas (auditoria, gestão ou planejamento)\n\n" +

    "🔹 Visualização clara e orientada à decisão\n" +
    "• Gráficos e tabelas com leitura imediata (cores, badges e totais)\n" +
    "• Destaque automático para situações críticas (atrasos, baixo desempenho, lacunas de capacitação)\n" +
    "• KPIs resumidos no topo para leitura executiva\n\n" +

    "🔹 Exportação e evidência formal\n" +
    "• Exportação para Excel dos dados filtrados\n" +
    "• Impressão de relatórios em layout padronizado do SGQ\n" +
    "• Documentos prontos para auditorias internas e externas (IATF / ISO)\n\n" +

    "Resultado: o RH deixa de ser apenas operacional e passa a atuar de forma analítica, com dados confiáveis, rastreáveis e acionáveis para gestão e conformidade.",
  evidence: [
    {
      kind: "image",
      src: "/media/rh/relatorios-indicadores/dashboard.png",
      title: "Relatórios e Indicadores de RH",
      caption:
        "Painel consolidado com KPIs, filtros e relatórios prontos para gestão e auditoria.",
    },
  ],
},
{
  title: "Formulários (RH/SGQ) — Biblioteca viva com impressão padronizada e evidência",
  description:
    "Centraliza os formulários oficiais do RH/SGQ já implementados no SIB, garantindo padronização (código + revisão), impressão pronta e rastreabilidade do que foi aplicado.\n\n" +

    "🔹 Formulários existentes no sistema (código / revisão)\n" +
    "• F003 Rev.04 — Relatório F003 (Treinamentos)\n" +
    "  – Evidência consolidada por colaborador/treinamento, pronta para auditoria\n\n" +

    "• F013 Rev.03 — Lista de Presença do Treinamento\n" +
    "  – Impressão com dados do evento, participantes (nome/setor) e campos de visto\n" +
    "  – Seção do Gestor da Qualidade (necessita avaliação de eficácia)\n\n" +

    "• F148 Rev.01 — Avaliação de Treinamento (Efetividade)\n" +
    "  – Impressão da avaliação com respostas, eficácia consolidada e evidência formal\n\n" +

    "• F150 Rev.05 — Levantamento de Necessidades de Treinamento\n" +
    "  – Documento de levantamento por área/período para planejamento e auditoria\n\n" +

    "• F176A Rev.05 — Avaliação de Experiência\n" +
    "  – Impressão com critérios, observações e resultado (Efetivar/Treinamento/Desligar)\n\n" +

    "• F176B Rev.07 — Avaliação de Desempenho Anual\n" +
    "  – Impressão com questionário completo, percentual/classificação e assinaturas\n\n" +

    "🔹 Padronização aplicada na prática\n" +
    "• Rodapé institucional único com identificação do formulário (código e revisão)\n" +
    "• Saída pronta para impressão/auditoria (sem precisar montar documento manual)\n" +
    "• Mantém coerência documental entre RH e SGQ, reduzindo risco de uso de modelo errado.\n\n" +

    "Observação: a Lista Mestra MRQ001 também existe no módulo de Documentos como matriz consolidada do controle documental.",
  evidence: [
    {
      kind: "image",
      src: "/media/rh/formularios/rodapes-formularios.png",
      title: "Rodapés com código e revisão",
      caption:
        "Identificação padronizada do formulário (ex.: F013 Rev.03, F148 Rev.01, F176A Rev.05, F176B Rev.07...).",
    },
  ],
},


    
  ],
};
