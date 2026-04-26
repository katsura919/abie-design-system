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
        className="absolute top-0 left-0 flex flex-col"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--primary-soft)",
          color: "var(--foreground)",
          padding: 72,
          boxSizing: "border-box",
        }}
      >
        <img
          src="/assets/stickers/thumbs_up.png"
          alt=""
          className="absolute pointer-events-none"
          style={{ width: 176, top: 204, right: 74, zIndex: 20 }}
        />

        <div className="relative z-10 flex items-center justify-between">
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.52,
              margin: 0,
            }}
          >
            ~ call to action
          </p>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.52,
              margin: 0,
            }}
          >
            07/07
          </p>
        </div>

        <div className="relative z-10 mt-18 flex-1 flex flex-col">
          <h2
            style={{
              margin: 0,
              maxWidth: 760,
              fontFamily: SANS,
              fontSize: 122,
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              fontWeight: 900,
            }}
          >
            Tag a woman who needs this
          </h2>

          <p
            style={{
              margin: "34px 0 0",
              maxWidth: 820,
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 42,
              lineHeight: 1.28,
              opacity: 0.84,
            }}
          >
            Or comment
            <span
              style={{
                fontFamily: SANS,
                fontStyle: "normal",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                marginLeft: 10,
              }}
            >
              "CLAUDE"
            </span>
            <br />
            and I will send the registration details.
          </p>

          <div
            className="inline-flex items-center"
            style={{
              marginTop: 44,
              alignSelf: "flex-start",
              background: "#3a3a3a",
              color: "#f9f5f2",
              borderRadius: 9999,
              padding: "10px 12px 10px 28px",
              gap: 16,
            }}
          >
            <span
              style={{
                fontFamily: SANS,
                fontWeight: 900,
                fontSize: 40,
                lineHeight: 1,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
              }}
            >
              Drop a comment
            </span>
            <span
              className="inline-flex items-center justify-center"
              style={{
                width: 56,
                height: 56,
                borderRadius: 9999,
                background: "var(--primary)",
                color: "#3a3a3a",
              }}
            >
              <ArrowRight size={32} strokeWidth={2.6} />
            </span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.45,
              margin: 0,
            }}
          >
            abiemaxey.com
          </p>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.62,
              margin: 0,
            }}
          >
            save + share
          </p>
        </div>
      </div>
    </div>
  );
}
