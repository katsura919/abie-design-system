const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide3({ scale }: { scale: number }) {
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
            ~ winter warmer
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
            COCIDO
            <br />
            MADRI
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
              leño
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
              Not just a stew, it's a 3-course event. Soup first, then chickpeas and veggies, then the meats. You <em>will</em> need a siesta after this.
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
                    color: "var(--background)",
                    opacity: 0.5,
                    marginBottom: 16,
                  }}
                >
                  Most Tourists
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 24,
                    lineHeight: 1.5,
                    color: "var(--background)",
                    opacity: 0.9,
                  }}
                >
                  Ordering generic Paella for dinner at 7 PM in the center of town.
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
                    color: "var(--primary)",
                    marginBottom: 16,
                  }}
                >
                  Top Performers
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 24,
                    lineHeight: 1.5,
                    color: "var(--background)",
                    opacity: 0.9,
                  }}
                >
                  Eating Cocido for a heavy, 3-hour Sunday lunch surrounded by local families.
                </div>
              </div>
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
