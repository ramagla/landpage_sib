import { useEffect, useMemo, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("visao-geral");
  const [progress, setProgress] = useState<number>(0);
  const [showTop, setShowTop] = useState(false);

  const sections = useMemo(
    () => ["visao-geral", "modulos", "arquitetura", "stack", "contato"],
    []
  );

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Barra de progresso + botão voltar ao topo
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const scrollHeight = doc.scrollHeight - window.innerHeight;
      const p = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(Math.max(0, Math.min(100, p)));
      setShowTop(scrollTop > 520);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Seção ativa (IntersectionObserver)
  useEffect(() => {
    const els = sections
      .map((id) => document.getElementById(id))
      .filter((x): x is HTMLElement => Boolean(x));

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { root: null, threshold: [0.18, 0.28, 0.38] }
    );

    for (const el of els) obs.observe(el);

    return () => obs.disconnect();
  }, [sections]);

  const close = () => setOpen(false);

  return (
    <div className="nav">
      <div className="navProgress" aria-hidden="true">
        <div className="navProgressBar" style={{ width: `${progress}%` }} />
      </div>

      <div className="container">
        <div className="navInner">
          <div className="navLeft">
            <img className="navLogo" src="/media/images/sib_logo.png" alt="SIB" />
            <div className="navTitle">SIB — Smart Integrated Business</div>
          </div>

          <button
            type="button"
            className="navToggle"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="navMenu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>

          <nav id="navMenu" className={`navLinks ${open ? "isOpen" : ""}`}>
            <a
              href="#visao-geral"
              className={activeId === "visao-geral" ? "isActive" : ""}
              onClick={close}
            >
              Visão
            </a>

            <a
              href="#modulos"
              className={activeId === "modulos" ? "isActive" : ""}
              onClick={close}
            >
              Módulos
            </a>

            <a
              href="#arquitetura"
              className={activeId === "arquitetura" ? "isActive" : ""}
              onClick={close}
            >
              Arquitetura
            </a>

            <a
              href="#stack"
              className={activeId === "stack" ? "isActive" : ""}
              onClick={close}
            >
              Stack
            </a>

            <a
              href="#contato"
              className={activeId === "contato" ? "isActive" : ""}
              onClick={close}
            >
              Contato
            </a>
          </nav>
        </div>
      </div>

      {showTop ? (
        <button
          type="button"
          className="backTop"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
        >
          ↑
        </button>
      ) : null}
    </div>
  );
}
