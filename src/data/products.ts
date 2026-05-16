export interface ProductMeta {
  name: string;
  description: string;
  status?: "live" | "beta" | "wip";
  emoji?: string;
}

export const products: Record<string, ProductMeta> = {
  nebula: {
    name: "Orbit",
    description: "Your GitHub commits turned into cosmic prophecy. Enter your username and receive a horoscope written in your own terminal voice.",
    status: "live",
    emoji: "🔭",
  },
  unwrapped: {
    name: "Tab Wrapped",
    description: "A cinematic psychological profile of your browsing habits — built entirely from your exported bookmarks, 100% in your browser, zero uploads.",
    status: "live",
    emoji: "🧠",
  },
  baseline: {
    name: "Salary Compass",
    description: "Verified salary benchmarks for 50+ roles across 10 countries, sourced from H1B filings, BLS records, and Stack Overflow surveys. Free. Anonymous.",
    status: "live",
    emoji: "💰",
  },
  habit: {
    name: "Daily Grind",
    description: "A retro pixel browser game where every life goal is secretly blocked. Navigate modern life chaos. Suffer relatably.",
    status: "live",
    emoji: "🎮",
  },
  mirror: {
    name: "Meeting Mirror",
    description: "A dashboard that shows exactly how much of your week is meetings vs. deep work. See where your hours actually go.",
    status: "live",
    emoji: "📅",
  },
};
