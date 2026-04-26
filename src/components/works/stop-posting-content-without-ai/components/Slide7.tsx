const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide7({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden"
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
          backgroundColor: "#e3a99c",
          color: "#3a3a3a",
        }}
      >
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
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
            ~ the math
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#3a3a3a",
              opacity: 0.4,
            }}
          >
            07 / 08
          </span>
        </div>

        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 220,
              letterSpacing: "-0.05em",
              lineHeight: 0.82,
              color: "#3a3a3a",
              margin: 0,
            }}
          >
            20
          </p>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 56,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "#3a3a3a",
              opacity: 0.55,
              marginTop: 16,
            }}
          >
            Minutes per carousel
          </p>

          <div
            style={{
              width: 48,
              height: 3,
              background: "#3a3a3a",
              borderRadius: 2,
              opacity: 0.3,
              margin: "36px 0",
            }}
          />

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 40,
              lineHeight: 1.4,
              color: "#3a3a3a",
              opacity: 0.78,
              maxWidth: 820,
              margin: 0,
            }}
          >
            That&apos;s not a small tweak. That&apos;s getting your entire week back. 3 posts × 3 hrs saved = 9 hrs. Every single week.
          </p>

          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 52,
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 80,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  color: "#3a3a3a",
                  margin: 0,
                }}
              >
                4 hrs
              </p>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: 20,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#3a3a3a",
                  opacity: 0.45,
                  marginTop: 6,
                }}
              >
                Before AI
              </p>
            </div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 48,
                color: "#3a3a3a",
                opacity: 0.3,
                alignSelf: "center",
              }}
            >
              →
            </div>
            <div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 80,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  color: "#3a3a3a",
                  margin: 0,
                }}
              >
                20 min
              </p>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: 20,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#3a3a3a",
                  opacity: 0.45,
                  marginTop: 6,
                }}
              >
                After AI
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#3a3a3a",
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
              color: "#3a3a3a",
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
