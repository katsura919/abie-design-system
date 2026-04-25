const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide1({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080 * scale, height: 1350 * scale, borderRadius: 18 * scale }}
    >
      <div
        className="dark absolute top-0 left-0 flex flex-col p-[72px] box-border"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="flex justify-between items-start z-10">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
            }}
          >
            ~ the list
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

        <div className="mt-36 z-10">
          <h1
            style={{
              fontFamily: SANS,
              fontSize: 168,
              fontWeight: 900,
              lineHeight: 0.86,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            MADRID
            <br />
            COFFEE
            <br />
            WILL{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "var(--primary)",
              }}
            >
              ruin
            </em>
            <br />
            YOU
          </h1>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 38,
              fontWeight: 400,
              fontStyle: "italic",
              opacity: 0.85,
              lineHeight: 1.35,
              marginTop: 44,
              maxWidth: 780,
            }}
          >
            Skip the chains on Gran Vía. These 4 spots serve some of the best specialty coffee in Europe — and most tourists never find them.
          </p>
        </div>

        <div className="flex justify-between items-end mt-auto z-10">
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

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/move_to_spain_playbook.png"
          alt=""
          style={{
            position: "absolute",
            right: 64,
            top: 152,
            width: 260,
            height: 260,
            objectFit: "contain",
            transform: "rotate(8deg)",
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
}
