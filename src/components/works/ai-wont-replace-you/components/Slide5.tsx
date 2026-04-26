const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide5({ scale }: { scale: number }) {
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
            ~ example 3
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
            05 / 07
          </span>
        </div>

        <div className="mt-32 z-10">
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 100,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            BUSINESS{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "var(--primary)",
              }}
            >
              owner
            </em>
          </h2>

          <div className="grid grid-cols-2 gap-8 mt-20">
            {/* Left Column */}
            <div className="flex flex-col gap-6 p-8 border border-red-500/20 bg-red-500/5 rounded-[24px]">
              <span
                className="text-red-400"
                style={{
                  fontFamily: MONO,
                  fontSize: 18,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Not using AI
              </span>
              <p
                style={{
                  fontFamily: SERIF,
                  fontSize: 36,
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 1.3,
                  opacity: 0.9,
                }}
              >
                Stays stuck doing everything manually.
              </p>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 p-8 border border-[var(--primary)]/30 bg-[var(--primary)]/10 rounded-[24px]">
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 18,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                }}
              >
                Using AI
              </span>
              <p
                style={{
                  fontFamily: SERIF,
                  fontSize: 36,
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 1.3,
                  opacity: 0.9,
                }}
              >
                Automates tasks and buys back their time.
              </p>
            </div>
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
            Swipe →
          </span>
        </div>
      </div>
    </div>
  );
}
