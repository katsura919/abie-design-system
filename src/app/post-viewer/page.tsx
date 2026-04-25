"use client";

import { toBlob } from "html-to-image";
import JSZip from "jszip";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { WORKS, type Work } from "@/components/works";

type ViewMode = "all" | "carousel";

type SidebarProps = {
  posts: Work[];
  selected: number;
  onSelect: (index: number) => void;
};

type ViewerProps = {
  posts: Work[];
  selected: number;
};

type TopBarProps = {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  work: Work;
  onDownloadImages: () => Promise<void>;
  onDownloadZip: () => Promise<void>;
  isExportingImages: boolean;
  isExportingZip: boolean;
};

function Sidebar({ posts, selected, onSelect }: SidebarProps) {
  return (
    <aside
      style={{
        width: 290,
        borderRight: "1px solid var(--border)",
        background: "#f8f5f2",
        padding: 16,
        boxSizing: "border-box",
        minHeight: "100vh",
      }}
    >
      <p
        className="label-mono"
        style={{ color: "var(--muted-foreground)", marginBottom: 8 }}
      >
        Posts
      </p>
      <div style={{ minHeight: 0, overflowY: "auto", paddingRight: 4 }}>
        {posts.map((post, i) => (
          <button
            key={post.id}
            onClick={() => onSelect(i)}
            style={{
              width: "100%",
              border: "1px solid",
              borderColor: selected === i ? "var(--primary)" : "var(--border)",
              borderRadius: 10,
              padding: 10,
              marginBottom: 8,
              textAlign: "left",
              cursor: "pointer",
              background:
                selected === i ? "rgba(227,169,156,0.17)" : "var(--card)",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700 }}>{post.title}</div>
            <div
              className="label-mono"
              style={{
                color: "var(--muted-foreground)",
                marginTop: 4,
                fontSize: 10,
              }}
            >
              {post.topic} ~ {post.slideCount} slides
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}

function TopBar({
  mode,
  setMode,
  work,
  onDownloadImages,
  onDownloadZip,
  isExportingImages,
  isExportingZip,
}: TopBarProps) {
  return (
    <header
      style={{
        height: 64,
        borderBottom: "1px solid var(--border)",
        background: "rgba(249,245,242,0.9)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        padding: "0 18px",
        position: "sticky",
        top: 0,
        zIndex: 30,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <h2
          style={{
            margin: 0,
            fontSize: 16,
            lineHeight: 1,
            fontWeight: 800,
          }}
        >
          {work.title}
        </h2>

        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setMode("all")}
            style={{
              border: "1px solid var(--border)",
              borderRadius: 10,
              padding: "7px 11px",
              cursor: "pointer",
              fontWeight: 700,
              background: mode === "all" ? "var(--foreground)" : "var(--card)",
              color: mode === "all" ? "var(--background)" : "var(--foreground)",
            }}
          >
            Preview: All Slides
          </button>
          <button
            onClick={() => setMode("carousel")}
            style={{
              border: "1px solid var(--border)",
              borderRadius: 10,
              padding: "7px 11px",
              cursor: "pointer",
              fontWeight: 700,
              background:
                mode === "carousel" ? "var(--foreground)" : "var(--card)",
              color:
                mode === "carousel" ? "var(--background)" : "var(--foreground)",
            }}
          >
            Preview: Carousel
          </button>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={onDownloadImages}
          disabled={isExportingImages || isExportingZip}
          style={{
            border: "1px solid var(--border)",
            borderRadius: 10,
            padding: "7px 11px",
            cursor:
              isExportingImages || isExportingZip ? "not-allowed" : "pointer",
            fontWeight: 700,
            background:
              isExportingImages || isExportingZip
                ? "var(--secondary)"
                : "var(--card)",
            color:
              isExportingImages || isExportingZip
                ? "var(--muted-foreground)"
                : "var(--foreground)",
          }}
        >
          {isExportingImages ? "Exporting..." : "Download Images"}
        </button>

        <button
          onClick={onDownloadZip}
          disabled={isExportingImages || isExportingZip}
          style={{
            border: "1px solid var(--border)",
            borderRadius: 10,
            padding: "7px 11px",
            cursor:
              isExportingImages || isExportingZip ? "not-allowed" : "pointer",
            fontWeight: 700,
            background:
              isExportingImages || isExportingZip
                ? "var(--secondary)"
                : "var(--foreground)",
            color:
              isExportingImages || isExportingZip
                ? "var(--muted-foreground)"
                : "var(--background)",
          }}
        >
          {isExportingZip ? "Building ZIP..." : "Download ZIP"}
        </button>
      </div>
    </header>
  );
}

function AllSlidesView({ posts, selected }: ViewerProps) {
  const post = posts[selected];

  return (
    <div
      style={{
        flex: 1,
        minHeight: 0,
        padding: 20,
        background:
          "radial-gradient(circle at 12% 18%, #fff 0%, #f4f0ea 58%, #ebe5de 100%)",
      }}
    >
      <section
        style={{
          height: "100%",
          overflow: "auto",
          padding: "8px 12px 20px",
        }}
      >
        <post.AllSlides />
      </section>
    </div>
  );
}

function CarouselView({ posts, selected }: ViewerProps) {
  const post = posts[selected];

  return (
    <div
      style={{
        flex: 1,
        minHeight: 0,
        background:
          "radial-gradient(circle at 20% 20%, #fff 0%, #f4efe8 58%, #ebe5de 100%)",
        padding: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <main
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <post.Component />
      </main>
    </div>
  );
}

function triggerDownload(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export default function PostViewerPage() {
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<ViewMode>("all");
  const [selected, setSelected] = useState(0);
  const [isExportingImages, setIsExportingImages] = useState(false);
  const [isExportingZip, setIsExportingZip] = useState(false);
  const exportRootRef = useRef<HTMLDivElement | null>(null);
  const selectedWork = WORKS[selected];

  useEffect(() => {
    const postId = searchParams.get("post");
    const queryMode = searchParams.get("mode");

    if (queryMode === "all" || queryMode === "carousel") {
      setMode(queryMode);
    }

    // Backward compat: older links.
    if (queryMode === "focus") {
      setMode("all");
    }
    if (queryMode === "navigator") {
      setMode("carousel");
    }

    if (!postId) {
      return;
    }

    const index = WORKS.findIndex((work) => work.id === postId);
    if (index >= 0) {
      setSelected(index);
    }
  }, [searchParams]);

  const exportSlides = async () => {
    const root = exportRootRef.current;
    if (!root) {
      return [] as Blob[];
    }

    const nodes = Array.from(
      root.querySelectorAll<HTMLElement>("[data-export-slide='true']"),
    );

    const blobs: Blob[] = [];
    for (const node of nodes) {
      const blob = await toBlob(node, {
        cacheBust: true,
        pixelRatio: 2,
      });
      if (blob) {
        blobs.push(blob);
      }
    }

    return blobs;
  };

  const handleDownloadImages = async () => {
    setIsExportingImages(true);
    try {
      const blobs = await exportSlides();
      for (let i = 0; i < blobs.length; i += 1) {
        triggerDownload(
          blobs[i],
          `${selectedWork.id}-${String(i + 1).padStart(2, "0")}.png`,
        );
      }
    } finally {
      setIsExportingImages(false);
    }
  };

  const handleDownloadZip = async () => {
    setIsExportingZip(true);
    try {
      const blobs = await exportSlides();
      const zip = new JSZip();
      blobs.forEach((blob, i) => {
        zip.file(
          `${selectedWork.id}-${String(i + 1).padStart(2, "0")}.png`,
          blob,
        );
      });

      const zipBlob = await zip.generateAsync({ type: "blob" });
      triggerDownload(zipBlob, `${selectedWork.id}-slides.zip`);
    } finally {
      setIsExportingZip(false);
    }
  };

  return (
    <>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar posts={WORKS} selected={selected} onSelect={setSelected} />

        <div
          style={{
            flex: 1,
            minWidth: 0,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TopBar
            mode={mode}
            setMode={setMode}
            work={selectedWork}
            onDownloadImages={handleDownloadImages}
            onDownloadZip={handleDownloadZip}
            isExportingImages={isExportingImages}
            isExportingZip={isExportingZip}
          />

          <div style={{ flex: 1, minHeight: 0 }}>
            {mode === "all" ? (
              <AllSlidesView posts={WORKS} selected={selected} />
            ) : (
              <CarouselView posts={WORKS} selected={selected} />
            )}
          </div>
        </div>
      </div>

      <div
        ref={exportRootRef}
        aria-hidden
        style={{
          position: "fixed",
          left: -20000,
          top: 0,
          opacity: 0,
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        {selectedWork.Slides.map((SlideComponent, i) => (
          <div key={`${selectedWork.id}-${i}`} data-export-slide="true">
            <SlideComponent scale={1} />
          </div>
        ))}
      </div>
    </>
  );
}
