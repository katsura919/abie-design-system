const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const CLAUDE_JOBS = [
  "Writing a 3,000-word client proposal",
  "Reviewing a contract or dense document",
  "Coding with full codebase context",
  "Brainstorming strategy with nuance",
];

const GPT_JOBS = [
  "Quick research with live sources",
  "Generating images from descriptions",
  "Data analysis in uploaded spreadsheets",
  "Automating with GPT plugins + APIs",
];

export default function Slide6({ scale }: { scale: number }) {
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
        {/* Row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--foreground)",
              opacity: 0.45,
            }}
          >
            ~ the decision matrix
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
            06 / 07
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 88,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 36px",
            }}
          >
            Use{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              the right
            </em>{" "}
            one
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
            }}
          >
            {/* Claude column */}
            <div
              style={{
                background: "rgba(58,58,58,0.04)",
                border: "1px solid rgba(58,58,58,0.10)",
                borderRadius: 24,
                padding: "32px 36px",
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 18,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#e3a99c",
                  marginBottom: 20,
                }}
              >
                ~ Use Claude when...
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {CLAUDE_JOBS.map((job, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                  >
                    <span
                      style={{
                        fontFamily: MONO,
                        fontSize: 18,
                        opacity: 0.4,
                        paddingTop: 2,
                        flexShrink: 0,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <p
                      style={{
                        fontFamily: SERIF,
                        fontStyle: "italic",
                        fontSize: 28,
                        lineHeight: 1.35,
                        margin: 0,
                        opacity: 0.8,
                      }}
                    >
                      {job}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* GPT column */}
            <div
              style={{
                background: "rgba(58,58,58,0.04)",
                border: "1px solid rgba(58,58,58,0.10)",
                borderRadius: 24,
                padding: "32px 36px",
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 18,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#3a3a3a",
                  opacity: 0.55,
                  marginBottom: 20,
                }}
              >
                ~ Use ChatGPT when...
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {GPT_JOBS.map((job, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                  >
                    <span
                      style={{
                        fontFamily: MONO,
                        fontSize: 18,
                        opacity: 0.4,
                        paddingTop: 2,
                        flexShrink: 0,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <p
                      style={{
                        fontFamily: SERIF,
                        fontStyle: "italic",
                        fontSize: 28,
                        lineHeight: 1.35,
                        margin: 0,
                        opacity: 0.8,
                      }}
                    >
                      {job}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row bottom */}
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
