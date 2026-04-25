const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide3({ scale }: { scale: number }) {
  return (
    <div
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        position: "relative",
        borderRadius: 18 * scale,
        overflow: "hidden",
      }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          background: "#3a3a3a",
          color: "#f9f5f2",
          padding: 72,
          boxSizing: "border-box",
        }}
      >
        <div className="flex justify-between items-start">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#e3a99c",
            }}
          >
            ~ Insight 1
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.45,
            }}
          >
            03 / 07
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              fontSize: 116,
              margin: 0,
              maxWidth: 920,
            }}
          >
            Claude
            <br />
            Mirrors Your
            <br />
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "none",
                letterSpacing: 0,
                color: "#e3a99c",
              }}
            >
              constraints
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.4,
              marginTop: 28,
              maxWidth: 860,
              opacity: 0.84,
            }}
          >
            Give it format, tone, and guardrails.
            <br />
            It repeats them back before writing ~
          </p>
        </div>

        <div className="flex justify-between items-end">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.45,
            }}
          >
            less drift · less cleanup
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#e3a99c",
            }}
          >
            reason 02
          </span>
        </div>
      </div>
    </div>
  );
}
