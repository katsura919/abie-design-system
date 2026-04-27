"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide1({ scale }: { scale: number }) {
  const imgSrc = "/assets/zatoka/smile-at-camera.jpg";
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080 * scale, height: 1350 * scale, borderRadius: 18 * scale }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col box-border"
        style={{
          width: 1080,
          height: 1350,
          padding: 72,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          color: "#f9f5f2",
          position: "relative",
        }}
      >
        {/* image layer */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(30,27,26,0.2) 0%, rgba(30,27,26,0.5) 40%, rgba(30,27,26,0.9) 100%)",
            }}
          />
        </div>

        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10, position: "relative" }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e3a99c", opacity: 0.9 }}>
            ~ against the grain
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
            01 / 06
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-end flex-1" style={{ zIndex: 10, position: "relative" }}>
          <h1
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 108,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
              color: "#f9f5f2",
            }}
          >
            EVERYONE
            <br />
            MOVES{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--primary)",
                textTransform: "none",
                letterSpacing: 0,
              }}
            >
              east.
            </em>
            <br />
            I MOVED
            <br />
            WEST.
          </h1>
          <div style={{ width: 48, height: 3, background: "var(--primary)", borderRadius: 2, margin: "28px 0" }} />
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 38,
              lineHeight: 1.45,
              margin: 0,
              opacity: 0.82,
              maxWidth: 820,
            }}
          >
            Most nomads chase the exchange rate. I chased something harder to measure.
          </p>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: 36, zIndex: 10, position: "relative" }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            abiemaxey.com
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
            Swipe →
          </span>
        </div>
      </div>
    </div>
  );
}
