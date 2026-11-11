// Per-company theme for writing pages and cards. Colours come from each company's
// own site CSS (blaze.money: --blaze-yellow / --blaze-ink; aspora.com: --color-aspora-purple etc.).
//   accent  = brand colour that's safe for text and lines on the light background
//   accent2 = secondary brand colour (hover on dark footer, soft fills)
//   fill    = solid brand fill for highlighted shapes; onFill = text/icon colour on top of it
//   tint    = very light brand wash (selection, soft panels)
export interface BrandTheme { accent: string; accent2: string; fill: string; onFill: string; tint: string; }

const DEFAULT: BrandTheme = { accent: "#4338CA", accent2: "#6366F1", fill: "#4338CA", onFill: "#FFFFFF", tint: "#ECECF8" };

export function themeVars(theme?: Partial<BrandTheme>): string {
  const t = { ...DEFAULT, ...theme };
  return `--accent:${t.accent};--accent2:${t.accent2};--brand-fill:${t.fill};--on-brand-fill:${t.onFill};--brand-tint:${t.tint};`;
}
