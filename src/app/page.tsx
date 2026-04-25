import TabView from "@/components/TabView";
import BrandGuidelines from "@/components/brand/BrandGuidelines";
import CardsShowcase from "@/components/cards/CardsShowcase";

export default function Home() {
  return (
    <div className="container-brand py-12">
      {/* Page header */}
      <header className="mb-10">
        <p className="label-mono mb-2" style={{ color: "var(--muted-foreground)" }}>
          ~ Social Post Studio
        </p>
        <h1
          className="headline-brand"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Abie Maxey <em>design system</em>
        </h1>
      </header>

      <TabView
        tabs={[
          { label: "Brand Guidelines", content: <BrandGuidelines /> },
          { label: "Card Samples", content: <CardsShowcase /> },
        ]}
      />
    </div>
  );
}
