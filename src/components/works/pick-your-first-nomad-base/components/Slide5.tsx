const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

function GridTexture() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  );
}

const BREAKDOWN = [
  { label: "Apartment (Lavapiés / Gràcia)", value: "€750–900" },
  { label: "Coworking day pass / month", value: "€150–200" },
  { label: "Groceries + coffee out", value: "€300–350" },
  { label: "Transport + misc", value: "€80–120" },
];

export default function Slide5({ scale }: { scale: number }) {
  return (
    <div style={{ width: 1080 * scale, height: 1080 * scale, position: "relative", borderRadius: 18 * scale, overflow: "hidden" }}>
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{ width: 1080, height: 1080, transform: `scale(${scale})`, transformOrigin: "top left", background: "#1e1b1a", color: "#f9f5f2", padding: 72, boxSizing: "border-box" }}
      >
        <GridTexture />

        <div className="relative z-10 flex justify-between items-start">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e3a99c" }}>~ The Math</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>05 / 06</span>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <h2 style={{ fontFamily: SANS, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.88, fontSize: 120, margin: 0 }}>
            ~€1,400<br />
            <em style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", letterSpacing: 0, fontSize: 80, opacity: 0.75 }}>per month. all in.</em>
          </h2>

          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "32px 44px", marginTop: 36 }}>
            <span style={{ fontFamily: MONO, fontSize: 18, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e3a99c", marginBottom: 14, display: "block" }}>~ Madrid reality check</span>
            <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 32, lineHeight: 1.5, margin: 0 }}>
              Apartment in Lavapiés. Coworking pass. Groceries. Coffee. Transport. Still cheaper than a studio in Austin.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 32 }}>
            {BREAKDOWN.map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(249,245,242,0.08)", paddingBottom: 14 }}>
                <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 30, opacity: 0.7 }}>{item.label}</span>
                <span style={{ fontFamily: SANS, fontWeight: 900, fontSize: 30, letterSpacing: "-0.02em", color: "#e3a99c" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-end">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>abiemaxey.com</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>Swipe →</span>
        </div>
      </div>
    </div>
  );
}
