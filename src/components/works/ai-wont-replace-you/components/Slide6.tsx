const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide6({ scale }: { scale: number }) {
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
          backgroundColor: "var(--background)",
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
            ~ the real skill
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
            06 / 07
          </span>
        </div>

        <div className="mt-32 z-10">
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 90,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            IT'S NOT{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "var(--primary)",
              }}
            >
              just
            </em>{" "}
            USING AI
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 40,
              fontWeight: 400,
              fontStyle: "italic",
              opacity: 0.75,
              lineHeight: 1.4,
              marginTop: 40,
              marginBottom: 48,
              maxWidth: 860,
            }}
          >
            The future belongs to those who know:
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <div
                className="flex items-center justify-center w-[80px] h-[80px] rounded-full"
                style={{ backgroundColor: "#3a3a3a", color: "var(--primary)" }}
              >
                <span style={{ fontFamily: MONO, fontSize: 24, fontWeight: "bold" }}>01</span>
              </div>
              <div
                className="px-8 py-5 rounded-full"
                style={{ backgroundColor: "#3a3a3a", color: "#f9f5f2" }}
              >
                <span style={{ fontFamily: SANS, fontSize: 38, fontWeight: 900, textTransform: "uppercase" }}>
                  WHAT TO ASK
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div
                className="flex items-center justify-center w-[80px] h-[80px] rounded-full"
                style={{ backgroundColor: "#3a3a3a", color: "var(--primary)" }}
              >
                <span style={{ fontFamily: MONO, fontSize: 24, fontWeight: "bold" }}>02</span>
              </div>
              <div
                className="px-8 py-5 rounded-full"
                style={{ backgroundColor: "#3a3a3a", color: "#f9f5f2" }}
              >
                <span style={{ fontFamily: SANS, fontSize: 38, fontWeight: 900, textTransform: "uppercase" }}>
                  HOW TO THINK
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div
                className="flex items-center justify-center w-[80px] h-[80px] rounded-full"
                style={{ backgroundColor: "#3a3a3a", color: "var(--primary)" }}
              >
                <span style={{ fontFamily: MONO, fontSize: 24, fontWeight: "bold" }}>03</span>
              </div>
              <div
                className="px-8 py-5 rounded-full"
                style={{ backgroundColor: "#3a3a3a", color: "#f9f5f2" }}
              >
                <span style={{ fontFamily: SANS, fontSize: 38, fontWeight: 900, textTransform: "uppercase" }}>
                  HOW TO EXECUTE
                </span>
              </div>
            </div>
          </div>
          
          <p
            style={{
              fontFamily: SERIF,
              fontSize: 36,
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--primary)",
              lineHeight: 1.4,
              marginTop: 48,
              maxWidth: 860,
            }}
          >
            AI rewards clarity.
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
      </div>
    </div>
  );
}
