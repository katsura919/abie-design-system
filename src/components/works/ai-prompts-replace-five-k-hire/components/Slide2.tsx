const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide2({ scale }: { scale: number }) {
  return (
    <div
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        position: "relative",
        borderRadius: 18 * scale,
        overflow: "hidden",
        border: "1px solid rgba(58,58,58,0.08)",
      }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          background: "#f9f5f2",
          color: "#3a3a3a",
          padding: 72,
          boxSizing: "border-box",
        }}
      >
        {/* row top */}
        <div className="flex justify-between items-start">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
            }}
          >
            ~ the expensive mistake
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
            02 / 07
          </span>
        </div>

        {/* body */}
        <div className="mt-12">
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            MOST FOUNDERS
            <br />
            SCALE THE{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                opacity: 0.8,
              }}
            >
              wrong
            </em>
            <br />
            WAY.
          </h2>

          {/* compare grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 48,
            }}
          >
            {/* left — most founders */}
            <div
              style={{
                background: "rgba(58,58,58,0.06)",
                border: "1px solid rgba(58,58,58,0.12)",
                borderRadius: 24,
                padding: 36,
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 18,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#c47373",
                  marginBottom: 24,
                }}
              >
                ~ most founders
              </div>
              {["Hire first", "Wait to onboard", "Train for weeks", "Manage forever"].map(
                (step, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      marginBottom: i < 3 ? 18 : 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: MONO,
                        fontSize: 18,
                        opacity: 0.4,
                        paddingTop: 8,
                        minWidth: 36,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <p
                      style={{
                        fontFamily: SANS,
                        fontWeight: 900,
                        fontSize: 42,
                        textTransform: "uppercase",
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                        margin: 0,
                      }}
                    >
                      {step}
                    </p>
                  </div>
                )
              )}
            </div>

            {/* right — smart operators */}
            <div
              style={{
                background: "rgba(58,58,58,0.06)",
                border: "1px solid rgba(58,58,58,0.12)",
                borderRadius: 24,
                padding: 36,
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 18,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#e3a99c",
                  marginBottom: 24,
                }}
              >
                ~ smart operators
              </div>
              {["Prompt first", "Output in minutes", "Iterate fast", "Ship & scale"].map(
                (step, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      marginBottom: i < 3 ? 18 : 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: MONO,
                        fontSize: 18,
                        opacity: 0.4,
                        paddingTop: 8,
                        minWidth: 36,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <p
                      style={{
                        fontFamily: SANS,
                        fontWeight: 900,
                        fontSize: 42,
                        textTransform: "uppercase",
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                        margin: 0,
                      }}
                    >
                      {step}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.4,
              marginTop: 40,
              maxWidth: 820,
              opacity: 0.75,
            }}
          >
            Headcount is overhead. The 5 prompts on the next slides are leverage.
          </p>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end mt-auto">
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
