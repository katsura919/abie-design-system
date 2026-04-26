const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide2({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        borderRadius: 18 * scale,
        border: `${1 * scale}px solid rgba(58,58,58,0.08)`,
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
          border: "1px solid rgba(58,58,58,0.08)",
        }}
      >
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.6,
            }}
          >
            ~ why it changes everything
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
            02 / 07
          </span>
        </div>

        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 120,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              textTransform: "uppercase",
              margin: "0 0 32px",
            }}
          >
            Stop Working{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                color: "var(--primary)",
              }}
            >
              harder
            </em>
          </h2>
          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--primary)",
              borderRadius: 2,
              margin: "0 0 36px",
            }}
          />
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 40,
              lineHeight: 1.4,
              opacity: 0.85,
              maxWidth: 820,
              margin: "0 0 28px",
            }}
          >
            Most business owners spend 3–4 hours daily on tasks Claude handles
            in 10 minutes.
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.45,
              opacity: 0.65,
              maxWidth: 820,
              margin: 0,
            }}
          >
            Emails. Content. Client work. Business decisions. One AI. All of
            it. And this training shows you exactly how.
          </p>
        </div>

        <div
          className="flex justify-between items-end"
          style={{ marginTop: "auto", zIndex: 10 }}
        >
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
