const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const BAR_ROWS = [
  { label: "workflow speed", value: 86 },
  { label: "decision clarity", value: 78 },
  { label: "career confidence", value: 72 },
];

export default function Slide2({ scale }: { scale: number }) {
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
        className="absolute top-0 left-0 flex flex-col"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          border: "1px solid var(--border)",
          padding: 72,
          boxSizing: "border-box",
        }}
      >
        <div className="flex items-center justify-between">
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.52,
              margin: 0,
            }}
          >
            ~ why this matters
          </p>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.52,
              margin: 0,
            }}
          >
            02/07
          </p>
        </div>

        <div className="mt-18 flex flex-1 flex-col">
          <h2
            style={{
              margin: 0,
              maxWidth: 920,
              fontFamily: SANS,
              fontSize: 108,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              fontWeight: 900,
            }}
          >
            The women who learn AI now stay ahead.
          </h2>

          <p
            style={{
              marginTop: 30,
              marginBottom: 0,
              maxWidth: 860,
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 38,
              lineHeight: 1.35,
              opacity: 0.82,
            }}
          >
            They work faster, smarter, and make stronger moves.
            <br />
            AI is becoming a career advantage ~ not just a trend.
          </p>

          <div
            style={{
              marginTop: 52,
              border: "1px solid var(--border)",
              borderRadius: 24,
              padding: "34px 34px 30px",
              background: "rgba(58,58,58,0.03)",
            }}
          >
            {BAR_ROWS.map((bar, index) => (
              <div
                key={bar.label}
                style={{ marginBottom: index === BAR_ROWS.length - 1 ? 0 : 24 }}
              >
                <div className="flex items-end justify-between">
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 20,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      opacity: 0.6,
                    }}
                  >
                    {bar.label}
                  </span>
                  <span
                    style={{
                      fontFamily: SANS,
                      fontSize: 36,
                      fontWeight: 900,
                      lineHeight: 1,
                    }}
                  >
                    {bar.value}
                  </span>
                </div>

                <div
                  style={{
                    marginTop: 10,
                    width: "100%",
                    height: 14,
                    borderRadius: 7,
                    background: "rgba(58,58,58,0.08)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${bar.value}%`,
                      height: 14,
                      borderRadius: 7,
                      background:
                        index === 0
                          ? "var(--primary)"
                          : `rgba(58,58,58,${0.64 - index * 0.17})`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.45,
              margin: 0,
            }}
          >
            abiemaxey.com
          </p>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.62,
              margin: 0,
            }}
          >
            swipe ~
          </p>
        </div>
      </div>
    </div>
  );
}
