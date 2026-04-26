"use client";

import { MessageSquare, Terminal, Layers } from "lucide-react";

const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

const TOOLS = [
  {
    icon: MessageSquare,
    label: "Claude Chat",
    body: "Business comms, decisions, and strategy — without the back-and-forth",
  },
  {
    icon: Terminal,
    label: "Claude Code",
    body: "Custom automations and business tools built in one session",
  },
  {
    icon: Layers,
    label: "Claude Cowork",
    body: "Integrated workflow management across your entire operation",
  },
];

export default function Slide3({ scale }: { scale: number }) {
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
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
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
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
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
            ~ what you&apos;ll master
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
            03 / 06
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10, marginTop: 40 }}>
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 900,
              fontSize: 88,
              lineHeight: 0.95,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              margin: "0 0 52px",
            }}
          >
            3 CLAUDE TOOLS.{" "}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "lowercase",
                letterSpacing: 0,
                opacity: 0.65,
              }}
            >
              one night.
            </em>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {TOOLS.map(({ icon: Icon, label, body }, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 28, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "var(--primary)",
                    borderRadius: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={30} color="#3a3a3a" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: SANS,
                      fontWeight: 900,
                      fontSize: 38,
                      textTransform: "uppercase",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      margin: "0 0 10px",
                      color: "var(--background)",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: SERIF,
                      fontStyle: "italic",
                      fontSize: 30,
                      lineHeight: 1.4,
                      margin: 0,
                      opacity: 0.65,
                      color: "var(--background)",
                    }}
                  >
                    {body}
                  </p>
                </div>
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
            Swipe →
          </span>
        </div>
      </div>
    </div>
  );
}
