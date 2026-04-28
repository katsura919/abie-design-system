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
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Accent shapes */}
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
          viewBox="0 0 1080 1350"
          fill="none"
        >
          <circle cx="960" cy="1380" r="340" fill="currentColor" fillOpacity="0.04" />
        </svg>

        {/* Row top */}
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
            ~ looks like this
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
            05 / 08
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 12px",
              maxWidth: 820,
            }}
          >
            NO CODING.{" "}
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
              just plain english.
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 34,
              fontStyle: "italic",
              opacity: 0.65,
              margin: "0 0 32px",
              lineHeight: 1.4,
            }}
          >
            Type what you need. Claude figures out the rest.
          </p>

          {/* Terminal card */}
          <div
            style={{
              background: "rgba(249,245,242,0.06)",
              border: "1px solid rgba(249,245,242,0.18)",
              borderRadius: 24,
              padding: "40px 48px",
            }}
          >
            {/* Window dots */}
            <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "currentColor",
                    display: "inline-block",
                    opacity: 0.2,
                  }}
                />
              ))}
            </div>
            {/* Prompt */}
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 28,
                  color: "var(--primary)",
                  opacity: 0.9,
                  lineHeight: 1.6,
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
                  opacity: 0.88,
                }}
              >
                Act as my email strategist. Write a 3-sentence follow-up for a
                client who ghosted me after the proposal.
              </p>
            </div>
            {/* Output */}
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 30,
                lineHeight: 1.5,
                marginTop: 20,
                opacity: 0.72,
                borderTop: "1px solid rgba(249,245,242,0.18)",
                paddingTop: 20,
              }}
            >
              &ldquo;Hi [Name], following up on the proposal I sent last week. I&rsquo;d love to
              answer any questions or adjust scope to fit your needs. Would Thursday
              work for a quick 15-minute call?&rdquo;
            </p>
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
