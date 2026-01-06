import ModuleCard from "./ModuleCard";
import type { Module } from "../data/types";

export default function ModuleSection({ module }: { module: Module }) {
  return (
    <section id={module.id} className="section">
      <div className="container">
        <ModuleCard module={module} />
      </div>
    </section>
  );
}
