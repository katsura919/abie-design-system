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

const CRITERIA = [
  "Timezone overlap with your clients",
  "Monthly cost floor — not the average",
  "Visa path: 90-day, DNV, or residency",
  "Real coworking density — not WeWork",
  "English-friendly enough to actually live",
];

export default function Slide3({ scale }: { scale: number }) {
  return (
    <div style={{ width: 1080 * scale, height: 1080 * scale, position: "relative", borderRadius: 18 * scale, overflow: "hidden" }}>
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{ width: 1080, height: 1080, transform: `scale(${scale})`, transformOrigin: "top left", background: "#3a3a3a", color: "#f9f5f2", padding: 72, boxSizing: "border-box" }}
      >
        <GridTexture />

        <div className="relative z-10 flex justify-between items-start">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e3a99c" }}>~ The Framework</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>03 / 06</span>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <h2 style={{ fontFamily: SANS, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.9, fontSize: 100, margin: 0 }}>
            5 things that{" "}
            <em style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", letterSpacing: 0, color: "#e3a99c" }}>actually</em>
            <br />matter
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 40 }}>
            {CRITERIA.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.5, minWidth: 56, paddingTop: 8 }}>0{i + 1}</span>
                <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 36, lineHeight: 1.35, margin: 0 }}>{item}</p>
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
