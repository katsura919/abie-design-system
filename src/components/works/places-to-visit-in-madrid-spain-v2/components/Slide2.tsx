const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const IMG = "https://images.unsplash.com/photo-1713988653932-ef9909a7962a?w=1080&q=80";

export default function Slide2({ scale }: { scale: number }) {
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
            src={IMG}
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
            <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
              ~ where to start
            </span>
            <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
              02 / 07
            </span>
          </div>

          {/* body */}
          <div className="flex flex-col justify-center flex-1">
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <div style={{ width: 32, height: 2, background: "var(--primary)", borderRadius: 1 }} />
              <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.6 }}>
                Madrid · Spain
              </span>
            </div>
            <h2
              style={{
                fontFamily: SANS,
                fontSize: 80,
                fontWeight: 900,
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                margin: "0 0 32px",
              }}
            >
              PUERTA{" "}
              <br />
              DEL{" "}
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
                Sol
              </em>
            </h2>
            <div style={{ width: 48, height: 3, background: "var(--primary)", borderRadius: 2, marginBottom: 28 }} />
            <p
              style={{
                fontFamily: SERIF,
                fontSize: 34,
                fontStyle: "italic",
                fontWeight: 400,
                opacity: 0.72,
                maxWidth: 460,
                margin: 0,
                lineHeight: 1.45,
              }}
            >
              Every direction from here leads somewhere worth going. This is where Madrid begins.
            </p>
          </div>

          {/* row bottom */}
          <div className="flex justify-between items-end" style={{ marginTop: "auto" }}>
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
    </div>
  );
}
