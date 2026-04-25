const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide6({ scale }: { scale: number }) {
  return (
    <div style={{ width: 1080 * scale, height: 1080 * scale, position: "relative", borderRadius: 18 * scale, overflow: "hidden" }}>
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{ width: 1080, height: 1080, transform: `scale(${scale})`, transformOrigin: "top left", background: "#f9f5f2", color: "#3a3a3a", padding: 72, boxSizing: "border-box", border: "1px solid rgba(58,58,58,0.08)" }}
      >
        <div className="flex justify-between items-start">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3a3a3a", opacity: 0.5 }}>~ Your Turn</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>06 / 06</span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2 style={{ fontFamily: SANS, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.88, fontSize: 120, margin: 0 }}>
            Where are{" "}
            <em style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", letterSpacing: 0 }}>you</em>
            <br />going first?
          </h2>
          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 38, lineHeight: 1.4, marginTop: 32, opacity: 0.7, maxWidth: 820 }}>
            Drop the city in the comments.<br />I&apos;ll tell you if the math works.
          </p>

          <div
            style={{ display: "inline-flex", alignItems: "center", gap: 24, background: "#1e1b1a", color: "#f9f5f2", borderRadius: 9999, padding: "14px 14px 14px 48px", fontFamily: SANS, fontWeight: 700, fontSize: 32, textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 48, alignSelf: "flex-start" }}
          >
            Drop a comment
            <span style={{ width: 60, height: 60, background: "#e3a99c", color: "#3a3a3a", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>→</span>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>abiemaxey.com</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>~ save · share · steal</span>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/sitting_with_laptop.png"
          alt=""
          style={{ position: "absolute", right: 80, bottom: 180, width: 280, height: 280, objectFit: "contain", transform: "rotate(6deg)" }}
        />
      </div>
    </div>
  );
}
