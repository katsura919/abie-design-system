const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide6({ scale }: { scale: number }) {
  const termBorder = "rgba(30,27,26,0.18)";

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
        className="absolute top-0 left-0 flex flex-col p-[72px] box-border"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <div className="flex justify-between items-start">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.55,
            }}
          >
            ~ tool 5 ~ chatgpt
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.42,
            }}
          >
            06 / 07
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              fontSize: 100,
              margin: 0,
            }}
          >
            CHATGPT
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.4,
              margin: "16px 0 0",
              opacity: 0.8,
              maxWidth: 840,
            }}
          >
            Still the best for ideas, coding, brainstorming, and fast execution.
            <br />
            But only if you prompt properly.
          </p>

          <div
            style={{
              background: "rgba(30,27,26,0.08)",
              border: `1px solid ${termBorder}`,
              borderRadius: 24,
              padding: "40px 48px",
              marginTop: 30,
            }}
          >
            <div style={{ display: "flex", gap: 10, marginBottom: 26 }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "currentColor",
                    opacity: 0.2,
                    display: "inline-block",
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
                  lineHeight: 1.6,
                }}
              >
                $
              </span>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: 26,
                  lineHeight: 1.6,
                  margin: 0,
                  opacity: 0.88,
                }}
              >
                Act as a senior growth operator.
                <br />
                Give me 10 content ideas for freelancers,
                <br />
                each with hook, angle, and CTA.
                <br />
                Keep every idea practical and specific.
              </p>
            </div>

            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 32,
                lineHeight: 1.45,
                margin: "20px 0 0",
                opacity: 0.76,
                borderTop: `1px solid ${termBorder}`,
                paddingTop: 20,
              }}
            >
              Good prompt in. Better execution out.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.42,
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
