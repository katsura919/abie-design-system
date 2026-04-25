"use client";

import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

export default function TabView({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <nav className="flex gap-1 mb-12 border-b border-border pb-0">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            className="relative px-5 py-3 label-mono transition-colors"
            style={{
              color: active === i ? "var(--foreground)" : "var(--muted-foreground)",
            }}
          >
            {tab.label}
            {active === i && (
              <span
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "var(--primary)" }}
              />
            )}
          </button>
        ))}
      </nav>
      <div>{tabs[active].content}</div>
    </div>
  );
}
