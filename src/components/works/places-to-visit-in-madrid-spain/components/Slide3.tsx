const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const FACTS = [
  "Cafes stay open until 2am — no one rushes you out",
  "3 coworking spaces within a 10-min walk of each other",
  "Sunday vintage market at Mercado de Motores (free entry)",
];

export default function Slide3({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden peach"
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
          backgroundColor: "var(--primary-soft)",
          color: "var(--foreground)",
        }}
      >
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.6,
            }}
          >
            ~ nomad HQ
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
            03 / 07
          </span>
        </div>

        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 20,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.5,
              margin: "0 0 16px",
            }}
          >
            ~ 01 / Malasaña
          </p>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 16px",
            }}
          >
            WHERE WORK{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              meets life
            </em>
          </h2>

          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--foreground)",
              opacity: 0.2,
              borderRadius: 2,
              margin: "28px 0",
            }}
          />

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 34,
              fontStyle: "italic",
              opacity: 0.75,
              maxWidth: 820,
              margin: "0 0 36px",
              lineHeight: 1.4,
            }}
          >
            Madrid&apos;s creative neighborhood. Indie coffee shops, record stores, zero chain cafes. The energy is different here.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {FACTS.map((fact, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: 20 }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 22,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    opacity: 0.45,
                    minWidth: 56,
                    paddingTop: 8,
                  }}
                >
                  0{i + 1}
                </span>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 34,
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {fact}
                </p>
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
