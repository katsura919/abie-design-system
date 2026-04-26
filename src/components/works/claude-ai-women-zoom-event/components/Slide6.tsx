const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide6({ scale }: { scale: number }) {
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
            ~ the details
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
            06 / 07
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          {/* big stat — date */}
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 200,
              letterSpacing: "-0.05em",
              lineHeight: 0.82,
              color: "var(--foreground)",
              margin: 0,
            }}
          >
            MAY 1
          </p>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 52,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "var(--primary)",
              marginTop: 16,
            }}
          >
            2026
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

          {/* detail rows */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {[
              { label: "Time", value: "6:00 – 8:00 PM EST" },
              { label: "Format", value: "Live Zoom · Q&A included" },
              { label: "Cost", value: "Free — no catch" },
              { label: "Level", value: "Beginner-friendly. Zero tech background needed." },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 24,
                  borderBottom: "1px solid rgba(249,245,242,0.08)",
                  paddingBottom: 18,
                }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 18,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--primary)",
                    opacity: 0.75,
                    minWidth: 120,
                    flexShrink: 0,
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 34,
                    lineHeight: 1.35,
                    color: "var(--foreground)",
                    opacity: 0.82,
                  }}
                >
                  {value}
                </span>
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
