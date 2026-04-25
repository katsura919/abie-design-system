import TabView from "@/components/TabView";
import BrandGuidelines from "@/components/brand/BrandGuidelines";
import CardsShowcase from "@/components/cards/CardsShowcase";
import PostsGallery from "@/components/posts/PostsGallery";
import { WORKS } from "@/components/works";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      {/* Top nav */}
      <header
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "0 clamp(24px, 4vw, 64px)",
          display: "flex",
          alignItems: "center",
          height: 56,
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "rgba(249,245,242,0.85)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontFamily: "var(--font-host-grotesk)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              fontSize: 14,
            }}
          >
            Abie Maxey
          </span>
          <span style={{ color: "var(--primary)", fontSize: 14 }}>~</span>
          <span
            className="label-mono"
            style={{ color: "var(--muted-foreground)" }}
          >
            Social Post Studio
          </span>
          <a
            href="/post-viewer"
            style={{
              marginLeft: 24,
              fontSize: 13,
              color: "var(--primary)",
              textDecoration: "underline",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              cursor: "pointer",
            }}
          >
            Post Viewer ↗
          </a>
        </div>
      </header>

      {/* Main */}
      <main style={{ padding: "48px clamp(24px, 4vw, 64px)" }}>
        <TabView
          tabs={[
            {
              label: "Posts",
              content: (
                <div>
                  <div style={{ marginBottom: 32 }}>
                    <p
                      className="label-mono mb-2"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      ~ Your posts
                    </p>
                    <h1
                      className="headline-brand"
                      style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
                    >
                      {WORKS.length} posts <em>created</em>
                    </h1>
                  </div>
                  <PostsGallery posts={WORKS} interactionMode="viewer" />
                </div>
              ),
            },
            {
              label: "Brand Guidelines",
              content: <BrandGuidelines />,
            },
            {
              label: "Card Samples",
              content: <CardsShowcase />,
            },
          ]}
        />
      </main>
    </div>
  );
}
