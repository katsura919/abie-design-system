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

const FIELDS = [
  { label: "ROLE", text: "Act as a senior copywriter." },
  { label: "TASK", text: "Write a high-converting caption" },
  { label: "CONTEXT", text: "AI agency · real-estate clients." },
  { label: "TONE", text: "Persuasive, not pushy." },
  { label: "GOAL", text: "Book discovery calls." },
  { label: "FORMAT", text: "Short. One strong CTA." },
];

export default function Slide5({ scale }: { scale: number }) {
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
          background: "#1e1b1a",
          color: "#f9f5f2",
          padding: 72,
          boxSizing: "border-box",
        }}
      >
        <GridTexture />

        <div className="relative z-10 flex justify-between items-start">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#e3a99c",
            }}
          >
            ~ The formula in action
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

        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              fontSize: 88,
              margin: "0 0 32px",
            }}
          >
            Run it{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                color: "#e3a99c",
                opacity: 1,
              }}
            >
              through
            </em>
            <br />
            your work.
          </h2>

          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 24,
              padding: "40px 48px",
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 18,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#e3a99c",
                marginBottom: 14,
                display: "block",
              }}
            >
              ~ Real example
            </span>
            <div className="flex flex-col gap-[10px]">
              {FIELDS.map(({ label, text }) => (
                <p
                  key={label}
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 32,
                    lineHeight: 1.45,
                    margin: 0,
                  }}
                >
                  <b
                    style={{
                      fontFamily: MONO,
                      fontStyle: "normal",
                      color: "#e3a99c",
                      fontSize: 24,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {label}.
                  </b>{" "}
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-end">
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
              color: "#e3a99c",
            }}
          >
            Swipe →
          </span>
        </div>
      </div>
    </div>
  );
}
