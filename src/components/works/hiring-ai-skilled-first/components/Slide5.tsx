const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const BAR_DATA = [
  { label: "Marketing", value: 89 },
  { label: "Operations", value: 76 },
  { label: "Customer Support", value: 68 },
  { label: "Finance", value: 61 },
  { label: "HR / Recruiting", value: 54 },
];
const maxVal = Math.max(...BAR_DATA.map((d) => d.value));

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
            ~ the numbers
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              color: "var(--foreground)",
            }}
          >
            05 / 08
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          {/* big stat */}
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 168,
              letterSpacing: "-0.05em",
              lineHeight: 0.82,
              color: "var(--foreground)",
              margin: 0,
            }}
          >
            74%
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 34,
              lineHeight: 1.45,
              color: "var(--foreground)",
              opacity: 0.65,
              maxWidth: 820,
              marginTop: 16,
              marginBottom: 0,
            }}
          >
            of hiring managers say AI proficiency now influences their shortlisting decisions.
          </p>

          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--primary)",
              borderRadius: 2,
              margin: "32px 0",
            }}
          />

          {/* bar chart — % of job categories adding AI requirements */}
          <p
            style={{
              fontFamily: MONO,
              fontSize: 18,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--foreground)",
              opacity: 0.4,
              margin: "0 0 24px",
            }}
          >
            ~ industries adding AI requirements
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {BAR_DATA.map(({ label, value }, i) => (
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
                      color: "var(--foreground)",
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: SANS,
                      fontWeight: 900,
                      fontSize: 32,
                      letterSpacing: "-0.04em",
                      color: "var(--foreground)",
                    }}
                  >
                    {value}%
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
                      background:
                        i === 0 ? "var(--primary)" : "var(--foreground)",
                      opacity: i === 0 ? 1 : 0.3 - i * 0.03,
                      borderRadius: 6,
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
              color: "var(--foreground)",
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
              color: "var(--foreground)",
            }}
          >
            Swipe →
          </span>
        </div>
      </div>
    </div>
  );
}
