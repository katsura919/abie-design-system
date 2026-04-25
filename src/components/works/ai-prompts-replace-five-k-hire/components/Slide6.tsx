const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const ITEMS = [
  {
    label: "prompt 04 ~ the researcher",
    text: "\"Deep-dive on [competitor or market]. What's their biggest positioning gap? What segment could a lean team own in 90 days? Back every claim with logic.\"",
  },
  {
    label: "prompt 05 ~ the sop writer",
    text: "\"Turn this task description into a step-by-step SOP: [paste task]. Format: numbered steps, decision points marked ⚡, max 3 sentences per step.\"",
  },
];

export default function Slide6({ scale }: { scale: number }) {
  return (
    <div
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        position: "relative",
        borderRadius: 18 * scale,
        overflow: "hidden",
      }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          background: "#e3a99c",
          color: "#3a3a3a",
          padding: 72,
          boxSizing: "border-box",
        }}
      >
        {/* row top */}
        <div className="flex justify-between items-start z-10">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#3a3a3a",
              opacity: 0.8,
            }}
          >
            ~ the last two
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

        {/* body */}
        <div className="mt-16 z-10">
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            04{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                color: "#1e1b1a",
              }}
            >
              &amp;
            </em>{" "}
            05.
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 32,
              marginTop: 40,
            }}
          >
            {ITEMS.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(30,27,26,0.08)",
                  border: "1px solid rgba(30,27,26,0.14)",
                  borderRadius: 24,
                  padding: "32px 40px",
                }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 18,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#1e1b1a",
                    opacity: 0.7,
                    marginBottom: 14,
                    display: "block",
                  }}
                >
                  ~ {item.label}
                </span>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 32,
                    lineHeight: 1.5,
                    margin: 0,
                    opacity: 0.85,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 34,
              lineHeight: 1.4,
              marginTop: 36,
              opacity: 0.75,
            }}
          >
            5 prompts. 5 roles. One subscription that costs less than a dinner.
          </p>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end mt-auto z-10">
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
