import Section from "./Section";

export default function StackAndPrinciples() {
  return (
    <Section
      id="stack"
      kicker="Tecnologia"
      title="Stack e Padrões de Construção"
      subtitle="Aqui é o ‘porquê’ das escolhas e o padrão de engenharia — não a organização do sistema."
    >
      <div className="grid grid-3">
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Critérios de Decisão</h3>
          <p className="p">
            O stack foi escolhido para reduzir risco operacional e manter previsibilidade de evolução
            em um ambiente industrial.
          </p>
          <ul style={{ marginTop: "0.85rem", paddingLeft: "1.1rem" }}>
            <li>Confiabilidade e manutenção a longo prazo</li>
            <li>Facilidade de auditoria e rastreio de mudanças</li>
            <li>Entrega incremental sem “quebrar” o fluxo</li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Por que Django + PostgreSQL</h3>
          <p className="p">
            Django acelera regras e fluxos com consistência (admin, ORM, segurança e maturidade do ecossistema).
            PostgreSQL entrega robustez transacional para registros críticos.
          </p>
          <div className="badges" style={{ marginTop: "0.85rem" }}>
            <span className="badge">Django 4.2.16</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Monólito modular</span>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Assíncrono onde faz sentido</h3>
          <p className="p">
            Celery/Redis é usado para rotinas e alertas, evitando travar operações e mantendo o sistema responsivo.
          </p>
          <ul style={{ marginTop: "0.85rem", paddingLeft: "1.1rem" }}>
            <li>Alertas e notificações</li>
            <li>Rotinas recorrentes</li>
            <li>Processamentos fora do request</li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Padrão de Release</h3>
          <p className="p">
            SemVer e branches padronizadas garantem leitura clara do que mudou e previsibilidade para deploy.
          </p>
          <div className="badges" style={{ marginTop: "0.85rem" }}>
            <span className="badge">SemVer</span>
            <span className="badge">main / feat / hotfix</span>
            <span className="badge">Tags de release</span>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Padrão de Qualidade</h3>
          <p className="p">
            Estilo, segurança e tipagem são tratados como rotina de engenharia, não como etapa final.
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
          <h3 style={{ marginTop: 0 }}>Evidência como Entregável</h3>
          <p className="p">
            Prints, vídeos e PDFs não são “anexos”: são parte do padrão de entrega, com contexto e LGPD.
          </p>
          <ul style={{ marginTop: "0.85rem", paddingLeft: "1.1rem" }}>
            <li>Contexto técnico do que a evidência comprova</li>
            <li>Dados sensíveis mascarados</li>
            <li>Documentos gerados via WeasyPrint</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
