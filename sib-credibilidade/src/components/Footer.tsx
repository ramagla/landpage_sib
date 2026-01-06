import { site } from "../data/site";

export default function Footer() {
  return (
    <footer id="contato" className="section">
      <div className="container">
        <div className="card soft">
          <div className="kicker">Contato / Referências</div>

          <h2 style={{ margin: "0.35rem 0 0" }}>
            Contato direto e validação
          </h2>

          {/* badges logo abaixo do título */}
          <div className="badges" style={{ marginTop: "0.5rem" }}>
            <span className="badge">🔒 sem coleta de leads</span>
            <span className="badge">🧪 validação técnica</span>
            <span className="badge">📨 contato direto</span>
          </div>

          <p className="p">
            Esta página não coleta leads. Para validar histórico profissional,
            repositórios ou entrar em contato sobre oportunidades, utilize os
            canais abaixo.
          </p>

          {/* canais de contato */}
          <div className="badges" style={{ marginTop: "1rem" }}>
            <a
              className="badge"
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              💼 LinkedIn (histórico) →
            </a>

            <a
              className="badge"
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              🧑‍💻 GitHub (repositórios) →
            </a>

            <a className="badge" href={`mailto:${site.contact.email}`}>
              ✉️ E-mail →
            </a>

            <a
              className="badge"
              href={site.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 WhatsApp →
            </a>
          </div>

          <hr className="sep" />

          <p className="small">
            🛡️ <strong>LGPD:</strong> evidências (prints, vídeos e PDFs) permanecem
            sem dados sensíveis, com mascaramento quando necessário. O foco é
            comprovar fluxos, governança e aderência normativa — não expor
            informações pessoais.
          </p>

          <p className="small" style={{ marginTop: "0.75rem" }}>
            <strong style={{ color: "var(--text)" }}>
              ✅ Resultado que importa: sistemas auditáveis, rastreáveis e
              sustentáveis em produção.
            </strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
