interface HeroCardProps {
  icon: string;
  title: string;
  tag?: string;
  description: string;
}

export default function HeroCard({ icon, title, tag, description }: HeroCardProps) {
  return (
    <div
      className="flex items-center gap-5"
      style={{
        background: "var(--foreground)",
        color: "var(--background)",
        borderRadius: "var(--r-xl)",
        padding: "var(--s-8)",
      }}
    >
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          width: 56,
          height: 56,
          background: "rgba(249,245,242,0.1)",
          borderRadius: 14,
          fontSize: 22,
        }}
      >
        {icon}
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span
            style={{
              fontFamily: "var(--font-host-grotesk)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "var(--tr-widest)",
              fontSize: 12,
            }}
          >
            {title}
          </span>
          {tag && (
            <span
              style={{
                background: "rgba(227,169,156,0.2)",
                color: "var(--primary)",
                borderRadius: "var(--r-full)",
                padding: "2px 8px",
                fontFamily: "var(--font-geist-mono)",
                fontSize: 8,
                textTransform: "uppercase",
                letterSpacing: "var(--tr-mono)",
              }}
            >
              {tag}
            </span>
          )}
        </div>
        <p
          className="text-serif"
          style={{
            fontSize: 13,
            color: "rgba(249,245,242,0.55)",
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>

      <span
        style={{
          fontFamily: "var(--font-geist-mono)",
          color: "rgba(249,245,242,0.3)",
          fontSize: 14,
          flexShrink: 0,
        }}
      >
        →
      </span>
    </div>
  );
}
