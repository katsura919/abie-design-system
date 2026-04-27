const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide6({ scale }: { scale: number }) {
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
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--foreground)",
              opacity: 0.45,
            }}
          >
            ~ mark the calendar
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
            06 / 07
          </span>
        </div>

        {/* body — event details */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          {/* big date stat */}
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
              margin: "0 0 8px",
            }}
          >
            ~ may 2026
          </p>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 220,
              letterSpacing: "-0.05em",
              lineHeight: 0.8,
              color: "var(--foreground)",
              margin: "0 0 8px",
            }}
          >
            1
          </p>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 56,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              opacity: 0.45,
              margin: "0 0 48px",
            }}
          >
            Thursday
          </p>

          {/* details card */}
          <div
            style={{
              background: "rgba(58,58,58,0.04)",
              border: "1px solid rgba(58,58,58,0.12)",
              borderRadius: 24,
              padding: "36px 44px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 18,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.4,
                  minWidth: 80,
                }}
              >
                Time
              </span>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 40,
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                6:00 – 8:00 PM EST
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 18,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.4,
                  minWidth: 80,
                }}
              >
                Where
              </span>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 40,
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                Free Zoom
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 18,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.4,
                  minWidth: 80,
                }}
              >
                Hosts
              </span>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 38,
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                Abie Maxey + Meri Gee
              </p>
            </div>
          </div>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10 }}>
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
