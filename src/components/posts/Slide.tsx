import type { PostSlide, SlideBg } from "@/lib/posts";

const BG: Record<SlideBg, string> = {
  dark: "var(--foreground)",
  cream: "var(--background)",
  peach: "var(--primary)",
};

const TEXT: Record<SlideBg, string> = {
  dark: "var(--background)",
  cream: "var(--foreground)",
  peach: "var(--foreground)",
};

const BORDER: Record<SlideBg, string | undefined> = {
  dark: undefined,
  cream: "1px solid var(--border)",
  peach: undefined,
};

interface SlideProps {
  slide: PostSlide;
  index: number;
  total: number;
  scale?: number;
}

export default function Slide({ slide, index, total, scale = 1 }: SlideProps) {
  const fg = TEXT[slide.background];
  const bg = BG[slide.background];

  const accentColor =
    slide.accentColor === "primary"
      ? "var(--primary)"
      : slide.accentColor === "white"
      ? "rgba(255,255,255,0.85)"
      : "inherit";

  return (
    /* Outer wrapper constrains the scaled size */
    <div
      style={{
        width: 1080 * scale,
        height: 1080 * scale,
        position: "relative",
        flexShrink: 0,
        borderRadius: scale * 26,
        overflow: "hidden",
        border: BORDER[slide.background],
      }}
    >
      {/* Inner always renders at 1080×1080, then scaled */}
      <div
        style={{
          width: 1080,
          height: 1080,
          background: bg,
          color: fg,
          padding: 72,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {/* Top row: counter + chip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 18,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.35,
              color: fg,
            }}
          >
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          {slide.chip && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                background:
                  slide.background === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(58,58,58,0.08)",
                borderRadius: 9999,
                padding: "8px 20px",
                fontFamily: "var(--font-geist-mono)",
                fontSize: 16,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: fg,
                opacity: 0.8,
              }}
            >
              {slide.chip}
            </span>
          )}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 48 }}>
          {slide.eyebrow && (
            <p
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 18,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                opacity: 0.5,
                marginBottom: 24,
                color: fg,
              }}
            >
              {slide.eyebrow}
            </p>
          )}

          <h2
            style={{
              fontFamily: "var(--font-host-grotesk)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              fontSize: slide.headline.length > 20 ? 96 : 120,
              margin: 0,
              marginBottom: slide.body ? 40 : 0,
              color: fg,
            }}
          >
            {slide.headline}
            {slide.headlineAccent && (
              <>
                {" "}
                <em
                  style={{
                    fontFamily: "var(--font-instrument-serif)",
                    fontWeight: 400,
                    textTransform: "none",
                    letterSpacing: 0,
                    lineHeight: 1.1,
                    fontStyle: "italic",
                    color: accentColor !== "inherit" ? accentColor : fg,
                    opacity: accentColor === "inherit" ? 0.85 : 1,
                  }}
                >
                  {slide.headlineAccent}
                </em>
              </>
            )}
          </h2>

          {slide.body && (
            <p
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontStyle: "italic",
                fontSize: 32,
                lineHeight: 1.5,
                color: fg,
                opacity: 0.75,
                maxWidth: 800,
                margin: 0,
              }}
            >
              {slide.body}
            </p>
          )}

          {slide.cta && (
            <div
              style={{
                marginTop: 48,
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background:
                  slide.background === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(58,58,58,0.08)",
                borderRadius: 9999,
                padding: "16px 32px",
                fontFamily: "var(--font-host-grotesk)",
                fontWeight: 700,
                fontSize: 22,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: fg,
                alignSelf: "flex-start",
              }}
            >
              {slide.cta}
            </div>
          )}
        </div>

        {/* Bottom row: URL watermark */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 16,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.35,
              color: fg,
            }}
          >
            abiemaxey.com
          </span>
        </div>

        {/* Sticker */}
        {slide.sticker && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/assets/stickers/${slide.sticker}.png`}
            alt=""
            style={{
              position: "absolute",
              bottom: 72,
              right: 72,
              width: 240,
              height: 240,
              objectFit: "contain",
              transform: "rotate(8deg)",
            }}
          />
        )}
      </div>
    </div>
  );
}
