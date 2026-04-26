const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide5({ scale }: { scale: number }) {
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
            ~ your guides
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

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 88,
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            MEET YOUR
            <br />
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              hosts
            </em>
          </p>

          {/* two host cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 44,
            }}
          >
            {/* Abie */}
            <div
              style={{
                background: "rgba(227,169,156,0.12)",
                border: "1px solid rgba(227,169,156,0.28)",
                borderRadius: 28,
                padding: 40,
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 17,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                  marginBottom: 20,
                  opacity: 0.9,
                }}
              >
                ~ host
              </div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 52,
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.95,
                  margin: "0 0 16px",
                }}
              >
                Abie{" "}
                <em
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontWeight: 400,
                    textTransform: "lowercase",
                    letterSpacing: 0,
                  }}
                >
                  Maxey
                </em>
              </p>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 28,
                  lineHeight: 1.4,
                  margin: 0,
                  opacity: 0.68,
                }}
              >
                AI educator helping business owners build systems that actually save time.
              </p>
            </div>

            {/* Meri */}
            <div
              style={{
                background: "rgba(58,58,58,0.05)",
                border: "1px solid rgba(58,58,58,0.1)",
                borderRadius: 28,
                padding: 40,
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 17,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--foreground)",
                  marginBottom: 20,
                  opacity: 0.45,
                }}
              >
                ~ co-host
              </div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 52,
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.95,
                  margin: "0 0 16px",
                }}
              >
                Meri{" "}
                <em
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontWeight: 400,
                    textTransform: "lowercase",
                    letterSpacing: 0,
                  }}
                >
                  Gee
                </em>
              </p>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 28,
                  lineHeight: 1.4,
                  margin: 0,
                  opacity: 0.68,
                }}
              >
                Business strategist and AI advocate making tech accessible for women founders.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "rgba(58,58,58,0.04)",
              border: "1px solid rgba(58,58,58,0.1)",
              borderRadius: 20,
              padding: "28px 36px",
              marginTop: 28,
            }}
          >
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 34,
                lineHeight: 1.45,
                margin: 0,
                opacity: 0.72,
              }}
            >
              Live demos. Real questions answered. Two hours of hands-on guidance —
              no slides-only fluff, no pre-recorded filler.
            </p>
          </div>
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
