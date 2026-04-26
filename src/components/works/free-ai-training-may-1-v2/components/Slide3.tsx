import {
  BrainCircuit,
  BriefcaseBusiness,
  MessageSquareMore,
  PenLine,
} from "lucide-react";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const ITEMS = [
  {
    icon: PenLine,
    title: "better writing",
    body: "Sharper drafts, cleaner voice, fewer rewrites.",
  },
  {
    icon: BrainCircuit,
    title: "clearer strategy",
    body: "Think through positioning, offers, and priorities faster.",
  },
  {
    icon: BriefcaseBusiness,
    title: "stronger decisions",
    body: "Break options down before you spend time or money.",
  },
  {
    icon: MessageSquareMore,
    title: "longer conversations",
    body: "Keep context so ideas evolve instead of restarting.",
  },
];

export default function Slide3({ scale }: { scale: number }) {
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
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
          padding: 72,
          boxSizing: "border-box",
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
            ~ why claude
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
            03/07
          </p>
        </div>

        <div className="relative z-10 mt-12 flex-1">
          <h2
            style={{
              margin: 0,
              fontFamily: SANS,
              fontSize: 104,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              fontWeight: 900,
              maxWidth: 980,
            }}
          >
            Most people know ChatGPT. Pros are using Claude.
          </h2>

          <div style={{ marginTop: 34 }}>
            {ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start"
                  style={{ marginBottom: index === ITEMS.length - 1 ? 0 : 24 }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 16,
                      backgroundColor: "var(--primary)",
                      color: "#3a3a3a",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={30} strokeWidth={2.2} />
                  </div>

                  <div style={{ marginLeft: 18 }}>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: SANS,
                        fontWeight: 900,
                        fontSize: 36,
                        lineHeight: 1,
                        textTransform: "uppercase",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        margin: "7px 0 0",
                        fontFamily: SERIF,
                        fontStyle: "italic",
                        fontSize: 30,
                        lineHeight: 1.25,
                        opacity: 0.77,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
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
            swipe ~
          </p>
        </div>
      </div>
    </div>
  );
}
