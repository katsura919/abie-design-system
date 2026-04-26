const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide2({ scale }: { scale: number }) {
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
            ~ what changed
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
            02 / 08
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 96,
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            HIRING{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              filters
            </em>
            <br />
            FLIPPED
          </p>

          {/* compare grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginTop: 44,
            }}
          >
            {/* Left: before */}
            <div
              style={{
                background: "rgba(58,58,58,0.05)",
                border: "1px solid rgba(58,58,58,0.1)",
                borderRadius: 24,
                padding: 36,
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 17,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#c47373",
                  marginBottom: 20,
                }}
              >
                ~ 2021 filter
              </div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  fontSize: 44,
                  lineHeight: 0.95,
                  margin: "0 0 16px",
                }}
              >
                DEGREE +{" "}
                <em
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontWeight: 400,
                    textTransform: "lowercase",
                    letterSpacing: 0,
                  }}
                >
                  experience
                </em>
              </p>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 28,
                  lineHeight: 1.45,
                  margin: 0,
                  opacity: 0.65,
                }}
              >
                AI literacy was optional. Nice to have. Rarely asked about.
              </p>
            </div>

            {/* Right: now */}
            <div
              style={{
                background: "rgba(227,169,156,0.12)",
                border: "1px solid rgba(227,169,156,0.3)",
                borderRadius: 24,
                padding: 36,
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 17,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                  marginBottom: 20,
                }}
              >
                ~ 2025 filter
              </div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  fontSize: 44,
                  lineHeight: 0.95,
                  margin: "0 0 16px",
                }}
              >
                AI OUTPUT{" "}
                <em
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontWeight: 400,
                    textTransform: "lowercase",
                    letterSpacing: 0,
                  }}
                >
                  first
                </em>
              </p>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 28,
                  lineHeight: 1.45,
                  margin: 0,
                  opacity: 0.75,
                }}
              >
                Can you ship faster with AI? That question comes before your resume.
              </p>
            </div>
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 34,
              lineHeight: 1.45,
              opacity: 0.65,
              maxWidth: 820,
              marginTop: 32,
            }}
          >
            The filter didn&apos;t get easier. It got different. Most people missed the memo.
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
