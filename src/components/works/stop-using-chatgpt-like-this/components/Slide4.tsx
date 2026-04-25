const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const CHIPS = ["Role", "Task", "Context", "Tone", "Goal", "Format"];

export default function Slide4({ scale }: { scale: number }) {
  return (
    <div style={{ width: 1080 * scale, height: 1080 * scale, position: "relative", borderRadius: 18 * scale, overflow: "hidden" }}>
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{ width: 1080, height: 1080, transform: `scale(${scale})`, transformOrigin: "top left", background: "#e3a99c", color: "#3a3a3a", padding: 72, boxSizing: "border-box" }}
      >
        <div className="flex justify-between items-start">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>~ The formula</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.5 }}>04 / 07</span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2 style={{ fontFamily: SANS, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.9, fontSize: 120, margin: 0 }}>
            The best<br />
            <em style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", letterSpacing: 0, opacity: 0.85 }}>prompt</em><br />
            formula.
          </h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 14px", marginTop: 40, alignItems: "center" }}>
            {CHIPS.flatMap((chip, i, arr) => [
              <span
                key={chip}
                style={{ fontFamily: SANS, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", fontSize: 38, background: "rgba(58,58,58,0.92)", color: "#f9f5f2", padding: "14px 24px", borderRadius: 9999 }}
              >
                {chip}
              </span>,
              ...(i < arr.length - 1
                ? [<span key={`plus-${i}`} style={{ fontFamily: MONO, fontSize: 32, opacity: 0.5 }}>+</span>]
                : []),
            ])}
          </div>

          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 36, lineHeight: 1.4, marginTop: 40, opacity: 0.75 }}>
            Stack the six ~ and the output goes from "okay" to{" "}
            <em style={{ fontFamily: SERIF, fontStyle: "italic" }}>"who wrote this?"</em>
          </p>
        </div>

        <div className="flex justify-between items-end">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.5 }}>abiemaxey.com</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.7 }}>Swipe →</span>
        </div>
      </div>
    </div>
  );
}
