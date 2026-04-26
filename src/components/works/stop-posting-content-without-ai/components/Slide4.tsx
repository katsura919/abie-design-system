const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide4({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden peach"
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
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.6,
            }}
          >
            ~ step 01
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
            04 / 08
          </span>
        </div>

        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 100,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 24px",
            }}
          >
            BUILD YOUR{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              voice prompt
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 34,
              fontStyle: "italic",
              opacity: 0.78,
              maxWidth: 820,
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Paste 3 of your best past posts and tell AI: "this is how I write." Run it once. Save it. Use it every time.
          </p>

          <div
            style={{
              background: "rgba(58,58,58,0.08)",
              border: "1px solid rgba(58,58,58,0.14)",
              borderRadius: 24,
              padding: "36px 44px",
              marginTop: 44,
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 18,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--foreground)",
                marginBottom: 14,
                display: "block",
                opacity: 0.5,
              }}
            >
              ~ my actual prompt
            </span>
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 34,
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              &ldquo;Here are 3 posts I&apos;ve written. Learn my voice: direct, no fluff, specific numbers, first person. Now write a 7-slide IG carousel about [topic] for [audience] using this exact voice.&rdquo;
            </p>
          </div>

          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.5,
              marginTop: 32,
            }}
          >
            → this alone cuts 2 hrs of editing per post
          </p>
        </div>

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
