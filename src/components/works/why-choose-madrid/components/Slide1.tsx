const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide1({ scale }: { scale: number }) {
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
            ~ of all places
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
            01 / 07
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
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
            WHY{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              even
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
            MADRID
          </p>
          <div
            style={{
              width: 80,
              height: 4,
              background: "var(--primary)",
              borderRadius: 2,
              margin: "40px 0",
            }}
          />
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 38,
              lineHeight: 1.5,
              opacity: 0.75,
              maxWidth: 820,
              margin: 0,
            }}
          >
            Not Bali. Not Lisbon. Not Chiang Mai. Here&apos;s why this city quietly wins
            for remote workers — and why most people sleep on it.
          </p>
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
            Swipe →
          </span>
        </div>

        {/* sticker */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/move_to_spain_playbook.png"
          alt=""
          style={{
            position: "absolute",
            right: 96,
            top: 160,
            width: 220,
            height: 220,
            objectFit: "contain",
            transform: "rotate(8deg)",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}
