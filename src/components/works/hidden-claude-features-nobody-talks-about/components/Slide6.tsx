const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide6({ scale }: { scale: number }) {
  return (
    <div
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        position: "relative",
        borderRadius: 18 * scale,
        overflow: "hidden",
      }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          background: "#f9f5f2",
          color: "#1e1b1a",
          padding: 72,
          boxSizing: "border-box",
        }}
      >
        <div className="flex justify-between items-start">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8a4f42",
            }}
          >
            ~ Shift
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.5,
            }}
          >
            06 / 07
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              fontSize: 120,
              margin: 0,
              maxWidth: 930,
            }}
          >
            Stop
            <br />
            Prompting.
            <br />
            Start Running
            <br />A
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "none",
                letterSpacing: 0,
                color: "#8a4f42",
                marginLeft: 16,
              }}
            >
              workflow
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 34,
              lineHeight: 1.38,
              marginTop: 28,
              maxWidth: 860,
              opacity: 0.84,
            }}
          >
            Context memory + dual drafts + critique.
            <br />
            That stack turns Claude into an editor, not a toy ~
          </p>
        </div>

        <div className="flex justify-between items-end">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.5,
            }}
          >
            build once · reuse daily
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8a4f42",
            }}
          >
            unlock
          </span>
        </div>
      </div>
    </div>
  );
}
