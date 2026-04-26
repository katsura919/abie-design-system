const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const CHIPS = ["VOICE", "PROMPT", "CONTEXT", "FORMAT"];

export default function Slide3({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden charcoal"
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
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
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
            ~ the formula
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
            03 / 08
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
              margin: 0,
            }}
          >
            THE AI CONTENT{" "}
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
              formula
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 36,
              fontStyle: "italic",
              fontWeight: 400,
              opacity: 0.72,
              maxWidth: 820,
              margin: "28px 0 0",
              lineHeight: 1.4,
            }}
          >
            Four inputs. Every time. AI stops sounding generic when you feed it the right raw material.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px 14px",
              marginTop: 52,
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
                  background: "rgba(249,245,242,0.12)",
                  color: "var(--background)",
                  padding: "14px 28px",
                  borderRadius: 9999,
                  border: "1px solid rgba(249,245,242,0.2)",
                }}
              >
                {chip}
              </span>,
              ...(i < arr.length - 1
                ? [
                    <span
                      key={`plus${i}`}
                      style={{ fontFamily: MONO, fontSize: 32, opacity: 0.45 }}
                    >
                      +
                    </span>,
                  ]
                : []),
            ])}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginTop: 44,
            }}
          >
            {[
              { label: "VOICE", desc: "Paste 3 of your past posts so AI mirrors how you actually write" },
              { label: "PROMPT", desc: "One sentence: topic + angle + audience" },
              { label: "CONTEXT", desc: "What&apos;s happening right now — trend, pain, moment" },
              { label: "FORMAT", desc: "Carousel / caption / thread — be specific" },
            ].map(({ label, desc }) => (
              <div
                key={label}
                style={{
                  background: "rgba(249,245,242,0.06)",
                  border: "1px solid rgba(249,245,242,0.1)",
                  borderRadius: 16,
                  padding: "20px 24px",
                }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 17,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--primary)",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  {label}
                </span>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 26,
                    lineHeight: 1.4,
                    margin: 0,
                    opacity: 0.7,
                  }}
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              </div>
            ))}
          </div>
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
