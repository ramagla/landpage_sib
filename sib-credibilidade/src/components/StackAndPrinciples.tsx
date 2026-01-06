import Section from "./Section";

export default function StackAndPrinciples() {
  return (
    <Section
      id="stack"
      kicker="Tecnologia"
      title="Stack e Padrões de Construção"
      subtitle="Aqui está o porquê das escolhas e o padrão de engenharia — não a organização do sistema."
    >
      <div className="grid grid-3">
        <div className="card">
          <div className="cardTitleRow">
            <h3 style={{ marginTop: 0 }}>🎯 Critérios de Decisão</h3>
          </div>

          <div className="badges" style={{ marginTop: "0.4rem" }}>
            <span className="badge">previsibilidade</span>
            <span className="badge">auditoria</span>
          </div>

          <p className="p">
            Stack escolhida para reduzir risco operacional e manter evolução estável em ambiente industrial.
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

          <p className="p">
            Django acelera regras e fluxos com consistência e maturidade. PostgreSQL entrega robustez
            transacional para registros críticos.
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

          <p className="p">
            Rotinas e alertas são processados fora do request para manter o sistema responsivo.
          </p>

          <ul className="archList">
            <li>Alertas e notificações</li>
            <li>Rotinas recorrentes</li>
            <li>Processamentos fora do request</li>
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

          <p className="p">
            Versionamento e branches padronizados para leitura clara do que mudou e previsibilidade de deploy.
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

          <p className="p">
            Qualidade tratada como rotina de engenharia, não como etapa final.
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

          <p className="p">
            Evidência não é “anexo”: é parte do padrão de entrega, com contexto e proteção de dados.
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
