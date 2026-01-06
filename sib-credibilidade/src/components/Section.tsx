import React from "react";

export default function Section({
  id,
  kicker,
  title,
  subtitle,
  children,
}: {
  id?: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div style={{ marginBottom: "1.25rem" }}>
          {kicker ? <div className="kicker">{kicker}</div> : null}
          <h2 style={{ margin: "0.4rem 0 0" }}>{title}</h2>
          {subtitle ? <p className="p">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
