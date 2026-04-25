const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide6({ scale }: { scale: number }) {
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
        className="absolute top-0 left-0 flex flex-col items-center justify-center text-center"
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
        <div className="absolute top-18 w-full px-18 flex justify-between items-start z-10 left-0">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#e3a99c",
            }}
          >
            ~ what's next
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
            06 / 06
          </span>
        </div>

        <div className="z-10 mt-16 flex flex-col items-center">
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 140,
              fontWeight: 900,
              lineHeight: 0.9,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            WANT TO
            <br />
            LEARN{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "#e3a99c",
              }}
            >
              more?
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 48,
              fontWeight: 400,
              fontStyle: "italic",
              opacity: 0.85,
              marginTop: 48,
              lineHeight: 1.2,
              maxWidth: 800,
            }}
          >
            Comment <strong>"BOOTCAMP"</strong> below and I'll send you my free 2-hour AI training for founders.
          </p>

          <div
            style={{
              marginTop: 64,
              display: "flex",
              alignItems: "center",
              gap: 16,
              background: "#3a3a3a",
              color: "#f9f5f2",
              padding: "24px 48px",
              borderRadius: 9999,
              fontFamily: SANS,
              fontSize: 32,
              fontWeight: 900,
              textTransform: "uppercase",
            }}
          >
            COMMENT "BOOTCAMP"{" "}
            <span
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "#e3a99c",
              }}
            >
              below
            </span>
          </div>
        </div>

        <div className="absolute bottom-18 w-full px-18 flex justify-between items-end z-10 left-0">
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
            Save This ↓
          </span>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/winking_peace.png"
          alt=""
          style={{
            position: "absolute",
            left: 80,
            bottom: 200,
            width: 280,
            height: 280,
            objectFit: "contain",
            transform: "rotate(-12deg)",
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
}
