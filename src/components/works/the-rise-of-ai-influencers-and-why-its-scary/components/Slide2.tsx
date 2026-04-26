import { Fragment } from "react";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const rows = [
  ["see a polished face", "check receipts"],
  ["follow reach", "follow consistency"],
  ["trust the vibe", "trust the pattern"],
];

export default function Slide2({ scale }: { scale: number }) {
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
            className="font-mono text-[22px] uppercase tracking-[0.2em] opacity-50"
            style={{ fontFamily: MONO }}
          >
            ~ where it gets slippery
          </div>
          <div
            className="font-mono text-[22px] uppercase tracking-[0.2em] opacity-50"
            style={{ fontFamily: MONO }}
          >
            02 / 06
          </div>
        </div>

        <img
          src="/assets/stickers/thinking_ellipsis.png"
          alt=""
          className="absolute pointer-events-none"
          style={{ width: 190, bottom: 78, right: 54, zIndex: 20 }}
        />

        <div className="relative z-10 mt-[72px] max-w-[820px]">
          <h2
            className="max-w-[780px] font-black uppercase tracking-[-0.04em]"
            style={{ fontFamily: SANS, fontSize: 120, lineHeight: 0.9 }}
          >
            MOST PEOPLE TRUST THE FACE.
          </h2>
          <p
            className="mt-[28px] max-w-[620px] text-[38px] italic opacity-80"
            style={{ fontFamily: SERIF, lineHeight: 1.08 }}
          >
            That is exactly why synthetic creators can move faster than common
            sense.
          </p>
        </div>

        <div className="relative z-10 mt-[92px] grid max-w-[888px] grid-cols-2 gap-x-[44px] gap-y-[24px] border-t border-[var(--border)] pt-[34px]">
          <div
            className="text-[22px] uppercase tracking-[0.2em] opacity-45"
            style={{ fontFamily: MONO }}
          >
            most people
          </div>
          <div
            className="text-[22px] uppercase tracking-[0.2em] text-[#e3a99c] opacity-70"
            style={{ fontFamily: MONO }}
          >
            top performers
          </div>
          {rows.map(([left, right]) => (
            <Fragment key={left}>
              <div
                className="text-[36px] font-black uppercase leading-[0.92] tracking-[-0.03em]"
                style={{ fontFamily: SANS }}
              >
                {left}
              </div>
              <div
                className="text-[36px] font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#e3a99c]"
                style={{ fontFamily: SANS }}
              >
                {right}
              </div>
            </Fragment>
          ))}
        </div>

        <div className="relative z-10 mt-auto flex items-end justify-between pt-[84px]">
          <div
            className="max-w-[500px] text-[30px] italic opacity-72"
            style={{ fontFamily: SERIF, lineHeight: 1.14 }}
          >
            If the trust check takes longer than the follow button, the account
            is already winning.
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
