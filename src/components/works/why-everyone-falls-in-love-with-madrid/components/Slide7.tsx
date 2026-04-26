import { ArrowRight } from "lucide-react";

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
            07 / 07
          </span>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 text-center mt-20 z-10">
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 140,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
              maxWidth: 900,
            }}
          >
            WOULD YOU LIVE IN{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
              }}
            >
              madrid?
            </em>
          </h2>

          <div
            className="flex items-center gap-6 px-10 py-6 rounded-full mt-24"
            style={{
              backgroundColor: "var(--foreground)",
              color: "var(--background)",
            }}
          >
            <span
              style={{
                fontFamily: SANS,
                fontSize: 40,
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              Comment: YES or NO
            </span>
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 56,
                height: 56,
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
              }}
            >
              <ArrowRight size={28} strokeWidth={3} />
            </div>
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 40,
              fontWeight: 400,
              fontStyle: "italic",
              opacity: 0.7,
              marginTop: 48,
            }}
          >
            Save this for your future trip 📌
          </p>
        </div>

        <div className="flex justify-center items-end pb-12 z-10">
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
        </div>

        {/* Sticker perfectly avoiding central text, placed at top right corner */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/thinking_ellipsis.png"
          alt=""
          style={{
            position: "absolute",
            right: 40,
            top: 60,
            width: 170,
            height: 170,
            objectFit: "contain",
            transform: "rotate(10deg)",
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
}
