"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide6({ scale }: { scale: number }) {
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
        {/* sticker */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/ok-sign.png"
          alt=""
          style={{
            position: "absolute",
            right: 96,
            top: 200,
            width: 220,
            height: 220,
            objectFit: "contain",
            transform: "rotate(6deg)",
            zIndex: 1,
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
              opacity: 0.55,
            }}
          >
            ~ if this is you too
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
            06 / 06
          </span>
        </div>

        {/* body */}
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
            MOTION ISN'T ALWAYS{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "none",
                letterSpacing: 0,
                color: "var(--primary)",
              }}
            >
              momentum.
            </em>
          </h2>

          <div
            style={{
              width: 48,
              height: 3,
              background: "var(--primary)",
              borderRadius: 2,
              margin: "36px 0",
            }}
          />

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 40,
              lineHeight: 1.5,
              margin: "0 0 48px",
              opacity: 0.8,
              maxWidth: 820,
            }}
          >
            If movement has been your identity, let this be permission to want something quieter.
          </p>

          {/* moment stamp */}
          <div style={{ display: "flex", gap: 56, marginTop: 8 }}>
            {[
              { label: "years moving", value: "2" },
              { label: "countries", value: "12+" },
              { label: "ready for", value: "roots" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 18,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    opacity: 0.4,
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: SANS,
                    fontWeight: 900,
                    fontSize: 44,
                    letterSpacing: "-0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {value}
                </span>
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
            ~ save · share · steal
          </span>
        </div>
      </div>
    </div>
  );
}
