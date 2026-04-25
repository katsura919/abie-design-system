const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide2({ scale }: { scale: number }) {
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
            ~ the classic
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
            02 / 06
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
            BOCA
            <br />
            DILLO
            <br />
            DE CALA
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
              mares
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
              The iconic fried squid sandwich. Sounds incredibly simple, tastes absolutely incredible.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 38,
                  background: "var(--foreground)",
                  color: "var(--background)",
                  padding: "16px 32px",
                  borderRadius: 9999,
                }}
              >
                Crusty Bread
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 38,
                  background: "var(--foreground)",
                  color: "var(--background)",
                  padding: "16px 32px",
                  borderRadius: 9999,
                }}
              >
                Fresh Squid
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 38,
                  background: "var(--foreground)",
                  color: "var(--background)",
                  padding: "16px 32px",
                  borderRadius: 9999,
                }}
              >
                Lemon
              </div>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.4)",
                padding: "32px 40px",
                borderRadius: 24,
                marginTop: 24,
              }}
            >
              <p
                style={{
                  fontFamily: SANS,
                  fontSize: 32,
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                <strong>Pro tip:</strong> Skip the fancy sit-down restaurants. Get it wrapped in paper from a tiny, crowded bar near Plaza Mayor for under €5.
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

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/shouting_megaphone.png"
          alt=""
          style={{
            position: "absolute",
            right: 40,
            top: 240,
            width: 280,
            height: 280,
            objectFit: "contain",
            transform: "rotate(15deg)",
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
}
