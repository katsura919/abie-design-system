const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const LESSONS = [
  "Lunch is at 3pm. Dinner at 10pm. Stop fighting the clock.",
  "Neighborhoods > landmarks. Malasaña over Gran Vía.",
  "Best spots have no English menu. Trust that.",
];

export default function Slide6({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080 * scale, height: 1350 * scale, borderRadius: 18 * scale }}
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
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--foreground)", opacity: 0.55 }}>
            ~ what stayed
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            06 / 07
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, position: "relative" }}>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 48px",
              maxWidth: 900,
            }}
          >
            3 THINGS MADRID TEACHES YOU{" "}
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
              fast.
            </em>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {LESSONS.map((lesson, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  background: "rgba(58,58,58,0.06)",
                  border: "1px solid rgba(58,58,58,0.1)",
                  borderRadius: 16,
                  padding: "22px 32px",
                }}
              >
                <span style={{ fontFamily: MONO, fontSize: 20, letterSpacing: "0.2em", opacity: 0.4, minWidth: 40 }}>
                  0{i + 1}
                </span>
                <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 36, lineHeight: 1.35, margin: 0 }}>
                  {lesson}
                </p>
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
