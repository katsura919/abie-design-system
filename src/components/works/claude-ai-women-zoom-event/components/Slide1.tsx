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
        className="absolute top-0 left-0 flex flex-col box-border"
        style={{
          width: 1080,
          height: 1350,
          padding: 72,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--primary-soft)",
          color: "var(--foreground)",
        }}
      >
        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--foreground)",
              opacity: 0.45,
            }}
          >
            ~ mark your calendar
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
            01 / 07
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          {/* event date badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              background: "rgba(58,58,58,0.1)",
              border: "1px solid rgba(58,58,58,0.15)",
              borderRadius: 9999,
              padding: "10px 28px",
              alignSelf: "flex-start",
              marginBottom: 36,
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 20,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.65,
              }}
            >
              May 1, 2026 · 6–8 PM EST · Free
            </span>
          </div>

          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 136,
              letterSpacing: "-0.04em",
              lineHeight: 0.87,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            FREE
            <br />
            LIVE{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              ai
            </em>
            <br />
            TRAINING
          </p>

          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--foreground)",
              borderRadius: 2,
              opacity: 0.2,
              margin: "36px 0",
            }}
          />

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 38,
              lineHeight: 1.45,
              opacity: 0.72,
              maxWidth: 780,
              margin: 0,
            }}
          >
            Designed for women in business. No tech background.
            No overwhelm. Just{" "}
            <span
              style={{
                display: "inline-block",
                background: "rgba(58,58,58,0.12)",
                padding: "2px 16px",
                borderRadius: 10,
                fontFamily: SANS,
                fontWeight: 900,
                fontStyle: "normal",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                fontSize: 32,
              }}
            >
              Claude
            </span>{" "}
            working for you.
          </p>
        </div>

        {/* row bottom */}
        <div
          className="flex justify-between items-end"
          style={{ marginTop: "auto", zIndex: 10 }}
        >
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

        {/* sticker */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/excited_sparkles.png"
          alt=""
          style={{
            position: "absolute",
            right: 108,
            top: 152,
            width: 220,
            height: 220,
            objectFit: "contain",
            transform: "rotate(-8deg)",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}
