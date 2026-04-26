const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide1({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden dark"
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        borderRadius: 18 * scale,
      }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col box-border"
        style={{
          width: 1080,
          height: 1350,
          padding: 72,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
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

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/furious_on_fire.png"
          alt=""
          style={{
            position: "absolute",
            right: 112,
            top: 178,
            width: 210,
            height: 210,
            objectFit: "contain",
            transform: "rotate(10deg)",
            zIndex: 1,
          }}
        />

        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
              opacity: 1,
            }}
          >
            ~ wake up call
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
            01 / 08
          </span>
        </div>

        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <h1
            style={{
              fontFamily: SANS,
              fontSize: 148,
              fontWeight: 900,
              lineHeight: 0.87,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 44px",
              maxWidth: 860,
            }}
          >
            STOP{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                color: "var(--primary)",
              }}
            >
              posting
            </em>{" "}
            CONTENT WITHOUT AI
          </h1>
          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--primary)",
              borderRadius: 2,
              marginBottom: 32,
            }}
          />
          <p
            style={{
              fontFamily: SERIF,
              fontSize: 38,
              fontStyle: "italic",
              fontWeight: 400,
              opacity: 0.78,
              maxWidth: 780,
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            You&apos;re spending 4 hours creating content AI can handle in 20 minutes.
          </p>
        </div>

        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10 }}>
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
