"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide1({ scale }: { scale: number }) {
  const imgSrc = "/assets/zatoka/campfire.jpg";
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
                "linear-gradient(to bottom, rgba(30,27,26,0.3) 0%, rgba(30,27,26,0.5) 40%, rgba(30,27,26,0.92) 100%)",
            }}
          />
        </div>

        {/* sticker */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img
          src="/assets/stickers/thinking.png"
          alt=""
          style={{
            position: "absolute",
            right: 112,
            top: 180,
            width: 196,
            height: 196,
            objectFit: "contain",
            transform: "rotate(-7deg)",
            zIndex: 2,
          }}
        /> */}

        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10, position: "relative" }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#e3a99c",
              opacity: 0.9,
            }}
          >
            ~ the honest part
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
            01 / 06
          </span>
        </div>

        {/* body */}
        <div
          className="flex flex-col justify-end flex-1"
          style={{ zIndex: 10, position: "relative" }}
        >
          {/* scene eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
            <div
              style={{ width: 32, height: 2, background: "#e3a99c", borderRadius: 1 }}
            />
            <span
              style={{
                fontFamily: MONO,
                fontSize: 22,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.6,
              }}
            >
              2 years · 12+ countries
            </span>
          </div>

          <h1
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 104,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            I THOUGHT I WAS{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "none",
                letterSpacing: 0,
                color: "#e3a99c",
              }}
            >
              living.
            </em>{" "}
            I WAS RUNNING.
          </h1>

          <div
            style={{
              width: 48,
              height: 3,
              background: "#e3a99c",
              borderRadius: 2,
              margin: "32px 0",
            }}
          />

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
            Moving every 6 weeks taught me adaptability. It also taught me how to avoid depth.
          </p>
        </div>

        {/* row bottom */}
        <div
          className="flex justify-between items-end"
          style={{ marginTop: 40, zIndex: 10, position: "relative" }}
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
      </div>
    </div>
  );
}
