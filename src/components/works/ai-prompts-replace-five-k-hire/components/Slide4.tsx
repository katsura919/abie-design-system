const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide4({ scale }: { scale: number }) {
  return (
    <div
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        position: "relative",
        borderRadius: 18 * scale,
        overflow: "hidden",
        border: "1px solid rgba(58,58,58,0.08)",
      }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          background: "#f9f5f2",
          color: "#3a3a3a",
          padding: 72,
          boxSizing: "border-box",
        }}
      >
        {/* row top */}
        <div className="flex justify-between items-start">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
            }}
          >
            ~ replace the account manager
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
        <div className="mt-28">
          <div
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.5,
              marginBottom: 20,
            }}
          >
            prompt 02
          </div>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            THE CLIENT{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                opacity: 0.8,
              }}
            >
              email
            </em>
          </h2>

          <div
            style={{
              background: "rgba(58,58,58,0.04)",
              border: "1px solid rgba(58,58,58,0.12)",
              borderRadius: 24,
              padding: "40px 48px",
              marginTop: 48,
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
              ~ copy this
            </span>
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 34,
                lineHeight: 1.55,
                margin: 0,
                opacity: 0.9,
              }}
            >
              &ldquo;You are a senior account manager. Rewrite this client email
              to reduce friction, project calm confidence, and make next steps
              unmissable. Keep every factual detail intact. Output: subject line
              + body under 200 words.&rdquo;
            </p>
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.4,
              marginTop: 40,
              maxWidth: 820,
              opacity: 0.7,
            }}
          >
            Paste your rough draft. Get back a polished email your client
            actually responds to.
          </p>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end mt-auto">
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
