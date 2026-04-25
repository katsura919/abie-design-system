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
              opacity: 0.56,
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
              fontSize: 108,
              margin: "0 0 20px",
              maxWidth: 930,
            }}
          >
            Want My
            <br />
            Hidden Claude
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
              setup
            </em>
            ?
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 35,
              lineHeight: 1.38,
              marginTop: 12,
              maxWidth: 830,
              opacity: 0.86,
            }}
          >
            Comment "hidden" and I will send the exact workflow.
            <br />
            Save this for your next content sprint ~
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 20,
              background: "#1e1b1a",
              color: "#f9f5f2",
              borderRadius: 9999,
              padding: "14px 14px 14px 42px",
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 30,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              marginTop: 34,
              alignSelf: "flex-start",
            }}
          >
            Drop "hidden"
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
              opacity: 0.66,
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
            right: 88,
            bottom: 402,
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
