import { Lightbulb, Layers3, Compass } from "lucide-react";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const ITEMS = [
  {
    icon: Lightbulb,
    label: "Reason 1 ~ Specificity",
    body: "She shares exact framing lines, not generic mindset quotes.",
  },
  {
    icon: Layers3,
    label: "Reason 2 ~ Systems",
    body: "Every post points to repeatable workflows, not random hacks.",
  },
  {
    icon: Compass,
    label: "Reason 3 ~ Clarity",
    body: "The message is direct so you know what to do next in 30 seconds.",
  },
];

function GridTexture() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  );
}

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
        className="absolute top-0 left-0 flex flex-col p-[72px] box-border"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
        }}
      >
        <GridTexture />

        <div className="relative z-10 flex justify-between items-start">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
            }}
          >
            ~ what she does better
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.45,
            }}
          >
            03 / 07
          </span>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              fontSize: 88,
              margin: 0,
            }}
          >
            3 REASONS I
            <br />
            KEEP
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                color: "var(--primary)",
                marginLeft: 14,
              }}
            >
              watching.
            </em>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              marginTop: 44,
            }}
          >
            {ITEMS.map(({ icon: Icon, label, body }) => (
              <div
                key={label}
                style={{ display: "flex", gap: 24, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background: "var(--primary)",
                    color: "#3a3a3a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={30} />
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
                      lineHeight: 1.35,
                      margin: 0,
                      opacity: 0.78,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-end">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.45,
            }}
          >
            instagram.com/abiemaxey
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
            Swipe -&gt;
          </span>
        </div>
      </div>
    </div>
  );
}
