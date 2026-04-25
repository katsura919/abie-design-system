interface PlaybookCardProps {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  meta: { icon: string; label: string }[];
}

export default function PlaybookCard({
  emoji,
  title,
  subtitle,
  description,
  meta,
}: PlaybookCardProps) {
  return (
    <div className="card-tinted cursor-pointer" style={{ borderRadius: "var(--r-xl)" }}>
      <div style={{ fontSize: 32, marginBottom: 20 }}>{emoji}</div>
      <h3
        className="headline-brand"
        style={{ fontSize: 22, marginBottom: 6 }}
      >
        {title}
      </h3>
      <p
        className="text-serif"
        style={{
          fontSize: "var(--t-body-sm)",
          color: "var(--muted-foreground)",
          marginBottom: 14,
        }}
      >
        {subtitle}
      </p>
      <p
        className="text-serif"
        style={{
          fontSize: "var(--t-body-sm)",
          lineHeight: "var(--lh-body)",
          color: "var(--muted-foreground)",
          marginBottom: 24,
        }}
      >
        {description}
      </p>
      <div className="flex flex-wrap gap-4">
        {meta.map((m) => (
          <span
            key={m.label}
            className="flex items-center gap-1 label-mono"
            style={{ color: "var(--muted-foreground)" }}
          >
            {m.icon} {m.label}
          </span>
        ))}
      </div>
    </div>
  );
}
