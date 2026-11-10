// Live products I'm actively building right now. Shown in the homepage
// "In progress" section and kept out of the "Things I've shipped" grid.
export interface InProgressProject {
  key: string;            // matches a products.ts key if it's also listed there
  name: string;
  url: string;
  what: string;           // one line: what it is
  now: string;            // one line: what I'm doing on it right now
  tags: string[];
}

export const inProgress: InProgressProject[] = [
  {
    key: "aiagentautomation",
    name: "AI Agent Automation",
    url: "https://aiagentautomation.site",
    what: "A directory of 2,800+ AI agents across 310 categories, curated weekly, so you can find the right agent for any workflow.",
    now: "Growing organic search traffic, one phase at a time: indexing, SEO and new comparison pages.",
    tags: ["Directory", "SEO", "AI agents"],
  },
  {
    key: "mailhound",
    name: "Mailhound",
    url: "https://mailhound.xyz",
    what: "Email verification that runs seven checks on every address and gives a real verdict (deliverable, risky or do-not-send) with the reason in plain language.",
    now: "Built from what I learned running cold outreach at scale. Half the price of ZeroBounce, and credits never expire.",
    tags: ["B2B SaaS", "Email deliverability"],
  },
];
