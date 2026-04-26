const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide2({ scale }: { scale: number }) {
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
        className="absolute top-0 left-0 flex flex-col p-[72px] box-border"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/thinking_ellipsis.png"
          alt=""
          style={{
            position: "absolute",
            right: 110,
            bottom: 300,
            width: 190,
            height: 190,
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
              color: "var(--foreground)",
              opacity: 0.45,
            }}
          >
            ~ the trade-off trap
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
            02 / 07
          </span>
        </div>

        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 110,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            EVERY CITY
            <br />
            MAKES YOU{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              choose.
            </em>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginTop: 44,
            }}
          >
            {[
              { label: "cheap cities", pain: "Nothing to do on weekends" },
              { label: "exciting cities", pain: "One month = one rent payment" },
              { label: "social cities", pain: "Surface-level only — everyone's passing through" },
              { label: "productive cities", pain: "Grey sky, grey mood, grey output" },
            ].map(({ label, pain }) => (
              <div
                key={label}
                style={{
                  background: "rgba(58,58,58,0.05)",
                  border: "1px solid rgba(58,58,58,0.1)",
                  borderRadius: 20,
                  padding: "28px 32px",
                }}
              >
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 17,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#c47373",
                    marginBottom: 12,
                    opacity: 0.9,
                  }}
                >
                  ~ {label}
                </div>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 30,
                    lineHeight: 1.4,
                    margin: 0,
                    opacity: 0.8,
                  }}
                >
                  {pain}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.5,
              opacity: 0.7,
              maxWidth: 820,
              marginTop: 36,
              marginBottom: 0,
            }}
          >
            Madrid refuses that deal entirely.
          </p>
        </div>

        <div className="flex justify-between items-end" style={{ zIndex: 10 }}>
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
