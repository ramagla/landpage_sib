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
  const headingId = id ? `${id}-title` : undefined;
  const descId = id && subtitle ? `${id}-subtitle` : undefined;

  return (
    <section
      id={id}
      className="section"
      aria-labelledby={headingId}
      aria-describedby={descId}
      style={{ scrollMarginTop: "86px" }}
    >
      <div className="container">
        <div style={{ marginBottom: "1.25rem" }}>
          {kicker ? <div className="kicker">{kicker}</div> : null}

          <h2 id={headingId} style={{ margin: "0.4rem 0 0" }}>
            {title}
          </h2>

          {subtitle ? (
            <p id={descId} className="p readMax">
              {subtitle}
            </p>
          ) : null}
        </div>

        {children}
      </div>
    </section>
  );
}
