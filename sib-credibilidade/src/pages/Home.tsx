import { useCallback, useEffect, useMemo, useState } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { modules } from "../data/modules";

import ModuleSection from "../components/ModuleSection";
import Architecture from "../components/Architecture";
import StackAndPrinciples from "../components/StackAndPrinciples";
import Footer from "../components/Footer";
import type { Evidence } from "../data/types";

function countEvidences(moduleId: string) {
  const m = modules.find((x) => x.id === moduleId);
  if (!m) return 0;
  return m.features.reduce((acc, f) => acc + (f.evidence?.length ?? 0), 0);
}

export default function Home() {
  // Viewer (lightbox) para a "Visão Geral"
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selected, setSelected] = useState<Evidence | null>(null);

  const closeViewer = useCallback(() => {
    setViewerOpen(false);
    setSelected(null);
  }, []);

  const openViewer = useCallback((ev: Evidence) => {
    setSelected(ev);
    setViewerOpen(true);
  }, []);

  // Fecha viewer com ESC
  useEffect(() => {
    if (!viewerOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeViewer();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [viewerOpen, closeViewer]);

  const goToModule = useCallback((moduleId: string) => {
    window.location.hash = `#${moduleId}`;
  }, []);

  const onCardKeyDown = useCallback(
    (e: React.KeyboardEvent, moduleId: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        goToModule(moduleId);
      }
    },
    [goToModule]
  );

  const firstEvidenceByModule = useMemo(() => {
    const map = new Map<string, Evidence | null>();

    for (const m of modules) {
      const first = m.features.flatMap((f) => f.evidence ?? [])[0] ?? null;
      map.set(m.id, first);
    }

    return map;
  }, []);

  return (
    <>
      {/* Acessibilidade: pular para o conteúdo */}
      <a className="skipLink" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Nav />

      <main id="conteudo">
        <Hero />

        <Section
          id="visao-geral"
          kicker="Mapa do sistema"
          title="Visão Geral (por módulos reais)"
          subtitle="Cards por módulo com mídia + resumo — clique no card para abrir o módulo; clique na mídia para ampliar."
        >
          {/* Leitura guiada (AIDA / escaneabilidade) */}
          <div className="card soft readMax">
            <div className="kicker">Como ler em 30 segundos</div>
            <ul className="leadList">
              <li>1) Escolha um módulo pela visão geral.</li>
              <li>2) Clique na mídia para ampliar e validar evidências.</li>
              <li>3) Clique no card para ver funcionalidades e detalhes do fluxo.</li>
            </ul>
          </div>

          <div className="grid grid-3" style={{ marginTop: "1rem" }}>
            {modules.map((m) => {
              const evidences = countEvidences(m.id);
              const firstEvidence = firstEvidenceByModule.get(m.id) ?? null;

              return (
                <div
                  key={m.id}
                  role="link"
                  tabIndex={0}
                  className="card moduleCard moduleOverviewCard"
                  onClick={() => goToModule(m.id)}
                  onKeyDown={(e) => onCardKeyDown(e, m.id)}
                  aria-label={`Abrir módulo ${m.name}`}
                >
                  <div className="moduleTop">
                    <h3 style={{ margin: 0 }}>
                      {m.icon} {m.name}
                    </h3>
                  </div>

                  {firstEvidence ? (
                    <button
                      type="button"
                      className="overviewMediaButton"
                      onClick={(e) => {
                        e.stopPropagation();
                        openViewer(firstEvidence);
                      }}
                      aria-label={`Ampliar mídia: ${firstEvidence.title}`}
                      title="Clique para ampliar"
                      style={{ marginTop: "0.85rem" }}
                    >
                      <div className="media mediaFrame16x9" style={{ position: "relative" }}>
  {firstEvidence.kind === "video" ? (
    <video
      src={firstEvidence.src}
      preload="metadata"
      muted
      playsInline
    />
  ) : firstEvidence.kind === "embed" ? (
    <iframe
      src={firstEvidence.src}
      title={firstEvidence.title}
      loading="lazy"
      allow="fullscreen"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
        pointerEvents: "none",
      }}
    />
  ) : (
    <img
      src={firstEvidence.src}
      alt={firstEvidence.title}
      loading="lazy"
    />
  )}
</div>


                      <div className="overviewMediaOverlay" aria-hidden="true">
                       <span className="overviewPlayIcon">
  {firstEvidence.kind === "video"
    ? "▶"
    : firstEvidence.kind === "embed"
    ? "⧉"
    : "⤢"}
</span>

                      </div>
                    </button>
                  ) : (
                    <div
                      className="media mediaPlaceholder"
                      style={{ marginTop: "0.85rem" }}
                    >
                      <div className="mediaPlaceholderInner">
                        <div className="kicker">Sem mídia ainda</div>
                        <p className="p readMax" style={{ marginTop: "0.35rem" }}>
                          Adicione 1 evidência para preencher este card.
                        </p>
                      </div>
                    </div>
                  )}

                  <p className="p readMax" style={{ marginTop: "0.85rem" }}>
                    {m.summary}
                  </p>

                  <div className="badges" style={{ marginTop: "0.95rem" }}>
                    <span className="badge">⚙ {m.features.length} funcionalidades</span>
                    <span className="badge">🧾 {evidences} evidência(s)</span>
                    <span className="badge">ver módulo →</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        <Section
          id="modulos"
          kicker="Profundidade por domínio"
          title="Módulos e Funcionalidades"
          subtitle="Funcionalidades desenvolvidas para transformar processos operacionais em informações confiáveis, auditáveis e fáceis de gerenciar.
"
        >
          <div className="card">
            <p className="p readMax">
              Cada módulo apresenta, de forma visual, como o SIB organiza dados,
              automatiza rotinas e garante rastreabilidade ponta a ponta.
            </p>
          </div>
        </Section>

        {modules.map((m) => (
          <ModuleSection key={m.id} module={m} />
        ))}

        <Architecture />
        <StackAndPrinciples />
        <Footer />
      </main>

      {/* Viewer / Lightbox (Visão Geral) */}
      {viewerOpen && selected ? (
        <div
          className="viewerOverlay"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div className="viewerBackdrop" onClick={closeViewer} />

          <div className="viewerModal">
            <div className="viewerTop">
              <div className="viewerTitle">
                <div className="mediaTitle">{selected.title}</div>
                {selected.caption ? <div className="small">{selected.caption}</div> : null}
              </div>

              <button
                type="button"
                className="viewerClose"
                onClick={closeViewer}
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            <div className="viewerBody">
  {selected.kind === "video" ? (
    <video src={selected.src} controls autoPlay preload="metadata" />
  ) : selected.kind === "embed" ? (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 0,
        paddingTop: "56.25%",
        overflow: "hidden",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <iframe
        src={selected.src}
        title={selected.title}
        loading="lazy"
        allow="fullscreen"
        allowFullScreen={true}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  ) : (
    <img src={selected.src} alt={selected.title} />
  )}
</div>

          </div>
        </div>
      ) : null}
    </>
  );
}
