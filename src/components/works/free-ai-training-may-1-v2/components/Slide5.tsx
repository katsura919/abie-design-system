import { Check } from "lucide-react";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const AUDIENCE = [
  "freelancers",
  "virtual assistants",
  "business owners",
  "agency owners",
  "working professionals",
  "women exploring AI for career growth",
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
        className="absolute top-0 left-0 flex flex-col dark"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          padding: 72,
          boxSizing: "border-box",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 flex items-center justify-between">
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
            ~ who should join
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
            05/07
          </p>
        </div>

        <div className="relative z-10 mt-16 flex-1">
          <h2
            style={{
              margin: 0,
              fontFamily: SANS,
              fontSize: 102,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              fontWeight: 900,
              maxWidth: 940,
            }}
          >
            Perfect if you want to grow faster with AI
          </h2>

          <div
            className="grid grid-cols-2 gap-x-7 gap-y-4"
            style={{ marginTop: 34 }}
          >
            {AUDIENCE.map((item) => (
              <div
                key={item}
                className="flex items-start"
                style={{
                  border: "1px solid rgba(249,245,242,0.14)",
                  borderRadius: 18,
                  padding: "14px 16px",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <span
                  className="inline-flex items-center justify-center"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 9999,
                    background: "var(--primary)",
                    color: "#1e1b1a",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  <Check size={17} strokeWidth={2.6} />
                </span>

                <p
                  style={{
                    margin: "1px 0 0 10px",
                    fontFamily: SANS,
                    fontSize: 31,
                    lineHeight: 1.1,
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    fontWeight: 800,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              margin: "34px 0 0",
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 38,
              lineHeight: 1.34,
              opacity: 0.8,
            }}
          >
            No advanced tech skills needed.
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between">
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
