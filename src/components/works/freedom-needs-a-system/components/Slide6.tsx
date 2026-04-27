"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide6({ scale }: { scale: number }) {
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
        {/* grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* sticker */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/ok-sign.png"
          alt=""
          style={{
            position: "absolute",
            right: 120,
            top: 200,
            width: 220,
            height: 220,
            objectFit: "contain",
            transform: "rotate(8deg)",
            zIndex: 1,
          }}
        />

        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10, position: "relative" }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
              opacity: 0.9,
            }}
          >
            ~ the real secret
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            06 / 06
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, position: "relative" }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 106,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            BUILD FOR{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                fontStyle: "italic",
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              living,
            </em>
            <br />
            NOT FOR HUSTLE.
          </h2>
          <div style={{ width: 48, height: 3, background: "var(--primary)", borderRadius: 2, margin: "32px 0" }} />
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.5,
              margin: 0,
              opacity: 0.8,
              maxWidth: 820,
            }}
          >
            Automations work while I sleep. Systems keep me accountable. I show up every day — not because I&apos;m disciplined, but because the structure makes it easy.
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              marginTop: 52,
              background: "var(--primary)",
              borderRadius: 9999,
              padding: "20px 40px",
              width: "fit-content",
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 22,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#f9f5f2",
              }}
            >
              Drop a 🖥️ for the full tools list →
            </span>
          </div>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10, position: "relative" }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            abiemaxey.com
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
            ~ save · share · steal
          </span>
        </div>
      </div>
    </div>
  );
}
