import ModuleCard from "./ModuleCard";
import type { Module } from "../data/types";

export default function ModuleSection({ module }: { module: Module }) {
  return (
    <section
      id={module.id}
      className="section"
      aria-label={`Módulo ${module.name}`}
      style={{ scrollMarginTop: "86px" }}
    >
      <div className="container">
        {/* Orientação rápida para quem chega via âncora */}
        <div className="kicker" style={{ marginBottom: "0.75rem" }}>
          {module.icon} {module.name}
        </div>

        <ModuleCard module={module} />
      </div>
    </section>
  );
}
