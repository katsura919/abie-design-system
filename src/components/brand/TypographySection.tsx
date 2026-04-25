const families = [
  {
    meta: "~ Sans · UI & headlines",
    name: "Host Grotesk",
    nameClass: "sans",
    role: "font-black UPPERCASE, tracking-tighter. Used for every headline, button label, nav.",
    specimen: "Weights: 400, 900 only. No 500. No 600.",
  },
  {
    meta: "~ Serif · Accent & body",
    name: "Instrument Serif",
    nameClass: "serif",
    role: "italic, lowercase. Lives inside headlines as accent words; runs body when narrative.",
    specimen: "Italic only. Body bumps +6% size for legibility.",
  },
  {
    meta: "~ Mono · Labels",
    name: "Geist Mono",
    nameClass: "mono",
    role: "9–11px, UPPERCASE, tracking-widest. Section numbers, captions, slide counters.",
    specimen: "Never below 9px. Never as body copy.",
  },
];

const scale = [
  { token: "--t-display", size: "96px", specimen: "Filipina.", specSize: 80, serif: false },
  { token: "--t-h1", size: "72px", specimen: "Latest writing", specimenAccent: "writing", specSize: 60, serif: false },
  { token: "--t-h2", size: "60px", specimen: "Free playbooks", specimenAccent: "playbooks", specSize: 50, serif: false },
  { token: "--t-h3", size: "48px", specimen: "Hi, I am Abie", specimenAccent: "I am", specSize: 40, serif: false },
  { token: "--t-h5", size: "24px", specimen: "Master Claude", specSize: 22, serif: false },
  { token: "--t-body", size: "17px", specimen: "I document what it actually takes to rebuild your life abroad.", specSize: 18, serif: true },
  { token: "--t-mono-sm", size: "10px", specimen: "01 ~ WHO I AM", specSize: 10, mono: true },
];

export default function TypographySection() {
  return (
    <div>
      <p className="label-mono mb-3" style={{ color: "var(--muted-foreground)" }}>
        02.2 ~ Typography
      </p>
      <h2
        className="headline-brand mb-3"
        style={{ fontSize: "clamp(48px, 6vw, 72px)" }}
      >
        Three <em>families.</em>
        <br />
        Two weights. <em>Done.</em>
      </h2>
      <p
        className="text-serif mb-12"
        style={{ fontSize: 18, color: "var(--muted-foreground)", maxWidth: 600 }}
      >
        Restraint is the point. With this much constraint, the type itself
        becomes the brand mark.
      </p>

      {/* Three families */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {families.map((f) => (
          <div
            key={f.name}
            className="card-brand"
            style={{ borderRadius: "var(--r-xl)", padding: 28 }}
          >
            <p
              className="label-mono mb-4"
              style={{ color: "var(--primary)" }}
            >
              {f.meta}
            </p>
            <p
              style={{
                fontSize: 36,
                lineHeight: 1.1,
                marginBottom: 12,
                color: "var(--foreground)",
                ...(f.nameClass === "sans"
                  ? {
                      fontFamily: "var(--font-host-grotesk)",
                      fontWeight: 900,
                      textTransform: "uppercase" as const,
                      letterSpacing: "var(--tr-tighter)",
                    }
                  : f.nameClass === "serif"
                  ? {
                      fontFamily: "var(--font-instrument-serif)",
                      fontStyle: "italic",
                    }
                  : {
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: 24,
                      letterSpacing: 0,
                      textTransform: "none" as const,
                    }),
              }}
            >
              {f.name}
            </p>
            <p
              className="text-serif"
              style={{
                fontSize: 14,
                color: "var(--muted-foreground)",
                lineHeight: 1.5,
              }}
            >
              {f.role}
            </p>
            <div
              style={{
                fontSize: 11,
                color: "var(--muted-foreground)",
                marginTop: 18,
                paddingTop: 14,
                borderTop: "1px solid var(--border)",
              }}
            >
              {f.specimen}
            </div>
          </div>
        ))}
      </div>

      {/* Type scale */}
      <div
        className="card-brand mb-12"
        style={{ borderRadius: "var(--r-xl)", padding: "32px clamp(24px, 4vw, 48px)" }}
      >
        <h3 className="label-mono mb-7" style={{ color: "var(--muted-foreground)" }}>
          ~ Type scale
        </h3>
        {scale.map((row, i) => (
          <div
            key={row.token}
            className="flex items-baseline gap-6"
            style={{
              padding: "14px 0",
              borderBottom:
                i < scale.length - 1 ? "1px dashed var(--border)" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "var(--muted-foreground)",
                width: 130,
                flexShrink: 0,
              }}
            >
              <span style={{ color: "var(--primary)", fontWeight: 400 }}>
                {row.token}
              </span>
              <br />
              {row.size}
            </div>
            {"mono" in row && row.mono ? (
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: row.specSize,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: "var(--foreground)",
                }}
              >
                {row.specimen}
              </span>
            ) : row.serif ? (
              <span
                className="text-serif"
                style={{ fontSize: row.specSize, color: "var(--foreground)" }}
              >
                {row.specimen}
              </span>
            ) : (
              <span
                className="headline-brand"
                style={{ fontSize: row.specSize, lineHeight: 1 }}
              >
                {row.specimenAccent
                  ? row.specimen
                      .split(row.specimenAccent)
                      .flatMap((part, idx, arr) =>
                        idx < arr.length - 1
                          ? [
                              part,
                              <em key={idx}>{row.specimenAccent}</em>,
                            ]
                          : [part]
                      )
                  : row.specimen}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Recipe demo */}
      <div className="grid grid-cols-2 gap-4">
        <div
          className="card-brand"
          style={{ borderRadius: "var(--r-xl)", padding: 36 }}
        >
          <p
            className="label-mono mb-4"
            style={{ color: "var(--primary)" }}
          >
            ~ The signature recipe (light)
          </p>
          <h2
            className="headline-brand"
            style={{ fontSize: 48, lineHeight: 0.92, margin: 0 }}
          >
            Latest <em>writing.</em>
          </h2>
          <p
            className="text-serif"
            style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.7, marginTop: 16 }}
          >
            Sans-black uppercase tight + italic lowercase serif accent.
          </p>
        </div>
        <div
          style={{
            background: "var(--foreground)",
            color: "var(--background)",
            border: "1px solid var(--foreground)",
            borderRadius: "var(--r-xl)",
            padding: 36,
          }}
        >
          <p
            className="label-mono mb-4"
            style={{ color: "var(--primary)" }}
          >
            ~ Recipe with primary highlight
          </p>
          <h2
            className="headline-brand"
            style={{ fontSize: 48, lineHeight: 0.92, margin: 0 }}
          >
            {"Let's "}
            <em style={{ color: "var(--primary)", opacity: 1 }}>talk.</em>
          </h2>
          <p
            className="text-serif"
            style={{
              fontSize: 14,
              lineHeight: 1.5,
              opacity: 0.7,
              marginTop: 16,
              color: "var(--background)",
            }}
          >
            Same recipe, primary on the accent for emphasis.
          </p>
        </div>
      </div>
    </div>
  );
}
