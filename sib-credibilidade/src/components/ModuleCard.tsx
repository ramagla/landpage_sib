import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import type { Evidence, Feature, Module } from "../data/types";

function collectEvidences(features: Feature[]): Evidence[] {
  const all = features.flatMap((f) => f.evidence ?? []);
  const map = new Map<string, Evidence>();

  for (const ev of all) {
    map.set(`${ev.kind}:${ev.src}`, ev);
  }

  return Array.from(map.values());
}

function renderFeatureDescription(description: string) {
  const lines = (description || "")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const blocks: Array<
    | { type: "h"; text: string }
    | { type: "p"; text: string }
    | { type: "ul"; items: string[] }
  > = [];

  let pendingList: string[] = [];

  const flushList = () => {
    if (pendingList.length) {
      blocks.push({ type: "ul", items: pendingList });
      pendingList = [];
    }
  };

  for (const line of lines) {
    const isHeading = line.startsWith("🔹");
    const isBullet = line.startsWith("•");

    if (isHeading) {
      flushList();
      blocks.push({ type: "h", text: line.replace(/^🔹\s*/, "") });
      continue;
    }

    if (isBullet) {
      pendingList.push(line.replace(/^•\s*/, ""));
      continue;
    }

    flushList();
    blocks.push({ type: "p", text: line });
  }

  flushList();

  return (
    <>
      {blocks.map((b, idx) => {
        if (b.type === "h") {
          return (
            <div key={`h-${idx}`} className="featureBlockTitle">
              {b.text}
            </div>
          );
        }

        if (b.type === "ul") {
          return (
            <ul key={`ul-${idx}`} className="featureBullets">
              {b.items.map((it, j) => (
                <li key={`li-${idx}-${j}`}>{it}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={`p-${idx}`} className="p" style={{ marginTop: "0.4rem" }}>
            {b.text}
          </p>
        );
      })}
    </>
  );
}

export default function ModuleCard({ module }: { module: Module }) {
  const [expanded, setExpanded] = useState(false);

  // Viewer (modal) para expandir mídia
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selected, setSelected] = useState<Evidence | null>(null);

  // “Ver mais detalhes” por funcionalidade (evita toggle via DOM)
  const [expandedFeatureKeys, setExpandedFeatureKeys] = useState<Set<string>>(new Set());

  const evidences = useMemo(() => collectEvidences(module.features), [module.features]);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const moduleSlug = useMemo(() => {
    return (module.id || module.name || "modulo")
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-");
  }, [module.id, module.name]);

  const detailsRegionId = `module-${moduleSlug}-details`;

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 2);
    setCanRight(el.scrollLeft < max - 2);
  }, []);

  useEffect(() => {
    updateArrows();
  }, [evidences.length, updateArrows]);

  useEffect(() => {
    const onResize = () => updateArrows();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateArrows]);

  // fecha viewer com ESC
  useEffect(() => {
    if (!viewerOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setViewerOpen(false);
        setSelected(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [viewerOpen]);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;

    const amount = 340;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const openViewer = (ev: Evidence) => {
    setSelected(ev);
    setViewerOpen(true);
  };

  const closeViewer = () => {
    setViewerOpen(false);
    setSelected(null);
  };

  const featureKey = (f: Feature) => `${moduleSlug}:${f.title}`;

  const isFeatureExpanded = (f: Feature) => expandedFeatureKeys.has(featureKey(f));

  const toggleFeatureExpanded = (f: Feature) => {
    const key = featureKey(f);
    setExpandedFeatureKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const mediaOverlayIcon = (ev: Evidence) => (ev.kind === "video" ? "▶" : "⤢");

  return (
    <div className="card moduleCard">
      <div className="moduleCardHeader">
        <div>
          <div className="kicker">Módulo</div>

          <h2 className="moduleTitle" style={{ margin: "0.25rem 0 0" }}>
            {module.icon} {module.name}
          </h2>

          <p className="p readMax" style={{ marginTop: "0.75rem" }}>
            {module.summary}
          </p>
        </div>

        <div className="moduleCardActions">
          <button
            type="button"
            className="moduleCta"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={detailsRegionId}
          >
            <span className="moduleCtaText">{expanded ? "Ocultar" : "Funcionalidades"}</span>
            <span className="moduleCtaMeta">{module.features.length}</span>
            <span className="moduleCtaIcon" aria-hidden="true">
              {expanded ? "▴" : "▾"}
            </span>
          </button>
        </div>
      </div>

      {/* Evidências do módulo */}
      {evidences.length ? (
        <div className="moduleEvidences">
          <div className="evidenceWrapper">
            {evidences.length > 3 ? (
              <button
                type="button"
                className="evidenceArrow left"
                onClick={() => scrollByAmount("left")}
                aria-label="Anterior"
                disabled={!canLeft}
                title="Anterior"
              >
                ‹
              </button>
            ) : null}

            <div
              className="evidenceGrid"
              ref={trackRef}
              onScroll={updateArrows}
              aria-label="Evidências do módulo"
            >
              {evidences.map((ev) => (
                <button
                  key={`${ev.kind}-${ev.src}`}
                  type="button"
                  className="evidenceItem"
                  onClick={() => openViewer(ev)}
                  title="Clique para ampliar"
                  aria-label={`Abrir evidência: ${ev.title}`}
                >
                  <div className="media mediaFrame16x9" style={{ position: "relative" }}>
                    {ev.kind === "video" ? (
                      <video src={ev.src} preload="metadata" muted playsInline />
                    ) : (
                      <img src={ev.src} alt={ev.title} loading="lazy" />
                    )}

                    <div className="overviewMediaOverlay" aria-hidden="true">
                      <span className="overviewPlayIcon">{mediaOverlayIcon(ev)}</span>
                    </div>
                  </div>

                  <div className="evidenceMeta">
                    <div className="mediaTitle">{ev.title}</div>
                    {ev.caption ? <div className="small">{ev.caption}</div> : null}
                  </div>
                </button>
              ))}
            </div>

            {evidences.length > 3 ? (
              <button
                type="button"
                className="evidenceArrow right"
                onClick={() => scrollByAmount("right")}
                aria-label="Próximo"
                disabled={!canRight}
                title="Próximo"
              >
                ›
              </button>
            ) : null}
          </div>
        </div>
      ) : null}

      {/* Detalhes (funcionalidades) */}
      {expanded ? (
        <div className="moduleDetails" id={detailsRegionId}>
          <h3 style={{ margin: "0 0 0.5rem" }}>Funcionalidades</h3>

          <div className="badges" style={{ margin: "0.75rem 0 0.5rem" }}>
            <span className="badge">Destaques:</span>
            {module.features.slice(0, 3).map((f) => (
              <span key={`hl-${f.title}`} className="badge">
                ⭐ {f.title}
              </span>
            ))}
          </div>

         <div className="featureAccordion">
            {module.features.map((f) => {
              const expandedText = isFeatureExpanded(f);
              const hasEvidence = (f.evidence?.length ?? 0) > 0;
              const featurePanelId = `feature-${moduleSlug}-${f.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "")}`;

              return (
                <details key={f.title} className="featureDisclosure">
                  <summary className="featureSummary" aria-controls={featurePanelId}>
                    <span>{f.title}</span>
                  </summary>

                  <div className="featureBody" id={featurePanelId}>
                    <div className="featureTwoCol" style={{ marginTop: "0.5rem" }}>
                      <div className="featureLeft">
                        <div className="featureRichText">
                          <div className="featureIntro">
                            <span className="featureIntroIcon">📌</span>
                            <span className="featureIntroText">
                              Visão rápida: entenda o objetivo e o impacto desta funcionalidade. Use “Ver mais detalhes”
                              para o passo a passo completo.
                            </span>
                          </div>

                          <div
                            className="featureClamp"
                            style={
                              expandedText
                                ? { maxHeight: "none", overflow: "visible" }
                                : undefined
                            }
                          >
                            {renderFeatureDescription(f.description)}
                          </div>

                          <button
                            type="button"
                            className="featureMore"
                            onClick={() => toggleFeatureExpanded(f)}
                            aria-expanded={expandedText}
                          >
                            {expandedText ? "Ver menos detalhes ←" : "Ver mais detalhes →"}
                          </button>
                        </div>
                      </div>

                      {hasEvidence ? (
                        <aside className="featureRight" aria-label="Evidências da funcionalidade">
                          <div className="featureSideTitle">🧾 Evidências</div>

                          <div className="featureSideGrid">
                            {f.evidence!.map((ev) => (
                              <button
                                key={`${ev.kind}-${ev.src}`}
                                type="button"
                                className="featureSideItem"
                                onClick={() => openViewer(ev)}
                                title="Clique para ampliar"
                                aria-label={`Abrir evidência: ${ev.title}`}
                              >
                                <div className="media mediaFrame16x9" style={{ position: "relative" }}>
                                  {ev.kind === "video" ? (
                                    <video src={ev.src} preload="metadata" muted playsInline />
                                  ) : (
                                    <img src={ev.src} alt={ev.title} loading="lazy" />
                                  )}

                                  <div className="overviewMediaOverlay" aria-hidden="true">
                                    <span className="overviewPlayIcon">{mediaOverlayIcon(ev)}</span>
                                  </div>
                                </div>

                                <div className="featureSideMeta">
                                  <div className="mediaTitle">{ev.title}</div>
                                  {ev.caption ? <div className="small">{ev.caption}</div> : null}
                                </div>
                              </button>
                            ))}
                          </div>
                        </aside>
                      ) : null}
                    </div>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      ) : null}

      {/* Viewer / Lightbox */}
      {viewerOpen && selected ? (
        <div className="viewerOverlay" role="dialog" aria-modal="true" aria-label={selected.title}>
          <div className="viewerBackdrop" onClick={closeViewer} />

          <div className="viewerModal">
            <div className="viewerTop">
              <div className="viewerTitle">
                <div className="mediaTitle">{selected.title}</div>
                {selected.caption ? <div className="small">{selected.caption}</div> : null}
              </div>

              <button type="button" className="viewerClose" onClick={closeViewer} aria-label="Fechar">
                ✕
              </button>
            </div>

            <div className="viewerBody">
              {selected.kind === "video" ? (
                <video src={selected.src} controls autoPlay preload="metadata" />
              ) : (
                <img src={selected.src} alt={selected.title} />
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
