import Section from "./Section";

export default function StackAndPrinciples() {
  return (
    <Section
      id="stack"
      kicker="Tecnologia"
      title="Stack e Padrões de Construção"
      subtitle="Aqui está o porquê das escolhas e o padrão de engenharia — não a organização do sistema."
    >
      {/* Guia rápido (escaneabilidade / AIDA) */}
      <div className="card soft readMax" style={{ marginBottom: "1rem" }}>
        <div className="kicker">Como interpretar</div>
        <ul className="leadList">
          <li>1) Critérios de decisão: por que essa stack funciona no chão de fábrica.</li>
          <li>2) Padrões de entrega: como garantir previsibilidade e auditoria.</li>
          <li>3) Evidência: como a prova entra no fluxo sem expor dados (LGPD).</li>
        </ul>
      </div>

      <div className="grid grid-3">
        <div className="card">
          <div className="cardTitleRow">
            <h3 style={{ marginTop: 0 }}>🎯 Critérios de Decisão</h3>
          </div>

          <div className="badges" style={{ marginTop: "0.4rem" }}>
            <span className="badge">previsibilidade</span>
            <span className="badge">auditoria</span>
          </div>

          <p className="p readMax">
            Stack escolhida para reduzir risco operacional e manter evolução estável em ambiente industrial,
            sem perder rastreabilidade.
          </p>

          <ul className="archList">
            <li>Confiabilidade e manutenção a longo prazo</li>
            <li>Facilidade de auditoria e rastreio de mudanças</li>
            <li>Entrega incremental sem “quebrar” fluxo</li>
          </ul>
        </div>

        <div className="card">
          <div className="cardTitleRow">
            <h3 style={{ marginTop: 0 }}>🐍 Por que Django + PostgreSQL</h3>
          </div>

          <div className="badges" style={{ marginTop: "0.4rem" }}>
            <span className="badge">ORM</span>
            <span className="badge">transacional</span>
            <span className="badge">admin</span>
          </div>

          <p className="p readMax">
            Django acelera regras e fluxos com maturidade e consistência. PostgreSQL entrega robustez
            transacional para registros críticos e trilha confiável.
          </p>

          <div className="badges" style={{ marginTop: "0.85rem" }}>
            <span className="badge">Django 4.2.x</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Monólito modular</span>
          </div>
        </div>

        <div className="card">
          <div className="cardTitleRow">
            <h3 style={{ marginTop: 0 }}>⚡ Assíncrono onde faz sentido</h3>
          </div>

          <div className="badges" style={{ marginTop: "0.4rem" }}>
            <span className="badge">Celery</span>
            <span className="badge">Redis</span>
          </div>

          <p className="p readMax">
            Rotinas, alertas e processamentos são executados fora do request para manter a aplicação responsiva
            e previsível sob carga.
          </p>

          <ul className="archList">
            <li>Alertas, envios de e-mail e notificações</li>
            <li>Tarefas recorrentes e verificações periódicas</li>
            <li>Processamentos demorados fora do request</li>
          </ul>
        </div>

        <div className="card">
          <div className="cardTitleRow">
            <h3 style={{ marginTop: 0 }}>🚀 Padrão de Release</h3>
          </div>

          <div className="badges" style={{ marginTop: "0.4rem" }}>
            <span className="badge">SemVer</span>
            <span className="badge">branches</span>
          </div>

          <p className="p readMax">
            Versionamento e branches padronizados para leitura clara do que mudou e previsibilidade de deploy,
            com histórico rastreável.
          </p>

          <div className="badges" style={{ marginTop: "0.85rem" }}>
            <span className="badge">main</span>
            <span className="badge">feat</span>
            <span className="badge">hotfix</span>
            <span className="badge">tags</span>
          </div>
        </div>

        <div className="card">
          <div className="cardTitleRow">
            <h3 style={{ marginTop: 0 }}>✅ Padrão de Qualidade</h3>
          </div>

          <div className="badges" style={{ marginTop: "0.4rem" }}>
            <span className="badge">estilo</span>
            <span className="badge">tipagem</span>
            <span className="badge">segurança</span>
          </div>

          <p className="p readMax">
            Qualidade tratada como rotina de engenharia: padronização, consistência e redução de risco
            antes de chegar em produção.
          </p>

          <div className="badges" style={{ marginTop: "0.85rem" }}>
            <span className="badge">black</span>
            <span className="badge">isort</span>
            <span className="badge">flake8</span>
            <span className="badge">mypy</span>
            <span className="badge">bandit</span>
          </div>
        </div>

        <div className="card">
          <div className="cardTitleRow">
            <h3 style={{ marginTop: 0 }}>🧾 Evidência como Entregável</h3>
          </div>

          <div className="badges" style={{ marginTop: "0.4rem" }}>
            <span className="badge">prints</span>
            <span className="badge">vídeos</span>
            <span className="badge">PDF</span>
          </div>

          <p className="p readMax">
            Evidência não é “anexo”: é parte do padrão de entrega. O objetivo é demonstrar fluxo e controle,
            preservando dados e contexto.
          </p>

          <ul className="archList">
            <li>Contexto técnico do que a evidência comprova</li>
            <li>Dados sensíveis mascarados (LGPD)</li>
            <li>Documentos gerados via WeasyPrint</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
