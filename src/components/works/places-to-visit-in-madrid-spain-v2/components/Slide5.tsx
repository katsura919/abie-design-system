const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const IMG = "https://images.unsplash.com/photo-1564565946561-e738711bdbd1?w=1080&q=80";

export default function Slide5({ scale }: { scale: number }) {
  const stamps = [
    { label: "where", value: "Prado" },
    { label: "when", value: "After 6PM" },
    { label: "feeling", value: "Small" },
  ];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        borderRadius: 18 * scale,
        border: "1px solid rgba(58,58,58,0.08)",
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
        }}
      >
        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10, position: "relative" }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--foreground)", opacity: 0.55 }}>
            ~ the art
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            05 / 07
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, position: "relative" }}>
          {/* inset image card */}
          <div style={{ marginBottom: 40 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG}
              alt=""
              style={{
                width: 460,
                height: 300,
                objectFit: "cover",
                borderRadius: 20,
                display: "block",
                transform: "rotate(-2deg)",
                border: "1px solid rgba(58,58,58,0.12)",
              }}
            />
          </div>

          <h2
            style={{
              fontFamily: SANS,
              fontSize: 100,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 32px",
              maxWidth: 820,
            }}
          >
            MUSEO{" "}
            <br />
            DEL{" "}
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
              Prado
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 34,
              fontStyle: "italic",
              fontWeight: 400,
              opacity: 0.72,
              maxWidth: 820,
              margin: "0 0 40px",
              lineHeight: 1.45,
            }}
          >
            Vel&aacute;zquez and Goya in the same afternoon. Free entry after 6pm on weekdays. 8,000 works &mdash; pick 10 and go deep.
          </p>

          <div style={{ display: "flex", gap: 48 }}>
            {stamps.map(({ label, value }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontFamily: MONO, fontSize: 18, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
                  {label}
                </span>
                <span style={{ fontFamily: SANS, fontWeight: 900, fontSize: 38, letterSpacing: "-0.04em", textTransform: "uppercase" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10, position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
              abiemaxey.com
            </span>
            <span style={{ fontFamily: MONO, fontSize: 16, letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.3 }}>
              Photo: Unsplash
            </span>
          </div>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
            Swipe →
          </span>
        </div>
      </div>
    </div>
  );
}
