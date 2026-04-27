"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide2({ scale }: { scale: number }) {
  const imgSrc = "/assets/zatoka/reading-book-at-door.jpg";
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
        <div
          style={{
            width: 464,
            height: 1350,
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
          }}
        >
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
              ~ the weight of it
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
              02 / 05
            </span>
          </div>

          {/* body */}
          <div className="flex flex-col justify-center flex-1">
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
              IT{" "}
              <em style={{ fontFamily: SERIF, fontStyle: "italic", color: "var(--primary)" }}>
                JUST SAT
              </em>{" "}
              THERE
            </h2>
            <div
              style={{
                width: 48,
                height: 3,
                background: "var(--primary)",
                borderRadius: 2,
                margin: "28px 0",
              }}
            />
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 34,
                lineHeight: 1.5,
                margin: 0,
                opacity: 0.8,
                maxWidth: 460,
                color: "var(--color-text)",
              }}
            >
              Quiet. In the background. Draining me without making a sound.
            </p>
            <div style={{ marginTop: 36, borderLeft: "3px solid var(--primary)", paddingLeft: 24 }}>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 32,
                  lineHeight: 1.45,
                  margin: 0,
                  opacity: 0.72,
                  color: "var(--color-text)",
                }}
              >
                My ex-Talent Developer stepped in. I chose to see it as help. And I&apos;m grateful for it.
              </p>
            </div>
          </div>

          {/* row bottom */}
          <div className="flex justify-between items-end" style={{ marginTop: "auto" }}>
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
    </div>
  );
}
