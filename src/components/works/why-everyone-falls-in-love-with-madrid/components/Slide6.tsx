const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide6({ scale }: { scale: number }) {
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
        <div className="flex justify-between items-start z-10">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
            }}
          >
            ~ the balance
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

        <div className="mt-40 z-10">
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            BIG CITY{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "var(--primary)",
              }}
            >
              opportunities
            </em>
          </h2>

          <div className="mt-16 mb-16 flex items-center gap-6">
            <span style={{ fontSize: 60, fontWeight: 900, color: "var(--primary)", fontFamily: SANS }}>+</span>
            <h2
              style={{
                fontFamily: SANS,
                fontSize: 100,
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              A LIFESTYLE THAT FEELS{" "}
              <span
                style={{
                  color: "var(--background)",
                  backgroundColor: "var(--foreground)",
                  padding: "8px 24px",
                  borderRadius: 24,
                  display: "inline-block",
                  transform: "rotate(-2deg)",
                }}
              >
                HUMAN
              </span>
            </h2>
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 44,
              fontWeight: 400,
              fontStyle: "italic",
              opacity: 0.7,
              lineHeight: 1.4,
              marginTop: 48,
              maxWidth: 860,
            }}
          >
            That's why so many people want to stay.
          </p>
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
