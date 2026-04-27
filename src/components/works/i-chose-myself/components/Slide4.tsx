"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const lessons = [
  "When you believe the best in someone, they grow into it.",
  "Distance is not absence. It is preparation.",
  "Choosing yourself is still choosing love.",
];

export default function Slide4({ scale }: { scale: number }) {
  const imgSrc = "/assets/zatoka/lake-gaze-above.jpg";
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
            ~ what I chose instead
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
            04 / 05
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, position: "relative" }}>
          {/* inset card */}
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
                transform: "rotate(-2deg)",
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
            GROWTH{" "}
            <em style={{ fontFamily: SERIF, fontStyle: "italic", color: "var(--primary)" }}>
              OVER
            </em>{" "}
            GUILT
          </h2>

          {/* lesson pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 36 }}>
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
                  padding: "20px 28px",
                }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 20,
                    letterSpacing: "0.2em",
                    opacity: 0.4,
                    minWidth: 40,
                  }}
                >
                  0{i + 1}
                </span>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 34,
                    lineHeight: 1.3,
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
        <div
          className="flex justify-between items-end"
          style={{ marginTop: "auto", zIndex: 10, position: "relative" }}
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
