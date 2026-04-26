const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const CHIPS = ["INPUT", "PROCESSING", "OUTPUT"];

export default function Slide4({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden peach"
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
          backgroundColor: "var(--primary-soft)",
          color: "var(--foreground)",
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
            ~ the framework
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
            04 / 06
          </span>
        </div>

        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 24px",
            }}
          >
            A SYSTEM HAS <br />
            <em style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", letterSpacing: 0 }}>3 parts</em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 36,
              fontStyle: "italic",
              fontWeight: 400,
              opacity: 0.85,
              maxWidth: 820,
              margin: 0,
            }}
          >
            Stop looking at tools in isolation. Look at the flow of information.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px 14px",
              marginTop: 48,
              alignItems: "center",
            }}
          >
            {CHIPS.flatMap((chip, i, arr) => [
              <span
                key={chip}
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 38,
                  textTransform: "uppercase",
                  background: "var(--foreground)", // charcoal chips on peach
                  color: "var(--background)",      // cream text
                  padding: "14px 24px",
                  borderRadius: 9999,
                }}
              >
                {chip}
              </span>,
              ...(i < arr.length - 1
                ? [
                    <span
                      key={`+${i}`}
                      style={{ fontFamily: MONO, fontSize: 32, opacity: 0.5 }}
                    >
                      →
                    </span>,
                  ]
                : []),
            ])}
          </div>
        </div>

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
