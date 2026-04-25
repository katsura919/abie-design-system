"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Work } from "@/components/works";

function PostThumbnail({ work, onClick }: { work: Work; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-left"
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: 220,
          height: 220,
          borderRadius: 18,
          overflow: "hidden",
          border: "2px solid transparent",
          transition: "border-color 200ms, transform 200ms",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "var(--primary)";
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "transparent";
          (e.currentTarget as HTMLDivElement).style.transform = "";
        }}
      >
        <work.Thumbnail />
      </div>

      <div style={{ marginTop: 10, width: 220 }}>
        <p
          className="label-mono"
          style={{ color: "var(--primary)", marginBottom: 3, fontSize: 9 }}
        >
          {work.topic} ~ {work.slideCount} slides
        </p>
        <p
          style={{
            fontFamily: "var(--font-host-grotesk)",
            fontWeight: 700,
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            color: "var(--foreground)",
            lineHeight: 1.2,
          }}
        >
          {work.title}
        </p>
        <p
          className="label-mono"
          style={{
            color: "var(--muted-foreground)",
            marginTop: 3,
            fontSize: 9,
          }}
        >
          {work.createdAt}
        </p>
      </div>
    </button>
  );
}

function PreviewModal({ work, onClose }: { work: Work; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(30,27,26,0.85)", backdropFilter: "blur(8px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="flex flex-col gap-6"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 26,
          padding: 32,
          maxWidth: 640,
          width: "100%",
        }}
      >
        {/* header */}
        <div className="flex justify-between items-start">
          <div>
            <p
              className="label-mono"
              style={{ color: "var(--primary)", marginBottom: 4 }}
            >
              {work.topic}
            </p>
            <h2
              style={{
                fontFamily: "var(--font-host-grotesk)",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
                fontSize: 20,
                lineHeight: 1,
                margin: 0,
              }}
            >
              {work.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="label-mono"
            style={{
              background: "var(--secondary)",
              border: "none",
              borderRadius: 9999,
              padding: "6px 14px",
              cursor: "pointer",
              color: "var(--muted-foreground)",
            }}
          >
            ESC ✕
          </button>
        </div>

        {/* post component (has its own carousel) */}
        <work.Component />
      </div>
    </div>
  );
}

type PostsGalleryProps = {
  posts: Work[];
  interactionMode?: "modal" | "viewer";
};

export default function PostsGallery({
  posts,
  interactionMode = "modal",
}: PostsGalleryProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<Work | null>(null);

  const handleSelect = (work: Work) => {
    if (interactionMode === "viewer") {
      router.push(
        `/post-viewer?post=${encodeURIComponent(work.id)}&mode=carousel`,
      );
      return;
    }

    setSelected(work);
  };

  return (
    <>
      <div className="flex flex-wrap gap-8">
        {posts.map((work) => (
          <PostThumbnail
            key={work.id}
            work={work}
            onClick={() => handleSelect(work)}
          />
        ))}

        {/* new post placeholder */}
        <button
          className="flex flex-col items-center justify-center gap-2.5 cursor-pointer transition-colors duration-200"
          style={{
            width: 220,
            height: 220,
            borderRadius: 18,
            border: "2px dashed var(--border)",
            background: "rgba(227,169,156,0.04)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "var(--primary)";
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(227,169,156,0.08)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "var(--border)";
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(227,169,156,0.04)";
          }}
        >
          <span
            style={{ fontSize: 28, opacity: 0.4, color: "var(--foreground)" }}
          >
            +
          </span>
          <span
            className="label-mono"
            style={{ color: "var(--muted-foreground)" }}
          >
            New Post
          </span>
        </button>
      </div>

      {interactionMode === "modal" && selected && (
        <PreviewModal work={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
