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
        {/* grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* row top */}
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
            ~ replace the writer
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

        {/* body */}
        <div className="mt-28 z-10">
          <div
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#e3a99c",
              marginBottom: 20,
            }}
          >
            prompt 01
          </div>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            THE{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                color: "#e3a99c",
              }}
            >
              content
            </em>
            <br />
            WRITER
          </h2>

          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 24,
              padding: "40px 48px",
              marginTop: 48,
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 18,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#e3a99c",
                marginBottom: 14,
                display: "block",
              }}
            >
              ~ copy this
            </span>
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 34,
                lineHeight: 1.55,
                margin: 0,
                opacity: 0.9,
              }}
            >
              &ldquo;You are a conversion copywriter for [niche] businesses.
              Write 5 Instagram captions for [topic]. Each must open with a
              scroll-stopping hook, include one specific result or stat, and end
              with a CTA. Max 150 words each. Tone: direct, zero fluff.&rdquo;
            </p>
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.4,
              marginTop: 40,
              opacity: 0.65,
            }}
          >
            Replaces a $1,500/mo content writer. In 90 seconds.
          </p>
        </div>

        {/* row bottom */}
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
