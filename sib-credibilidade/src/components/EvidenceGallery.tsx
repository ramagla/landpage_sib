import Section from "./Section";
import { modules } from "../data/modules";

export default function EvidenceGallery() {
  const items = modules
    .flatMap((m) =>
      m.features
        .filter((f) => (f.evidence?.length ?? 0) > 0)
        .map((f) => ({ module: m, feature: f }))
    );

  if (items.length === 0) {
    return (
      <Section
        id="evidencias"
        kicker="Prova visual"
        title="Evidências"
        subtitle="Adicione prints e vídeos em cada funcionalidade para habilitar a galeria."
      >
        <div className="card">
          <p className="p" style={{ marginTop: "0.5rem" }}>
            Ainda não há evidências configuradas. Para habilitar esta seção, preencha
            o campo <code>evidence</code> nas features do arquivo <code>src/data/modules.ts</code>.
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
      subtitle="Galeria consolidada de prints e vídeos por funcionalidade."
    >
      <div className="grid grid-3">
        {items.map(({ module, feature }) => (
          <a
            key={`${module.id}-${feature.title}`}
            href={`#${module.id}`}
            className="card"
            style={{ display: "block" }}
            title={`Ir para ${module.name}`}
          >
            <div className="kicker">
              {module.icon} {module.name}
            </div>

            <h3 style={{ margin: "0.4rem 0 0" }}>{feature.title}</h3>

            <p className="p" style={{ marginTop: "0.5rem" }}>
              {feature.description}
            </p>

            <div className="badges" style={{ marginTop: "0.85rem" }}>
              <span className="badge">
                {(feature.evidence?.length ?? 0)} evidência(s)
              </span>
              <span className="badge">abrir →</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
