const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function Slide7({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080 * scale, height: 1350 * scale, borderRadius: 18 * scale }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col p-[72px] box-border"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--primary)",
          color: "var(--foreground)",
        }}
      >
        <div className="flex justify-between items-start z-10">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--foreground)",
              opacity: 0.8,
            }}
          >
            ~ the save
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
            07 / 07
          </span>
        </div>

        <div className="mt-28 z-10">
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            SAVE
            <br />
            THIS
            <br />
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "var(--background)",
              }}
            >
              before you go
            </em>
          </h2>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 38,
              fontWeight: 400,
              fontStyle: "italic",
              opacity: 0.85,
              lineHeight: 1.4,
              marginTop: 44,
              maxWidth: 820,
            }}
          >
            Madrid's coffee scene is leveling up fast. These 4 are the ones worth your morning.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginTop: 52,
            }}
          >
            {[
              "Hola Coffee — pour-overs, Malasaña",
              "Federal Café — flat whites, Chueca",
              "Toma Café — espresso, Malasaña",
              "La Bicicleta — work sessions, Malasaña",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 20,
                    letterSpacing: "0.2em",
                    opacity: 0.5,
                    minWidth: 40,
                  }}
                >
                  0{i + 1}
                </span>
                <span
                  style={{
                    fontFamily: SANS,
                    fontWeight: 900,
                    fontSize: 32,
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

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
              fontSize: 32,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginTop: 52,
            }}
          >
            Drop a comment
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
              }}
            >
              →
            </span>
          </div>
        </div>

        <div className="flex justify-between items-end mt-auto z-10">
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

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/winking_peace.png"
          alt=""
          style={{
            position: "absolute",
            right: 80,
            bottom: 380,
            width: 220,
            height: 220,
            objectFit: "contain",
            transform: "rotate(-6deg)",
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
}
