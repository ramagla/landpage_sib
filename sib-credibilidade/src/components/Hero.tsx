import { site } from "../data/site";

export default function Hero() {
  return (
    <header
      className="section"
      style={{ borderTop: "none", paddingTop: "2.25rem" }}
    >
      <div className="container">
        <div className="card soft">
          {/* Marca + headline */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              src="/media/images/sib_logo.png"
              alt="SIB"
              className="heroLogo"
            />

            <div>
              <div className="kicker">{site.productName}</div>

              <h1 className="h1">{site.title}</h1>

            <p className="p" style={{ marginTop: "0.35rem" }}>
              Sistema em produção, orientado aos requisitos da norma automotiva IATF 16949,
              com foco em rastreabilidade, auditoria e governança operacional.
            </p>


              {/* Prova rápida */}
              <div className="badges" style={{ marginTop: "0.75rem" }}>
                <span className="badge">em produção</span>
                <span className="badge">módulos reais</span>
                <span className="badge">evidências visuais</span>
                <span className="badge">IATF 16949</span>
                <span className="badge">LGPD</span>
              </div>
            </div>
          </div>

          <hr className="sep" />

          {/* Introdução curta — sem explicar demais */}
          <div className="grid grid-3">
            <div className="card">
              <div className="kicker">🎯 Objetivo</div>
              <p className="p">
                Demonstrar o SIB em funcionamento, com módulos reais do SGQ e
                fluxos auditáveis.
              </p>
            </div>

            <div className="card">
              <div className="kicker">👀 O que você verá</div>
              <p className="p">
                Telas reais, registros, documentos e evidências visuais por
                funcionalidade.
              </p>
            </div>

            <div className="card">
              <div className="kicker">🧭 Como explorar</div>
              <p className="p">
                Navegue pelos módulos e aprofunde conforme o interesse técnico
                ou de auditoria.
              </p>
            </div>
          </div>

          {/* Tecnologia — apenas sinalização */}
          <div className="card" style={{ marginTop: "1rem" }}>
            <div className="kicker">Tecnologia</div>
            <p className="p">
              Django (Python), banco relacional, geração de documentos e
              automações por módulo.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
