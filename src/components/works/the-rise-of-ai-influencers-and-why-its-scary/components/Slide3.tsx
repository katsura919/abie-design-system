const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const bars = [
  { label: "human proof", value: 92 },
  { label: "consistent tone", value: 86 },
  { label: "synthetic polish", value: 74 },
  { label: "raw novelty", value: 58 },
];

export default function Slide3({ scale }: { scale: number }) {
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
        className="absolute top-0 left-0 flex flex-col box-border p-[72px]"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
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

        <div className="relative z-10 flex items-start justify-between">
          <div
            className="text-[22px] uppercase tracking-[0.2em] opacity-50"
            style={{ fontFamily: MONO }}
          >
            ~ what the math says
          </div>
          <div
            className="text-[22px] uppercase tracking-[0.2em] opacity-50"
            style={{ fontFamily: MONO }}
          >
            03 / 06
          </div>
        </div>

        <div className="relative z-10 mt-[74px] max-w-[850px]">
          <h2
            className="max-w-[760px] font-black uppercase tracking-[-0.04em]"
            style={{ fontFamily: SANS, fontSize: 120, lineHeight: 0.9 }}
          >
            TRUST IS THE REAL KPI.
          </h2>
          <p
            className="mt-[28px] max-w-[610px] text-[38px] italic opacity-78"
            style={{ fontFamily: SERIF, lineHeight: 1.08 }}
          >
            The face can be fake. The follow can be fake. The receipts are not.
          </p>
        </div>

        <div className="relative z-10 mt-[88px] max-w-[900px] border-t border-[rgba(249,245,242,0.12)] pt-[34px]">
          <div
            className="mb-[20px] text-[22px] uppercase tracking-[0.2em] opacity-45"
            style={{ fontFamily: MONO }}
          >
            illustrative signal scores
          </div>
          <div className="flex flex-col gap-[30px]">
            {bars.map((bar, index) => (
              <div
                key={bar.label}
                className="grid grid-cols-[190px_1fr_86px] items-center gap-[22px]"
              >
                <div
                  className="text-[20px] uppercase tracking-[0.2em] opacity-55"
                  style={{ fontFamily: MONO }}
                >
                  {bar.label}
                </div>
                <div className="h-[14px] overflow-hidden rounded-[7px] bg-[rgba(255,255,255,0.08)]">
                  <div
                    className="h-full rounded-[7px]"
                    style={{
                      width: `${bar.value}%`,
                      backgroundColor:"var(--primary)"
                    }}
                  />
                </div>
                <div
                  className="text-right text-[36px] font-black leading-none tracking-[-0.03em]"
                  style={{ fontFamily: SANS }}
                >
                  {bar.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-auto flex items-end justify-between pt-[84px]">
          <div
            className="max-w-[520px] text-[30px] italic opacity-70"
            style={{ fontFamily: SERIF, lineHeight: 1.14 }}
          >
            The closer the account gets to automation, the harder proof has to
            work.
          </div>
          <div
            className="text-[22px] uppercase tracking-[0.2em] opacity-50"
            style={{ fontFamily: MONO }}
          >
            swipe →
          </div>
        </div>
      </div>
    </div>
  );
}
