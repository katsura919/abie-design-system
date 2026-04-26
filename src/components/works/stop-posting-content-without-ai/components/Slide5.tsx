const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const COMMAND = `voice_prompt.txt + "Give me 30 content ideas for [niche] for [month]. For each: topic, hook angle, format."`;

export default function Slide5({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden dark"
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
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
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

        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
              opacity: 1,
            }}
          >
            ~ step 02
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
            05 / 08
          </span>
        </div>

        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 100,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 28px",
            }}
          >
            BATCH 30 DAYS{" "}
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
              in one session
            </em>
          </h2>

          <div
            style={{
              background: "rgba(249,245,242,0.06)",
              border: "1px solid rgba(249,245,242,0.18)",
              borderRadius: 24,
              padding: "36px 44px",
              marginTop: 8,
            }}
          >
            <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "currentColor",
                    display: "inline-block",
                    opacity: 0.2,
                  }}
                />
              ))}
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 28,
                  color: "var(--primary)",
                  opacity: 0.9,
                  lineHeight: 1.6,
                }}
              >
                $
              </span>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: 24,
                  lineHeight: 1.6,
                  margin: 0,
                  opacity: 0.85,
                }}
              >
                {COMMAND}
              </p>
            </div>
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 30,
                lineHeight: 1.5,
                marginTop: 20,
                opacity: 0.72,
                borderTop: "1px solid rgba(249,245,242,0.12)",
                paddingTop: 20,
              }}
            >
              Output: a full month of content ideas, hooks, and formats — in 90 seconds.
            </p>
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 34,
              fontStyle: "italic",
              lineHeight: 1.4,
              opacity: 0.75,
              maxWidth: 820,
              margin: "36px 0 0",
            }}
          >
            Stop deciding what to post every morning. Decide once a month. Then execute.
          </p>
        </div>

        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10 }}>
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
