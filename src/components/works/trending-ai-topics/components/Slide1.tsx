const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide1({ scale }: { scale: number }) {
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
            ~ state of AI
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
            01 / 06
          </span>
        </div>

        <div className="mt-40 z-10">
          <h1
            style={{
              fontFamily: SANS,
              fontSize: 168,
              fontWeight: 900,
              lineHeight: 0.86,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            TRENDING
            <br />
            AI{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "#e3a99c",
              }}
            >
              topics
            </em>
          </h1>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 40,
              fontWeight: 400,
              fontStyle: "italic",
              opacity: 0.85,
              lineHeight: 1.3,
              marginTop: 48,
              maxWidth: 860,
            }}
          >
            The AI landscape changes weekly. Here are the 3 developments you actually need to care about right now.
          </p>
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
            right: 80,
            bottom: 240,
            width: 320,
            height: 320,
            objectFit: "contain",
            transform: "rotate(15deg)",
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
}
