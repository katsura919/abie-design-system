interface Venture {
  dot: string;
  name: string;
  tag: string;
  description: string;
  arrow?: "→" | "↗";
}

interface VentureListProps {
  ventures: Venture[];
}

export default function VentureList({ ventures }: VentureListProps) {
  return (
    <div
      className="card-brand"
      style={{ padding: "8px 28px", borderRadius: "var(--r-xl)" }}
    >
      {ventures.map((v, i) => (
        <div
          key={v.name}
          className="flex items-start gap-4"
          style={{
            padding: "18px 0",
            borderBottom:
              i < ventures.length - 1 ? "1px solid var(--border)" : "none",
          }}
        >
          <span
            className="shrink-0"
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: v.dot,
              marginTop: 8,
              display: "block",
            }}
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span
                style={{
                  fontFamily: "var(--font-host-grotesk)",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "var(--foreground)",
                }}
              >
                {v.name}
              </span>
              <span
                className="label-mono"
                style={{ color: "rgba(58,58,58,0.4)", fontSize: 8 }}
              >
                {v.tag}
              </span>
            </div>
            <p
              className="text-serif"
              style={{
                fontSize: 13,
                lineHeight: "var(--lh-body)",
                color: "var(--muted-foreground)",
                margin: 0,
              }}
            >
              {v.description}
            </p>
          </div>
          <span
            className="shrink-0 label-mono"
            style={{ color: "rgba(58,58,58,0.25)", marginTop: 6 }}
          >
            {v.arrow ?? "→"}
          </span>
        </div>
      ))}
    </div>
  );
}
