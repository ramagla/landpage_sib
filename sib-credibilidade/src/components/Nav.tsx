export default function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <div className="navInner">
          <div className="navLeft">
            <img
              className="navLogo"
              src="/media/images/sib_logo.png"
              alt="SIB"
            />
            <div className="navTitle">SIB — Smart Integrated Business</div>
          </div>

          <nav className="navLinks">
            <a href="#visao-geral">Visão</a>
            <a href="#modulos">Módulos</a>
            <a href="#arquitetura">Arquitetura</a>
            <a href="#stack">Stack</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
