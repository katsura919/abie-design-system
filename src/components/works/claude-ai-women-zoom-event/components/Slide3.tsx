import { Mail, PenLine, Users, Brain, Zap, Clock } from "lucide-react";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const ITEMS = [
  { icon: Mail, label: "Emails", body: "write faster, sound sharper" },
  { icon: PenLine, label: "Content", body: "posts, captions, copy in minutes" },
  { icon: Brain, label: "Decisions", body: "think through business problems out loud" },
  { icon: Zap, label: "Automation", body: "build systems that run without you" },
  { icon: Users, label: "Client Work", body: "proposals, reports, follow-ups done" },
  { icon: Clock, label: "Daily Flow", body: "save 2+ hours every single day" },
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
        className="absolute top-0 left-0 flex flex-col box-border"
        style={{
          width: 1080,
          height: 1350,
          padding: 72,
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

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/working_on_laptop.png"
          alt=""
          style={{
            position: "absolute",
            right: 96,
            bottom: 380,
            width: 180,
            height: 180,
            objectFit: "contain",
            transform: "rotate(-6deg)",
            zIndex: 1,
          }}
        />

        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
            }}
          >
            ~ what you'll learn
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
            03 / 07
          </span>
        </div>

        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 88,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              textTransform: "uppercase",
              margin: "0 0 36px",
            }}
          >
            6 Ways to Use{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                color: "var(--primary)",
              }}
            >
              Claude
            </em>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              marginTop: 8,
            }}
          >
            {ITEMS.map(({ icon: Icon, label, body }, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 20, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    background: "var(--primary)",
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={26} color="#3a3a3a" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: SANS,
                      fontWeight: 900,
                      fontSize: 30,
                      textTransform: "uppercase",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      margin: "0 0 4px",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: SERIF,
                      fontStyle: "italic",
                      fontSize: 26,
                      lineHeight: 1.35,
                      margin: 0,
                      opacity: 0.65,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

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
