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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/thumbs_up.png"
          alt=""
          style={{
            position: "absolute",
            right: 112,
            top: 160,
            width: 200,
            height: 200,
            objectFit: "contain",
            transform: "rotate(6deg)",
            zIndex: 1,
          }}
        />

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
            ~ save your seat
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

        <div
          className="flex flex-col justify-center flex-1"
          style={{ zIndex: 10 }}
        >
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 120,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              textTransform: "uppercase",
              margin: "0 0 32px",
            }}
          >
            Join Us{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              live
            </em>
          </h2>
          <div
            style={{
              width: 48,
              height: 3,
              background: "#3a3a3a",
              opacity: 0.3,
              borderRadius: 2,
              margin: "0 0 36px",
            }}
          />
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 38,
              lineHeight: 1.45,
              opacity: 0.8,
              maxWidth: 820,
              margin: "0 0 16px",
            }}
          >
            Thursday, May 1, 2026 · 6–8 PM EST
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.45,
              opacity: 0.65,
              maxWidth: 820,
              margin: "0 0 48px",
            }}
          >
            Free live Zoom with Abie Maxey and Meri Gee. Save your spot before
            it fills up.
          </p>
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
              alignSelf: "flex-start",
            }}
          >
            Link in bio
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
      </div>
    </div>
  );
}
