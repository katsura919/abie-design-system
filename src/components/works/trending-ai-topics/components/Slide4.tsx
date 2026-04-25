const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide4({ scale }: { scale: number }) {
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
          background: "#e3a99c",
          color: "#3a3a3a",
          padding: 72,
          boxSizing: "border-box",
        }}
      >
        <div className="flex justify-between items-start z-10">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#3a3a3a",
              opacity: 0.8,
            }}
          >
            ~ trend 02
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
            LOCAL
            <br />
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "#1e1b1a",
              }}
            >
              models
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
                maxWidth: 800,
              }}
            >
              Running open-source models (like Llama 3) directly on your own hardware using tools like Ollama.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 38,
                  background: "#3a3a3a",
                  color: "#f9f5f2",
                  padding: "16px 32px",
                  borderRadius: 9999,
                }}
              >
                No Wi-Fi Needed
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 38,
                  background: "#3a3a3a",
                  color: "#f9f5f2",
                  padding: "16px 32px",
                  borderRadius: 9999,
                }}
              >
                Absolute Privacy
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 38,
                  background: "#3a3a3a",
                  color: "#f9f5f2",
                  padding: "16px 32px",
                  borderRadius: 9999,
                }}
              >
                Free Forever
              </div>
            </div>

            <p
              style={{
                fontFamily: SERIF,
                fontSize: 40,
                fontWeight: 400,
                fontStyle: "italic",
                opacity: 0.85,
                lineHeight: 1.3,
                margin: 0,
                maxWidth: 800,
                marginTop: 24,
              }}
            >
              For businesses dealing with sensitive client data, local models aren't just a trend—they're a requirement.
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
          src="/assets/stickers/working_on_laptop.png"
          alt=""
          style={{
            position: "absolute",
            right: 40,
            bottom: 120,
            width: 380,
            height: 380,
            objectFit: "contain",
            transform: "rotate(-5deg)",
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
}
