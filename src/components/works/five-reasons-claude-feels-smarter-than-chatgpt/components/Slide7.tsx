const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide7({ scale }: { scale: number }) {
  return (
    <div
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        position: "relative",
        borderRadius: 18 * scale,
        overflow: "hidden",
      }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          background: "#e3a99c",
          color: "#1e1b1a",
          padding: 72,
          boxSizing: "border-box",
        }}
      >
        <div className="flex justify-between items-start">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.65,
            }}
          >
            ~ CTA
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
            07 / 07
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              fontSize: 110,
              margin: "0 0 22px",
              maxWidth: 920,
            }}
          >
            Want My
            <br />
            Claude vs
            <br />
            ChatGPT
            <br />
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "none",
                letterSpacing: 0,
              }}
            >
              prompt stack?
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.4,
              marginTop: 16,
              maxWidth: 840,
              opacity: 0.85,
            }}
          >
            Comment "stack" and I will send it.
            <br />
            Save this post for your next workflow sprint ~
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 22,
              background: "#1e1b1a",
              color: "#f9f5f2",
              borderRadius: 9999,
              padding: "14px 14px 14px 44px",
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 30,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              marginTop: 36,
              alignSelf: "flex-start",
            }}
          >
            Drop "stack"
            <span
              style={{
                width: 58,
                height: 58,
                borderRadius: "50%",
                background: "#e3a99c",
                color: "#1e1b1a",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
              }}
            >
              →
            </span>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.6,
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
              opacity: 0.65,
            }}
          >
            ~ save · share · send
          </span>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/thumbs_up.png"
          alt=""
          style={{
            position: "absolute",
            right: 98,
            bottom: 412,
            width: 210,
            height: 210,
            objectFit: "contain",
            transform: "rotate(-8deg)",
          }}
        />
      </div>
    </div>
  );
}
