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
            ~ zero config
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
            FILE-BASED
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
              routing
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
              Forget mapping routes in a giant App.js file. Next.js uses your actual file structure to generate routes.
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
                  Create a file:
                </div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 24,
                    lineHeight: 1.5,
                    color: "#f9f5f2",
                  }}
                >
                  app/
                  <br />
                  &nbsp;&nbsp;about/
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;page.tsx
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
                  Instantly get:
                </div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 24,
                    lineHeight: 1.5,
                    color: "#f9f5f2",
                  }}
                >
                  <br />
                  <br />
                  yourdomain.com/about
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
              Dynamic params? Just name the folder [id]. It's that intuitive.
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
