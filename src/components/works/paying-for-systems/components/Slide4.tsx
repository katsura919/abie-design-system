"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide4({ scale }: { scale: number }) {
  const imgSrc = "/assets/zatoka/campfire.jpg";
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        borderRadius: 18 * scale,
        border: "1px solid rgba(58,58,58,0.08)",
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
        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
            ~ the performance filter
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            04 / 06
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          {/* inset card image */}
          <div style={{ marginBottom: 36 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgSrc}
              alt=""
              style={{
                width: 460,
                height: 300,
                objectFit: "cover",
                borderRadius: 20,
                display: "block",
                transform: "rotate(2deg)",
                border: "1px solid rgba(58,58,58,0.12)",
              }}
            />
          </div>

          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 96,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            HIGH COST =
            <br />
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                color: "var(--primary)",
                textTransform: "none",
                letterSpacing: 0,
              }}
            >
              no excuses.
            </em>
          </h2>

          <div style={{ width: 48, height: 3, background: "var(--primary)", borderRadius: 2, margin: "28px 0" }} />

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.5,
              margin: 0,
              opacity: 0.75,
              maxWidth: 820,
            }}
          >
            When you're spending euros while building from scratch, laziness becomes expensive. Pressure acts like a filter — it removes procrastination and forces discipline.
          </p>

          {/* moment stamp */}
          <div style={{ display: "flex", gap: 48, marginTop: 44 }}>
            {[
              { label: "where", value: "West" },
              { label: "when", value: "2024" },
              { label: "feeling", value: "on fire" },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontFamily: MONO, fontSize: 18, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
                  {label}
                </span>
                <span style={{ fontFamily: SANS, fontWeight: 900, fontSize: 38, letterSpacing: "-0.04em", textTransform: "uppercase" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10 }}>
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
