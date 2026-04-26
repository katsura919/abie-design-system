const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide1({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        borderRadius: 18 * scale,
      }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col dark"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
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

        <img
          src="/assets/stickers/shouting_megaphone.png"
          alt=""
          className="absolute pointer-events-none"
          style={{ width: 190, top: 182, right: 64, zIndex: 20 }}
        />

        <div className="relative z-10 flex items-center justify-between">
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.52,
              margin: 0,
            }}
          >
            ~ live ai training
          </p>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.52,
              margin: 0,
            }}
          >
            01/07
          </p>
        </div>

        <div className="relative z-10 mt-20 flex flex-1 flex-col">
          <h1
            style={{
              fontFamily: SANS,
              fontSize: 148,
              lineHeight: 0.86,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              fontWeight: 900,
              margin: 0,
              maxWidth: 880,
            }}
          >
            Ladies, Dont Miss This Free AI Training
          </h1>

          <p
            style={{
              marginTop: 56,
              marginBottom: 0,
              maxWidth: 760,
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 39,
              lineHeight: 1.35,
              opacity: 0.8,
            }}
          >
            Learn how to use Claude for business this May 1.
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.45,
              margin: 0,
            }}
          >
            abiemaxey.com
          </p>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.62,
              margin: 0,
            }}
          >
            swipe ~
          </p>
        </div>
      </div>
    </div>
  );
}
