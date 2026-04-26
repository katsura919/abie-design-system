const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const ITEMS = [
  "Founders and solopreneurs building something real",
  "Freelancers who want to deliver faster",
  "Coaches and consultants with clients to serve",
  "E-commerce and service business owners",
  "Anyone curious about AI but scared to start",
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
            ~ made for you if
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
            04 / 07
          </span>
        </div>

        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 120,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              textTransform: "uppercase",
              margin: "0 0 40px",
            }}
          >
            Is This{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              you?
            </em>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              marginTop: 8,
            }}
          >
            {ITEMS.map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: 20 }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 22,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    opacity: 0.5,
                    minWidth: 56,
                    paddingTop: 10,
                  }}
                >
                  0{i + 1}
                </span>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 36,
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {item}
                </p>
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
