"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide2({ scale }: { scale: number }) {
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
            ~ the silent drain
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
            02 / 06
          </span>
        </div>

        {/* body */}
        <div
          className="flex flex-col justify-center flex-1"
          style={{ zIndex: 10, marginTop: 32 }}
        >
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 120,
              lineHeight: 0.88,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              margin: "0 0 16px",
            }}
          >
            10 HOURS
          </h2>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 120,
              lineHeight: 0.88,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              margin: "0 0 48px",
            }}
          >
            A WEEK.{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                opacity: 0.55,
              }}
            >
              gone.
            </em>
          </h2>

          <div
            style={{
              background: "rgba(58,58,58,0.04)",
              border: "1px solid rgba(58,58,58,0.12)",
              borderRadius: 24,
              padding: "40px 48px",
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 18,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.45,
                marginBottom: 14,
                display: "block",
              }}
            >
              ~ every single week
            </span>
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 36,
                lineHeight: 1.55,
                margin: 0,
                opacity: 0.8,
              }}
            >
              Emails. Proposals. Social content. Customer replies. You&apos;re
              doing it all by hand — and it&apos;s costing you more than just
              time.
            </p>
          </div>
        </div>

        {/* row bottom */}
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
