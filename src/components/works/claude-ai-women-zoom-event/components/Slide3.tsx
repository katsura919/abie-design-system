import { Mail, FileText, Users, Zap } from "lucide-react";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const TOPICS = [
  {
    icon: Mail,
    label: "Emails",
    body: "Write, rewrite, and send client emails in under 3 minutes.",
  },
  {
    icon: FileText,
    label: "Content Creation",
    body: "Captions, blogs, newsletters — first draft done before your coffee cools.",
  },
  {
    icon: Users,
    label: "Client Work",
    body: "Proposals, reports, follow-ups — Claude handles the words.",
  },
  {
    icon: Zap,
    label: "Automation",
    body: "Chain tasks so repetitive work runs without you touching it.",
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
        {/* grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
              opacity: 0.9,
            }}
          >
            ~ what we cover
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              color: "var(--background)",
            }}
          >
            03 / 07
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
              lineHeight: 0.9,
              textTransform: "uppercase",
              color: "var(--background)",
              margin: 0,
            }}
          >
            4 WAYS TO USE
            <br />
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              claude
            </em>{" "}
            TODAY
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
            {TOPICS.map(({ icon: Icon, label, body }, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 24, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 62,
                    height: 62,
                    background: "var(--primary)",
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={28} color="#3a3a3a" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: SANS,
                      fontWeight: 900,
                      fontSize: 36,
                      textTransform: "uppercase",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      margin: "0 0 8px",
                      color: "var(--background)",
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
                      color: "var(--background)",
                      opacity: 0.68,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: MONO,
              fontSize: 19,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
              opacity: 0.7,
              marginTop: 36,
            }}
          >
            + Business decisions · Daily productivity
          </p>
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
              color: "var(--background)",
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
              color: "var(--background)",
            }}
          >
            Swipe →
          </span>
        </div>
      </div>
    </div>
  );
}
