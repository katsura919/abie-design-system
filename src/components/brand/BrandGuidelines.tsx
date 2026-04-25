import ColorPalette from "./ColorPalette";
import TypographySection from "./TypographySection";
import BadgesPills from "./BadgesPills";
import ButtonsSection from "./ButtonsSection";

function Divider() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: "1px dashed var(--border)",
        margin: "64px 0",
      }}
    />
  );
}

export default function BrandGuidelines() {
  return (
    <div className="max-w-[1100px]">
      {/* Intro */}
      <div className="mb-16">
        <p className="label-mono mb-3" style={{ color: "var(--muted-foreground)" }}>
          00 ~ The Brand
        </p>
        <h1
          className="headline-brand mb-4"
          style={{ fontSize: "clamp(48px, 6vw, 72px)" }}
        >
          Smart, <em>honest,</em>
          <br />
          systems-first.
        </h1>
        <p
          className="text-serif"
          style={{ fontSize: 18, color: "var(--muted-foreground)", maxWidth: 600 }}
        >
          Personal brand OS for Abie Maxey ~ Filipina operator, builder, digital
          nomad. Building from Madrid. Three businesses, one suitcase.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-10">
          {[
            { num: "~ Voice", title: "Receipts, not promises.", desc: '"I went through it; here\'s what broke." Specific, lived, unmotivational.' },
            { num: "~ Punctuation", title: "Tilde, never em-dash.", desc: "The ~ is the brand's signature mark. It reads as breath, not interruption." },
            { num: "~ Structure", title: "Numbered sections.", desc: "Two-digit, zero-padded, italic-serif. 01 ~ Who I Am. The system shows." },
          ].map((card) => (
            <div
              key={card.num}
              className="card-brand"
              style={{ borderRadius: "var(--r-xl)", padding: "28px 28px 24px" }}
            >
              <span className="text-serif" style={{ fontSize: 13, color: "var(--primary)" }}>
                {card.num}
              </span>
              <h3
                className="headline-brand mt-2 mb-2"
                style={{ fontSize: 18 }}
              >
                {card.title}
              </h3>
              <p
                className="text-serif"
                style={{ fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.5 }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Divider />
      <ColorPalette />

      <Divider />
      <TypographySection />

      <Divider />
      <BadgesPills />

      <Divider />
      <ButtonsSection />
    </div>
  );
}
