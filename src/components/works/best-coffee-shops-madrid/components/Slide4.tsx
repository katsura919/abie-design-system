const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const INFO = [
  { label: "Neighborhood", value: "Chueca" },
  { label: "Best for", value: "Flat whites & brunch" },
  { label: "Vibe", value: "Bright, social, expat-friendly" },
];

export default function Slide4({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080 * scale, height: 1350 * scale, borderRadius: 18 * scale }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col p-[72px] box-border"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--primary)",
          color: "var(--foreground)",
        }}
      >
        <div className="flex justify-between items-start z-10">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--foreground)",
              opacity: 0.8,
            }}
          >
            ~ pick 02
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

        <div className="mt-24 z-10">
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
            FEDERAL
            <br />
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "var(--background)",
              }}
            >
              café
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 38,
              fontWeight: 400,
              fontStyle: "italic",
              opacity: 0.85,
              lineHeight: 1.4,
              marginTop: 36,
              maxWidth: 820,
            }}
          >
            Australian-style, expat-approved. Flat whites here are consistent in a way Madrid rarely achieves.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 52,
              borderTop: "1px solid rgba(58,58,58,0.15)",
            }}
          >
            {INFO.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "28px 0",
                  borderBottom: "1px solid rgba(58,58,58,0.15)",
                }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 18,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    opacity: 0.55,
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: SANS,
                    fontWeight: 900,
                    fontSize: 30,
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "rgba(58,58,58,0.1)",
              border: "1px solid rgba(58,58,58,0.18)",
              borderRadius: 24,
              padding: "36px 44px",
              marginTop: 44,
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 18,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.6,
                marginBottom: 14,
                display: "block",
              }}
            >
              ~ order this
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
              The smashed avo on toast + a flat white. Classic, every time.
            </p>
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
