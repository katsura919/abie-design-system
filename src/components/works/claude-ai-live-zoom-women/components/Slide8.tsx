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
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Accent shapes */}
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
          viewBox="0 0 1080 1350"
          fill="none"
        >
          <circle cx="70" cy="10" r="360" fill="currentColor" fillOpacity="0.04" />
          <circle cx="1020" cy="1300" r="300" fill="currentColor" fillOpacity="0.04" />
        </svg>

        {/* Sticker */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/abiemeri/abiemeri.png"
          alt=""
          style={{
            position: "absolute",
            right: 65,
            bottom: 100,
            width: 330,
            height: 330,
            objectFit: "contain",
            zIndex: 1,
          }}
        />

        {/* Row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
            }}
          >
            ~ 4 days left
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

        {/* Body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 36px",
              maxWidth: 820,
            }}
          >
            CLAIM YOUR{" "}
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
              spot
            </em>
          </h2>

          {/* Decorative divider */}
          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--primary)",
              borderRadius: 2,
              margin: "0 0 32px",
            }}
          />

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 38,
              fontStyle: "italic",
              lineHeight: 1.4,
              opacity: 0.75,
              maxWidth: 740,
              margin: "0 0 16px",
            }}
          >
            Free. Live. May 1, 2026. Built for women who mean business.
          </p>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 32,
              fontStyle: "italic",
              lineHeight: 1.4,
              opacity: 0.5,
              maxWidth: 700,
              margin: "0 0 40px",
            }}
          >
            Link in bio. Save your seat before it fills up.
          </p>

          {/* CTA pill */}
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
              fontSize: 32,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              alignSelf: "flex-start",
            }}
          >
            Comment "Bootcamp"
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
                fontSize: 30, 
              }}
            >
              →
            </span>
          </div>
        </div>

        {/* Row bottom */}
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
            ~ see you there
          </span>
        </div>
      </div>
    </div>
  );
}
