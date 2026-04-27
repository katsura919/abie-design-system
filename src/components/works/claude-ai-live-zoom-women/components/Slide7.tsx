const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide7({ scale }: { scale: number }) {
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
          backgroundColor: "var(--primary-soft)",
          color: "var(--foreground)",
        }}
      >
        {/* Accent shapes */}
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
          viewBox="0 0 1080 1350"
          fill="none"
        >
          <circle cx="1000" cy="120" r="380" fill="#3a3a3a" fillOpacity="0.04" />
          <circle cx="60" cy="1300" r="260" fill="#3a3a3a" fillOpacity="0.03" />
        </svg>

        {/* Row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--foreground)",
              opacity: 0.45,
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
            }}
          >
            07 / 08
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          {/* Big FREE stat */}
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 200,
              letterSpacing: "-0.05em",
              lineHeight: 0.82,
              color: "#3a3a3a",
              margin: 0,
            }}
          >
            FREE
          </p>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 48,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "#3a3a3a",
              opacity: 0.5,
              marginTop: 12,
            }}
          >
            Live Zoom Training
          </p>

          {/* Decorative divider */}
          <div
            style={{
              width: 48,
              height: 3,
              background: "#3a3a3a",
              opacity: 0.3,
              borderRadius: 2,
              margin: "40px 0",
            }}
          />

          {/* Event detail rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { label: "Date", value: "May 1, 2026" },
              { label: "Time", value: "6:00 – 8:00 PM EST" },
              { label: "Where", value: "Live on Zoom" },
              { label: "Who", value: "All women in business" },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: "flex", gap: 32, alignItems: "baseline" }}>
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 20,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    opacity: 0.45,
                    minWidth: 120,
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: SANS,
                    fontWeight: 900,
                    fontSize: 40,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 34,
              lineHeight: 1.4,
              opacity: 0.6,
              marginTop: 36,
              maxWidth: 720,
            }}
          >
            No pressure. No overwhelm. Real guidance for real business owners.
          </p>
        </div>

        {/* Row bottom */}
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
