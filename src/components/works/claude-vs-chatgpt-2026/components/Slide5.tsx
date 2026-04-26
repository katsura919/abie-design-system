const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const BAR_DATA = [
  { label: "Writing Quality", claudeVal: 94, gptVal: 82 },
  { label: "Instruction Follow", claudeVal: 91, gptVal: 76 },
  { label: "Long-Context Tasks", claudeVal: 96, gptVal: 71 },
  { label: "Multimodal Tools", claudeVal: 63, gptVal: 95 },
  { label: "Live Data Access", claudeVal: 44, gptVal: 98 },
];

export default function Slide5({ scale }: { scale: number }) {
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
        className="dark absolute top-0 left-0 flex flex-col box-border"
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
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
              opacity: 0.9,
            }}
          >
            ~ benchmark breakdown
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

        {/* Body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 88,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 10px",
            }}
          >
            Head{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              to
            </em>{" "}
            Head
          </p>

          {/* Legend */}
          <div
            style={{
              display: "flex",
              gap: 32,
              marginBottom: 32,
              marginTop: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 28,
                  height: 10,
                  borderRadius: 5,
                  background: "var(--primary)",
                }}
              />
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 18,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.7,
                }}
              >
                Claude
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 28,
                  height: 10,
                  borderRadius: 5,
                  background: "rgba(249,245,242,0.4)",
                }}
              />
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 18,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.7,
                }}
              >
                ChatGPT
              </span>
            </div>
          </div>

          {/* Dual bar chart */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            {BAR_DATA.map(({ label, claudeVal, gptVal }) => (
              <div
                key={label}
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 18,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      opacity: 0.55,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 18,
                      letterSpacing: "0.12em",
                      opacity: 0.5,
                    }}
                  >
                    {claudeVal} vs {gptVal}
                  </span>
                </div>
                {/* Claude bar */}
                <div
                  style={{
                    height: 10,
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 5,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${claudeVal}%`,
                      background: "var(--primary)",
                      borderRadius: 5,
                    }}
                  />
                </div>
                {/* GPT bar */}
                <div
                  style={{
                    height: 10,
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 5,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${gptVal}%`,
                      background: "rgba(249,245,242,0.4)",
                      borderRadius: 5,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 28,
              lineHeight: 1.5,
              opacity: 0.5,
              marginTop: 28,
              margin: "28px 0 0",
            }}
          >
            * Scores are composite ratings from LMSYS, Abie&apos;s own testing, and community benchmarks — April 2026.
          </p>
        </div>

        {/* Row bottom */}
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
