const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide7({ scale }: { scale: number }) {
  return (
    <div style={{ width: 1080 * scale, height: 1080 * scale, position: "relative", borderRadius: 18 * scale, overflow: "hidden" }}>
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{ width: 1080, height: 1080, transform: `scale(${scale})`, transformOrigin: "top left", background: "#e3a99c", color: "#3a3a3a", padding: 72, boxSizing: "border-box" }}
      >
        <div className="flex justify-between items-start">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.6 }}>~ Want the full framework?</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.5 }}>07 / 07</span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2 style={{ fontFamily: SANS, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.9, fontSize: 120, margin: "0 0 20px" }}>
            Comment<br />
            <em style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", letterSpacing: 0, color: "#1e1b1a", opacity: 1 }}>"prompt"</em>
          </h2>

          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 40, lineHeight: 1.4, marginTop: 16, opacity: 0.85, maxWidth: 860 }}>
            ~ I'll DM you the prompt framework I use every day to run my three businesses from Madrid.
          </p>

          <div style={{ display: "inline-flex", alignItems: "center", gap: 24, background: "#1e1b1a", color: "#f9f5f2", borderRadius: 9999, padding: "14px 14px 14px 48px", fontFamily: SANS, fontWeight: 700, fontSize: 32, textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 40, alignSelf: "flex-start" }}>
            Drop a comment
            <span style={{ width: 60, height: 60, background: "#e3a99c", color: "#3a3a3a", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>→</span>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.5 }}>abiemaxey.com</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>~ save · share · steal</span>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/thumbs_up.png"
          alt=""
          style={{ position: "absolute", right: 112, bottom: 440, width: 200, height: 200, objectFit: "contain", transform: "rotate(-6deg)" }}
        />
      </div>
    </div>
  );
}
