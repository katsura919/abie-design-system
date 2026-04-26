const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const SKILLS = [
  "client work",
  "business tasks",
  "content creation",
  "research",
  "daily productivity",
  "decision-making",
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
        className="absolute top-0 left-0 flex flex-col"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--primary-soft)",
          color: "var(--foreground)",
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
            ~ what youll learn
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
            04/07
          </p>
        </div>

        <div className="mt-16 flex-1 flex flex-col">
          <h2
            style={{
              margin: 0,
              fontFamily: SANS,
              fontSize: 98,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              fontWeight: 900,
              maxWidth: 980,
            }}
          >
            Practical AI for real business work
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                style={{
                  backgroundColor: "#3a3a3a",
                  color: "#f9f5f2",
                  borderRadius: 9999,
                  padding: "10px 22px 12px",
                  fontFamily: SANS,
                  fontSize: 38,
                  lineHeight: 1,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div
            style={{
              marginTop: 34,
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 24,
              padding: "28px 32px 24px",
            }}
          >
            <div className="flex items-center gap-2.5">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: "#ff5f56" }}
              />
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: "#ffbd2e" }}
              />
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: "#27c93f" }}
              />
            </div>

            <p
              style={{
                margin: "20px 0 18px",
                fontFamily: MONO,
                fontSize: 26,
                lineHeight: 1.35,
                opacity: 0.86,
              }}
            >
              <span style={{ color: "var(--primary)", marginRight: 8 }}>$</span>
              claude make a weekly plan for my clients, content, and admin in 2
              focused blocks per day.
            </p>

            <p
              style={{
                margin: 0,
                borderTop: "1px solid var(--border)",
                paddingTop: 16,
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 32,
                lineHeight: 1.3,
                opacity: 0.76,
              }}
            >
              Real skills. Real use cases. You can apply the same day.
            </p>
          </div>
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
