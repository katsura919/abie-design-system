"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide3({ scale }: { scale: number }) {
  const imgSrc =
    "https://images.pexels.com/photos/28989039/pexels-photo-28989039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
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
                "linear-gradient(to bottom, rgba(30,27,26,0.18) 0%, rgba(30,27,26,0.45) 40%, rgba(30,27,26,0.88) 100%)",
            }}
          />
        </div>

        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10, position: "relative" }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e3a99c", opacity: 0.9 }}>
            ~ 3pm, seville
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
            03 / 07
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-end flex-1" style={{ zIndex: 10, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ width: 32, height: 2, background: "#e3a99c", borderRadius: 1 }} />
            <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.6 }}>
              Plaza de España · Seville
            </span>
          </div>

          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 96,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            NOTHING PREPARED ME FOR{" "}
            <em style={{ fontFamily: SERIF, fontWeight: 400, fontStyle: "italic", textTransform: "lowercase", letterSpacing: 0 }}>
              this.
            </em>
          </h2>

          <div style={{ width: 48, height: 3, background: "#e3a99c", borderRadius: 2, margin: "28px 0" }} />

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.45,
              margin: 0,
              opacity: 0.85,
              maxWidth: 820,
            }}
          >
            Spain didn't just build a square. They created something you feel as much as you see.
          </p>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: 40, zIndex: 10, position: "relative" }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            abiemaxey.com
          </span>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
            <span style={{ fontFamily: MONO, fontSize: 16, letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.3 }}>
              Photo: Pexels
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
