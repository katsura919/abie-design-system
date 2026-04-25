const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const CHIPS = ["TIMEZONE", "COST", "VISA", "SCENE"];

export default function Slide4({ scale }: { scale: number }) {
  return (
    <div style={{ width: 1080 * scale, height: 1080 * scale, position: "relative", borderRadius: 18 * scale, overflow: "hidden" }}>
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{ width: 1080, height: 1080, transform: `scale(${scale})`, transformOrigin: "top left", background: "#e3a99c", color: "#3a3a3a", padding: 72, boxSizing: "border-box" }}
      >
        <div className="flex justify-between items-start">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3a3a3a", opacity: 0.5 }}>~ Spain</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>04 / 06</span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2 style={{ fontFamily: SANS, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.9, fontSize: 108, margin: 0 }}>
            Why{" "}
            <em style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", letterSpacing: 0 }}>Spain</em>
            <br />keeps winning
          </h2>
          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 36, lineHeight: 1.4, marginTop: 28, opacity: 0.75, maxWidth: 820 }}>
            Every criteria hits. Not a coincidence. Madrid and Barcelona score top 3 on all five.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 14px", marginTop: 48, alignItems: "center" }}>
            {CHIPS.flatMap((chip, i, arr) => [
              <span
                key={chip}
                style={{ fontFamily: SANS, fontWeight: 900, fontSize: 38, textTransform: "uppercase", background: "rgba(58,58,58,0.92)", color: "#f9f5f2", padding: "14px 24px", borderRadius: 9999 }}
              >
                {chip}
              </span>,
              ...(i < arr.length - 1
                ? [<span key={`plus${i}`} style={{ fontFamily: MONO, fontSize: 32, opacity: 0.5 }}>+</span>]
                : []),
            ])}
          </div>

          <div style={{ marginTop: 48, background: "rgba(58,58,58,0.08)", border: "1px solid rgba(58,58,58,0.16)", borderRadius: 24, padding: "36px 44px" }}>
            <span style={{ fontFamily: MONO, fontSize: 18, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3a3a3a", opacity: 0.6, marginBottom: 12, display: "block" }}>~ CET / CEST — perfect for US East Coast mornings</span>
            <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 34, lineHeight: 1.5, margin: 0 }}>
              Digital nomad visa live since 2023. 90-day Schengen for US passports. Affordable compared to any Western European capital.
            </p>
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
