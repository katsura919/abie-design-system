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
            ~ 120+ already in
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
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, marginTop: 48 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 120,
              lineHeight: 0.88,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              margin: "0 0 12px",
            }}
          >
            YOUR SEAT
          </h2>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 120,
              lineHeight: 0.88,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              margin: "0 0 48px",
            }}
          >
            IS{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
              }}
            >
              waiting.
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 38,
              lineHeight: 1.5,
              opacity: 0.75,
              margin: "0 0 16px",
              maxWidth: 820,
            }}
          >
            Free to attend. 120+ founders, coaches, and solopreneurs already
            registered. Zoom link sent via email.
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 32,
              lineHeight: 1.5,
              opacity: 0.5,
              margin: "0 0 40px",
              maxWidth: 820,
            }}
          >
            VIP at €47 — guaranteed seat + replay + Claude Vault + Skool access.
          </p>

          {/* CTA pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 24,
              background: "#1e1b1a",
              color: "#f9f5f2",
              borderRadius: 9999,
              padding: "14px 14px 14px 48px",
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 28,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              alignSelf: "flex-start",
            }}
          >
            Register at talentmucho.com
            <span
              style={{
                width: 60,
                height: 60,
                background: "#e3a99c",
                color: "#3a3a3a",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                flexShrink: 0,
              }}
            >
              ↗
            </span>
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

        {/* sticker */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/thumbs_up.png"
          alt=""
          style={{
            position: "absolute",
            right: 112,
            top: 180,
            width: 190,
            height: 190,
            objectFit: "contain",
            transform: "rotate(-6deg)",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}
