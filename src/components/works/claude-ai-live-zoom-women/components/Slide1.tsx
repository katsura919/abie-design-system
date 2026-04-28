const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide1({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden dark"
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
        }}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Accent shapes */}
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
          viewBox="0 0 1080 1350"
          fill="none"
        >
          <circle
            cx="980"
            cy="100"
            r="400"
            fill="currentColor"
            fillOpacity="0.04"
          />
          <circle
            cx="80"
            cy="1300"
            r="280"
            fill="currentColor"
            fillOpacity="0.03"
          />
        </svg>

        {/* Sticker — bottom-right, slightly rotated */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/abiemeri/abie-meri-shock.png"
          alt=""
          style={{
            position: "absolute",
            right: 48,
            bottom: 100,
            width: 380,
            height: 380,
            objectFit: "contain",
            zIndex: 1,
          }}
        />

        {/* Row top */}
        <div
          className="flex justify-between items-start"
          style={{ zIndex: 10 }}
        >
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
            }}
          >
            ~ happening may 1
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
            01 / 08
          </span>
        </div>

        {/* Body */}
        <div
          className="flex flex-col justify-center flex-1"
          style={{ zIndex: 10 }}
        >
          <h1
            style={{
              fontFamily: SANS,
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "0 0 36px",
              maxWidth: 860,
            }}
          >
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #f9f5f2 0%, #e3a99c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI
            </span>{" "}
            FOR{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              women
            </em>{" "}
            <br />
            IN BUSINESS
          </h1>

          {/* Decorative divider */}
          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--primary)",
              borderRadius: 2,
              margin: "0 0 28px",
            }}
          />

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 38,
              fontStyle: "italic",
              fontWeight: 400,
              opacity: 0.8,
              maxWidth: 620,
              margin: "0 0 36px",
              lineHeight: 1.4,
            }}
          >
            Free live training. No tech background needed.
          </p>

          {/* Event details */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              margin: "0 0 36px",
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 22,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--primary)",
                opacity: 0.85,
                marginBottom: 8,
              }}
            >
              Abie Maxey + Meri Gee
            </span>

            {["Friday, May 1, 2026", "6:00 – 8:00 PM EST", "Live on Zoom"].map(
              (detail) => (
                <div
                  key={detail}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    fontFamily: MONO,
                    fontSize: 22,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "var(--primary)",
                      flexShrink: 0,
                    }}
                  />
                  {detail}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Row bottom */}
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
