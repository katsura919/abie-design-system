const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide6({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080 * scale, height: 1350 * scale, borderRadius: 18 * scale }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col items-center justify-center text-center p-[72px] box-border"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--primary)",
          color: "var(--foreground)",
        }}
      >
        <div className="absolute top-[72px] w-[1080px] px-[72px] flex justify-between items-start z-10 left-0 box-border">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--foreground)",
              opacity: 0.8,
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
              opacity: 0.4,
            }}
          >
            06 / 06
          </span>
        </div>

        <div className="z-10 mt-16 flex flex-col items-center">
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 140,
              fontWeight: 900,
              lineHeight: 0.9,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            WHAT'S
            <br />
            ON YOUR
            <br />
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "var(--background)",
              }}
            >
              list?
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 48,
              fontWeight: 400,
              fontStyle: "italic",
              opacity: 0.85,
              marginTop: 48,
              lineHeight: 1.2,
              maxWidth: 800,
            }}
          >
            Are you heading to Madrid soon? Or did I miss your absolute favorite spot?
          </p>

          <div
            style={{
              marginTop: 64,
              display: "flex",
              alignItems: "center",
              gap: 16,
              background: "var(--foreground)",
              color: "var(--background)",
              padding: "24px 48px",
              borderRadius: 9999,
              fontFamily: SANS,
              fontSize: 32,
              fontWeight: 900,
              textTransform: "uppercase",
            }}
          >
            DROP A COMMENT{" "}
            <span
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "var(--primary)",
              }}
            >
              below
            </span>
          </div>
        </div>

        <div className="absolute bottom-[72px] w-[1080px] px-[72px] flex justify-between items-end z-10 left-0 box-border">
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
            Save This ↓
          </span>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/winking_peace.png"
          alt=""
          style={{
            position: "absolute",
            left: 80,
            bottom: 200,
            width: 280,
            height: 280,
            objectFit: "contain",
            transform: "rotate(-12deg)",
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
}
