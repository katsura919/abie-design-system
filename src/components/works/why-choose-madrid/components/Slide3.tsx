const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const BAR_DATA = [
  { label: "Amsterdam", value: 2800, display: "€2,800" },
  { label: "Barcelona", value: 2100, display: "€2,100" },
  { label: "Lisbon", value: 1800, display: "€1,800" },
  { label: "Madrid", value: 1400, display: "€1,400" },
];

export default function Slide3({ scale }: { scale: number }) {
  const maxVal = Math.max(...BAR_DATA.map((d) => d.value));

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
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
        }}
      >
        {/* grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* row top */}
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
            ~ real monthly cost
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              color: "var(--background)",
            }}
          >
            03 / 07
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
              color: "var(--background)",
            }}
          >
            THE{" "}
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
              cheapest
            </em>{" "}
            MAJOR CITY
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 34,
              lineHeight: 1.5,
              opacity: 0.65,
              maxWidth: 820,
              margin: "0 0 0",
              color: "var(--background)",
            }}
          >
            Rent + food + co-working + fun. All-in monthly cost, solo digital nomad.
          </p>

          {/* bar chart */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              marginTop: 48,
            }}
          >
            {BAR_DATA.map(({ label, value, display }, i) => (
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
                      color: "var(--background)",
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
                      color: i === BAR_DATA.length - 1 ? "var(--primary)" : "var(--background)",
                    }}
                  >
                    {display}
                  </span>
                </div>
                <div
                  style={{
                    height: 14,
                    background: "rgba(249,245,242,0.08)",
                    borderRadius: 7,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${(value / maxVal) * 100}%`,
                      background: i === BAR_DATA.length - 1 ? "var(--primary)" : "var(--background)",
                      opacity: i === BAR_DATA.length - 1 ? 1 : 0.25 + (BAR_DATA.length - 1 - i) * 0.08,
                      borderRadius: 7,
                    }}
                  />
                </div>
              </div>
            ))}
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
              color: "var(--background)",
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
              color: "var(--background)",
            }}
          >
            Swipe →
          </span>
        </div>
      </div>
    </div>
  );
}
