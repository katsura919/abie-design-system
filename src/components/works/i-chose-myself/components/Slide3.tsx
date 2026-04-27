"use client";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide3({ scale }: { scale: number }) {
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
        <div className="flex justify-between items-start" style={{ zIndex: 10, position: "relative" }}>
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
            ~ the fear beneath
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
            03 / 05
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, position: "relative" }}>
          {/* scene-setter eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
            <div
              style={{ width: 32, height: 2, background: "var(--primary)", borderRadius: 1 }}
            />
            <span
              style={{
                fontFamily: MONO,
                fontSize: 22,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.6,
              }}
            >
              The quieter truth
            </span>
          </div>

          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 100,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            SHE&apos;S{" "}
            <em style={{ fontFamily: SERIF, fontStyle: "italic", color: "var(--primary)" }}>
              CHANGING
            </em>
          </h2>

          {/* pull quote */}
          <div
            style={{
              borderLeft: "3px solid var(--primary)",
              paddingLeft: 36,
              marginTop: 44,
              marginBottom: 44,
            }}
          >
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 42,
                lineHeight: 1.4,
                margin: 0,
                opacity: 0.88,
                color: "var(--color-text)",
              }}
            >
              &ldquo;I watched a video of my mom. She was different. Time had moved.&rdquo;
            </p>
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 36,
              lineHeight: 1.5,
              margin: 0,
              opacity: 0.72,
              maxWidth: 820,
              color: "var(--color-text)",
            }}
          >
            She&apos;s getting older. And I&apos;m here — building, pursuing, living — while the people I love most grow older inside a phone screen.
          </p>
        </div>

        {/* row bottom */}
        <div
          className="flex justify-between items-end"
          style={{ marginTop: "auto", zIndex: 10, position: "relative" }}
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
