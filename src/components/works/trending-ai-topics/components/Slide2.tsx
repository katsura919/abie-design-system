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
          border: "2px solid rgba(58,58,58,0.1)",
        }}
      >
        <div className="flex justify-between items-start z-10">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#e3a99c",
            }}
          >
            ~ the noise
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
            02 / 06
          </span>
        </div>

        <div className="mt-32 z-10">
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 0.9,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            STOP
            <br />
            CHASING
            <br />
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "#e3a99c",
              }}
            >
              every tool
            </em>
          </h2>

          <div className="mt-16 flex flex-col gap-10">
            <p
              style={{
                fontFamily: SERIF,
                fontSize: 40,
                fontWeight: 400,
                fontStyle: "italic",
                opacity: 0.85,
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              Every day there's a new "ChatGPT killer." Most are just basic wrappers around the same API.
            </p>

            <div
              style={{
                background: "rgba(58,58,58,0.04)",
                border: "1px solid rgba(58,58,58,0.1)",
                padding: "40px 48px",
                borderRadius: 24,
              }}
            >
              <p
                style={{
                  fontFamily: SANS,
                  fontSize: 32,
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                If you run a business, you need systems that actually <strong>save you time and make you money</strong>, not shiny new toys that distract you from real work.
              </p>
            </div>
          </div>
        </div>

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
