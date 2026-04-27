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
          src="/assets/stickers/cta-point-viewers.png"
          alt=""
          style={{
            position: "absolute",
            right: 112,
            top: 180,
            width: 220,
            height: 220,
            objectFit: "contain",
            transform: "rotate(-8deg)",
            zIndex: 1,
          }}
        />

        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--primary)", opacity: 0.9 }}>
            ~ worth every euro
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            06 / 06
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 104,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            SAVINGS
            <br />
            CAN BE{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                color: "var(--primary)",
                textTransform: "none",
                letterSpacing: 0,
              }}
            >
              rebuilt.
            </em>
            <br />
            TIME
            <br />
            CANNOT.
          </h2>

          <div style={{ width: 48, height: 3, background: "var(--primary)", borderRadius: 2, margin: "32px 0" }} />

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 38,
              lineHeight: 1.5,
              margin: 0,
              opacity: 0.72,
              maxWidth: 820,
            }}
          >
            I moved West to measure myself against a global standard. The numbers look worse. The person in the mirror looks better.
          </p>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10 }}>
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
