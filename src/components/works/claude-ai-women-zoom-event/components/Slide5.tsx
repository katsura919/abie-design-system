const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide5({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden dark"
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        borderRadius: 18 * scale,
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
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
            }}
          >
            ~ the details
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
            05 / 07
          </span>
        </div>

        <div
          className="flex flex-col justify-center flex-1"
          style={{ zIndex: 10 }}
        >
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
              opacity: 0.8,
              margin: "0 0 16px",
            }}
          >
            ~ Thursday, May 1, 2026
          </p>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 200,
              letterSpacing: "-0.05em",
              lineHeight: 0.82,
              margin: "0 0 16px",
            }}
          >
            6–8
          </p>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 56,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              opacity: 0.55,
              margin: "0 0 40px",
            }}
          >
            PM EST
          </p>
          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--primary)",
              borderRadius: 2,
              margin: "0 0 36px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {[
              "Live on Zoom",
              "Hosted by Abie Maxey & Meri Gee",
              "100% Free to attend",
              "Beginner-friendly, no setup required",
            ].map((detail, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: 16 }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    background: "var(--primary)",
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                <p
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 34,
                    lineHeight: 1.4,
                    margin: 0,
                    opacity: 0.8,
                  }}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex justify-between items-end"
          style={{ marginTop: "auto", zIndex: 10 }}
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
