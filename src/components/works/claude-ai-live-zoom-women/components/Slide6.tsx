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
        {/* Accent shapes */}
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
          viewBox="0 0 1080 1350"
          fill="none"
        >
          <circle cx="1040" cy="200" r="300" fill="#3a3a3a" fillOpacity="0.04" />
          <circle cx="150" cy="1250" r="220" fill="#3a3a3a" fillOpacity="0.03" />
        </svg>

        {/* Row top */}
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
            ~ your teachers
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
            06 / 08
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 36px",
              maxWidth: 820,
            }}
          >
            LEARN FROM WOMEN WHO USE IT{" "}
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
              daily
            </em>
          </h2>

          {/* Pull quote */}
          <div>
            <span
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 140,
                lineHeight: 0.5,
                color: "var(--primary)",
                opacity: 0.35,
                display: "block",
                marginBottom: 16,
                userSelect: "none",
              }}
            >
              &ldquo;
            </span>
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 48,
                lineHeight: 1.28,
                margin: 0,
                maxWidth: 860,
              }}
            >
              You don&rsquo;t need to understand how AI works. You just need to know{" "}
              <span style={{ color: "var(--primary)" }}>what to ask it.</span>
            </p>
            <p
              style={{
                fontFamily: MONO,
                fontSize: 22,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.4,
                marginTop: 32,
              }}
            >
              ~ Abie Maxey
            </p>
          </div>

          {/* Decorative divider */}
          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--primary)",
              borderRadius: 2,
              margin: "40px 0 32px",
            }}
          />

          {/* Teachers */}
          <div style={{ display: "flex", gap: 48 }}>
            <div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 36,
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  margin: "0 0 8px",
                }}
              >
                Abie Maxey
              </p>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 28,
                  opacity: 0.6,
                  margin: 0,
                }}
              >
                AI educator for business owners
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 36,
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  margin: "0 0 8px",
                }}
              >
                Meri Gee
              </p>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 28,
                  opacity: 0.6,
                  margin: 0,
                }}
              >
                Business strategist + co-host
              </p>
            </div>
          </div>
        </div>

        {/* Row bottom */}
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
