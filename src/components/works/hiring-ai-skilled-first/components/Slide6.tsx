const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide6({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        borderRadius: 18 * scale,
        border: "1px solid rgba(58,58,58,0.08)",
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
        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--foreground)",
              opacity: 0.45,
            }}
          >
            ~ the flip
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
            06 / 08
          </span>
        </div>

        {/* body — pull quote slide */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          {/* decorative opening mark */}
          <span
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 160,
              lineHeight: 0.5,
              color: "var(--primary)",
              opacity: 0.35,
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
              fontSize: 54,
              lineHeight: 1.25,
              margin: 0,
              maxWidth: 880,
            }}
          >
            A 24-year-old with AI fluency is{" "}
            <span style={{ color: "var(--primary)" }}>outbilling consultants</span>{" "}
            with 10 years of experience.
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
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              margin: "0 0 32px",
            }}
          >
            ~ Abie Maxey
          </p>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.5,
              opacity: 0.65,
              maxWidth: 820,
              margin: 0,
            }}
          >
            The experience bar didn&apos;t disappear. It just got a new first question:
            &ldquo;Can you work with AI, or do you work around it?&rdquo;
          </p>
        </div>

        {/* row bottom */}
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
