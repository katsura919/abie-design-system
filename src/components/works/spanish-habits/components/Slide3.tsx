const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide3({ scale }: { scale: number }) {
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
          background: "#3a3a3a",
          color: "#f9f5f2",
          padding: 72,
          boxSizing: "border-box",
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
            ~ social cues
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
            03 / 06
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
            THE
            <br />
            MISSING
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
              "please"
            </em>
          </h2>

          <div className="mt-16 flex flex-col gap-12">
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
              To Americans or Brits, the Spanish language can sound incredibly blunt and commanding.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "32px",
                  borderRadius: 24,
                }}
              >
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 24,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    color: "#f9f5f2",
                    opacity: 0.5,
                    marginBottom: 16,
                  }}
                >
                  Most People
                </div>
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: 32,
                    fontStyle: "italic",
                    lineHeight: 1.3,
                    color: "#f9f5f2",
                  }}
                >
                  "Excuse me, would you mind bringing me a coffee, please?"
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "32px",
                  borderRadius: 24,
                }}
              >
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 24,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    color: "#e3a99c",
                    marginBottom: 16,
                  }}
                >
                  In Spain
                </div>
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: 32,
                    fontStyle: "italic",
                    lineHeight: 1.3,
                    color: "#f9f5f2",
                  }}
                >
                  "Ponme un café."
                  <br />
                  <br />
                  <span style={{ fontSize: 24, opacity: 0.7 }}>(Put me a coffee.)</span>
                </div>
              </div>
            </div>

            <p
              style={{
                fontFamily: SERIF,
                fontSize: 36,
                fontWeight: 400,
                fontStyle: "italic",
                opacity: 0.7,
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              *It's not rude! Excessive politeness builds a wall. Being direct shows closeness and equality.
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

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/thinking_ellipsis.png"
          alt=""
          style={{
            position: "absolute",
            right: 64,
            top: 240,
            width: 220,
            height: 220,
            objectFit: "contain",
            transform: "rotate(12deg)",
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
}
