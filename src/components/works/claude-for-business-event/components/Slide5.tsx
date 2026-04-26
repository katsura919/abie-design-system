"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

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
            ~ save the date
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
            05 / 06
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, marginTop: 48 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 100,
              lineHeight: 0.9,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              margin: "0 0 56px",
            }}
          >
            FREE. LIVE.{" "}
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
              may 1.
            </em>
          </h2>

          {/* event detail rows */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {[
              { label: "When", value: "Friday, May 1, 2026" },
              { label: "Time", value: "6:00 – 8:00 PM EST" },
              { label: "Where", value: "Live Zoom Webinar" },
              { label: "Price", value: "Free · VIP €47" },
              { label: "Host", value: "Talent Mucho — Abie & Meri" },
            ].map(({ label, value }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: "28px 0",
                  borderBottom: "1px solid rgba(249,245,242,0.08)",
                }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 20,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    opacity: 0.4,
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 34,
                    opacity: 0.85,
                    textAlign: "right",
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
              fontSize: 32,
              lineHeight: 1.5,
              opacity: 0.55,
              marginTop: 36,
              maxWidth: 780,
            }}
          >
            VIP gets replay access + Claude Vault + Premium Skool community.
          </p>
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
