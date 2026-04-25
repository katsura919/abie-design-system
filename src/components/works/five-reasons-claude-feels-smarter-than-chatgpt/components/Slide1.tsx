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
        <div className="flex justify-between items-start">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#e3a99c",
            }}
          >
            ~ Hook
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.45,
            }}
          >
            01 / 07
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              fontSize: 124,
              margin: 0,
              maxWidth: 920,
            }}
          >
            5 Reasons
            <br />
            Claude Feels
            <br />
            Smarter Than
            <br />
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "none",
                letterSpacing: 0,
                color: "#e3a99c",
              }}
            >
              ChatGPT
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 35,
              lineHeight: 1.35,
              marginTop: 28,
              maxWidth: 820,
              opacity: 0.88,
            }}
          >
            Same user. Same task.
            <br />
            One just feels sharper ~
          </p>
        </div>

        <div className="flex justify-between items-end">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.45,
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
              color: "#e3a99c",
            }}
          >
            Swipe →
          </span>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/excited_sparkles.png"
          alt=""
          style={{
            position: "absolute",
            right: 88,
            top: 118,
            width: 220,
            height: 220,
            objectFit: "contain",
            transform: "rotate(6deg)",
          }}
        />
      </div>
    </div>
  );
}
