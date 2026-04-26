const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const CHIPS = ["OBSERVE", "EXTRACT", "APPLY", "SHIP"];

export default function Slide6({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        borderRadius: 18 * scale,
        border: "1px solid rgba(58,58,58,0.1)",
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
            ~ the mindset shift
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

        <div className="flex-1 flex flex-col justify-center">
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              fontSize: 108,
              margin: 0,
            }}
          >
            STOP
            <br />
            CONSUMING.
            <br />
            START
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                marginLeft: 14,
              }}
            >
              compounding.
            </em>
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px 12px",
              marginTop: 36,
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
                  letterSpacing: "-0.02em",
                }}
              >
                {chip}
              </span>,
              ...(i < arr.length - 1
                ? [
                    <span
                      key={`plus-${i}`}
                      style={{
                        fontFamily: MONO,
                        fontSize: 30,
                        opacity: 0.55,
                      }}
                    >
                      +
                    </span>,
                  ]
                : []),
            ])}
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.45,
              marginTop: 34,
              opacity: 0.78,
              maxWidth: 860,
            }}
          >
            Biggest reason I like Abie Maxey:
            <br />
            she teaches a repeatable operating system, not one-off motivation.
          </p>
        </div>

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
            instagram.com/abiemaxey
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
            Swipe -&gt;
          </span>
        </div>
      </div>
    </div>
  );
}
