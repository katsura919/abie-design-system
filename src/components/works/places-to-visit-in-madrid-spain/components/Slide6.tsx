const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const BAR_DATA = [
  { label: "Malasaña", value: 92 },
  { label: "La Latina", value: 85 },
  { label: "El Retiro", value: 78 },
  { label: "Lavapiés", value: 96 },
];
const maxVal = Math.max(...BAR_DATA.map((d) => d.value));

export default function Slide6({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden charcoal"
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
              opacity: 1,
            }}
          >
            ~ the hidden one
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

        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 20,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
              opacity: 0.7,
              margin: "0 0 16px",
            }}
          >
            ~ 04 / Lavapiés
          </p>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 100,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 16px",
            }}
          >
            THE REAL{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                color: "var(--primary)",
              }}
            >
              madrid
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 34,
              fontStyle: "italic",
              opacity: 0.72,
              maxWidth: 820,
              margin: "20px 0 40px",
              lineHeight: 1.4,
            }}
          >
            No tourists. Most multicultural barrio in the city. €4 menú del día with a drink included. I ate here 4 days a week for 6 months.
          </p>

          <p
            style={{
              fontFamily: MONO,
              fontSize: 20,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.45,
              margin: "0 0 24px",
            }}
          >
            ~ authenticity score by barrio
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {BAR_DATA.map(({ label, value }, i) => (
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
                      color: i === 3 ? "var(--primary)" : "var(--background)",
                    }}
                  >
                    {value}
                  </span>
                </div>
                <div
                  style={{
                    height: 12,
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 6,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${(value / maxVal) * 100}%`,
                      background: i === 3 ? "var(--primary)" : "currentColor",
                      opacity: i === 3 ? 1 : 0.3 - i * 0.03,
                      borderRadius: 6,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10 }}>
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
