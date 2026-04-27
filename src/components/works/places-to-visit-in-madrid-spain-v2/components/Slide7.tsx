const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide7({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden dark"
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
            right: 120,
            top: 200,
            width: 220,
            height: 220,
            objectFit: "contain",
            transform: "rotate(7deg)",
            zIndex: 1,
          }}
        />

        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10, position: "relative" }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--primary)", opacity: 0.9 }}>
            ~ save this
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            07 / 07
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, position: "relative" }}>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 40px",
              maxWidth: 820,
            }}
          >
            GOING TO{" "}
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
              Madrid?
            </em>
          </h2>
          <div style={{ width: 48, height: 3, background: "var(--primary)", borderRadius: 2, marginBottom: 32 }} />
          <p
            style={{
              fontFamily: SERIF,
              fontSize: 40,
              fontStyle: "italic",
              fontWeight: 400,
              opacity: 0.78,
              maxWidth: 780,
              margin: "0 0 52px",
              lineHeight: 1.4,
            }}
          >
            Save this post. You&rsquo;ll want it when you land.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "var(--primary)",
              borderRadius: 9999,
              padding: "20px 40px",
              alignSelf: "flex-start",
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 20,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#f9f5f2",
                fontWeight: 700,
              }}
            >
              PLAN YOUR TRIP →
            </span>
          </div>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10, position: "relative" }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            abiemaxey.com
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
            ~ save &middot; share &middot; steal
          </span>
        </div>
      </div>
    </div>
  );
}
