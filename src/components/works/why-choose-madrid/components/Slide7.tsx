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
            ~ your move
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
            07 / 07
          </span>
        </div>

        {/* body */}
        <div
          className="flex flex-col justify-center flex-1"
          style={{ zIndex: 10 }}
        >
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 120,
              lineHeight: 0.9,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              margin: 0,
            }}
          >
            STILL{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              asking
            </em>
          </p>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 120,
              lineHeight: 0.9,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              margin: 0,
            }}
          >
            WHY?
          </p>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 40,
              lineHeight: 1.5,
              opacity: 0.75,
              maxWidth: 820,
              margin: "40px 0 0",
            }}
          >
            Drop a comment — where are you based right now and what&apos;s stopping you
            from making the move?
          </p>

          {/* CTA pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 24,
              background: "#1e1b1a",
              color: "#f9f5f2",
              borderRadius: 9999,
              padding: "14px 14px 14px 48px",
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 28,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginTop: 44,
              alignSelf: "flex-start",
            }}
          >
            Drop a comment
            <span
              style={{
                width: 60,
                height: 60,
                background: "#e3a99c",
                color: "#3a3a3a",
                borderRadius: "50%",
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
            ~ save · share · steal
          </span>
        </div>

        {/* sticker */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/sitting_with_laptop.png"
          alt=""
          style={{
            position: "absolute",
            right: 96,
            bottom: 340,
            width: 200,
            height: 200,
            objectFit: "contain",
            transform: "rotate(-6deg)",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}
