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
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e3a99c" }}>~ The AI Shift</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>01 / 07</span>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <h2 style={{ fontFamily: SANS, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.86, fontSize: 168, margin: 0 }}>
            Stop<br />
            using{" "}
            <em style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", letterSpacing: 0, opacity: 0.85 }}>ChatGPT</em>
            <br />
            like{" "}
            <em style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", letterSpacing: 0, color: "#e3a99c", opacity: 1 }}>this.</em>
          </h2>
          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 36, lineHeight: 1.4, marginTop: 32, opacity: 0.7, maxWidth: 820 }}>
            You are wasting its real power.<br />
            Here is the framework I use every day ~
          </p>
        </div>

        <div className="relative z-10 flex justify-between items-end">
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>abiemaxey.com</span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e3a99c" }}>Swipe →</span>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/shouting_megaphone.png"
          alt=""
          style={{ position: "absolute", right: 128, top: 192, width: 240, height: 240, objectFit: "contain", transform: "rotate(8deg)" }}
        />
      </div>
    </div>
  );
}
