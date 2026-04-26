const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide3({ scale }: { scale: number }) {
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
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
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

        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
              opacity: 0.9,
            }}
          >
            ~ the math
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              color: "var(--background)",
            }}
          >
            03 / 08
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          {/* big stat display */}
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 220,
              letterSpacing: "-0.05em",
              lineHeight: 0.82,
              color: "var(--background)",
              margin: 0,
            }}
          >
            3×
          </p>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 52,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "var(--primary)",
              marginTop: 20,
            }}
          >
            Output per hire
          </p>

          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--primary)",
              borderRadius: 2,
              margin: "32px 0",
            }}
          />

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 38,
              lineHeight: 1.45,
              color: "var(--background)",
              opacity: 0.8,
              maxWidth: 820,
              margin: 0,
            }}
          >
            One AI-skilled hire ships what used to take a 3-person team.
            Businesses aren&apos;t paying for knowledge anymore —
            they&apos;re paying for{" "}
            <span
              style={{
                display: "inline-block",
                background: "var(--primary)",
                color: "#3a3a3a",
                padding: "2px 16px",
                borderRadius: 10,
                fontFamily: SANS,
                fontWeight: 900,
                fontStyle: "normal",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                fontSize: 32,
              }}
            >
              leverage
            </span>
            .
          </p>

          {/* prompt block */}
          <div
            style={{
              background: "rgba(249,245,242,0.06)",
              border: "1px solid rgba(249,245,242,0.12)",
              borderRadius: 24,
              padding: "36px 44px",
              marginTop: 40,
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 18,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#e3a99c",
                marginBottom: 14,
                display: "block",
              }}
            >
              ~ what they actually think
            </span>
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 34,
                lineHeight: 1.5,
                margin: 0,
                color: "var(--background)",
                opacity: 0.85,
              }}
            >
              &ldquo;Why hire 3 people when one person with AI does the same work in a week?&rdquo;
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
              color: "var(--background)",
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
              color: "var(--background)",
            }}
          >
            Swipe →
          </span>
        </div>
      </div>
    </div>
  );
}
