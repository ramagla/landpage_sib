import Section from "./Section";

export default function Architecture() {
  return (
    <Section
      id="arquitetura"
      kicker="Arquitetura"
      title="Arquitetura e Princípios"
      subtitle="Arquitetura pensada para auditoria e rastreabilidade — com decisões explicáveis."
    >
      <div className="grid grid-2">
        <div className="card">
          <div className="cardTitleRow">
            <h3 style={{ marginTop: 0 }}>🧩 Arquitetura por Domínio</h3>
            <div className="badges">
              <span className="badge">contextos claros</span>
              <span className="badge">regras e fluxos</span>
            </div>
          </div>

          <p className="p">
            Monólito Django organizado por domínios. Cada módulo é um contexto de negócio
            com evidências e regras próprias.
          </p>

          <ul className="archList">
            <li>Técnico</li>
            <li>Qualidade de Fornecimento</li>
            <li>Controle de Qualidade</li>
            <li>Metrologia</li>
            <li>Recursos Humanos</li>
          </ul>
        </div>

        <div className="card">
          <div className="cardTitleRow">
            <h3 style={{ marginTop: 0 }}>🧱 Stack e Plataforma</h3>
            <div className="badges">
              <span className="badge">Django</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge">VM Ubuntu</span>
            </div>
          </div>

          <p className="p">
            Plataforma estável e controlável para ambiente industrial, com foco em previsibilidade.
          </p>

          <ul className="archList">
            <li>Autenticação por sessão (Django)</li>
            <li>Arquivos e evidências em armazenamento local</li>
            <li>Relatórios e documentos em PDF (WeasyPrint)</li>
            <li>Rotinas assíncronas (Celery + Redis)</li>
          </ul>
        </div>

        <div className="card">
          <div className="cardTitleRow">
            <h3 style={{ marginTop: 0 }}>🧾 Rastreabilidade e Evidência</h3>
            <div className="badges">
              <span className="badge">ciclo de vida</span>
              <span className="badge">histórico</span>
            </div>
          </div>

          <p className="p">
            Cada registro tem ciclo de vida, trilha de decisão e vínculo direto com evidências.
          </p>

          <ul className="archList">
            <li>Status: Aberto → Análise → Ação → Verificado → Encerrado</li>
            <li>Evidências: imagem, vídeo e PDF</li>
            <li>Histórico por registro com trilha temporal</li>
          </ul>
        </div>

        <div className="card">
          <div className="cardTitleRow">
            <h3 style={{ marginTop: 0 }}>🛡️ Governança, LGPD e IATF</h3>
            <div className="badges">
              <span className="badge">perfis</span>
              <span className="badge">auditoria</span>
              <span className="badge">LGPD</span>
            </div>
          </div>

          <p className="p">
            Estrutura desenhada para requisitos normativos e auditoria, com proteção de dados por padrão.
          </p>

          <ul className="archList">
            <li>Perfis de acesso por módulo</li>
            <li>Trilha de auditoria (acessos e alterações)</li>
            <li>Revisão e aprovação documental</li>
            <li>Mascaramento de dados sensíveis</li>
          </ul>
        </div>

        <div className="card">
          <div className="cardTitleRow">
            <h3 style={{ marginTop: 0 }}>⚙️ Automação e Integrações</h3>
            <div className="badges">
              <span className="badge">alertas</span>
              <span className="badge">rotinas</span>
              <span className="badge">ERP</span>
            </div>
          </div>

          <p className="p">
            Automação aplicada onde reduz risco operacional e melhora a tomada de decisão.
          </p>

          <ul className="archList">
            <li>Alertas, e-mails e notificações</li>
            <li>Tarefas recorrentes e verificações periódicas</li>
            <li>Integração com ERP de produção (Carga Máquina)</li>
            <li>Consulta a índices financeiros e calendários oficiais</li>
          </ul>
        </div>

        <div className="card">
          <div className="cardTitleRow">
            <h3 style={{ marginTop: 0 }}>📐 Princípios Arquiteturais</h3>
            <div className="badges">
              <span className="badge">longevidade</span>
              <span className="badge">clareza</span>
            </div>
          </div>

          <p className="p">
            Decisões orientadas a rastreabilidade e auditabilidade, sem complexidade desnecessária.
          </p>

          <ul className="archList">
            <li>Rastreabilidade antes de estética</li>
            <li>Auditabilidade como requisito</li>
            <li>Simplicidade com separação de domínios</li>
            <li>Resiliência para ambiente industrial</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
