import { Moon, Users, Zap } from "lucide-react";

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
        <div className="flex justify-between items-start z-10">
          <span
            style={{
              fontFamily: MONO,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary)",
            }}
          >
            ~ the energy
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

        <div className="mt-32 z-10">
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            MADRID FEELS{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                color: "var(--primary)",
              }}
            >
              alive
            </em>.
          </h2>

          <div className="flex flex-col gap-8 mt-20">
            <div className="flex items-center gap-6">
              <div
                className="flex items-center justify-center rounded-[16px]"
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "var(--primary)",
                  color: "#3a3a3a",
                }}
              >
                <Moon size={30} strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: SANS, fontSize: 36, fontWeight: 900 }}>Late-night streets</span>
            </div>

            <div className="flex items-center gap-6">
              <div
                className="flex items-center justify-center rounded-[16px]"
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "var(--primary)",
                  color: "#3a3a3a",
                }}
              >
                <Users size={30} strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: SANS, fontSize: 36, fontWeight: 900 }}>Busy plazas</span>
            </div>

            <div className="flex items-center gap-6">
              <div
                className="flex items-center justify-center rounded-[16px]"
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "var(--primary)",
                  color: "#3a3a3a",
                }}
              >
                <Zap size={30} strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: SANS, fontSize: 36, fontWeight: 900 }}>People everywhere</span>
            </div>
          </div>

          <p
            style={{
              fontFamily: SERIF,
              fontSize: 44,
              fontWeight: 400,
              fontStyle: "italic",
              opacity: 0.7,
              lineHeight: 1.4,
              marginTop: 64,
              maxWidth: 860,
            }}
          >
            The city never feels empty.
          </p>
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
            Swipe →
          </span>
        </div>
      </div>
    </div>
  );
}
