const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide5({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden dark"
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
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
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
            ~ your office is a park
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
            ~ 03 / El Retiro
          </p>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 36px",
            }}
          >
            350 ACRES OF{" "}
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
              free time
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 36,
              fontStyle: "italic",
              opacity: 0.78,
              maxWidth: 820,
              margin: "0 0 40px",
              lineHeight: 1.4,
            }}
          >
            The city&apos;s main park is bigger than Central Park. Free entry. Free Palacio de Cristal (glass palace). Rowing lake for €6/hr.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            {[
              { stat: "Free", label: "Palacio de Cristal" },
              { stat: "€6", label: "Rowing lake per hour" },
              { stat: "6am", label: "Opens — beat the crowds" },
              { stat: "0km", label: "From Prado Museum" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                style={{
                  background: "rgba(249,245,242,0.05)",
                  border: "1px solid rgba(249,245,242,0.1)",
                  borderRadius: 20,
                  padding: "24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <p
                  style={{
                    fontFamily: SANS,
                    fontWeight: 900,
                    fontSize: 52,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    color: "#f9f5f2",
                    margin: 0,
                  }}
                >
                  {stat}
                </p>
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: 17,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    opacity: 0.4,
                    margin: 0,
                  }}
                >
                  {label}
                </p>
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
