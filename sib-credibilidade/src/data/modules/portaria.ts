import type { Module } from "../types";

export const portariaModule: Module = {
  id: "portaria",
  name: "Portaria",
  icon: "🛡️",
  summary:
    "Controle de acesso físico, visitantes, veículos e registros de entrada e saída com rastreabilidade.",
  features: [
    {
      title: "Dashboard — Portaria",
      description:
        "Apresenta uma visão consolidada e operacional da Portaria, destacando o que exige ação imediata (presenças no local, recados pendentes, consumo do dia e ocorrências recentes). O dashboard foi desenhado para reduzir atrito na rotina: leitura rápida, ações de um clique e microinterações para comunicação e rastreabilidade.\n\n" +

        "Principais funcionalidades do dashboard:\n\n" +

        "• Banner institucional com microcopy orientada à ação:\n" +
        "  – Reforça segurança sem atrito e priorização do que é crítico.\n" +
        "  – Atalhos imediatos para zonas de monitoramento e para copiar um resumo do turno.\n\n" +

        "• Ações rápidas no topo (rotina de portaria):\n" +
        "  – Zonas de Monitoramento: abre o modal com áreas/câmeras/zonalização para consulta rápida.\n" +
        "  – Copiar resumo: gera um texto pronto com data/hora + KPIs do momento para repassar via WhatsApp/e-mail/rádio.\n\n" +

        "• KPIs de leitura imediata (sem depender de navegação):\n" +
        "  – Visitantes no local (controle de presença).\n" +
        "  – Entregadores no local (logística e fluxo de docas).\n" +
        "  – Recados pendentes (pendências de comunicação e atendimento).\n" +
        "  – Consumo de água do dia (m³) para monitoramento e anomalias.\n\n" +

        "• Últimas ocorrências registradas (priorização e rastreabilidade):\n" +
        "  – Lista por recência com tipo de ocorrência, local, início/fim e status.\n" +
        "  – Ação de copiar detalhes da ocorrência (texto pronto) para acionar Manutenção/Segurança/Produção.\n\n" +

        "• Guia rápido operacional (disciplina de registro):\n" +
        "  – Registro imediato com local/horário precisos.\n" +
        "  – Recomendação de evidências (foto/placa) quando aplicável.\n" +
        "  – Comunicação rápida via resumo/copiar.\n" +
        "  – Encerramento com atualização de status para manter histórico auditável.\n\n" +

        "Resultado: um painel único para gestão diária da Portaria, com KPIs claros, ocorrências rastreáveis e recursos de comunicação rápida — reduzindo falhas de registro e acelerando resposta a situações críticas.",
      evidence: [
        {
          kind: "video",
          src: "/media/portaria/dashboard-portaria.mp4",
          title: "Dashboard de Portaria em operação",
          caption:
            "Banner AIDA, botão de zonas de monitoramento, copiar resumo, KPIs (visitantes/entregadores/recados/água) e últimas ocorrências com ação de copiar detalhes.",
        },
      ],
    },

{
  title: "Cadastros — Pessoas e Veículos (Base de Acesso)",
  description:
    "Centraliza o cadastro e a manutenção da base de acesso da Portaria, padronizando Pessoas (colaboradores, visitantes recorrentes, prestadores) e Veículos (próprios, terceiros e frota) para acelerar registros de entrada/saída e garantir rastreabilidade. O fluxo foi desenhado para reduzir erro operacional: busca rápida, dados essenciais sempre disponíveis e regras claras para situações comuns (placa inválida, documento ausente, veículo recorrente, prestador com autorização).\n\n" +

    "Principais funcionalidades do cadastro:\n\n" +

    "• Cadastro de Pessoas (identificação e contexto):\n" +
    "  – Registro com dados essenciais (nome, tipo/perfil, documento, empresa/terceiro quando aplicável, contatos e observações).\n" +
    "  – Sinalização de status (Ativo/Inativo/Bloqueado) para impedir uso indevido em entradas futuras.\n" +
    "  – Campo de observações operacionais (ex.: restrição de acesso, orientação de atendimento, autorização específica).\n\n" +

    "• Cadastro de Veículos (rastreabilidade por placa):\n" +
    "  – Registro por placa com identificação do veículo (tipo, cor/modelo quando necessário, empresa/proprietário e observações).\n" +
    "  – Regras de consistência para evitar duplicidade e manter a placa como referência única do acesso.\n" +
    "  – Status (Liberado/Restrito/Bloqueado) para apoiar decisão imediata na guarita.\n\n" +

    "• Vínculo Pessoa ⇄ Veículo (agilidade na rotina):\n" +
    "  – Associação opcional de veículo ao responsável (ex.: colaborador/frota/prestador), facilitando seleção automática no registro de entrada.\n" +
    "  – Histórico de uso permite identificar recorrência e reduzir tempo de atendimento.\n\n" +

    "• Busca e seleção rápida (sem travar operação):\n" +
    "  – Pesquisa por nome/documento/empresa para pessoas.\n" +
    "  – Pesquisa por placa para veículos.\n" +
    "  – Resultado direto para iniciar o registro de entrada/saída sem recadastro.\n\n" +

    "• Governança e qualidade do dado:\n" +
    "  – Validações para campos críticos (documento/placa) e mensagens objetivas em caso de inconsistência.\n" +
    "  – Controle por permissões: quem pode cadastrar, editar, inativar/bloquear.\n" +
    "  – Rastreamento de alteração (quem alterou e quando) para auditoria e conformidade.\n\n" +

    "• Integração natural com o fluxo da Portaria:\n" +
    "  – Cadastros alimentam diretamente os registros de entrada/saída, ocorrências e recados.\n" +
    "  – Evita digitação repetida e melhora padronização do histórico (mesmo nome/placa sempre iguais).\n\n" +

    "Resultado: uma base confiável de Pessoas e Veículos, acelerando atendimento na portaria, reduzindo erros de registro e fortalecendo rastreabilidade e controle de acesso físico.",
  evidence: [
    {
      kind: "video",
      src: "/media/portaria/cadastros-pessoas-veiculos.mp4",
      title: "Cadastros de Pessoas e Veículos em operação",
      caption:
        "Busca rápida, status (ativo/restrito/bloqueado), vínculo pessoa⇄veículo e integração direta com registro de entrada/saída.",
    },
  ],
},

{
  title: "Visitantes — Controle de Entrada e Saída (Rastreabilidade)",
  description:
    "Gerencia o fluxo completo de visitantes na Portaria, garantindo identificação, autorização, registro de entrada e saída e histórico auditável. O objetivo é reduzir risco no acesso físico e eliminar registros informais, padronizando o atendimento com campos essenciais, regras de consistência e sinalizações claras do que está “no local” e do que está pendente de saída.\n\n" +

    "Principais funcionalidades do controle de visitantes:\n\n" +

    "• Registro rápido de entrada (sem atrito na guarita):\n" +
    "  – Seleção de visitante já cadastrado (busca por nome/documento) ou cadastro rápido quando necessário.\n" +
    "  – Motivo da visita, destino/setor e pessoa responsável pela autorização.\n" +
    "  – Horário de entrada automático e observações operacionais (ex.: itens levados, restrições, EPIs).\n\n" +

    "• Autorização e governança do acesso:\n" +
    "  – Campo de responsável interno pela liberação, garantindo rastreabilidade.\n" +
    "  – Status do visitante (Ativo/Inativo/Bloqueado) impede acesso indevido e orienta a decisão imediata.\n\n" +

    "• Controle de permanência (quem está no local agora):\n" +
    "  – Tela/lista de “Visitantes no local” com destaque para entradas abertas.\n" +
    "  – Sinalização visual para pendências (ex.: visitante sem saída registrada) e tempo de permanência.\n\n" +

    "• Registro de saída e encerramento:\n" +
    "  – Saída com horário e conferência do registro.\n" +
    "  – Encerramento do atendimento mantendo histórico completo (entrada/saída, destino, responsável e observações).\n\n" +

    "• Evidências e ocorrências vinculadas:\n" +
    "  – Possibilidade de registrar ocorrências associadas à visita (ex.: desacordo, acesso indevido, divergência), reforçando trilha auditável.\n" +
    "  – Campo de observações para anotar incidentes e orientar ações posteriores.\n\n" +

    "• Consulta e histórico (auditoria):\n" +
    "  – Pesquisa por período, visitante, documento e responsável.\n" +
    "  – Histórico consolidado por visitante, facilitando recorrência e padrões de atendimento.\n\n" +

    "Resultado: controle completo e rastreável de visitantes, com autorização clara, permanência visível e histórico auditável — aumentando segurança, padronização e velocidade no atendimento da Portaria.",
  evidence: [
    {
      kind: "video",
      src: "/media/portaria/visitantes-entrada-saida.mp4",
      title: "Visitantes — Entrada, permanência e saída em operação",
      caption:
        "Registro rápido (visitante/motivo/destino/responsável), lista de visitantes no local, encerramento de saída e histórico.",
    },
  ],
},

{
  title: "Atrasos e Saídas — Pendências, Permanência e Encerramento de Turno",
  description:
    "Controla, de forma objetiva, tudo o que está com saída pendente na Portaria (visitantes, entregadores e veículos), destacando atrasos por tempo de permanência e permitindo encerramento rápido e rastreável. O foco é evitar “entradas abertas” esquecidas, reduzir risco de acesso físico e manter histórico consistente para auditorias e investigação de ocorrências.\n\n" +

    "Principais funcionalidades de atrasos e saídas:\n\n" +

    "• Painel de pendências (quem ainda está no local):\n" +
    "  – Lista em tempo real de registros sem saída: visitante/entregador/veículo.\n" +
    "  – Exibição do horário de entrada e tempo de permanência (min/horas) para priorização.\n" +
    "  – Destaque visual por faixa de atraso (atenção/ação imediata), facilitando decisão na guarita.\n\n" +

    "• Registro de saída com um clique (fechamento rápido):\n" +
    "  – Encerramento do registro com horário de saída automático.\n" +
    "  – Campo de observações de saída (ex.: conferência, devolução de crachá, orientação passada).\n" +
    "  – Proteção contra dupla saída e inconsistência (não permite encerrar duas vezes o mesmo registro).\n\n" +

    "• Regras de atraso configuráveis (governança):\n" +
    "  – Critérios de atraso por tipo (visitante/entregador/veículo) e por janelas de horário.\n" +
    "  – Sinalização quando o tempo excede o padrão (ex.: permanência longa sem justificativa).\n\n" +

    "• Ações de apoio para operação:\n" +
    "  – Copiar resumo das pendências (texto pronto) para repassar ao turno seguinte/segurança/gestão.\n" +
    "  – Atalho para abrir ocorrência vinculada quando houver irregularidade (ex.: saída não localizada, divergência de placa, recusa de conferência).\n\n" +

    "• Histórico e auditoria:\n" +
    "  – Consulta por período para identificar padrões (atrasos recorrentes por fornecedor/transportadora).\n" +
    "  – Trilha completa por registro: entrada, saída, tempo de permanência, responsável pelo atendimento e observações.\n\n" +

    "Resultado: saídas controladas e pendências visíveis, com redução de registros em aberto, aumento de segurança física e histórico auditável para controle interno e auditorias.",
  evidence: [
    {
      kind: "video",
      src: "/media/portaria/atrasos-saidas-pendencias.mp4",
      title: "Atrasos e Saídas em operação",
      caption:
        "Lista de registros sem saída, cálculo de permanência/atraso, encerramento rápido com observação e cópia de resumo para troca de turno.",
    },
  ],
},

{
  title: "Ligações, Ocorrências e Consumo de Água — Registro, Notificações e Evidências da Portaria",
  description:
    "Consolida, em um único fluxo operacional, os registros críticos do turno na Portaria: ligações recebidas/realizadas, ocorrências do dia e leitura de consumo de água. O objetivo é garantir rastreabilidade, reduzir perda de informação entre turnos e acelerar comunicação com áreas internas (Manutenção, Segurança, Produção, Administrativo), mantendo histórico auditável, padronizado e com notificações automáticas.\n\n" +

    "Principais funcionalidades:\n\n" +

    "• Ligações (registro e comunicação rastreável):\n" +
    "  – Registro de ligações recebidas e realizadas com data/hora, solicitante, assunto e encaminhamento.\n" +
    "  – Classificação por tipo (informação, recado, urgência, manutenção, segurança) para triagem rápida.\n" +
    "  – Pendência controlada (pendente / resolvido) para garantir retorno e fechamento.\n" +
    "  – Disparo de e-mail diretamente do registro: envio do resumo da ligação para os responsáveis/áreas envolvidas, reduzindo tempo de repasse e evitando ruído na comunicação.\n" +
    "  – Rastreabilidade do envio: registro do momento do disparo e do conteúdo resumido enviado, garantindo evidência do acionamento.\n\n" +

    "• Ocorrências (histórico do que aconteceu no local):\n" +
    "  – Registro estruturado por tipo, local, descrição, início/fim e status (aberta/em andamento/encerrada).\n" +
    "  – Vínculo com envolvidos quando aplicável (visitante/entregador/veículo), fortalecendo rastreabilidade.\n" +
    "  – Disparo de e-mail de acionamento: comunicação imediata para setores responsáveis com o resumo da ocorrência, permitindo resposta rápida.\n" +
    "  – Encerramento com observação final, mantendo histórico completo e auditável.\n\n" +

    "• Consumo de Água (monitoramento diário e anomalias):\n" +
    "  – Registro diário em m³ com data/hora e responsável pela leitura.\n" +
    "  – Comparativo simples por dia (tendência) para identificar picos e possíveis vazamentos.\n" +
    "  – Sinalização para valores fora do padrão com campo para justificativa/observação.\n\n" +

    "Padrões de governança aplicados:\n\n" +
    "• Campos essenciais sempre presentes (data/hora, responsável, status e observação), evitando registros “soltos”.\n" +
    "• Histórico por recência para leitura rápida e troca de turno.\n" +
    "• Comunicação rápida por dois canais:\n" +
    "  – Copiar resumo/detalhes para WhatsApp/e-mail.\n" +
    "  – Disparo de e-mail direto pelo sistema (ligações e ocorrências), com trilha auditável.\n\n" +

    "Resultado: um centro de registros do turno com rastreabilidade completa (registro + encaminhamento + notificação), reduzindo perda de informação, acelerando resposta a eventos e fortalecendo evidências para auditoria e gestão.",
  evidence: [
    {
      kind: "video",
      src: "/media/portaria/ligacoes-ocorrencias-agua-emails.mp4",
      title: "Ligações/ocorrências com disparo de e-mail + consumo de água",
      caption:
        "Registro com pendências, acionamento por e-mail a partir de ligações e ocorrências, rastreio do envio e leitura diária de água com alertas.",
    },
  ],
},

{
  title: "Relatórios — Portaria (Acessos, Ocorrências, Ligações e Consumo)",
  description:
    "Reúne os relatórios formais da Portaria para auditoria e gestão diária, transformando os registros de operação (entradas/saídas, visitantes, veículos, atrasos, ligações, ocorrências e consumo de água) em visões consolidadas, com filtros por período e exportação. O foco é garantir rastreabilidade do que aconteceu em cada turno, apoiar investigações e padronizar evidências para auditorias e controles internos.\n\n" +

    "Principais relatórios e visões disponíveis:\n\n" +

    "• Relatório de Acessos (Entrada/Saída):\n" +
    "  – Lista consolidada por período com status (no local / encerrado) e trilha de horários.\n" +
    "  – Filtros por tipo (visitante/entregador/veículo), responsável e destino/setor.\n" +
    "  – Destaque de registros sem saída e tempo de permanência para gestão de risco.\n\n" +

    "• Relatório de Visitantes e Veículos (cadastro e recorrência):\n" +
    "  – Consulta por nome/documento/placa e histórico de movimentações.\n" +
    "  – Sinalização de status (ativo/restrito/bloqueado) e observações operacionais.\n\n" +

    "• Relatório de Atrasos e Pendências de Saída:\n" +
    "  – Ranking de permanências longas e registros com saída pendente.\n" +
    "  – Filtros por período/turno e identificação de padrões (fornecedor/transportadora recorrente).\n\n" +

    "• Relatório de Ocorrências:\n" +
    "  – Visão por tipo/local/status (aberta/em andamento/encerrada) e linha do tempo (início/fim).\n" +
    "  – Evidência do acionamento: registro de encaminhamento e disparos de e-mail quando utilizados.\n\n" +

    "• Relatório de Ligações e Recados:\n" +
    "  – Registro por período com assunto, solicitante e tratativa (pendente/resolvido).\n" +
    "  – Evidência do repasse: histórico de envio por e-mail e observações de encaminhamento.\n\n" +

    "• Relatório de Consumo de Água:\n" +
    "  – Série diária (m³) com leitura por data e responsável.\n" +
    "  – Identificação de picos/variações e campo de justificativa para anomalias.\n\n" +

    "Padrões de governança e uso prático:\n\n" +
    "• Filtros por período e campos-chave para busca rápida (nome, documento, placa, status, local).\n" +
    "• Exportação para Excel/CSV quando necessário para análises e prestação de contas.\n" +
    "• Impressão padronizada em A4 para evidência formal.\n" +
    "• Texto pronto para comunicação (resumo/copiar) e suporte a disparo de e-mails nos registros críticos.\n\n" +

    "Resultado: relatórios consistentes e auditáveis da Portaria, com filtros e exportação, permitindo controle de acesso, rastreabilidade de eventos, gestão de pendências e evidência formal para auditorias e investigações.",
  evidence: [
    {
      kind: "video",
      src: "/media/portaria/relatorios-portaria.mp4",
      title: "Relatórios da Portaria em operação",
      caption:
        "Relatórios de acessos, visitantes/veículos, atrasos, ocorrências, ligações/recados e consumo de água com filtros, exportação e impressão.",
    },
  ],
}



  ],
};
