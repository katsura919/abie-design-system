const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide4({ scale }: { scale: number }) {
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
              opacity: 0.6,
            }}
          >
            ~ she gives exact prompts
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
            04 / 07
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              fontSize: 92,
              margin: 0,
            }}
          >
            REASON 4:
            <br />
            YOU CAN COPY,
            <br />
            TEST, AND
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                marginLeft: 14,
              }}
            >
              learn.
            </em>
          </h2>

          <div
            style={{
              background: "rgba(30,27,26,0.08)",
              border: "1px solid rgba(30,27,26,0.18)",
              borderRadius: 24,
              padding: "40px 48px",
              marginTop: 34,
            }}
          >
            <div style={{ display: "flex", gap: 10, marginBottom: 26 }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "var(--foreground)",
                    opacity: 0.2,
                    display: "inline-block",
                  }}
                />
              ))}
            </div>

            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 26,
                  lineHeight: 1.6,
                  color: "var(--primary)",
                  filter: "brightness(0.56)",
                }}
              >
                $
              </span>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: 26,
                  lineHeight: 1.6,
                  margin: 0,
                  opacity: 0.88,
                }}
              >
                Review @abiemaxey's latest carousel.
                <br />
                Extract 5 copy patterns she repeats.
                <br />
                Rewrite one for a freelancer selling
                <br />
                high-ticket strategy offers.
              </p>
            </div>

            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 32,
                lineHeight: 1.45,
                margin: "24px 0 0",
                paddingTop: 24,
                borderTop: "1px solid rgba(30,27,26,0.18)",
                opacity: 0.8,
              }}
            >
              Her content is not just to consume.
              <br />
              It is built to train your own output quality.
            </p>
          </div>
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
