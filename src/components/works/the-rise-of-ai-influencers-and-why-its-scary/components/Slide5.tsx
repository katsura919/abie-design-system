import {
  BadgeCheck,
  FileText,
  MapPinned,
  MessageSquareQuote,
} from "lucide-react";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const items = [
  {
    icon: BadgeCheck,
    title: "proof",
    body: "Screenshots, links, outcomes. Not just a clean feed.",
  },
  {
    icon: MapPinned,
    title: "proximity",
    body: "People trust what they can place in a real context.",
  },
  {
    icon: MessageSquareQuote,
    title: "opinion",
    body: "A point of view survives imitation. Generic content does not.",
  },
  {
    icon: FileText,
    title: "receipts",
    body: "A face is easy. A trail of work is hard to fake.",
  },
];

export default function Slide5({ scale }: { scale: number }) {
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
            className="text-[22px] uppercase tracking-[0.2em] opacity-50"
            style={{ fontFamily: MONO }}
          >
            ~ what still wins
          </div>
          <div
            className="text-[22px] uppercase tracking-[0.2em] opacity-50"
            style={{ fontFamily: MONO }}
          >
            05 / 06
          </div>
        </div>

        <div className="relative z-10 mt-[76px] max-w-[860px]">
          <h2
            className="max-w-[770px] font-black uppercase tracking-[-0.04em]"
            style={{ fontFamily: SANS, fontSize: 120, lineHeight: 0.9 }}
          >
            REAL CREATORS HAVE RECEIPTS.
          </h2>
          <p
            className="mt-[28px] max-w-[620px] text-[38px] italic opacity-80"
            style={{ fontFamily: SERIF, lineHeight: 1.08 }}
          >
            If AI can copy the content, the edge moves to proof, taste, and
            track record.
          </p>
        </div>

        <div className="relative z-10 mt-[78px] flex flex-col gap-[24px]">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="grid grid-cols-[84px_1fr] items-start gap-[24px]"
            >
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[16px] bg-[var(--primary)] text-[#3a3a3a]">
                <Icon size={30} strokeWidth={2.4} />
              </div>
              <div>
                <div
                  className="text-[36px] font-black uppercase tracking-[-0.03em]"
                  style={{ fontFamily: SANS }}
                >
                  {title}
                </div>
                <div
                  className="mt-[8px] max-w-[720px] text-[30px] italic opacity-78"
                  style={{ fontFamily: SERIF, lineHeight: 1.1 }}
                >
                  {body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-auto flex items-end justify-between pt-[76px]">
          <div
            className="max-w-[520px] text-[30px] italic opacity-70"
            style={{ fontFamily: SERIF, lineHeight: 1.14 }}
          >
            The future is not human versus AI. It is verifiable versus vague.
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
