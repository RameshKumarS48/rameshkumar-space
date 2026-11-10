export interface ProductMeta {
  name: string;
  description: string;
  status?: "live" | "beta" | "wip";
  emoji?: string;
  externalUrl?: string;
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
  pulp: {
    name: "Pulp",
    description: "28 free document tools — merge, split, compress, convert, sign, and protect PDFs, Word, Excel, and PowerPoint files. No login. No watermark. No catch.",
    status: "live",
    emoji: "📄",
  },
  aiagentautomation: {
    name: "AI Agent Automation",
    description: "The most comprehensive AI agents directory — 2,800+ tools across 310 categories, curated weekly. Find the right agent for any workflow.",
    status: "live",
    emoji: "🤖",
    externalUrl: "https://aiagentautomation.site",
  },
  resumetailor: {
    name: "ResumeTailor",
    description: "Chrome extension that tailors your resume to any job description in seconds — match keywords, reframe experience, and get past ATS filters.",
    status: "beta",
    emoji: "📝",
    externalUrl: "https://resumetailor.xyz",
  },
  daemons: {
    name: "Daemons",
    description: "8 autonomous AI agents running a social network with no human input. They argue, agree, and go off-script — 24/7, on trending topics.",
    status: "live",
    emoji: "👁️",
  },
  pulse: {
    name: "Pulse",
    description: "AI-powered Virtual DJ. Type a vibe — Pulse beat-matches, EQs, and crossfades the perfect mix in real time.",
    status: "live",
    emoji: "🎧",
  },
  scenes: {
    name: "Ambient Worlds",
    description: "Drop into a rainy bedroom, a night train, or a cozy café. Interactive ambient scenes with sound. Share a link and someone else joins your world.",
    status: "live",
    emoji: "🪟",
  },
  bloom: {
    name: "Bloom",
    description: "Draw with your mouse or finger. Watch every stroke bloom into symmetrical kaleidoscope art. Ink, dot, or neon — save your creation.",
    status: "live",
    emoji: "🌸",
  },
  binge: {
    name: "Watch Tonight",
    description: "Answer 8 quick questions and get 5 perfect movie or show picks for tonight. Powered by real streaming data — no endless scrolling, just instant recommendations with a bit of attitude.",
    status: "live",
    emoji: "🎬",
  },
  duel: {
    name: "Khemet Chess",
    description: "Cinematic 3D chess inside an ancient Egyptian temple. Command god-statues, witness divine captures, and rule the obsidian board. Solo or multiplayer.",
    status: "live",
    emoji: "♟️",
  },
quidditch: {
    name: "Quidditch Rush",
    description: "Dodge Bludgers, catch the Golden Snitch, and outfly your rivals above Hogwarts. A frantic flappy arcade that never lets you breathe.",
    status: "live",
    emoji: "🧹",
  },
  settle: {
    name: "Settle",
    description: "Type a sentence. Settle splits the bill perfectly. The smart Splitwise alternative for friends, trips, and roommates — no math, no awkward reminders.",
    status: "live",
    emoji: "💸",
  },
  signal: {
    name: "Signal",
    description: "AI agents that hold opinions, argue about real news, and post takes 24/7 with zero human input. An autonomous social network built on live internet context.",
    status: "live",
    emoji: "📡",
  },
  spy: {
    name: "CompetitorWatch AI",
    description: "Monitor any competitor's website, pricing, or product launches. Get AI-generated impact analysis the moment something changes — before your team notices.",
    status: "live",
    emoji: "🕵️",
  },
  sync: {
    name: "Sync",
    description: "A real-time hand coordination test. Left hand, right hand — control two worlds at once. A futuristic brain-training arcade with global leaderboards.",
    status: "live",
    emoji: "🎮",
  },
  tanks: {
    name: "Blast Buds",
    description: "Turn-based artillery duels with fully destructible terrain, wild power-ups, and stunning biomes. Pick your angle, adjust the power, blow up your friends.",
    status: "live",
    emoji: "💥",
  },
  trackr: {
    name: "Trackr",
    description: "Log meals and workouts, track streaks, and see your progress charts over time. A clean fitness and nutrition diary — no ads, no subscriptions, no nonsense.",
    status: "live",
    emoji: "💪",
  },
  tune: {
    name: "Typatone",
    description: "Every keystroke plays a note. Type anything and turn it into spontaneous ambient music. Your thoughts have never sounded this good.",
    status: "live",
    emoji: "🎵",
  },
  untetris: {
    name: "Reverse Tetris",
    description: "Everyone stacks blocks up. You clear them down. Undo the chaos before the tower collapses in this satisfying, brain-bending Tetris twist.",
    status: "live",
    emoji: "🕹️",
  },
  wordscapes: {
    name: "Wordscapes",
    description: "Turn any text into stunning typographic art. 10 procedural styles — neon glow, marble, circuit boards, cosmic dust. Design in seconds, download instantly.",
    status: "live",
    emoji: "✍️",
  },
};
