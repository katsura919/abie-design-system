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
        border: "1px solid rgba(58,58,58,0.1)",
      }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col p-[72px] box-border"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <div className="flex justify-between items-start">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.55,
            }}
          >
            ~ why this stands out
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

        <div className="flex-1 flex flex-col justify-center">
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              fontSize: 110,
              margin: 0,
            }}
          >
            MOST CONTENT
            <br />
            IS NOISE.
            <br />
            HERS IS
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                marginLeft: 16,
              }}
            >
              useful.
            </em>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 38,
            }}
          >
            <div
              style={{
                background: "rgba(58,58,58,0.06)",
                border: "1px solid rgba(58,58,58,0.12)",
                borderRadius: 24,
                padding: 34,
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 18,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#c47373",
                  marginBottom: 14,
                }}
              >
                Most People
              </div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 48,
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.95,
                  margin: "0 0 10px",
                }}
              >
                vague tips
                <br />
                + recycled
                <br />
                hooks
              </p>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 28,
                  lineHeight: 1.35,
                  margin: 0,
                  opacity: 0.7,
                }}
              >
                Easy to watch.
                <br />
                Hard to apply by Monday.
              </p>
            </div>

            <div
              style={{
                background: "rgba(58,58,58,0.06)",
                border: "1px solid rgba(58,58,58,0.12)",
                borderRadius: 24,
                padding: 34,
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 18,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                  marginBottom: 14,
                }}
              >
                Top Performers
              </div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 48,
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.95,
                  margin: "0 0 10px",
                }}
              >
                exact plays
                <br />
                + clear
                <br />
                context
              </p>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 28,
                  lineHeight: 1.35,
                  margin: 0,
                  opacity: 0.7,
                }}
              >
                Less inspiration.
                <br />
                More execution.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
            }}
          >
            instagram.com/abiemaxey
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
            Swipe -&gt;
          </span>
        </div>
      </div>
    </div>
  );
}
