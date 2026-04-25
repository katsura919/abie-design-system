const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide5({ scale }: { scale: number }) {
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
          background: "#1e1b1a",
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
            ~ the speed
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
            05 / 06
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
            SERVER
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
              components
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
              Tired of your app showing a loading spinner while it fetches data on the client?
            </p>

            <div className="grid grid-cols-2 gap-8 mt-8">
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
                  Client React
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 24,
                    lineHeight: 1.5,
                    color: "#f9f5f2",
                    opacity: 0.9,
                  }}
                >
                  Send a huge bundle of JS to the browser.
                  <br /><br />
                  Make the user's phone download it, parse it, and then fetch the data. Slow.
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
                  Next.js React
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 24,
                    lineHeight: 1.5,
                    color: "#f9f5f2",
                    opacity: 0.9,
                  }}
                >
                  Fetch the data directly on your fast server.
                  <br /><br />
                  Send the finished HTML instantly to the user. Zero JS shipped for that component.
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
