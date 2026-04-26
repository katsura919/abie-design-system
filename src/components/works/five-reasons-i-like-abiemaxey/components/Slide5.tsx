const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const BAR_DATA = [
  { label: "Practical value", value: 94 },
  { label: "Clear examples", value: 89 },
  { label: "Save rate", value: 81 },
  { label: "Rewatch rate", value: 76 },
];

const maxVal = Math.max(...BAR_DATA.map((d) => d.value));

function GridTexture() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  );
}

export default function Slide5({ scale }: { scale: number }) {
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
        className="absolute top-0 left-0 flex flex-col p-[72px] box-border dark"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <GridTexture />

        <div className="relative z-10 flex justify-between items-start">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
            }}
          >
            ~ reason 5 in numbers
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.45,
            }}
          >
            05 / 07
          </span>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              fontSize: 104,
              margin: 0,
            }}
          >
            THE CONTENT
            <br />
            STICKS.
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                color: "var(--primary)",
                marginLeft: 16,
              }}
            >
              hard.
            </em>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 26,
              marginTop: 40,
            }}
          >
            {BAR_DATA.map(({ label, value }, i) => (
              <div
                key={label}
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 20,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      opacity: 0.6,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: SANS,
                      fontWeight: 900,
                      fontSize: 36,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {value}%
                  </span>
                </div>

                <div
                  style={{
                    height: 14,
                    borderRadius: 7,
                    background: "rgba(255,255,255,0.08)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${(value / maxVal) * 100}%`,
                      borderRadius: 7,
                      background: i === 0 ? "var(--primary)" : "currentColor",
                      opacity: i === 0 ? 1 : 0.55 - i * 0.1,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 34,
              lineHeight: 1.45,
              marginTop: 36,
              opacity: 0.8,
              maxWidth: 820,
            }}
          >
            Reason 5 is simple ~ her ideas survive after the scroll.
            <br />
            You remember them and you actually use them.
          </p>
        </div>

        <div className="relative z-10 flex justify-between items-end">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.45,
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
