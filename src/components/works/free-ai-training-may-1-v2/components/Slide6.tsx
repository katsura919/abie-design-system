import { CalendarDays } from "lucide-react";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide6({ scale }: { scale: number }) {
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
        className="absolute top-0 left-0 flex flex-col"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          border: "1px solid var(--border)",
          padding: 72,
          boxSizing: "border-box",
        }}
      >
        <div className="flex items-center justify-between">
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.52,
              margin: 0,
            }}
          >
            ~ the best part
          </p>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.52,
              margin: 0,
            }}
          >
            06/07
          </p>
        </div>

        <div className="mt-18 flex-1 flex flex-col">
          <p
            style={{
              margin: 0,
              fontFamily: MONO,
              fontSize: 24,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.6,
            }}
          >
            The training is
          </p>

          <h2
            style={{
              margin: "14px 0 0",
              fontFamily: SANS,
              fontSize: 210,
              lineHeight: 0.86,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              fontWeight: 900,
            }}
          >
            FREE
          </h2>

          <div
            className="flex items-center"
            style={{
              marginTop: 20,
              border: "1px solid var(--border)",
              borderRadius: 26,
              background: "var(--card)",
              padding: "26px 30px",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: 68,
                height: 68,
                borderRadius: 18,
                background: "var(--primary)",
                color: "#3a3a3a",
                flexShrink: 0,
              }}
            >
              <CalendarDays size={36} strokeWidth={2.4} />
            </div>

            <div style={{ marginLeft: 16 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: MONO,
                  fontSize: 20,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  opacity: 0.58,
                }}
              >
                happens on
              </p>
              <p
                style={{
                  margin: "4px 0 0",
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 76,
                  lineHeight: 0.9,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                }}
              >
                May 1
              </p>
            </div>
          </div>

          <p
            style={{
              margin: "36px 0 0",
              maxWidth: 920,
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 38,
              lineHeight: 1.35,
              opacity: 0.82,
            }}
          >
            A perfect chance to learn practical AI without paying for expensive
            courses.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.45,
              margin: 0,
            }}
          >
            abiemaxey.com
          </p>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.62,
              margin: 0,
            }}
          >
            swipe ~
          </p>
        </div>
      </div>
    </div>
  );
}
