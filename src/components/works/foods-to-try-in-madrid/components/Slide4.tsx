const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide4({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080 * scale, height: 1350 * scale, borderRadius: 18 * scale }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col p-[72px] box-border border-2"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          borderColor: "rgba(58,58,58,0.1)",
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
            ~ the late night bite
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
            HUEVOS
            <br />
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "var(--primary)",
              }}
            >
              rotos
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
              "Broken eggs" served over crispy fries, usually topped with Iberian jamón.
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
                The ultimate late-night comfort food after having a few vermouths in the Malasaña or La Latina neighborhoods.
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
