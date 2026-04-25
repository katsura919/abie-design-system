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
        className="absolute top-0 left-0 flex flex-col"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "#f9f5f2",
          color: "#3a3a3a",
          padding: 72,
          boxSizing: "border-box",
        }}
      >
        {/* row top */}
        <div className="flex justify-between items-start">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#3a3a3a",
              opacity: 0.55,
            }}
          >
            ~ the real numbers
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

        {/* body */}
        <div className="flex-1 flex flex-col justify-center">
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              fontSize: 120,
              margin: 0,
            }}
          >
            THE GAP IS{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              already
            </em>
            <br />
            WIDE.
          </h2>

          {/* compare grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 40,
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
                ~ avoiding AI
              </div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  fontSize: 56,
                  lineHeight: 0.95,
                  margin: 0,
                }}
              >
                40 HRS{" "}
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
                  $2k
                </em>
              </p>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 26,
                  lineHeight: 1.4,
                  margin: "14px 0 0",
                  opacity: 0.65,
                }}
              >
                Manual work. Ceiling hits fast.
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
                ~ using AI
              </div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  fontSize: 56,
                  lineHeight: 0.95,
                  margin: 0,
                }}
              >
                12 HRS{" "}
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
                  $4k
                </em>
              </p>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 26,
                  lineHeight: 1.4,
                  margin: "14px 0 0",
                  opacity: 0.65,
                }}
              >
                Same deliverable. 2× the margin.
              </p>
            </div>
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.4,
              marginTop: 36,
              opacity: 0.7,
              maxWidth: 820,
            }}
          >
            Same client. Same outcome. Different tools.
            <br />
            Pick a side.
          </p>
        </div>

        {/* row bottom */}
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
