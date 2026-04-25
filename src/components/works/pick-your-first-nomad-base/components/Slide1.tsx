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

export default function Slide1({ scale }: { scale: number }) {
  return (
    <div style={{ width: 1080 * scale, height: 1080 * scale, position: "relative", borderRadius: 18 * scale, overflow: "hidden" }}>
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{ width: 1080, height: 1080, transform: `scale(${scale})`, transformOrigin: "top left", background: "#1e1b1a", color: "#f9f5f2", padding: 72, boxSizing: "border-box" }}
      >
        <GridTexture />

        <div className="relative z-10 flex justify-between items-start">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e3a99c" }}>~ Nomad HQ</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>01 / 06</span>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <h2 style={{ fontFamily: SANS, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.86, fontSize: 140, margin: 0 }}>
            Stop<br />
            picking{" "}
            <em style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", letterSpacing: 0, color: "#e3a99c", opacity: 1 }}>your</em>
            <br />
            first base{" "}
            <em style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", letterSpacing: 0, opacity: 0.85 }}>wrong.</em>
          </h2>
          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 36, lineHeight: 1.4, marginTop: 36, opacity: 0.7, maxWidth: 820 }}>
            6 months of research. Still landed somewhere that killed your flow.<br />
            Here is the framework that fixes that ~
          </p>
        </div>

        <div className="relative z-10 flex justify-between items-end">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>abiemaxey.com</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e3a99c" }}>Swipe →</span>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/overwhelmed_shocked.png"
          alt=""
          style={{ position: "absolute", right: 80, top: 180, width: 260, height: 260, objectFit: "contain", transform: "rotate(-6deg)" }}
        />
      </div>
    </div>
  );
}
