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
            ~ the sweet spot
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
            VALENCIA
            <br />
            &amp; <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "#1e1b1a",
              }}
            >
              alicante
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
              The Mediterranean lifestyle without the Barcelona price tag.
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
                <li>Highly walkable and bike-friendly</li>
                <li>Incredible food scene (home of paella)</li>
                <li>Thriving expat and nomad communities</li>
                <li>Rent is 30-40% cheaper than Barcelona</li>
              </ul>
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
              *Pro-tip: Valencia is getting popular fast. Look at Alicante for a smaller, highly connected alternative with an international airport.
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
