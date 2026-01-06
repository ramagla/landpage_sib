import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { modules } from "../data/modules";

import ModuleSection from "../components/ModuleSection";
import Architecture from "../components/Architecture";
import StackAndPrinciples from "../components/StackAndPrinciples";
import Footer from "../components/Footer";

function countEvidences(moduleId: string) {
  const m = modules.find((x) => x.id === moduleId);
  if (!m) return 0;
  return m.features.reduce((acc, f) => acc + (f.evidence?.length ?? 0), 0);
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <Section
        id="visao-geral"
        kicker="Mapa do sistema"
        title="Visão Geral (por módulos reais)"
        subtitle="Cards por módulo com mídia + resumo — clique para abrir o módulo completo."
      >
        <div className="grid grid-3">
          {modules.map((m) => {
            const evidences = countEvidences(m.id);

            const firstEvidence =
              m.features.flatMap((f) => f.evidence ?? [])[0] ?? null;

            return (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="card moduleCard"
                style={{ display: "block" }}
              >
                <div className="moduleTop">
                  <h3 style={{ margin: 0 }}>
                    {m.icon} {m.name}
                  </h3>
                </div>

                {firstEvidence ? (
                  <div className="media" style={{ marginTop: "0.85rem" }}>
                    {firstEvidence.kind === "video" ? (
                      <video
                        src={firstEvidence.src}
                        controls
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={firstEvidence.src}
                        alt={firstEvidence.title}
                        loading="lazy"
                      />
                    )}
                  </div>
                ) : (
                  <div
                    className="media mediaPlaceholder"
                    style={{ marginTop: "0.85rem" }}
                  >
                    <div className="mediaPlaceholderInner">
                      <div className="kicker">Sem mídia ainda</div>
                      <p className="p" style={{ marginTop: "0.35rem" }}>
                        Adicione 1 evidência para preencher este card.
                      </p>
                    </div>
                  </div>
                )}

                <p className="p" style={{ marginTop: "0.85rem" }}>
                  {m.summary}
                </p>

                <div className="badges" style={{ marginTop: "0.95rem" }}>
                  <span className="badge">⚙ {m.features.length} funcionalidades</span>
                  <span className="badge">🧾 {evidences} evidência(s)</span>
                  <span className="badge">ver módulo →</span>
                </div>
              </a>
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
          <p className="p">
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
    </>
  );
}
