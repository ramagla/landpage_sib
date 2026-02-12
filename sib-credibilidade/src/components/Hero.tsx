import { site } from "../data/site";

export default function Hero() {
  return (
    <header
      className="section"
      style={{ borderTop: "none", paddingTop: "2.25rem" }}
      aria-label="Apresentação do SIB"
    >
      <div className="container">
        <div className="card soft">
          {/* Marca + headline */}
          <div className="heroRow">
            <img src="/media/images/sib_logo.png" alt="SIB" className="heroLogo" />

            <div>
              <div className="kicker">{site.productName}</div>
              <h1 className="h1">{site.title}</h1>

              {/* A (Atenção) + I (Interesse) */}
              <p className="p heroLead readMax">
                Plataforma em produção para transformar rotinas do SGQ em registros{" "}
                <strong style={{ color: "var(--text)" }}>rastreáveis</strong>,{" "}
                <strong style={{ color: "var(--text)" }}>auditáveis</strong> e{" "}
                <strong style={{ color: "var(--text)" }}>confiáveis</strong> — alinhada aos requisitos da IATF 16949 e boas práticas de governança.
              </p>

              {/* Prova rápida */}
              <div className="badges" style={{ marginTop: "0.75rem" }}>
                <span className="badge">em produção</span>
                <span className="badge">fluxos auditáveis</span>
                <span className="badge">módulos reais</span>
                <span className="badge">evidências visuais</span>
                <span className="badge">IATF 16949</span>
                <span className="badge">LGPD</span>
              </div>

              {/* A (Ação) — navegação guiada (sem “vender”, só orientar) */}
              <div className="badges" style={{ marginTop: "0.85rem" }}>
                <a className="badge" href="#visao-geral" aria-label="Ir para a seção Visão Geral">
                  Ver visão geral →
                </a>
                <a className="badge" href="#modulos" aria-label="Ir para a seção Módulos e Funcionalidades">
                  Ir para módulos →
                </a>
                <a className="badge" href="#arquitetura" aria-label="Ir para a seção Arquitetura">
                  Ver arquitetura →
                </a>
              </div>
            </div>
          </div>

          <hr className="sep" />

          {/* Introdução curta — escaneável, com “o que”, “como” e “por que importa” */}
          <div className="grid grid-3">
            <div className="card">
              <div className="kicker">🎯 Objetivo</div>
              <p className="p readMax">
                Exibir o SIB operando com módulos reais do SGQ, mostrando como dados viram{" "}
                <strong style={{ color: "var(--text)" }}>evidência</strong> e suporte à decisão.
              </p>
            </div>

            <div className="card">
              <div className="kicker">👀 O que você verá</div>
              <p className="p readMax">
                Telas, registros, documentos e mídias por funcionalidade — com foco em validação,
                rastreabilidade e auditoria.
              </p>
            </div>

            <div className="card">
              <div className="kicker">🧭 Como explorar</div>
              <p className="p readMax">
                Comece pela visão geral, escolha um módulo e aprofunde nas funcionalidades
                conforme seu objetivo (técnico, processo ou auditoria).
              </p>
            </div>
          </div>

          {/* Tecnologia — apenas sinalização, mais objetiva */}
          <div className="card" style={{ marginTop: "1rem" }}>
            <div className="kicker">Tecnologia</div>
            <p className="p readMax">
              Django (Python), banco relacional, geração de documentos e automações por módulo,
              com foco em consistência de dados e trilha de auditoria.
            </p>

            <div className="badges" style={{ marginTop: "0.75rem" }}>
              <span className="badge">Django</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge">Documentos</span>
              <span className="badge">Automações</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
