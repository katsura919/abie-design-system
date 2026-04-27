"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide6({ scale }: { scale: number }) {
  const lessons = [
    "Imperfect days often mean more than the ones that go as planned.",
    "The detour is sometimes the whole point.",
    "The next chapter needs structure underneath it.",
  ];

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
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
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
            ~ what stayed
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--background)", opacity: 0.4 }}>
            06 / 07
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, position: "relative" }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 88,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
              color: "var(--background)",
            }}
          >
            THREE THINGS I'M{" "}
            <em style={{ fontFamily: SERIF, fontWeight: 400, fontStyle: "italic", textTransform: "lowercase", letterSpacing: 0 }}>
              keeping
            </em>
          </h2>

          <div style={{ width: 48, height: 3, background: "var(--primary)", borderRadius: 2, margin: "28px 0" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 8 }}>
            {lessons.map((lesson, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  background: "rgba(249,245,242,0.04)",
                  border: "1px solid rgba(249,245,242,0.08)",
                  borderRadius: 16,
                  padding: "22px 28px",
                }}
              >
                <span style={{ fontFamily: MONO, fontSize: 20, letterSpacing: "0.2em", color: "var(--primary)", opacity: 0.7, minWidth: 40 }}>
                  0{i + 1}
                </span>
                <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 36, lineHeight: 1.35, margin: 0, color: "var(--background)" }}>
                  {lesson}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10, position: "relative" }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--background)", opacity: 0.4 }}>
            abiemaxey.com
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--background)", opacity: 0.55 }}>
            Swipe →
          </span>
        </div>
      </div>
    </div>
  );
}
