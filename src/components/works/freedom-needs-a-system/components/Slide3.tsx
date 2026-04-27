"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide3({ scale }: { scale: number }) {
  const imgSrc = "/assets/zatoka/lake-gaze-above.jpg";
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080 * scale, height: 1350 * scale, borderRadius: 18 * scale }}
    >
      <div
        className="absolute top-0 left-0"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          display: "flex",
        }}
      >
        {/* image column */}
        <div style={{ width: 464, height: 1350, flexShrink: 0, position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* text column */}
        <div
          style={{
            flex: 1,
            height: 1350,
            display: "flex",
            flexDirection: "column",
            padding: "72px 72px 72px 48px",
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
          }}
        >
          {/* row top */}
          <div className="flex justify-between items-start">
            <span
              style={{
                fontFamily: MONO,
                fontSize: 22,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.55,
              }}
            >
              ~ the shift
            </span>
            <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
              03 / 06
            </span>
          </div>

          {/* body */}
          <div className="flex flex-col justify-center flex-1">
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <div style={{ width: 32, height: 2, background: "var(--primary)", borderRadius: 1 }} />
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 20,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.6,
                }}
              >
                the realization
              </span>
            </div>
            <h2
              style={{
                fontFamily: SANS,
                fontWeight: 900,
                fontSize: 82,
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              MOTIVATION{" "}
              <em
                style={{
                  fontFamily: SERIF,
                  fontWeight: 400,
                  fontStyle: "italic",
                  textTransform: "lowercase",
                  letterSpacing: 0,
                }}
              >
                fades.
              </em>
              <br />
              SYSTEMS STAY.
            </h2>
            <div style={{ width: 48, height: 3, background: "var(--primary)", borderRadius: 2, margin: "28px 0" }} />
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 34,
                lineHeight: 1.5,
                margin: 0,
                opacity: 0.78,
                maxWidth: 460,
              }}
            >
              Stop relying on discipline alone. Build a rhythm that shows up whether you feel like it or not.
            </p>
          </div>

          {/* row bottom */}
          <div className="flex justify-between items-end" style={{ marginTop: "auto" }}>
            <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
              abiemaxey.com
            </span>
            <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
              Swipe →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
