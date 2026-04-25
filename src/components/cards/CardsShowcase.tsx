import PlaybookCard from "./PlaybookCard";
import ImageCard from "./ImageCard";
import HeroCard from "./HeroCard";
import VentureList from "./VentureList";
import StickersSection from "./StickersSection";

const SectionLabel = ({ label }: { label: string }) => (
  <p
    className="label-mono mb-3"
    style={{ color: "var(--muted-foreground)", marginTop: 36 }}
  >
    {label}
  </p>
);

export default function CardsShowcase() {
  return (
    <div className="max-w-[1100px]">
      {/* Header */}
      <p className="label-mono mb-3" style={{ color: "var(--muted-foreground)" }}>
        04.3 ~ Cards
      </p>
      <h1
        className="headline-brand"
        style={{ fontSize: "clamp(48px, 6vw, 72px)", marginBottom: 12 }}
      >
        Borders, <em>not</em>
        <br />
        shadows.
      </h1>
      <p
        className="text-serif mb-12"
        style={{ fontSize: 18, color: "var(--muted-foreground)", maxWidth: 600 }}
      >
        Five card types do almost everything on the site. Surfaces differ via
        background and border, never by elevation.
      </p>

      {/* Tinted playbook cards */}
      <SectionLabel label="~ Tinted playbook cards (primary/5 fill)" />
      <div className="grid grid-cols-2 gap-5 mb-4">
        <PlaybookCard
          emoji="⚡"
          title="Master Claude"
          subtitle="From first prompt to production agent."
          description="CLAUDE.md files, hooks, skills, MCP servers, tool use, streaming, and multi-agent architecture."
          meta={[
            { icon: "📖", label: "15 Lessons" },
            { icon: "📚", label: "5 Phases" },
            { icon: "⏱", label: "~4.5 hrs" },
          ]}
        />
        <PlaybookCard
          emoji="⚙️"
          title="The Nomad OS"
          subtitle="Build the operating system for your life abroad."
          description="From visa chaos to a running command center. The full architecture of a life that actually works."
          meta={[
            { icon: "📖", label: "12 Lessons" },
            { icon: "📚", label: "4 Phases" },
            { icon: "⏱", label: "~3 hrs" },
          ]}
        />
      </div>

      {/* Image cards */}
      <SectionLabel label="~ Image cards with gradient overlay (blog hero pattern)" />
      <div className="grid grid-cols-2 gap-5 mb-4">
        <ImageCard
          pill="~ Visa"
          index="01"
          readTime="~ 8 min read"
          title="Reverse"
          titleAccent="geo-arbitrage"
          excerpt="Why I moved to the most expensive continents. The numbers, the playbook, the cheap-thinking trap."
        />
        <ImageCard
          pill="~ Systems"
          index="02"
          readTime="~ 12 min read"
          title="The"
          titleAccent="spreadsheet that ran my year"
          excerpt="My runway, my visa timer, my client load. One Coda doc, four years."
          gradient="radial-gradient(circle at 70% 30%, #7a98a8, #1a2530 80%)"
        />
      </div>

      {/* Dark hero card */}
      <SectionLabel label="~ Dark featured row (dropdown headers, promo blocks)" />
      <div className="mb-4">
        <HeroCard
          icon="⚡"
          title="Master Claude"
          tag="Featured"
          description="From first prompt to production agent. The complete system."
        />
      </div>

      {/* Venture list */}
      <SectionLabel label="~ Divide-y venture list (no card chrome, just rules)" />
      <VentureList
        ventures={[
          {
            dot: "#ec4899",
            name: "Abie Maxey",
            tag: "Content & Brand",
            description:
              "Real stories from a nomad building businesses abroad. Playbooks, tools, and systems ~ built from experience, not theory.",
            arrow: "→",
          },
          {
            dot: "#0ea5e9",
            name: "HappyVoyager",
            tag: "DNV Consulting ~ Spain",
            description:
              "Digital Nomad Visa playbooks and beyond ~ built because I went through the process myself.",
            arrow: "↗",
          },
          {
            dot: "#10b981",
            name: "TalentMucho",
            tag: "Talent Agency ~ Global",
            description:
              "AI-trained Filipino talents matched to remote-first founders. Async, distributed, output-driven.",
            arrow: "↗",
          },
        ]}
      />

      {/* Stickers */}
      <div className="mt-16">
        <StickersSection />
      </div>
    </div>
  );
}
