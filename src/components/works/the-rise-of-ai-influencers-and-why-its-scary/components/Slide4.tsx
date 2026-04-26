const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide4({ scale }: { scale: number }) {
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
        className="absolute top-0 left-0 flex flex-col box-border p-[72px]"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--primary-soft)",
          color: "var(--foreground)",
        }}
      >
        <div className="relative z-10 flex items-start justify-between">
          <div
            className="text-[22px] uppercase tracking-[0.2em] opacity-50"
            style={{ fontFamily: MONO }}
          >
            ~ how fast the fake spins up
          </div>
          <div
            className="text-[22px] uppercase tracking-[0.2em] opacity-50"
            style={{ fontFamily: MONO }}
          >
            04 / 06
          </div>
        </div>

        <div className="relative z-10 mt-[78px] max-w-[850px]">
          <h2
            className="max-w-[760px] font-black uppercase tracking-[-0.04em]"
            style={{ fontFamily: SANS, fontSize: 120, lineHeight: 0.9 }}
          >
            IT TAKES MINUTES TO BUILD A PERSON.
          </h2>
          <p
            className="mt-[28px] max-w-[620px] text-[38px] italic opacity-80"
            style={{ fontFamily: SERIF, lineHeight: 1.08 }}
          >
            The scary part is not the tech. It is how natural the output can
            look.
          </p>
        </div>

        <div className="relative z-10 mt-[90px] max-w-[900px] rounded-[28px] border border-[var(--border)] bg-[var(--card)] px-[48px] py-[40px]">
          <div className="flex items-center gap-[10px]">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>

          <div
            className="mt-[28px] flex items-center gap-[14px] text-[26px]"
            style={{ fontFamily: MONO }}
          >
            <span className="text-[var(--primary)]">$</span>
            <span className="opacity-88">
              make influencer --niche "nomad business" --voice "founder"
            </span>
          </div>

          <div
            className="mt-[28px] border-t border-[var(--border)] pt-[24px] text-[32px] italic opacity-76"
            style={{ fontFamily: SERIF, lineHeight: 1.12 }}
          >
            built in 14 seconds.
            <br />
            same face. same cadence. no lived experience.
          </div>
        </div>

        <div className="relative z-10 mt-auto flex items-end justify-between pt-[84px]">
          <div
            className="max-w-[520px] text-[30px] italic opacity-70"
            style={{ fontFamily: SERIF, lineHeight: 1.14 }}
          >
            When the content can be generated, the audience has to audit the
            source.
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
