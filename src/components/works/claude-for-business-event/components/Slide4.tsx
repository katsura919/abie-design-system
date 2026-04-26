"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const TASKS = [
  "Email writing — responses, follow-ups, cold outreach",
  "Proposal generation — scoped, branded, client-ready",
  "Social media content — captions, carousels, hooks",
  "Customer support — replies that sound like you",
];

export default function Slide4({ scale }: { scale: number }) {
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
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--foreground)",
              opacity: 0.5,
            }}
          >
            ~ automate these first
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
            04 / 06
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, marginTop: 40 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 100,
              lineHeight: 0.9,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              margin: "0 0 52px",
            }}
          >
            START WITH{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              these.
            </em>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {TASKS.map((task, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: 24 }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 22,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    opacity: 0.45,
                    minWidth: 56,
                    paddingTop: 14,
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
                    lineHeight: 1.45,
                    margin: 0,
                    opacity: 0.85,
                  }}
                >
                  {task}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.5,
              marginTop: 48,
            }}
          >
            All covered live. May 1. Free.
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
