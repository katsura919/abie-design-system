const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

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
          backgroundColor: "var(--primary)",
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
              opacity: 0.6,
            }}
          >
            ~ your turn
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.45,
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
              fontSize: 120,
              margin: 0,
            }}
          >
            WHO SHOULD I
            <br />
            BREAK DOWN
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
              next?
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.45,
              marginTop: 36,
              opacity: 0.8,
              maxWidth: 860,
            }}
          >
            If this series helped, I can do another one with live examples.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 24,
              marginTop: 40,
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
              -&gt;
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
              opacity: 0.45,
            }}
          >
            instagram.com/abiemaxey
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
            ~ save + send to a friend
          </span>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/winking_peace.png"
          alt=""
          style={{
            position: "absolute",
            right: 104,
            top: 170,
            width: 188,
            height: 188,
            objectFit: "contain",
            transform: "rotate(-8deg)",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}
