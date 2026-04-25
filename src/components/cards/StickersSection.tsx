"use client";

const stickers = [
  { file: "smiling_portrait", label: "smiling" },
  { file: "winking_peace", label: "winking" },
  { file: "thumbs_up", label: "thumbs up" },
  { file: "laughing_ha", label: "laughing" },
  { file: "excited_sparkles", label: "excited" },
  { file: "holding_yt", label: "youtube" },
  { file: "thinking_ellipsis", label: "thinking" },
  { file: "shouting_megaphone", label: "megaphone" },
  { file: "sitting_with_laptop", label: "sitting" },
  { file: "working_on_laptop", label: "working" },
  { file: "sleepy_zzz", label: "sleepy" },
  { file: "move_to_spain_playbook", label: "spain" },
  { file: "overwhelmed_shocked", label: "overwhelmed" },
  { file: "shocked_worried", label: "shocked" },
  { file: "sad_worried", label: "worried" },
  { file: "crying_tears", label: "crying" },
  { file: "angry_crossed_arms", label: "angry" },
  { file: "furious_on_fire", label: "furious" },
];

const annotations = [
  { num: "~80", title: "to 160px on web", desc: "Never below 60px. Detail breaks. Square aspect, transparent background." },
  { num: "3°", title: "slight rotation", desc: "Sit slightly off-axis. Hover scales 1.1 + rotates -3deg over 300ms." },
  { num: "→", title: "punctuation, not vocab", desc: "Stickers sit beside headings or in margins. Never inside body text." },
];

export default function StickersSection() {
  return (
    <div>
      <p className="label-mono mb-3" style={{ color: "var(--muted-foreground)" }}>
        03.2 ~ Stickers
      </p>
      <h2
        className="headline-brand mb-3"
        style={{ fontSize: "clamp(48px, 6vw, 72px)" }}
      >
        Hand-drawn <em>mascots.</em>
        <br />
        The brand&apos;s <em>only</em> emoji.
      </h2>
      <p
        className="text-serif mb-12"
        style={{ fontSize: 18, color: "var(--muted-foreground)", maxWidth: 640 }}
      >
        18 illustrations of Abie in different emotional states. They sit
        alongside headlines, slightly rotated, and replace every emoji you&apos;d be
        tempted to use.
      </p>

      {/* In-context demo */}
      <div
        className="relative mb-12 overflow-hidden"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "var(--r-xl)",
          padding: "56px clamp(32px, 5vw, 64px) 64px",
        }}
      >
        <span
          className="label-mono"
          style={{
            position: "absolute",
            top: 24,
            left: 28,
            color: "var(--primary)",
          }}
        >
          ~ In context
        </span>

        {/* sticker — positioned top-right */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stickers/winking_peace.png"
          alt="Winking peace sticker"
          className="sticker"
          style={{
            position: "absolute",
            top: 32,
            right: 64,
            width: 160,
            height: 160,
            objectFit: "contain",
          }}
        />

        <p
          className="text-serif mb-3"
          style={{ fontSize: 20, color: "var(--muted-foreground)" }}
        >
          ~ Systems, not checklists
        </p>
        <h2
          className="headline-brand"
          style={{ fontSize: "clamp(44px, 6vw, 72px)", color: "var(--foreground)" }}
        >
          Free <em>playbooks</em>
        </h2>
      </div>

      {/* Library grid */}
      <div
        className="grid mb-4"
        style={{
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 8,
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "var(--r-xl)",
          padding: 16,
          display: "grid",
        }}
      >
        {stickers.map((s) => (
          <div
            key={s.file}
            className="group flex flex-col items-center justify-center"
            style={{
              aspectRatio: "1",
              background: "rgba(227,169,156,0.06)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: 8,
              transition: "transform 250ms, border-color 250ms",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(-3px) scale(1.04)";
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(227,169,156,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "";
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "var(--border)";
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/assets/stickers/${s.file}.png`}
              alt={s.label}
              style={{
                width: "70%",
                height: "70%",
                objectFit: "contain",
                marginBottom: 4,
              }}
            />
            <span
              className="label-mono text-center"
              style={{
                fontSize: 8,
                letterSpacing: "0.05em",
                color: "var(--muted-foreground)",
                lineHeight: 1.2,
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Annotations */}
      <div
        className="grid grid-cols-3"
        style={{
          border: "1px solid var(--border)",
          borderRadius: "var(--r-xl)",
          overflow: "hidden",
        }}
      >
        {annotations.map((a, i) => (
          <div
            key={a.num}
            style={{
              padding: 24,
              borderRight:
                i < annotations.length - 1
                  ? "1px solid var(--border)"
                  : "none",
            }}
          >
            <div
              className="headline-brand"
              style={{ fontSize: 32, color: "var(--primary)", lineHeight: 1 }}
            >
              {a.num}
            </div>
            <div
              style={{
                fontFamily: "var(--font-host-grotesk)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontSize: 12,
                margin: "12px 0 6px",
              }}
            >
              {a.title}
            </div>
            <p
              className="text-serif"
              style={{
                fontSize: 13,
                lineHeight: 1.5,
                color: "var(--muted-foreground)",
              }}
            >
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
