interface ImageCardProps {
  pill: string;
  index: string;
  readTime: string;
  title: string;
  titleAccent?: string;
  excerpt: string;
  gradient?: string;
}

export default function ImageCard({
  pill,
  index,
  readTime,
  title,
  titleAccent,
  excerpt,
  gradient = "radial-gradient(circle at 30% 20%, #a89282, #2a1f1a 80%)",
}: ImageCardProps) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 280,
        borderRadius: "var(--r-xl)",
        background: gradient,
      }}
    >
      {/* gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* top row */}
      <div className="absolute top-[18px] left-[18px] right-[18px] flex justify-between items-start">
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "var(--r-full)",
            padding: "5px 12px",
            fontFamily: "var(--font-geist-mono)",
            fontSize: 8,
            textTransform: "uppercase",
            letterSpacing: "var(--tr-mono)",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          {pill}
        </span>
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 9,
            letterSpacing: "var(--tr-mono)",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          {index}
        </span>
      </div>

      {/* bottom body */}
      <div className="absolute bottom-[18px] left-[22px] right-[22px]">
        <p
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 9,
            letterSpacing: "var(--tr-mono)",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginBottom: 8,
          }}
        >
          {readTime}
        </p>
        <h3
          className="headline-brand"
          style={{ fontSize: 24, color: "white", marginBottom: 12 }}
        >
          {title}
          {titleAccent && (
            <>
              {" "}
              <em style={{ color: "rgba(255,255,255,0.85)" }}>{titleAccent}</em>
            </>
          )}
        </h3>
        <p
          className="text-serif"
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.6)",
            margin: 0,
          }}
        >
          {excerpt}
        </p>
      </div>
    </div>
  );
}
