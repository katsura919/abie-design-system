"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const lessons = [
  "Comfort without pressure is just beautiful stagnation.",
  "High costs create urgency that willpower never could.",
  "You're not spending more. You're buying a better operating system.",
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
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
            ~ what I actually bought
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            05 / 06
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 96,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 48px",
            }}
          >
            3 THINGS{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                color: "var(--primary)",
                textTransform: "none",
                letterSpacing: 0,
              }}
            >
              money
            </em>
            <br />
            CAN BUY
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {lessons.map((lesson, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  background: "rgba(58,58,58,0.05)",
                  border: "1px solid rgba(58,58,58,0.1)",
                  borderRadius: 16,
                  padding: "22px 32px",
                }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 20,
                    letterSpacing: "0.2em",
                    opacity: 0.4,
                    minWidth: 40,
                    flexShrink: 0,
                  }}
                >
                  0{i + 1}
                </span>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 36,
                    lineHeight: 1.35,
                    margin: 0,
                    color: "var(--color-text)",
                  }}
                >
                  {lesson}
                </p>
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
