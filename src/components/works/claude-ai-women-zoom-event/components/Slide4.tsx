const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide4({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden"
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
          backgroundColor: "var(--primary-soft)",
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
            ~ no coding needed
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
            04 / 07
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 104,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            IF YOU CAN
            <br />
            TYPE A{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              question
            </em>
            <br />
            YOU&apos;RE IN
          </p>

          <div
            style={{
              width: 48,
              height: 3,
              background: "rgba(58,58,58,0.2)",
              borderRadius: 2,
              margin: "36px 0",
            }}
          />

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.5,
              opacity: 0.7,
              maxWidth: 820,
              margin: "0 0 36px",
            }}
          >
            No tech background required. We start from zero, live, with real examples
            from real business owners — not tech bros.
          </p>

          {/* terminal card — peach bg variant */}
          <div
            style={{
              background: "rgba(30,27,26,0.06)",
              border: "1px solid rgba(30,27,26,0.14)",
              borderRadius: 24,
              padding: "36px 44px",
            }}
          >
            {/* window dots */}
            <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 13,
                    height: 13,
                    borderRadius: "50%",
                    background: "var(--foreground)",
                    display: "inline-block",
                    opacity: 0.18,
                  }}
                />
              ))}
            </div>
            {/* prompt */}
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 26,
                  color: "var(--primary)",
                  opacity: 0.85,
                  lineHeight: 1.6,
                  flexShrink: 0,
                }}
              >
                $
              </span>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: 24,
                  lineHeight: 1.6,
                  margin: 0,
                  opacity: 0.78,
                }}
              >
                Write a follow-up email to a client who went quiet after my proposal.
                Keep it warm, not pushy.
              </p>
            </div>
            {/* output */}
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 30,
                lineHeight: 1.5,
                marginTop: 20,
                opacity: 0.65,
                borderTop: "1px solid rgba(30,27,26,0.12)",
                paddingTop: 20,
              }}
            >
              That&apos;s a real prompt. That&apos;s all it takes. We&apos;ll run
              demos like this live.
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
