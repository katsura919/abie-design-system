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
          backgroundColor: "var(--primary-soft)",
          color: "var(--foreground)",
        }}
      >
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

        <div className="mt-auto mb-auto flex flex-col items-center justify-center text-center z-10">
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            ARE YOU USING AI AS A{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "var(--primary)",
              }}
            >
              tool
            </em>
            <br />
            OR IGNORING IT?
          </h2>

          <div className="mt-20 flex flex-col items-center gap-6">
            <span
              style={{
                fontFamily: MONO,
                fontSize: 24,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.6,
              }}
            >
              Drop a comment:
            </span>
            <div
              className="flex items-center gap-4 px-10 py-6 rounded-full"
              style={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}
            >
              <span style={{ fontFamily: SANS, fontSize: 40, fontWeight: 900, textTransform: "uppercase" }}>
                ADAPTING
              </span>
              <span style={{ fontFamily: SERIF, fontSize: 36, fontStyle: "italic", opacity: 0.6 }}>or</span>
              <span style={{ fontFamily: SANS, fontSize: 40, fontWeight: 900, textTransform: "uppercase" }}>
                WAITING
              </span>
            </div>
            <span
              className="mt-6"
              style={{
                fontFamily: SERIF,
                fontSize: 32,
                fontStyle: "italic",
                opacity: 0.7,
              }}
            >
              Save this reminder 📌
            </span>
          </div>
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
            Save Post ↓
          </span>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/thinking_ellipsis.png"
          alt=""
          style={{
            position: "absolute",
            left: 80,
            top: 100,
            width: 240,
            height: 240,
            objectFit: "contain",
            transform: "rotate(-10deg)",
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
}
