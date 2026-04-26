import { Zap, GitBranch, ShieldCheck } from "lucide-react";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const SKILLS = [
  {
    icon: Zap,
    label: "Prompt Craft",
    body: "Get AI to produce usable output on the first try, not the tenth.",
  },
  {
    icon: GitBranch,
    label: "Workflow Build",
    body: "Chain AI tools together so repetitive tasks run without you.",
  },
  {
    icon: ShieldCheck,
    label: "Quality Control",
    body: "Catch hallucinations, fix gaps, ship work that doesn't embarrass you.",
  },
];

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
        className="absolute top-0 left-0 flex flex-col box-border"
        style={{
          width: 1080,
          height: 1350,
          padding: 72,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--primary-soft)",
          color: "var(--foreground)",
        }}
      >
        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--foreground)",
              opacity: 0.45,
            }}
          >
            ~ what they want
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
            04 / 08
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 96,
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            3{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              actual
            </em>
            <br />
            AI SKILLS
          </p>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 34,
              lineHeight: 1.45,
              opacity: 0.7,
              maxWidth: 820,
              margin: "20px 0 0",
            }}
          >
            Not &ldquo;I use ChatGPT.&rdquo; These three separate AI-skilled hires from everyone else.
          </p>

          {/* icon-anchored list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              marginTop: 44,
            }}
          >
            {SKILLS.map(({ icon: Icon, label, body }, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 24, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "rgba(58,58,58,0.85)",
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={30} color="#f9f5f2" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: SANS,
                      fontWeight: 900,
                      fontSize: 38,
                      textTransform: "uppercase",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      margin: "0 0 8px",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: SERIF,
                      fontStyle: "italic",
                      fontSize: 30,
                      lineHeight: 1.4,
                      margin: 0,
                      opacity: 0.7,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* row bottom */}
        <div
          className="flex justify-between items-end"
          style={{ marginTop: "auto", zIndex: 10 }}
        >
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
