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
        className="absolute top-0 left-0 flex flex-col box-border p-[72px]"
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

        <div className="relative z-10 flex items-start justify-between">
          <div
            className="font-mono text-[22px] uppercase tracking-[0.2em] opacity-50"
            style={{ fontFamily: MONO }}
          >
            ~ the new face
          </div>
          <div
            className="font-mono text-[22px] uppercase tracking-[0.2em] opacity-50"
            style={{ fontFamily: MONO }}
          >
            01 / 06
          </div>
        </div>

        <img
          src="/assets/stickers/shouting_megaphone.png"
          alt=""
          className="absolute pointer-events-none"
          style={{ width: 220, top: 168, right: 52, zIndex: 20 }}
        />

        <div className="relative z-10 flex flex-1 flex-col justify-center pb-[84px]">
          <div className="max-w-[840px]">
            <h1
              className="max-w-[840px] font-black uppercase tracking-[-0.04em]"
              style={{ fontFamily: SANS, fontSize: 168, lineHeight: 0.86 }}
            >
              AI INFLUENCERS
              <br />
              ARE HERE
            </h1>
            <p
              className="mt-[34px] max-w-[680px] text-[40px] italic opacity-80"
              style={{ fontFamily: SERIF, lineHeight: 1.06 }}
            >
              They scale faster than trust can catch up.
            </p>
          </div>

          <div className="mt-[120px] max-w-[590px] border-l border-[rgba(255,255,255,0.16)] pl-[28px]">
            <p
              className="text-[30px] italic opacity-70"
              style={{ fontFamily: SERIF, lineHeight: 1.18 }}
            >
              A polished face used to signal proof. Now it can be generated in a
              minute.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex items-end justify-between">
          <div
            className="text-[22px] uppercase tracking-[0.2em] opacity-45"
            style={{ fontFamily: MONO }}
          >
            abiemaxey.com
          </div>
          <div
            className="text-[22px] uppercase tracking-[0.2em] opacity-45"
            style={{ fontFamily: MONO }}
          >
            swipe →
          </div>
        </div>
      </div>
    </div>
  );
}
