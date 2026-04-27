"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const tools = [
  { name: "Stripe", use: "payments" },
  { name: "ManyChat", use: "automation" },
  { name: "Calendly", use: "scheduling" },
  { name: "GHL", use: "client management" },
  { name: "Wise", use: "multiple currencies" },
];

export default function Slide4({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        borderRadius: 18 * scale,
        border: `${1 * scale}px solid rgba(58,58,58,0.08)`,
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
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.55,
            }}
          >
            ~ how I run it all
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            04 / 06
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, position: "relative" }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 88,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            5 TOOLS.
            <br />
            ONE LAPTOP.
            <br />
            <em
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                fontStyle: "italic",
                textTransform: "lowercase",
                letterSpacing: 0,
                fontSize: 80,
              }}
            >
              Zero office.
            </em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 44 }}>
            {tools.map((tool, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  background: "rgba(58,58,58,0.04)",
                  border: "1px solid rgba(58,58,58,0.09)",
                  borderRadius: 16,
                  padding: "18px 28px",
                }}
              >
                <span style={{ fontFamily: MONO, fontSize: 20, letterSpacing: "0.2em", opacity: 0.4, minWidth: 40 }}>
                  0{i + 1}
                </span>
                <p
                  style={{
                    fontFamily: SANS,
                    fontWeight: 900,
                    fontSize: 30,
                    letterSpacing: "-0.02em",
                    margin: 0,
                    textTransform: "uppercase",
                  }}
                >
                  {tool.name}
                </p>
                <span
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 28,
                    lineHeight: 1.3,
                    margin: 0,
                    opacity: 0.6,
                    marginLeft: "auto",
                  }}
                >
                  {tool.use}
                </span>
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 32,
              lineHeight: 1.5,
              marginTop: 36,
              opacity: 0.65,
              maxWidth: 820,
            }}
          >
            Most are free or affordable. The hard part is using them consistently.
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
