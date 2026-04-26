const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

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
          backgroundColor: "#e3a99c",
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
              color: "#3a3a3a",
              opacity: 0.55,
            }}
          >
            ~ what I actually type
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
            04 / 07
          </span>
        </div>

        {/* body */}
        <div className="flex-1 flex flex-col justify-center">
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              fontSize: 88,
              margin: 0,
            }}
          >
            THE PROMPT
            <br />
            THAT{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              landed
            </em>
            <br />
            MY LAST CLIENT.
          </h2>

          {/* terminal card */}
          <div
            style={{
              background: "rgba(30,27,26,0.06)",
              border: "1px solid rgba(30,27,26,0.15)",
              borderRadius: 24,
              padding: "40px 48px",
              marginTop: 44,
            }}
          >
            {/* window dots */}
            <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#3a3a3a",
                    display: "inline-block",
                    opacity: 0.2,
                  }}
                />
              ))}
            </div>
            {/* prompt */}
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 28,
                  color: "#3a3a3a",
                  opacity: 0.6,
                  lineHeight: 1.6,
                  flexShrink: 0,
                }}
              >
                $
              </span>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: 24,
                  lineHeight: 1.65,
                  margin: 0,
                  opacity: 0.8,
                }}
              >
                Act as a senior copywriter. Write a cold pitch
                <br />
                for a freelance brand strategist targeting DTC
                <br />
                founders. Lead with one specific pain. Cite one
                <br />
                past result. End with one low-friction question.
                <br />
                Under 100 words. No buzzwords.
              </p>
            </div>
            {/* output */}
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 30,
                lineHeight: 1.5,
                marginTop: 24,
                opacity: 0.65,
                borderTop: "1px solid rgba(30,27,26,0.12)",
                paddingTop: 24,
              }}
            >
              Sent it Monday. $3,800 project signed by Wednesday.
              <br />
              Same prompt. Every cold pitch since.
            </p>
          </div>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end">
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
