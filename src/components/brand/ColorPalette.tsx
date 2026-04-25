const lightSwatches = [
  { name: "Background", role: "Warm off-white. The canvas.", hex: "#f9f5f2", token: "--bg", bg: "#f9f5f2", fg: "#3a3a3a", border: true },
  { name: "Foreground", role: "Charcoal. Never pure black.", hex: "#3a3a3a", token: "--fg", bg: "#3a3a3a", fg: "#f9f5f2" },
  { name: "Primary", role: "Dusty peach. The accent.", hex: "#e3a99c", token: "--primary", bg: "#e3a99c", fg: "#3a3a3a" },
  { name: "Primary Soft", role: "Hovers, tints, selection.", hex: "#f2d6c9", token: "--primary-soft", bg: "#f2d6c9", fg: "#3a3a3a" },
  { name: "Secondary", role: "Warm sand. Borders, dividers.", hex: "#e7ddd3", token: "--secondary", bg: "#e7ddd3", fg: "#3a3a3a" },
  { name: "Accent", role: "Dusty teal. Charts, data.", hex: "#bbcccd", token: "--accent", bg: "#bbcccd", fg: "#3a3a3a" },
  { name: "Card", role: "Pure white. Cards over bg.", hex: "#ffffff", token: "--card", bg: "#ffffff", fg: "#3a3a3a", border: true },
  { name: "Muted Text", role: "Captions, meta, fineprint.", hex: "#6b6b6b", token: "--muted-fg", bg: "#6b6b6b", fg: "#f9f5f2" },
];

const darkSwatches = [
  { name: "Background", role: "Deep warm-black.", hex: "#1e1b1a", token: "--bg", bg: "#1e1b1a", fg: "#f9f5f2" },
  { name: "Card", role: "Slightly lifted surface.", hex: "#272422", token: "--card", bg: "#272422", fg: "#f9f5f2" },
  { name: "Primary", role: "Same peach. Anchored.", hex: "#e3a99c", token: "--primary", bg: "#e3a99c", fg: "#1e1b1a" },
  { name: "Secondary", role: "Hairlines, surfaces.", hex: "#3d3836", token: "--secondary", bg: "#3d3836", fg: "#f9f5f2" },
];

function Swatch({ swatch }: { swatch: typeof lightSwatches[0] }) {
  return (
    <div
      className="flex flex-col justify-between"
      style={{
        background: swatch.bg,
        color: swatch.fg,
        padding: "28px 24px 24px",
        minHeight: 160,
        borderRight: "1px solid var(--border)",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-host-grotesk)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "var(--tr-tight)",
            fontSize: 13,
            lineHeight: 1.1,
          }}
        >
          {swatch.name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontStyle: "italic",
            fontSize: 12,
            lineHeight: 1.4,
            opacity: 0.7,
            marginTop: 4,
          }}
        >
          {swatch.role}
        </div>
      </div>
      <div
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: 10,
          letterSpacing: "0.1em",
          opacity: 0.6,
        }}
      >
        {swatch.hex} · {swatch.token}
      </div>
    </div>
  );
}

export default function ColorPalette() {
  return (
    <div>
      <p className="label-mono mb-3" style={{ color: "var(--muted-foreground)" }}>
        02.1 ~ Color
      </p>
      <h2
        className="headline-brand mb-3"
        style={{ fontSize: "clamp(48px, 6vw, 72px)" }}
      >
        Warm <em>paper</em>, dusty
        <br />
        <em>peach</em> as anchor.
      </h2>
      <p
        className="text-serif mb-10"
        style={{ fontSize: 18, color: "var(--muted-foreground)", maxWidth: 580 }}
      >
        One primary that lives in both light and dark. Everything else flips.
        Never fully saturated.
      </p>

      {/* Light panel */}
      <div
        className="mb-7"
        style={{
          border: "1px solid var(--border)",
          borderRadius: "var(--r-xl)",
          overflow: "hidden",
        }}
      >
        <div
          className="flex items-center gap-3 label-mono"
          style={{
            padding: "18px 28px",
            borderBottom: "1px solid var(--border)",
            color: "var(--muted-foreground)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#f9f5f2",
              border: "1px solid #e7ddd3",
              display: "inline-block",
            }}
          />
          Light · default
        </div>
        <div className="grid grid-cols-4" style={{ borderRight: "none" }}>
          {lightSwatches.map((s) => (
            <Swatch key={s.token} swatch={s} />
          ))}
        </div>
      </div>

      {/* Dark panel */}
      <div
        className="mb-7"
        style={{
          border: "1px solid #3d3836",
          borderRadius: "var(--r-xl)",
          overflow: "hidden",
          background: "#1e1b1a",
          color: "#f9f5f2",
        }}
      >
        <div
          className="flex items-center gap-3 label-mono"
          style={{
            padding: "18px 28px",
            borderBottom: "1px solid #3d3836",
            color: "#a69e9a",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#1e1b1a",
              border: "1px solid #3d3836",
              display: "inline-block",
            }}
          />
          Dark
        </div>
        <div className="grid grid-cols-4">
          {darkSwatches.map((s) => (
            <Swatch key={s.token + "-dark"} swatch={s} />
          ))}
        </div>
      </div>

      {/* Showcase */}
      <div
        style={{
          background: "var(--background)",
          border: "1px solid var(--border)",
          borderRadius: "var(--r-xl)",
          padding: "48px clamp(24px, 4vw, 56px)",
        }}
      >
        <p className="label-mono mb-4" style={{ color: "var(--muted-foreground)" }}>
          ~ Primary as highlighter
        </p>
        <h2
          className="headline-brand"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Freedom is <em>expensive.</em> And you are paying for it with your{" "}
          <em style={{ color: "var(--primary)", opacity: 1 }}>loneliness.</em>
        </h2>
        <p
          className="label-mono mt-6"
          style={{ color: "var(--muted-foreground)" }}
        >
          → Primary accents words inside headlines. Never as a flood-fill page bg.
        </p>
      </div>
    </div>
  );
}
