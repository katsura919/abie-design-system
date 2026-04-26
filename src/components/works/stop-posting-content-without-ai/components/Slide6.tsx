import { Repeat2, FileText, Share2 } from "lucide-react";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const ITEMS = [
  {
    icon: FileText,
    label: "One long-form piece",
    body: "Blog post, newsletter, or podcast script — this is your source of truth",
  },
  {
    icon: Repeat2,
    label: "Ask AI to repurpose it",
    body: "\"Turn this into 5 IG carousel hooks, 3 tweet threads, and a LinkedIn post\"",
  },
  {
    icon: Share2,
    label: "10 posts, one session",
    body: "Different formats, same insight — your content compounds instead of disappearing",
  },
];

export default function Slide6({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden cream"
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
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          border: "1px solid rgba(58,58,58,0.08)",
        }}
      >
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.6,
            }}
          >
            ~ step 03
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
            06 / 08
          </span>
        </div>

        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 100,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 16px",
            }}
          >
            REPURPOSE{" "}
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
              everything
            </em>
          </h2>

          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--primary)",
              borderRadius: 2,
              margin: "24px 0 28px",
            }}
          />

          <div
            style={{ display: "flex", flexDirection: "column", gap: 32, marginTop: 8 }}
          >
            {ITEMS.map(({ icon: Icon, label, body }, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 24, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "#bbcccd",
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={30} color="#3a3a3a" />
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
                      opacity: 0.68,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10 }}>
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
