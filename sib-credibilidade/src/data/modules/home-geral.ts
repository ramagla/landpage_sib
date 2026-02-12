import type { Module } from "../types";

export const homeGeralModule: Module = {
  id: "home-geral",
  name: "Home Geral",
  icon: "🏠",
  summary:
    "Visão consolidada do SIB com indicadores do dia, notícias, comunicados, alertas, recados e canais rápidos para melhorias e denúncias — com foco em agilidade, transparência e governança.",

  features: [
    {
      title: "Dashboard (Home Geral) — Visão rápida do dia",
      description:
        "Centraliza, em uma única tela, os principais elementos operacionais e institucionais do SIB, reduzindo o tempo de busca por informações e priorizando o que exige atenção imediata.\n\n" +

        "🔹 Experiência inicial (AIDA / Boas-vindas)\n" +
        "• Banner de boas-vindas com mensagem contextual (“Bem-vindo de volta”) e reforço de foco do dia\n" +
        "• Comunicação objetiva para direcionar o usuário ao que é prioridade agora\n\n" +

        "🔹 Indicadores-chave (KPIs)\n" +
        "• Colaboradores ativos: exibe o total de usuários ativos/logados no momento\n" +
        "• Seu Banco de Horas: mostra saldo individual (positivo/negativo), conversão para horas e total em dias\n" +
        "• Banco de Horas da equipe (quando aplicável): lista subordinados com saldo e identificação visual (foto/ícone)\n\n" +

        "🔹 Notícias (Alto Tietê) — carrossel com fallback\n" +
        "• Carregamento assíncrono via endpoint interno (/api/noticias/?limit=8)\n" +
        "• Skeleton durante carregamento, controles anterior/próximo e abertura em nova aba\n" +
        "• Fallback automático para lista quando não houver imagens válidas\n" +
        "• Botão “Recarregar” e tratamento de erro com “tentar novamente”\n\n" +

        "🔹 Participação (Sugestões de melhorias)\n" +
        "• Modal “Nova sugestão” com módulo, prioridade, título e descrição detalhada (com evidências)\n" +
        "• Suporte a anexos (PDF, imagens, planilhas, etc.)\n" +
        "• Captura automática de URL de origem (rastreabilidade do contexto)\n" +
        "• Tratamento de duplicidade (HTTP 409): exibe possíveis duplicatas e permite “enviar mesmo assim”\n" +
        "• Modal “Minhas sugestões” para acompanhamento (prioridade, status, avaliação, versão e última atualização)\n\n" +

        "🔹 Canal de Denúncias e Sugestões (anônimo)\n" +
        "• Card dedicado com sinalização de anonimato e acesso externo\n" +
        "• QR Code automático para facilitar abertura por celular\n\n" +

        "🔹 Painel de Comunicados e Pessoas (acordeão)\n" +
        "• Aniversariantes do mês (aberto por padrão) com foto/ícone e data\n" +
        "• Últimos comunicados (fechado por padrão) com visualização por modal\n" +
        "• Recados recentes do usuário\n" +
        "• Alertas recentes do usuário, incluindo detalhes de ocorrência quando houver (tipo, local, status, datas e boletim)\n\n" +

        "🔹 PWA (Instalação do app)\n" +
        "• Android/Chrome: botão de instalação via beforeinstallprompt, exibido apenas quando aplicável\n" +
        "• iOS/Safari: instruções de “Adicionar à Tela de Início”\n" +
        "• Ocultação automática quando já estiver em modo standalone\n\n" +

        "Resultado: o Dashboard não apenas informa — ele direciona ações, reduz fricção e melhora a governança do dia a dia.",
      evidence: [
  {
    kind: "embed",
    src: "https://www.canva.com/design/DAHBHMaH5Uc/Azj8EqlaCuee3v7js_nHWg/watch?embed",
    canvasUrl: "https://www.canva.com/design/DAHBHMaH5Uc/Azj8EqlaCuee3v7js_nHWg/watch",
    title: "Home Geral em operação",
    caption:
      "Dashboard completo: KPIs, notícias, sugestões, canal anônimo, painel de comunicados/recados/alertas e PWA.",
  },
],

    },

    {
  title: "Ramais — Diretório ativo com filtros, KPIs e ações imediatas",
  description:
    "Consolida o diretório interno de ramais com experiência pensada para operação: localizar em segundos, validar dados rapidamente e executar ações (copiar, salvar contato, e-mail e recado) sem sair da tela.\n\n" +

    "🔹 Fonte confiável e atualização real\n" +
    "• Lista somente colaboradores Ativos com ramal preenchido (evita ruído e dados inválidos)\n" +
    "• Identificação visual com foto (quando existir) e fallback automático com ícone\n" +
    "• Selo de autoridade (“dados do SIB”) e indicador de atualização (“Atualizado agora”)\n\n" +

    "🔹 Busca rápida + filtros estruturados (com chips)\n" +
    "• Busca em tempo real por nome, setor, cargo, e-mail e ramal (ex.: “Ana”, “Qualidade”, “analista”, “1234”)\n" +
    "• Filtros por Setor e Cargo (selects), além de ‘Somente com e-mail’/‘Somente sem e-mail’ e ‘Somente com foto’/‘Somente sem foto’\n" +
    "• Chips de filtros ativos para leitura imediata do estado da busca e fácil remoção\n\n" +

    "🔹 KPIs de completude e diagnóstico rápido\n" +
    "• Total de ramais listados (base ativa)\n" +
    "• % e quantidade de contatos com e-mail (com barra de progresso)\n" +
    "• % e quantidade de contatos com foto (com barra de progresso)\n" +
    "• Top setores (visão de concentração por área) para apoiar operação e governança do cadastro\n\n" +

    "🔹 Ações de alta produtividade (1 clique)\n" +
    "• Copiar ramal: botão dedicado (padrão de uso diário) com feedback via toast\n" +
    "• Adicionar aos contatos: geração e download de vCard (.vcf) com dados estruturados (nome, cargo, setor, e-mail e ramal)\n" +
    "• Enviar e-mail: atalho mailto (apenas quando houver e-mail cadastrado)\n" +
    "• Enviar recado: modal de recado com registro no sistema e notificação por e-mail (HTML/TXT) quando o destinatário possuir e-mail\n\n" +

    "Resultado: comunicação interna mais rápida, menos retrabalho e dados mais completos (e-mail/foto) por evidência objetiva.",
  evidence: [
    {
      kind: "video",
      src: "/media/home-geral/ramais-lista.mp4",
      title: "Lista de Ramais — busca, filtros, KPIs e ações",
      caption:
        "Busca em tempo real com filtros (setor/cargo/e-mail/foto), KPIs de completude e ações: copiar ramal, vCard, e-mail e recado.",
    },
  ],
},
{
  title: "Documentos — Controle documental do SGQ (revisões, leitura controlada, MRQ001 e IO)",
  description:
    "Disponibiliza o controle documental do SGQ com rastreabilidade ponta a ponta: listagem operacional com filtros, governança por permissões, revisões com histórico, evidência de leitura por usuário e fluxos específicos para IO (páginas, saneamento de conteúdo e impressão).\n\n" +

    "🔹 Lista de Documentos (operação + auditoria)\n" +
    "• Cabeçalho institucional e microcopy orientando rastreabilidade e conformidade (SGQ / IATF 16949)\n" +
    "• Indicadores (cards): Total, Aprovados, Em Revisão e Inativos\n" +
    "• Tabela escaneável com ícones por coluna para leitura rápida (código, tipo, nome, responsável, status, última revisão e atualização)\n\n" +

    "🔹 Filtros avançados (offcanvas com Select2)\n" +
    "• Filtro por Nome, Código, Departamento, Status e Tipo (IO/PQ/POQ/TB/Outros)\n" +
    "• Período da Última Revisão (data início/fim) para auditoria e investigação de mudanças\n" +
    "• Combinação de filtros para precisão (ex.: Código + Período)\n\n" +

    "🔹 Governança por permissões (sem fricção)\n" +
    "• Ações aparecem conforme permissão: Cadastrar documento e Marcar leituras\n" +
    "• Fluxo desenhado para uso diário sem expor operações administrativas para quem não deve\n\n" +

    "🔹 Revisões e histórico rastreável\n" +
    "• Inclusão de revisão com carimbo (data/hora) e autoria (alterado_por)\n" +
    "• Histórico por documento, consolidando revisões ativas e contexto de mudanças\n\n" +

    "🔹 Leitura controlada (evidência de ciência)\n" +
    "• Para cada revisão: lista quem leu e quem está pendente, baseado nos colaboradores ativos dos departamentos relacionados\n" +
    "• Endpoint identifica a última revisão não lida do usuário (controle objetivo)\n" +
    "• Função administrativa para marcar leituras em massa quando permitido (reduz retrabalho em mutirões controlados)\n\n" +

    "🔹 Fluxo IO (Instrução Operacional) — páginas e impressão estável\n" +
    "• IO estruturada por páginas/seções com numeração (ordem) e unicidade por documento (evita duplicidade)\n" +
    "• Saneamento do HTML antes de salvar (remove estilos nocivos, estabiliza imagens e tabelas) para impressão previsível\n" +
    "• Impressão específica do IO (render final por páginas)\n" +
    "• Vídeo demonstrativo (MP4) permitido somente para IO; se o documento deixar de ser IO, o vídeo é removido automaticamente (governança de dados)\n\n" +

    "🔹 MRQ001 (Lista Mestra)\n" +
    "• Matriz consolidada para auditoria com visão completa de status, responsabilidades, método, retenção, descarte e revisão.\n\n" +

    "Resultado: evidência forte para auditorias (o documento existe, é revisado, é comunicado e tem leitura registrada), reduzindo risco e aumentando maturidade do SGQ.",
  evidence: [
    {
      kind: "video",
      src: "/media/home-geral/lista-documentos.mp4",
      title: "Lista de Documentos — filtros, indicadores e tabela escaneável",
      caption:
        "Offcanvas de filtros (Select2), KPIs e tabela com ícones para leitura rápida, orientada a SGQ/IATF.",
    },
  ],
},


{
  title: "Recibos de Pagamento — Privacidade (LGPD), importação em lote e visualização protegida",
  description:
    "Centraliza a consulta de recibos com foco em privacidade e controle: valores sensíveis ficam protegidos por padrão e a visualização do PDF exige autenticação por senha (5 primeiros dígitos do CPF), garantindo governança e rastreabilidade.\n\n" +

    "🔹 Segurança aplicada (privacidade por padrão)\n" +
    "• Valores dos indicadores e da tabela ficam mascarados (****** / campos em password)\n" +
    "• Revelação apenas mediante validação de senha (5 primeiros dígitos do CPF do colaborador)\n" +
    "• Liberação temporária por sessão (cache por funcionário por ~10 min) para reduzir atrito sem perder controle\n" +
    "• Autorização rígida: admin pode ver todos; demais usuários veem somente os próprios recibos (escopo por funcionário)\n\n" +

    "🔹 Indicadores gerenciais (protegidos)\n" +
    "• Valor Líquido Total, Total de Vencimentos e Total de Descontos\n" +
    "• Botão de ‘olho’ para revelar/ocultar com confirmação por senha (evita exposição acidental em tela compartilhada)\n\n" +

    "🔹 Filtros (offcanvas) e navegação rápida\n" +
    "• Filtro por Colaborador (quando aplicável) e por Mês de Referência (MM/AAAA)\n" +
    "• Select2 dentro do offcanvas (melhor UX em listas grandes)\n" +
    "• Paginação com ordenação por mês (desc) e nome (estável para auditoria e rotina)\n\n" +

    "🔹 Visualização do PDF (robusta para mobile/PWA)\n" +
    "• Abertura do PDF protegida por senha e entregue inline\n" +
    "• Estratégia de abertura compatível com Android/PWA: popup é criado no clique e o PDF é carregado via fetch/blob para reduzir bloqueios do navegador\n" +
    "• Mensagens amigáveis para erros de acesso direto/GET, senha incorreta e ausência de arquivo\n\n" +

    "🔹 Importação em lote (RH/administrativo)\n" +
    "• Upload de ZIP com PDFs: extração automática e cadastro por mês de referência\n" +
    "• Antiduplicidade por funcionário + mês (evita reimportações repetidas)\n" +
    "• Extração automática de valores do PDF (vencimentos, descontos e líquido) e vínculo do arquivo ao registro\n\n" +

    "Resultado: transparência para o colaborador (acesso ao próprio holerite), sem comprometer LGPD — com importação eficiente para quem administra.",
  evidence: [
    {
      kind: "video",
      src: "/media/home-geral/recibos-pagamento.mp4",
      title: "Recibos de Pagamento",
      caption:
        "Indicadores e tabela com valores mascarados, filtros offcanvas, modal de senha e visualização protegida do PDF.",
    },
  ],
},

  ],
};
