import { ArrowRight } from "lucide-react";

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
        className="absolute top-0 left-0 flex flex-col box-border p-[72px]"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          border: "1px solid var(--border)",
        }}
      >
        <div className="relative z-10 flex items-start justify-between">
          <div
            className="text-[22px] uppercase tracking-[0.2em] opacity-50"
            style={{ fontFamily: MONO }}
          >
            ~ your move
          </div>
          <div
            className="text-[22px] uppercase tracking-[0.2em] opacity-50"
            style={{ fontFamily: MONO }}
          >
            06 / 06
          </div>
        </div>

        <img
          src="/assets/stickers/thumbs_up.png"
          alt=""
          className="absolute pointer-events-none"
          style={{ width: 180, bottom: 80, right: 56, zIndex: 20 }}
        />

        <div className="relative z-10 mt-[76px] max-w-[820px]">
          <h2
            className="max-w-[760px] font-black uppercase tracking-[-0.04em]"
            style={{ fontFamily: SANS, fontSize: 120, lineHeight: 0.9 }}
          >
            WHERE DO YOU DRAW THE LINE?
          </h2>
          <p
            className="mt-[28px] max-w-[650px] text-[38px] italic opacity-80"
            style={{ fontFamily: SERIF, lineHeight: 1.08 }}
          >
            If an account looks human but is built to manipulate, does it earn
            the follow?
          </p>
        </div>

        <div className="relative z-10 mt-auto max-w-[680px] pb-[70px]">
          <div className="inline-flex items-center gap-[18px] rounded-full bg-[#3a3a3a] px-[30px] py-[22px] text-[#f9f5f2]">
            <span
              className="text-[38px] font-black uppercase tracking-[-0.03em]"
              style={{ fontFamily: SANS }}
            >
              drop a comment
            </span>
            <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[rgba(249,245,242,0.14)] bg-[rgba(255,255,255,0.06)]">
              <ArrowRight size={28} strokeWidth={2.6} />
            </span>
          </div>

          <div
            className="mt-[26px] max-w-[520px] text-[30px] italic opacity-70"
            style={{ fontFamily: SERIF, lineHeight: 1.14 }}
          >
            The line is not whether AI can create influence. It is whether the
            audience knows it is watching a machine.
          </div>
        </div>

        <div className="relative z-10 mt-auto flex items-end justify-between pt-[24px]">
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
