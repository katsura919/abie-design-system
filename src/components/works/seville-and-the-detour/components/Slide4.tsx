"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide4({ scale }: { scale: number }) {
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
        <div className="flex justify-between items-start" style={{ zIndex: 10, position: "relative" }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--primary)", opacity: 0.9 }}>
            ~ the comedy part
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            04 / 07
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, position: "relative" }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 120,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            €8.84{" "}
            <em style={{ fontFamily: SERIF, fontWeight: 400, fontStyle: "italic", textTransform: "lowercase", letterSpacing: 0 }}>
              later
            </em>
          </h2>

          <div style={{ width: 48, height: 3, background: "var(--primary)", borderRadius: 2, margin: "28px 0" }} />

          <div style={{ borderLeft: "3px solid var(--primary)", paddingLeft: 36, marginBottom: 48 }}>
            <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 38, lineHeight: 1.45, margin: 0, opacity: 0.88 }}>
              "I assumed Lime Bike would work like BIXI in Montreal. Confusing brakes. Limited parking zones. €0.34 per minute. Phone dying halfway through. The app refunded the chaos."
            </p>
          </div>

          <div style={{ display: "flex", gap: 48, marginTop: 8 }}>
            {[
              { label: "where", value: "Seville" },
              { label: "spent", value: "€8.84" },
              { label: "refunded", value: "Yes" },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontFamily: MONO, fontSize: 18, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
                  {label}
                </span>
                <span style={{ fontFamily: SANS, fontWeight: 900, fontSize: 40, letterSpacing: "-0.04em", textTransform: "uppercase" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10, position: "relative" }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            abiemaxey.com
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
            Swipe →
          </span>
        </div>
      </div>
    </div>
  );
}
