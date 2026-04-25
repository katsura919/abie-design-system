const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide2({ scale }: { scale: number }) {
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
          background: "#f9f5f2",
          color: "#3a3a3a",
          padding: 72,
          boxSizing: "border-box",
          border: "2px solid rgba(58,58,58,0.1)",
        }}
      >
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
            ~ the problem
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
            THE
            <br />
            BARCELONA
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
              trap
            </em>
          </h2>

          <div className="mt-16 flex flex-col gap-8">
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
              Most nomads flock to Barcelona or Madrid because it's what they know.
            </p>
            <div
              style={{
                background: "rgba(58,58,58,0.04)",
                border: "1px solid rgba(58,58,58,0.1)",
                padding: "40px 48px",
                borderRadius: 24,
              }}
            >
              <ul
                style={{
                  fontFamily: SANS,
                  fontSize: 32,
                  lineHeight: 1.5,
                  margin: 0,
                  paddingLeft: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <li>Skyrocketing rent prices</li>
                <li>Overwhelming tourist crowds</li>
                <li>Anti-tourist sentiment growing</li>
                <li>Noise and lack of authentic local connection</li>
              </ul>
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
              }}
            >
              Spain is huge. You don't have to compete for overpriced Airbnbs to enjoy the Spanish lifestyle.
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
            right: 80,
            top: 240,
            width: 200,
            height: 200,
            objectFit: "contain",
            transform: "rotate(-8deg)",
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
}
