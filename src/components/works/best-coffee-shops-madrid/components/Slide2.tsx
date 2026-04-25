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
        border: "1px solid rgba(58,58,58,0.08)",
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
        <div className="flex justify-between items-start z-10">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--foreground)",
              opacity: 0.55,
            }}
          >
            ~ the reality
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

        <div className="mt-20 z-10">
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            MOST
            <br />
            TOURISTS
            <br />
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                opacity: 0.65,
              }}
            >
              miss this
            </em>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 48,
            }}
          >
            <div
              style={{
                background: "rgba(58,58,58,0.06)",
                border: "1px solid rgba(58,58,58,0.12)",
                borderRadius: 24,
                padding: 36,
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 18,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#c47373",
                  marginBottom: 16,
                }}
              >
                ~ most visitors
              </div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  fontSize: 52,
                  lineHeight: 0.95,
                  margin: 0,
                }}
              >
                Hotel{" "}
                <em
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontWeight: 400,
                    textTransform: "lowercase",
                    letterSpacing: 0,
                    opacity: 0.8,
                  }}
                >
                  nescafé
                </em>
              </p>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 28,
                  lineHeight: 1.4,
                  marginTop: 20,
                  opacity: 0.6,
                  margin: "20px 0 0",
                }}
              >
                + Starbucks on Gran Vía
              </p>
            </div>

            <div
              style={{
                background: "rgba(58,58,58,0.06)",
                border: "1px solid rgba(58,58,58,0.12)",
                borderRadius: 24,
                padding: 36,
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 18,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#e3a99c",
                  marginBottom: 16,
                }}
              >
                ~ coffee seekers
              </div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  fontSize: 52,
                  lineHeight: 0.95,
                  margin: 0,
                }}
              >
                World{" "}
                <em
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontWeight: 400,
                    textTransform: "lowercase",
                    letterSpacing: 0,
                    opacity: 0.8,
                  }}
                >
                  class
                </em>
              </p>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 28,
                  lineHeight: 1.4,
                  marginTop: 20,
                  opacity: 0.6,
                  margin: "20px 0 0",
                }}
              >
                specialty shops 3 streets deep
              </p>
            </div>
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 36,
              fontWeight: 400,
              fontStyle: "italic",
              opacity: 0.7,
              lineHeight: 1.4,
              marginTop: 48,
              maxWidth: 820,
            }}
          >
            Madrid's barista scene has exploded in 10 years. The problem is knowing where to look.
          </p>
        </div>

        <div className="flex justify-between items-end mt-auto z-10">
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
