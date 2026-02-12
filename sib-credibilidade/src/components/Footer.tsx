import { site } from "../data/site";

export default function Footer() {
  return (
    <footer id="contato" className="section" aria-label="Contato e referências">
      <div className="container">
        <div className="card soft">
          <div className="kicker">Contato / Referências</div>

          <h2 style={{ margin: "0.35rem 0 0" }}>Contato direto e validação</h2>

          {/* badges logo abaixo do título */}
          <div className="badges" style={{ marginTop: "0.5rem" }}>
            <span className="badge">🔒 sem coleta de leads</span>
            <span className="badge">🧪 validação técnica</span>
            <span className="badge">📨 contato direto</span>
          </div>

          <p className="p readMax" style={{ marginTop: "0.75rem" }}>
            Esta página não coleta leads. Para validar histórico profissional, repositórios e entregas
            (ou entrar em contato sobre oportunidades), utilize os canais abaixo.
          </p>

          {/* “Como validar” (reduz fricção / guia rápido) */}
          <div className="card" style={{ marginTop: "1rem" }}>
            <div className="kicker">Validação rápida (2 passos)</div>
            <ul className="leadList">
              <li>1) LinkedIn: trajetória, experiências e recomendações.</li>
              <li>2) GitHub: repositórios, qualidade de código e evolução.</li>
            </ul>
          </div>

          {/* canais de contato */}
          <div className="badges" style={{ marginTop: "1rem" }}>
            <a
              className="badge"
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir LinkedIn para validação de histórico"
              title="Abrir LinkedIn"
            >
              💼 LinkedIn (histórico) →
            </a>

            <a
              className="badge"
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir GitHub para validação de repositórios"
              title="Abrir GitHub"
            >
              🧑‍💻 GitHub (repositórios) →
            </a>

            <a
              className="badge"
              href={`mailto:${site.contact.email}`}
              aria-label="Enviar e-mail"
              title="Enviar e-mail"
            >
              ✉️ E-mail →
            </a>

            <a
              className="badge"
              href={site.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp para contato"
              title="Abrir WhatsApp"
            >
              📱 WhatsApp →
            </a>
          </div>

          <hr className="sep" />

          {/* LGPD / compliance: direto e objetivo */}
          <p className="small readMax">
            🛡️ <strong>LGPD:</strong> as evidências (prints, vídeos e PDFs) são preparadas para demonstrar
            fluxos e governança, evitando dados pessoais e aplicando mascaramento quando necessário.
          </p>

          <p className="small readMax" style={{ marginTop: "0.75rem" }}>
            <strong style={{ color: "var(--text)" }}>
              ✅ Resultado que importa: sistemas auditáveis, rastreáveis e sustentáveis em produção.
            </strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
