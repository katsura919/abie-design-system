const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const CITY_DATA = [
  { label: "Madrid", value: 1400 },
  { label: "Barcelona", value: 1900 },
  { label: "Berlin", value: 2200 },
  { label: "Amsterdam", value: 2700 },
  { label: "Paris", value: 3100 },
];

const maxVal = Math.max(...CITY_DATA.map((d) => d.value));

export default function Slide3({ scale }: { scale: number }) {
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
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            zIndex: 0,
          }}
        />

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
            ~ the math
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
            03 / 07
          </span>
        </div>

        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 96,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            LIVE WELL
            <br />
            FOR{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              less.
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 32,
              lineHeight: 1.5,
              opacity: 0.65,
              maxWidth: 820,
              marginTop: 24,
              marginBottom: 0,
            }}
          >
            Monthly budget (€) to live comfortably — rent, food, transport, social life
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              marginTop: 44,
            }}
          >
            {CITY_DATA.map(({ label, value }, i) => (
              <div
                key={label}
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
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
                      fontSize: 20,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      opacity: 0.55,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: SANS,
                      fontWeight: 900,
                      fontSize: 36,
                      letterSpacing: "-0.04em",
                      color: i === 0 ? "var(--primary)" : "var(--background)",
                    }}
                  >
                    €{value.toLocaleString()}
                  </span>
                </div>
                <div
                  style={{
                    height: 14,
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 7,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${(value / maxVal) * 100}%`,
                      background:
                        i === 0 ? "var(--primary)" : "var(--background)",
                      opacity: i === 0 ? 1 : 0.3 - i * 0.03,
                      borderRadius: 7,
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
              fontSize: 30,
              lineHeight: 1.5,
              opacity: 0.55,
              maxWidth: 820,
              marginTop: 32,
              marginBottom: 0,
            }}
          >
            Madrid = €1,700/mo less than Paris. Every month.
          </p>
        </div>

        <div className="flex justify-between items-end" style={{ zIndex: 10 }}>
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
