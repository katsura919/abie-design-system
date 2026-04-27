"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide5({ scale }: { scale: number }) {
  const imgSrc = "/assets/zatoka/reading-book-at-door.jpg";
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        borderRadius: 18 * scale,
        border: "1px solid rgba(58,58,58,0.08)",
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
        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10, position: "relative" }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--foreground)", opacity: 0.55 }}>
            ~ what I realized
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            05 / 07
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, position: "relative" }}>
          {/* inset card image */}
          <div style={{ marginBottom: 40 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgSrc}
              alt=""
              style={{
                width: 460,
                height: 300,
                objectFit: "cover",
                borderRadius: 20,
                display: "block",
                transform: "rotate(-2deg)",
                border: "1px solid rgba(58,58,58,0.12)",
              }}
            />
          </div>

          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 88,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
              maxWidth: 820,
            }}
          >
            OVER-PLANNED DAYS FEEL LIKE{" "}
            <em style={{ fontFamily: SERIF, fontWeight: 400, fontStyle: "italic", textTransform: "lowercase", letterSpacing: 0 }}>
              staying home
            </em>
          </h2>

          <div style={{ width: 48, height: 3, background: "var(--primary)", borderRadius: 2, margin: "28px 0" }} />

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.45,
              margin: 0,
              opacity: 0.75,
              maxWidth: 760,
            }}
          >
            I still don't finish everything. So I might as well spend that time outside — absorbing something real — instead of sitting indoors fighting myself.
          </p>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10, position: "relative" }}>
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
