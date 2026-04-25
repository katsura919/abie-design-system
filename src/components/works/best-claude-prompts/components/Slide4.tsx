const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide4({ scale }: { scale: number }) {
  const CHIPS = ["CONTEXT", "TASK", "OUTPUT_FORMAT"];

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
        <div className="flex justify-between items-start">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.5,
            }}
          >
            ~ tip 02
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
            04 / 06
          </span>
        </div>

        <div className="mt-32">
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
            USE{" "}
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
              xml
            </em>{" "}
            TAGS TO
            <br />
            STRUCTURE DATA.
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 38,
              lineHeight: 1.4,
              marginTop: 32,
              maxWidth: 820,
              opacity: 0.85,
            }}
          >
            Claude is trained to understand tags like &lt;context&gt; or
            &lt;example&gt;. It separates instructions from data, preventing
            "prompt leakage" and hallucinations.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px 14px",
              marginTop: 48,
              alignItems: "center",
            }}
          >
            {CHIPS.flatMap((chip, i, arr) => [
              <span
                key={chip}
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 38,
                  textTransform: "uppercase",
                  background: "#3a3a3a",
                  color: "#f9f5f2",
                  padding: "14px 24px",
                  borderRadius: 9999,
                }}
              >
                {chip}
              </span>,
              ...(i < arr.length - 1
                ? [
                    <span
                      key={`+${i}`}
                      style={{ fontFamily: MONO, fontSize: 32, opacity: 0.5 }}
                    >
                      +
                    </span>,
                  ]
                : []),
            ])}
          </div>
        </div>

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
