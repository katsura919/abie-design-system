"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide5({ scale }: { scale: number }) {
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
        <div className="flex justify-between items-start" style={{ zIndex: 10, position: "relative" }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.55,
            }}
          >
            ~ when that moment comes
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
            05 / 05
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, position: "relative" }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 110,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            I HOPE I&apos;M{" "}
            <em style={{ fontFamily: SERIF, fontStyle: "italic", color: "var(--primary)" }}>
              READY
            </em>
          </h2>

          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--primary)",
              borderRadius: 2,
              margin: "32px 0",
            }}
          />

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 40,
              lineHeight: 1.5,
              margin: 0,
              opacity: 0.82,
              maxWidth: 820,
              color: "var(--color-text)",
            }}
          >
            Until sorrow comes. Until fear knocks. Until love asks more than ambition ever could.
          </p>

          <div style={{ marginTop: 48 }}>
            <p
              style={{
                fontFamily: SANS,
                fontWeight: 900,
                fontSize: 28,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                margin: 0,
                opacity: 0.5,
              }}
            >
              I chose myself. I chose growth. I chose to keep building.
            </p>
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 32,
                lineHeight: 1.4,
                margin: "16px 0 0",
                opacity: 0.65,
                color: "var(--color-text)",
              }}
            >
              And when that moment comes — I&apos;ll be ready.
            </p>
          </div>
        </div>

        {/* sticker */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/thinking.png"
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

        {/* row bottom */}
        <div
          className="flex justify-between items-end"
          style={{ marginTop: "auto", zIndex: 10, position: "relative" }}
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
            ~ save · share · steal
          </span>
        </div>
      </div>
    </div>
  );
}
