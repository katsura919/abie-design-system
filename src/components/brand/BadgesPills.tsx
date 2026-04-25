function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      className="card-brand mb-4"
      style={{ borderRadius: "var(--r-xl)", padding: 32 }}
    >
      <p className="label-mono mb-5" style={{ color: "var(--muted-foreground)" }}>
        {label}
      </p>
      {children}
    </div>
  );
}

function LiveDot({ color }: { color: "red" | "green" | "amber" }) {
  const colors = {
    red: { bg: "#ef4444", shadow: "rgba(239,68,68,0.5)" },
    green: { bg: "#34d399", shadow: "rgba(52,211,153,0.5)" },
    amber: { bg: "#fbbf24", shadow: "rgba(251,191,36,0.5)" },
  };
  return (
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: colors[color].bg,
        display: "inline-block",
        animation: "pulse-dot 2s infinite",
      }}
    />
  );
}

export default function BadgesPills() {
  return (
    <div>
      <p className="label-mono mb-3" style={{ color: "var(--muted-foreground)" }}>
        04.2 ~ Badges & Pills
      </p>
      <h2
        className="headline-brand mb-3"
        style={{ fontSize: "clamp(48px, 6vw, 72px)" }}
      >
        Mono <em>labels.</em>
        <br />
        Soft-fill <em>pills.</em>
      </h2>
      <p
        className="text-serif mb-10"
        style={{ fontSize: 18, color: "var(--muted-foreground)", maxWidth: 600 }}
      >
        Tiny uppercase mono labels do most of the meta-information lifting. The
        status pill is THE most-used component.
      </p>

      {/* Status pills */}
      <Row label="~ Status pill (the workhorse)">
        <div className="flex flex-wrap gap-3">
          <span className="badge-status">⚡ Creator × Engineer</span>
          <span className="badge-status">~ Live in Madrid</span>
          <span className="badge-status">New ~ this week</span>
          <span className="badge-status">Featured</span>
        </div>
      </Row>

      {/* Category chips */}
      <Row label="~ Category chips & meta">
        <div className="flex flex-wrap gap-3">
          <span className="chip">Playbook</span>
          <span className="chip">Visa</span>
          <span className="chip">Tools</span>
          <span className="chip-peach">Phase 01</span>
          <span className="chip-peach">~4.5 hrs</span>
          <span className="chip-peach">12 lessons</span>
        </div>
      </Row>

      {/* Live status & section numbers */}
      <Row label="~ Live status & section numbers">
        <div className="flex flex-wrap items-center gap-7">
          <span
            className="flex items-center gap-2 label-mono"
            style={{ color: "var(--muted-foreground)" }}
          >
            <LiveDot color="red" /> Latest on YouTube
          </span>
          <span
            className="flex items-center gap-2 label-mono"
            style={{ color: "var(--muted-foreground)" }}
          >
            <LiveDot color="green" /> Live now
          </span>
          <span
            className="flex items-center gap-2 label-mono"
            style={{ color: "var(--muted-foreground)" }}
          >
            <LiveDot color="amber" /> Building
          </span>
          <span
            className="text-serif"
            style={{ fontSize: 22, color: "var(--muted-foreground)" }}
          >
            01 ~ Who I Am
          </span>
          <span
            className="label-mono"
            style={{ color: "rgba(58,58,58,0.4)" }}
          >
            01 / 06
          </span>
        </div>
      </Row>

      {/* Pills on imagery */}
      <Row label="~ Pills on imagery (frosted glass)">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "~ Visa", idx: "01", title: "Reverse", accent: "geo-arbitrage", gradient: "linear-gradient(180deg, rgba(58,58,58,0.4), rgba(58,58,58,0.95)), radial-gradient(circle at 30% 20%, #a89282 0%, #4a3a30 70%)" },
            { label: "~ Systems", idx: "02", title: "The", accent: "nomad OS", gradient: "linear-gradient(180deg, rgba(58,58,58,0.4), rgba(58,58,58,0.95)), radial-gradient(circle at 70% 30%, #c8b8a0 0%, #5a4a3a 70%)" },
          ].map((m) => (
            <div
              key={m.idx}
              className="relative flex flex-col justify-between"
              style={{
                borderRadius: "var(--r-xl)",
                padding: 18,
                height: 180,
                background: m.gradient,
              }}
            >
              <div className="flex justify-between">
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "var(--r-full)",
                    padding: "5px 12px",
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: 8,
                    textTransform: "uppercase",
                    letterSpacing: "var(--tr-mono)",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {m.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: 9,
                    letterSpacing: "var(--tr-mono)",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  {m.idx}
                </span>
              </div>
              <h4
                className="headline-brand"
                style={{ fontSize: 22, color: "white", maxWidth: 280 }}
              >
                {m.title} <em>{m.accent}</em>
              </h4>
            </div>
          ))}
        </div>
      </Row>
    </div>
  );
}
