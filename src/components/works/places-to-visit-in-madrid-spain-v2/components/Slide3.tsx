const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const IMG = "https://images.unsplash.com/photo-1631755676775-e5e7084dc0e6?w=1080&q=80";

export default function Slide3({ scale }: { scale: number }) {
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
            src={IMG}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(30,27,26,0.18) 0%, rgba(30,27,26,0.48) 40%, rgba(30,27,26,0.9) 100%)",
            }}
          />
        </div>

        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10, position: "relative" }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e3a99c", opacity: 0.9 }}>
            ~ the scene
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
            03 / 07
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-end flex-1" style={{ zIndex: 10, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
            <div style={{ width: 32, height: 2, background: "#e3a99c", borderRadius: 1 }} />
            <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.65, color: "#f9f5f2" }}>
              El Retiro · Parque del Buen Retiro
            </span>
          </div>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 36px",
              maxWidth: 820,
            }}
          >
            HERE, SUNDAYS{" "}
            <br />
            ARE{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                color: "#e3a99c",
              }}
            >
              sacred.
            </em>
          </h2>
          <div style={{ width: 48, height: 3, background: "#e3a99c", borderRadius: 2, marginBottom: 28 }} />
          <p
            style={{
              fontFamily: SERIF,
              fontSize: 36,
              fontStyle: "italic",
              fontWeight: 400,
              opacity: 0.82,
              maxWidth: 820,
              margin: 0,
              lineHeight: 1.45,
            }}
          >
            350 acres. Row a boat. Read under an oak. Watch Madrile&ntilde;os treat this park like their living room.
          </p>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10, position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
              abiemaxey.com
            </span>
            <span style={{ fontFamily: MONO, fontSize: 16, letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.3 }}>
              Photo: Unsplash
            </span>
          </div>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
            Swipe →
          </span>
        </div>
      </div>
    </div>
  );
}
