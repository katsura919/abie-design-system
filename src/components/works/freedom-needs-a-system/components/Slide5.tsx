"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const days = [
  { day: "MON", theme: "Deep work" },
  { day: "TUE", theme: "Building" },
  { day: "WED", theme: "Content" },
  { day: "THU", theme: "People" },
  { day: "FRI", theme: "Admin" },
  { day: "SAT", theme: "Exploring" },
  { day: "SUN", theme: "Rest" },
];

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
        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10, position: "relative" }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.55,
            }}
          >
            ~ my actual week
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            05 / 06
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, position: "relative" }}>
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
            THEMES
            <br />
            NOT{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                fontStyle: "italic",
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              schedules.
            </em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 44 }}>
            {days.map(({ day, theme }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 32,
                  borderBottom: i < days.length - 1 ? "1px solid rgba(58,58,58,0.12)" : "none",
                  padding: "14px 0",
                }}
              >
                <span style={{ fontFamily: MONO, fontSize: 20, letterSpacing: "0.2em", opacity: 0.45, minWidth: 56 }}>
                  {day}
                </span>
                <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 36, lineHeight: 1.3 }}>
                  {theme}
                </span>
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 30,
              lineHeight: 1.5,
              marginTop: 32,
              opacity: 0.65,
              maxWidth: 820,
            }}
          >
            Flexible enough for time zones. Strong enough to stay consistent.
          </p>
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
