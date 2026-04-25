const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide2({ scale }: { scale: number }) {
  return (
    <div style={{ width: 1080 * scale, height: 1080 * scale, position: "relative", borderRadius: 18 * scale, overflow: "hidden" }}>
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{ width: 1080, height: 1080, transform: `scale(${scale})`, transformOrigin: "top left", background: "#f9f5f2", color: "#3a3a3a", padding: 72, boxSizing: "border-box", border: "1px solid rgba(58,58,58,0.08)" }}
      >
        <div className="flex justify-between items-start">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3a3a3a", opacity: 0.5 }}>~ The Trap</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>02 / 06</span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2 style={{ fontFamily: SANS, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.92, fontSize: 96, margin: 0 }}>
            You&apos;re doing the{" "}
            <em style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", letterSpacing: 0 }}>research</em>
            <br />wrong.
          </h2>
          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 36, lineHeight: 1.4, marginTop: 28, opacity: 0.7, maxWidth: 820 }}>
            Reddit threads. Listicles. YouTube vlogs. All vibes, no framework.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 40 }}>
            <div style={{ background: "rgba(58,58,58,0.06)", border: "1px solid rgba(58,58,58,0.12)", borderRadius: 24, padding: 36 }}>
              <div style={{ fontFamily: MONO, fontSize: 18, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c47373", marginBottom: 16 }}>~ Most people</div>
              <p style={{ fontFamily: SANS, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", fontSize: 52, lineHeight: 0.95, margin: 0 }}>
                Pick where{" "}
                <em style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", letterSpacing: 0, opacity: 0.8 }}>friends</em>
                {" "}went
              </p>
            </div>
            <div style={{ background: "rgba(58,58,58,0.06)", border: "1px solid rgba(58,58,58,0.12)", borderRadius: 24, padding: 36 }}>
              <div style={{ fontFamily: MONO, fontSize: 18, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e3a99c", marginBottom: 16 }}>~ Smart movers</div>
              <p style={{ fontFamily: SANS, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", fontSize: 52, lineHeight: 0.95, margin: 0 }}>
                Pick by{" "}
                <em style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", letterSpacing: 0, opacity: 0.8 }}>criteria</em>
                {" "}not clout
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>abiemaxey.com</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>Swipe →</span>
        </div>
      </div>
    </div>
  );
}
