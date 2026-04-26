const MONO = "var(--font-geist-mono)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide6({ scale }: { scale: number }) {
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
            06 / 07
          </span>
        </div>

        <div
          className="flex flex-col justify-center flex-1"
          style={{ zIndex: 10 }}
        >
          <span
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 160,
              lineHeight: 0.5,
              color: "var(--primary)",
              opacity: 0.35,
              display: "block",
              marginBottom: 32,
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
            You don&apos;t need to understand how AI works. You just need to
            know{" "}
            <span style={{ color: "var(--primary)" }}>how to use it.</span>
          </p>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginTop: 40,
            }}
          >
            ~ Abie Maxey
          </p>
          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--primary)",
              borderRadius: 2,
              margin: "36px 0",
            }}
          />
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.45,
              opacity: 0.65,
              maxWidth: 780,
              margin: 0,
            }}
          >
            No code. No setup. No overwhelm. Just real, practical guidance on
            using Claude inside your actual business.
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
