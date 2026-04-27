const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide5({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden dark"
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        borderRadius: 18 * scale,
      }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col box-border"
        style={{
          width: 1080,
          height: 1350,
          padding: 72,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        {/* grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
            }}
          >
            ~ no tech needed
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
            }}
          >
            05 / 07
          </span>
        </div>

        {/* body — pull quote */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 160,
              lineHeight: 0.5,
              color: "var(--primary)",
              opacity: 0.3,
              display: "block",
              marginBottom: 28,
              userSelect: "none",
            }}
          >
            &ldquo;
          </span>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 56,
              lineHeight: 1.25,
              margin: 0,
              maxWidth: 860,
            }}
          >
            No pressure. No overwhelm. Just{" "}
            <span style={{ color: "var(--primary)" }}>real guidance</span> and
            live demos that actually stick.
          </p>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 28,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              opacity: 0.55,
              marginTop: 48,
            }}
          >
            BEGINNER-FRIENDLY. WOMEN-FOCUSED. FREE.
          </p>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginTop: 20,
            }}
          >
            ~ Abie Maxey
          </p>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
            }}
          >
            abiemaxey.com
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.55,
            }}
          >
            Swipe →
          </span>
        </div>
      </div>
    </div>
  );
}
