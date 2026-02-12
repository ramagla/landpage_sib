import Section from "./Section";

export default function Architecture() {
  return (
    <Section
      id="arquitetura"
      kicker="Arquitetura"
      title="Arquitetura e Princípios"
      subtitle="Decisões técnicas orientadas a auditoria, rastreabilidade e governança — com resultados explicáveis e verificáveis."
    >
      {/* Guia rápido (AIDA / escaneabilidade) */}
      <div className="card soft readMax" style={{ marginBottom: "1rem" }}>
        <div className="kicker">Como ler esta seção</div>
        <ul className="leadList">
          <li>1) Entenda como os módulos se separam por domínio.</li>
          <li>2) Veja onde ficam evidências, histórico e ciclo de vida.</li>
          <li>3) Confira governança (LGPD/IATF) e automações operacionais.</li>
        </ul>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="cardTitleRow">
            <h3 style={{ marginTop: 0 }}>🧩 Arquitetura por Domínio</h3>
            <div className="badges">
              <span className="badge">contextos claros</span>
              <span className="badge">regras e fluxos</span>
            </div>
          </div>

          <p className="p readMax">
            Organização por domínios reduz ambiguidade e torna regras e responsabilidades
            <strong style={{ color: "var(--text)" }}> fáceis de auditar</strong>.
          </p>

          <ul className="archList">
            <li>Técnico</li>
            <li>Qualidade de Fornecimento</li>
            <li>Controle de Qualidade</li>
            <li>Metrologia</li>
            <li>Recursos Humanos</li>
          </ul>

          <p className="small readMax" style={{ marginTop: "0.65rem" }}>
            Base: monólito Django por contexto de negócio, com regras e evidências por módulo.
          </p>
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

          <p className="p readMax">
            Stack previsível e controlável para ambiente industrial, priorizando
            <strong style={{ color: "var(--text)" }}> estabilidade</strong> e
            <strong style={{ color: "var(--text)" }}> governança</strong>.
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

          <p className="p readMax">
            Cada registro mantém trilha temporal e vínculo direto com evidências, facilitando
            <strong style={{ color: "var(--text)" }}> verificação</strong> e
            <strong style={{ color: "var(--text)" }}> auditoria</strong>.
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

          <p className="p readMax">
            Controles de acesso e rastreio de alterações fortalecem conformidade e reduzem risco
            em processos críticos.
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

          <p className="p readMax">
            Automação aplicada onde reduz risco operacional e aumenta previsibilidade do processo,
            sem “mágica” — tudo rastreável.
          </p>

          <ul className="archList">
            <li>Alertas, envios de e-mail e notificações</li>
            <li>Tarefas recorrentes e verificações periódicas</li>
            <li>Integração com ERP de produção (Carga Máquina)</li>
            <li>Consulta a índices financeiros e calendários oficiais</li>
          </ul>

          <p className="small readMax" style={{ marginTop: "0.65rem" }}>
            Onde faz sentido, o sistema antecipa falhas com alertas e reduz retrabalho com rotinas programadas.
          </p>
        </div>

        <div className="card">
          <div className="cardTitleRow">
            <h3 style={{ marginTop: 0 }}>📐 Princípios Arquiteturais</h3>
            <div className="badges">
              <span className="badge">longevidade</span>
              <span className="badge">clareza</span>
            </div>
          </div>

          <p className="p readMax">
            Decisões orientadas a auditabilidade e rastreabilidade, mantendo simplicidade onde ela
            preserva manutenção e evolução.
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
