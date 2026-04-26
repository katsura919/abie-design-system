const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide2({ scale }: { scale: number }) {
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
            ~ why madrid wins
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

        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 200,
              letterSpacing: "-0.05em",
              lineHeight: 0.82,
              color: "#f9f5f2",
              margin: 0,
            }}
          >
            €1,200
          </p>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 48,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "var(--primary)",
              marginTop: 16,
            }}
          >
            / month, fully furnished
          </p>

          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--primary)",
              borderRadius: 2,
              margin: "36px 0",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 24,
            }}
          >
            {[
              { num: "300", label: "Sun days/year" },
              { num: "UTC+1", label: "EU timezone" },
              { num: "€4", label: "Menú del día lunch" },
            ].map(({ num, label }) => (
              <div
                key={label}
                style={{
                  background: "rgba(249,245,242,0.05)",
                  border: "1px solid rgba(249,245,242,0.1)",
                  borderRadius: 20,
                  padding: "28px 24px",
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
                    margin: "0 0 8px",
                  }}
                >
                  {num}
                </p>
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: 18,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    opacity: 0.45,
                    margin: 0,
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 34,
              lineHeight: 1.4,
              opacity: 0.72,
              maxWidth: 820,
              margin: "36px 0 0",
            }}
          >
            Barcelona gets the Instagram. Madrid gets the lifestyle. Big difference.
          </p>
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
