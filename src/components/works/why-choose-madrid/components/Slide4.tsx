const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const CHIPS = ["EU TIME ZONE", "SCHENGEN HUB", "WORK VISA", "65MB/S AVG WIFI"];

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
            ~ the unfair edge
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

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 96,
              lineHeight: 0.92,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              margin: 0,
            }}
          >
            EVERYTHING{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              else
            </em>{" "}
            CAN&apos;T TOUCH
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.5,
              opacity: 0.75,
              maxWidth: 820,
              margin: "32px 0 0",
            }}
          >
            Madrid gives you Schengen travel, EU legitimacy, a digital nomad visa
            pathway, and GMT+1 — which lines up with US afternoons and all of Europe
            during work hours.
          </p>

          {/* formula chips */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px 14px",
              marginTop: 48,
              alignItems: "center",
            }}
          >
            {CHIPS.flatMap((chip, i, arr) => [
              <span
                key={chip}
                style={{
                  fontFamily: SANS,
                  fontWeight: 900,
                  fontSize: 32,
                  textTransform: "uppercase",
                  background: "rgba(58,58,58,0.9)",
                  color: "#f9f5f2",
                  padding: "14px 24px",
                  borderRadius: 9999,
                  letterSpacing: "-0.02em",
                }}
              >
                {chip}
              </span>,
              ...(i < arr.length - 1
                ? [
                    <span
                      key={`plus-${i}`}
                      style={{ fontFamily: MONO, fontSize: 28, opacity: 0.4 }}
                    >
                      +
                    </span>,
                  ]
                : []),
            ])}
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
