const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const CHIPS = ["Prompt Craft", "Workflow Build", "Output QC"];

const STEPS = [
  "Pick one tool: Claude, GPT, Gemini. Spend 30 days shipping real work with it.",
  "Automate one task you repeat weekly. Document how you built the chain.",
  "Start showing your AI outputs publicly. Proof beats claims in every interview.",
];

export default function Slide7({ scale }: { scale: number }) {
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
            ~ fast track
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
            07 / 08
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 88,
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              textTransform: "uppercase",
              color: "var(--background)",
              margin: 0,
            }}
          >
            BUILD{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              these
            </em>
            <br />
            3 SKILLS
          </p>

          {/* formula chips */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px 12px",
              marginTop: 32,
              alignItems: "center",
            }}
          >
            {CHIPS.flatMap((chip, i, arr) => [
              <span
                key={chip}
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 30,
                  textTransform: "uppercase",
                  background: "rgba(249,245,242,0.12)",
                  color: "#f9f5f2",
                  padding: "12px 20px",
                  borderRadius: 9999,
                  letterSpacing: "-0.02em",
                }}
              >
                {chip}
              </span>,
              ...(i < arr.length - 1
                ? [
                    <span
                      key={`plus${i}`}
                      style={{
                        fontFamily: MONO,
                        fontSize: 28,
                        opacity: 0.4,
                        color: "var(--background)",
                      }}
                    >
                      +
                    </span>,
                  ]
                : []),
            ])}
          </div>

          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--primary)",
              borderRadius: 2,
              margin: "32px 0",
            }}
          />

          {/* numbered steps */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            {STEPS.map((step, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: 20 }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 20,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--primary)",
                    opacity: 0.8,
                    minWidth: 48,
                    paddingTop: 10,
                  }}
                >
                  0{i + 1}
                </span>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 34,
                    lineHeight: 1.4,
                    margin: 0,
                    color: "var(--background)",
                    opacity: 0.82,
                  }}
                >
                  {step}
                </p>
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
