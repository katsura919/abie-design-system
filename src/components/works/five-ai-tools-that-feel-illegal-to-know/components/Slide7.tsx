const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const OPTIONS = [
  "1 ~ Claude",
  "2 ~ Perplexity",
  "3 ~ Notion AI",
  "4 ~ CapCut + AI",
  "5 ~ ChatGPT",
];

export default function Slide7({ scale }: { scale: number }) {
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
        className="absolute top-0 left-0 flex flex-col p-[72px] box-border"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--primary-soft)",
          color: "var(--foreground)",
        }}
      >
        <div className="relative z-10 flex justify-between items-start">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.58,
            }}
          >
            ~ your stack
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.42,
            }}
          >
            07 / 07
          </span>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              fontSize: 108,
              margin: 0,
            }}
          >
            WHICH ONE
            <br />
            DO YOU USE
            <br />
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              most?
            </em>
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px 12px",
              marginTop: 34,
            }}
          >
            {OPTIONS.map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: MONO,
                  fontSize: 22,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "10px 16px",
                  borderRadius: 9999,
                  background: "rgba(58,58,58,0.08)",
                  border: "1px solid rgba(58,58,58,0.14)",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.45,
              marginTop: 28,
              opacity: 0.8,
              maxWidth: 860,
            }}
          >
            Comment: 1, 2, 3, 4, or 5.
            <br />
            Save this before you forget.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 24,
              marginTop: 34,
              background: "#1e1b1a",
              color: "#f9f5f2",
              borderRadius: 9999,
              padding: "14px 14px 14px 46px",
              alignSelf: "flex-start",
              fontFamily: SANS,
              fontWeight: 800,
              fontSize: 30,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Drop a comment
            <span
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "var(--primary)",
                color: "#3a3a3a",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 900,
              }}
            >
              →
            </span>
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-end">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.42,
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
            ~ save · share · steal
          </span>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/winking_peace.png"
          alt=""
          style={{
            position: "absolute",
            right: 106,
            top: 170,
            width: 190,
            height: 190,
            objectFit: "contain",
            transform: "rotate(-8deg)",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}
