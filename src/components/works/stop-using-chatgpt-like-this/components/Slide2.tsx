const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide2({ scale }: { scale: number }) {
  return (
    <div style={{ width: 1080 * scale, height: 1080 * scale, position: "relative", borderRadius: 18 * scale, overflow: "hidden", border: "1px solid rgba(58,58,58,0.08)" }}>
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{ width: 1080, height: 1080, transform: `scale(${scale})`, transformOrigin: "top left", background: "#f9f5f2", color: "#3a3a3a", padding: 72, boxSizing: "border-box" }}
      >
        <div className="flex justify-between items-start">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.45 }}>~ The bad prompt</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>02 / 07</span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2 style={{ fontFamily: SANS, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.9, fontSize: 120, margin: 0 }}>
            Vague in.<br />
            <em style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", letterSpacing: 0, opacity: 0.85 }}>Vague</em> out.
          </h2>

          <div style={{ background: "rgba(58,58,58,0.04)", border: "1px solid rgba(58,58,58,0.12)", borderRadius: 24, padding: "40px 48px", marginTop: 36 }}>
            <span style={{ fontFamily: MONO, fontSize: 18, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.5, marginBottom: 14, display: "block" }}>
              ~ What most people type
            </span>
            <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 36, lineHeight: 1.5, margin: 0, opacity: 0.9 }}>
              "Write me a caption."
            </p>
          </div>

          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 36, lineHeight: 1.4, marginTop: 36, opacity: 0.85 }}>
            No role. No context. No goal.<br />
            AI does what you tell it ~{" "}
            <em style={{ fontFamily: SERIF, fontStyle: "italic" }}>not</em> what you meant.
          </p>
        </div>

        <div className="flex justify-between items-end">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>abiemaxey.com</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>Swipe →</span>
        </div>
      </div>
    </div>
  );
}
