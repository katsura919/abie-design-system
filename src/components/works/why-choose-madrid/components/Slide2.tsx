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
            ~ the usual suspects
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

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 88,
              lineHeight: 0.95,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              margin: "0 0 12px",
            }}
          >
            EVERYONE PICKS{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              the same
            </em>{" "}
            CITIES
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.5,
              opacity: 0.7,
              maxWidth: 820,
              margin: "0 0 0",
            }}
          >
            Lisbon is maxed out. Bali is a startup cliché. Bangkok floods every
            October. Meanwhile Madrid sits there, underrated, underpriced, unbothered.
          </p>

          {/* compare grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 44,
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
                  marginBottom: 20,
                }}
              >
                ~ oversaturated
              </div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  fontSize: 44,
                  lineHeight: 1.1,
                  margin: "0 0 12px",
                }}
              >
                Bali
              </p>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 28,
                  lineHeight: 1.4,
                  margin: 0,
                  opacity: 0.65,
                }}
              >
                Visa drama, monsoon season, 17hr flights from US east coast
              </p>
            </div>
            <div
              style={{
                background: "rgba(227,169,156,0.12)",
                border: "1px solid rgba(227,169,156,0.3)",
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
                  marginBottom: 20,
                }}
              >
                ~ still wide open
              </div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  fontSize: 44,
                  lineHeight: 1.1,
                  margin: "0 0 12px",
                }}
              >
                Madrid
              </p>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 28,
                  lineHeight: 1.4,
                  margin: 0,
                  opacity: 0.7,
                }}
              >
                EU access, world-class city, €1,400/mo all-in, no crowds
              </p>
            </div>
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
