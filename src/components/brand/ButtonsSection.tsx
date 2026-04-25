function Row({
  label,
  dark,
  children,
}: {
  label: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className="mb-4"
      style={{
        background: dark ? "var(--foreground)" : "var(--card)",
        border: dark ? "1px solid var(--foreground)" : "1px solid var(--border)",
        borderRadius: "var(--r-xl)",
        padding: 36,
      }}
    >
      <p
        className="label-mono mb-6"
        style={{ color: dark ? "var(--primary)" : "var(--muted-foreground)" }}
      >
        {label}
      </p>
      <div className="flex flex-wrap gap-4 items-center">{children}</div>
    </div>
  );
}

/* Arrow chip for the primary CTA button */
function ArrowChip({ dark }: { dark?: boolean }) {
  return (
    <span
      className="flex items-center justify-center"
      style={{
        width: 32,
        height: 32,
        background: dark
          ? "rgba(58,58,58,0.12)"
          : "rgba(249,245,242,0.15)",
        borderRadius: "50%",
      }}
    >
      <svg
        width={12}
        height={12}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: dark ? "var(--foreground)" : "var(--background)" }}
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </span>
  );
}

function ArrowIcon({ up }: { up?: boolean }) {
  return up ? (
    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  ) : (
    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const annotations = [
  { num: "01", title: "Pill, no exception", desc: "All buttons use border-radius: 9999px. Square buttons aren't in the system." },
  { num: "02", title: "Two weights only", desc: "Sans 700 for button labels. UPPERCASE, tracking-widest, never sentence-case." },
  { num: "03", title: "Arrow always", desc: "→ inline, or → in a nested chip on primary. ↗ for external links." },
];

export default function ButtonsSection() {
  const primaryBase = {
    display: "inline-flex",
    alignItems: "center",
    gap: 16,
    borderRadius: "var(--r-full)",
    padding: "6px 6px 6px 24px",
    fontFamily: "var(--font-host-grotesk)",
    fontWeight: 700,
    fontSize: 13,
    textTransform: "uppercase" as const,
    letterSpacing: "var(--tr-widest)",
    border: 0,
    cursor: "pointer",
  };

  const monoLink = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    color: "var(--muted-foreground)",
    fontFamily: "var(--font-geist-mono)",
    fontWeight: 400,
    fontSize: 10,
    textTransform: "uppercase" as const,
    letterSpacing: "var(--tr-mono)",
    background: "transparent",
    border: 0,
    cursor: "pointer",
  };

  const linkBtn = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "transparent",
    fontFamily: "var(--font-host-grotesk)",
    fontWeight: 700,
    fontSize: 11,
    textTransform: "uppercase" as const,
    letterSpacing: "var(--tr-widest)",
    border: 0,
    cursor: "pointer",
    padding: "6px 0",
  };

  return (
    <div>
      <p className="label-mono mb-3" style={{ color: "var(--muted-foreground)" }}>
        04.1 ~ Buttons
      </p>
      <h2
        className="headline-brand mb-3"
        style={{ fontSize: "clamp(48px, 6vw, 72px)" }}
      >
        Pill-shaped. <em>Always.</em>
      </h2>
      <p
        className="text-serif mb-10"
        style={{ fontSize: 18, color: "var(--muted-foreground)", maxWidth: 580 }}
      >
        Three registers, each with one job. The chip-arrow primary CTA is the
        brand's most recognisable interaction element.
      </p>

      {/* Primary CTA light */}
      <Row label="~ Primary CTA · 'Work with me' pattern">
        <button
          style={{
            ...primaryBase,
            background: "var(--foreground)",
            color: "var(--background)",
          }}
        >
          Work with me
          <ArrowChip />
        </button>
        <button
          style={{
            ...primaryBase,
            background: "var(--foreground)",
            color: "var(--background)",
          }}
        >
          Read the post
          <ArrowChip />
        </button>
        <button style={monoLink}>
          <ArrowIcon /> Book a Call
        </button>
      </Row>

      {/* Primary on dark */}
      <Row label="~ Primary on dark surfaces" dark>
        <button
          style={{
            ...primaryBase,
            background: "var(--background)",
            color: "var(--foreground)",
          }}
        >
          Sign up free
          <ArrowChip dark />
        </button>
        <button className="btn-primary">Work with me</button>
        <button
          style={{
            ...linkBtn,
            color: "rgba(249,245,242,0.5)",
          }}
        >
          Subscribe <ArrowIcon />
        </button>
      </Row>

      {/* Secondary & tertiary */}
      <Row label="~ Secondary & tertiary">
        <button className="btn-outline">
          All Posts <ArrowIcon />
        </button>
        <button style={{ ...linkBtn, color: "var(--muted-foreground)" }}>
          All Playbooks <ArrowIcon />
        </button>
        <button style={monoLink}>
          Browse all tools <ArrowIcon />
        </button>
        <button style={monoLink}>
          hello@abiemaxey.com <ArrowIcon up />
        </button>
      </Row>

      {/* Annotations */}
      <div
        className="grid grid-cols-3 mt-4"
        style={{
          border: "1px solid var(--border)",
          borderRadius: "var(--r-xl)",
          overflow: "hidden",
        }}
      >
        {annotations.map((a, i) => (
          <div
            key={a.num}
            style={{
              padding: 24,
              borderRight:
                i < annotations.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <div
              className="headline-brand"
              style={{ fontSize: 32, color: "var(--primary)", lineHeight: 1 }}
            >
              {a.num}
            </div>
            <div
              style={{
                fontFamily: "var(--font-host-grotesk)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontSize: 12,
                margin: "12px 0 6px",
              }}
            >
              {a.title}
            </div>
            <p
              className="text-serif"
              style={{
                fontSize: 13,
                lineHeight: 1.5,
                color: "var(--muted-foreground)",
              }}
            >
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
