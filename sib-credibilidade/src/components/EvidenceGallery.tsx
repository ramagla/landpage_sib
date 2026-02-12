import Section from "./Section";
import { modules } from "../data/modules";
import type { Evidence } from "../data/types";

type GalleryItem = {
  module: (typeof modules)[number];
  feature: (typeof modules)[number]["features"][number];
  firstEvidence: Evidence;
  evidenceCount: number;
};

function clampText(input: string, max = 180) {
  const text = (input || "").replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
}

export default function EvidenceGallery() {
  const items: GalleryItem[] = modules
    .flatMap((m) =>
      m.features
        .filter((f) => (f.evidence?.length ?? 0) > 0)
        .map((f) => {
          const first = (f.evidence ?? [])[0] as Evidence;
          return {
            module: m,
            feature: f,
            firstEvidence: first,
            evidenceCount: f.evidence?.length ?? 0,
          };
        })
    );

  if (items.length === 0) {
    return (
      <Section
        id="evidencias"
        kicker="Prova visual"
        title="Evidências"
        subtitle="Adicione prints e vídeos em cada funcionalidade para habilitar a galeria."
      >
        <div className="card readMax">
          <p className="p" style={{ marginTop: "0.5rem" }}>
            Ainda não há evidências configuradas. Para habilitar esta seção, preencha o campo{" "}
            <code>evidence</code> nas features do arquivo <code>src/data/modules.ts</code>.
          </p>
          <p className="small" style={{ marginTop: "0.75rem" }}>
            Dica: salve as mídias em <code>public/media/images</code> e <code>public/media/videos</code>.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="evidencias"
      kicker="Prova visual"
      title="Evidências"
      subtitle="Validação rápida: prints e vídeos por funcionalidade. Clique para ir direto ao módulo correspondente."
    >
      {/* Guia rápido (escaneabilidade) */}
      <div className="card soft readMax" style={{ marginBottom: "1rem" }}>
        <div className="kicker">Como usar esta galeria</div>
        <ul className="leadList">
          <li>1) Use os cards para validar rapidamente a funcionalidade.</li>
          <li>2) Clique em “abrir” para ir direto ao módulo e ver detalhes.</li>
          <li>3) Prefira evidências curtas: 1 print + 1 vídeo por recurso crítico.</li>
        </ul>
      </div>

      <div className="grid grid-3">
        {items.map(({ module, feature, firstEvidence, evidenceCount }) => {
          const previewIcon = firstEvidence.kind === "video" ? "▶" : "⤢";

          return (
            <a
              key={`${module.id}-${feature.title}`}
              href={`#${module.id}`}
              className="card moduleCard"
              style={{ display: "block" }}
              title={`Ir para ${module.name}`}
              aria-label={`Abrir módulo ${module.name} e ver a funcionalidade ${feature.title}`}
            >
              <div className="kicker">
                {module.icon} {module.name}
              </div>

              <h3 style={{ margin: "0.4rem 0 0" }}>{feature.title}</h3>

              {/* Preview (prova visual) */}
              <div style={{ marginTop: "0.75rem" }}>
                <div className="media mediaFrame16x9" style={{ position: "relative" }}>
                  {firstEvidence.kind === "video" ? (
                    <video src={firstEvidence.src} preload="metadata" muted playsInline />
                  ) : (
                    <img src={firstEvidence.src} alt={firstEvidence.title} loading="lazy" />
                  )}

                  {/* Reaproveita overlay do design system */}
                  <div className="overviewMediaOverlay" aria-hidden="true" style={{ opacity: 1 }}>
                    <span className="overviewPlayIcon">{previewIcon}</span>
                  </div>
                </div>
              </div>

              {/* Prévia de descrição (sem despejar texto longo) */}
              <p className="p readMax" style={{ marginTop: "0.75rem" }}>
                {clampText(feature.description, 190)}
              </p>

              <div className="badges" style={{ marginTop: "0.85rem" }}>
                <span className="badge">{evidenceCount} evidência(s)</span>
                <span className="badge">abrir →</span>
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
