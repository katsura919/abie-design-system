const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide8({ scale }: { scale: number }) {
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
          src="/assets/stickers/thumbs_up.png"
          alt=""
          style={{
            position: "absolute",
            right: 112,
            bottom: 340,
            width: 200,
            height: 200,
            objectFit: "contain",
            transform: "rotate(-6deg)",
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
            ~ your move
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
            08 / 08
          </span>
        </div>

        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 160,
              lineHeight: 0.5,
              color: "var(--primary)",
              opacity: 0.3,
              display: "block",
              marginBottom: 28,
              userSelect: "none",
            }}
          >
            &ldquo;
          </span>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 52,
              lineHeight: 1.25,
              margin: 0,
              maxWidth: 820,
            }}
          >
            Your next post is{" "}
            <span style={{ color: "var(--primary)" }}>one prompt away.</span>{" "}
            The only thing AI can&apos;t replace is the decision to start.
          </p>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginTop: 36,
            }}
          >
            ~ Abie Maxey
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 24,
              background: "#f9f5f2",
              color: "#1e1b1a",
              borderRadius: 9999,
              padding: "14px 14px 14px 48px",
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 28,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginTop: 52,
              alignSelf: "flex-start",
            }}
          >
            Drop your niche below
            <span
              style={{
                width: 60,
                height: 60,
                background: "#e3a99c",
                color: "#3a3a3a",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
              }}
            >
              →
            </span>
          </div>
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
            ~ save · share · steal
          </span>
        </div>
      </div>
    </div>
  );
}
