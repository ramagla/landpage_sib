import Section from "./Section";

export default function Architecture() {
  return (
    <Section
      id="arquitetura"
      kicker="Arquitetura"
      title="Arquitetura e Princípios"
      subtitle="Arquitetura pensada para auditoria, não para apresentação."
    >
      <div className="grid grid-2">
        {/* Arquitetura por domínio */}
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Arquitetura por Domínio</h3>
          <p className="p">
            O sistema é estruturado como um monólito Django organizado por domínios
            funcionais. Cada módulo representa um contexto claro de negócio,
            com regras, fluxos e evidências próprias.
          </p>
          <ul style={{ marginTop: "0.85rem", paddingLeft: "1.1rem" }}>
            <li>Técnico</li>
            <li>Qualidade de Fornecimento</li>
            <li>Controle de Qualidade</li>
            <li>Metrologia</li>
            <li>Recursos Humanos</li>
          </ul>
        </div>

        {/* Stack e plataforma */}
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Stack e Plataforma</h3>
          <p className="p">
            Plataforma construída em Django 4.2 com PostgreSQL, operando em
            ambiente virtualizado (VM) sobre Ubuntu Server, priorizando
            estabilidade e controle do ambiente.
          </p>
          <ul style={{ marginTop: "0.85rem", paddingLeft: "1.1rem" }}>
            <li>Autenticação por sessão Django</li>
            <li>Armazenamento local de arquivos e evidências</li>
            <li>Relatórios e documentos gerados via WeasyPrint</li>
            <li>Processos assíncronos com Celery e Redis</li>
          </ul>
        </div>

        {/* Rastreabilidade */}
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Rastreabilidade e Evidência</h3>
          <p className="p">
            Rastreabilidade é tratada como requisito central. Cada registro
            possui ciclo de vida definido, histórico de alterações e vínculo
            com evidências operacionais.
          </p>
          <ul style={{ marginTop: "0.85rem", paddingLeft: "1.1rem" }}>
            <li>Status padronizado: Aberto → Análise → Ação → Verificado → Encerrado</li>
            <li>Evidências em imagens, vídeos e documentos PDF</li>
            <li>Histórico por registro e trilha temporal de decisões</li>
          </ul>
        </div>

        {/* Governança, LGPD e IATF */}
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Governança, LGPD e IATF</h3>
          <p className="p">
            A arquitetura foi desenhada para atender auditorias e requisitos
            normativos, com foco em controle de documentos, competência,
            treinamento e proteção de dados.
          </p>
          <ul style={{ marginTop: "0.85rem", paddingLeft: "1.1rem" }}>
            <li>Perfis de acesso por módulo</li>
            <li>Trilha de auditoria de acessos e alterações</li>
            <li>Controle de revisão e aprovação documental</li>
            <li>Mascaramento de dados sensíveis (LGPD)</li>
          </ul>
        </div>

        {/* Automação e integrações */}
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Automação e Integrações</h3>
          <p className="p">
            O sistema vai além do CRUD, incorporando automações que suportam a
            operação industrial e a tomada de decisão.
          </p>
          <ul style={{ marginTop: "0.85rem", paddingLeft: "1.1rem" }}>
            <li>Alertas, e-mails e notificações automáticas</li>
            <li>Tarefas recorrentes e verificações periódicas</li>
            <li>Integração com ERP de produção (Carga Máquina)</li>
            <li>Consulta a índices financeiros e calendários oficiais</li>
          </ul>
        </div>

        {/* Princípios */}
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Princípios Arquiteturais</h3>
          <p className="p">
            As decisões arquiteturais seguem princípios claros para garantir
            longevidade, auditabilidade e clareza operacional.
          </p>
          <ul style={{ marginTop: "0.85rem", paddingLeft: "1.1rem" }}>
            <li>Rastreabilidade antes de estética</li>
            <li>Auditabilidade como requisito, não como extra</li>
            <li>Simplicidade estrutural com separação de domínios</li>
            <li>Resiliência para ambiente industrial</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
