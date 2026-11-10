---
title: "How I built the entire GTM automation engine for Blaze Money (YC W24)"
dek: "7 ICPs, 50,000+ leads, and one Claude-powered system that found, wrote, replied and reported. It booked calls with 4% of everyone we reached out to."
company: "Blaze Money"
companyUrl: "https://blaze.money"
role: "GTM automation, end to end"
date: 2026-11-11
readTime: "7 min read"
status: published
order: 1
visual: pipeline
tags: ["GTM", "Automation", "Claude", "Outbound", "Stablecoins"]
stats:
  - { value: "17%", label: "Best ICP reply rate" }
  - { value: "8%", label: "Avg reply rate, top 3 ICPs" }
  - { value: "4%", label: "Of all outreach booked a call" }
  - { value: "50K+", label: "Leads reached" }
steps:
  - "Define 7 ICPs"
  - "Pain points + positioning"
  - "Fetch leads: Clay + Apollo"
  - "Campaigns: Instantly + LinkedIn Helper"
  - "7-day personalised sequence"
  - "Claude handles replies"
  - "Daily dashboard → double down"
tldr:
  - "7 ICPs, 3,000 leads each, all run from one Claude-based system wired into Clay, Apollo, Instantly and LinkedIn Helper."
  - "Every email personalised over a 7-day sequence, with Claude writing the replies (human-checked for the first month)."
  - "Doubled down on the top 3 ICPs at 10,000 leads each: about 8% replied and about half of them booked a call."
---

## How I got here

Blaze.money is a YC W24 company. Today they're building an AI CFO for small and medium businesses, but when I joined, one of their biggest use cases was cross-border remittances on stablecoin rails.

I got the opportunity by reaching out to the CTO on LinkedIn. I told him how passionate I am about building stablecoin infrastructure for cross-border remittances, with the whole flow end to end. That's the experience I'd built up at companies like Aspora (previously Vance), another YC company that's now worth around $500 million.

The question in front of us was how to sell this. Very quickly, it became obvious that most customers didn't really care about the infra part. As long as they could send the money, they cared about two things:

- Am I getting good rates and good FX conversion?
- Is the turnaround time faster than anything else?

That was the main goal. So I started building the machine that would sell it.

<figure class="portrait">
<svg viewBox="0 0 900 1110" role="img" aria-labelledby="f1t f1d" xmlns="http://www.w3.org/2000/svg">
<title id="f1t">The Blaze GTM engine in 7 steps</title>
<desc id="f1d">1. Define the ICPs. 2. Pain points and positioning. 3. Fetch and enrich leads with Clay and Apollo, 3,000 per ICP. 4. Launch campaigns in Instantly and LinkedIn Helper. 5. A personalised 7-day sequence. 6. Claude handles replies. 7. Daily dashboard. Then loop back to step 3 with the top 3 ICPs at 10,000 leads each.</desc>
<style>
.f1-k{font-family:'JetBrains Mono',monospace;font-size:16px;letter-spacing:.14em;fill:#888898}
.f1-h{font-family:'Syne',sans-serif;font-size:34px;font-weight:800;fill:#0C0C18;letter-spacing:-.02em}
.f1-card{fill:#fff;stroke:#DFDFE8;stroke-width:2}
.f1-card.hl{stroke:#4338CA}
.f1-n{fill:#4338CA}
.f1-nt{font-family:'JetBrains Mono',monospace;font-size:22px;font-weight:500;fill:#fff;text-anchor:middle}
.f1-t{font-family:'Syne',sans-serif;font-size:29px;font-weight:800;fill:#0C0C18;letter-spacing:-.01em}
.f1-s{font-family:'Syne',sans-serif;font-size:22px;fill:#3A3A52}
.f1-c{stroke:#4338CA;stroke-width:3}
.f1-loop{fill:none;stroke:#4338CA;stroke-width:3;stroke-dasharray:8 8}
.f1-ll{font-family:'JetBrains Mono',monospace;font-size:17px;letter-spacing:.08em;fill:#4338CA;text-anchor:middle}
.f1-tag{font-family:'JetBrains Mono',monospace;font-size:14px;letter-spacing:.1em;fill:#4338CA}
</style>
<rect width="900" height="1110" fill="#F5F5F3"/>
<text x="40" y="54" class="f1-k">THE BLAZE GTM ENGINE</text>
<text x="40" y="104" class="f1-h">7 steps. One Claude system.</text>
<g transform="translate(0,140)">
<rect x="40" y="0" width="740" height="118" rx="8" class="f1-card"/><circle cx="98" cy="59" r="28" class="f1-n"/><text x="98" y="67" class="f1-nt">1</text>
<text x="150" y="50" class="f1-t">Define the ICPs</text><text x="150" y="88" class="f1-s">7 buckets: freelancers, aggregators, HVAC…</text>
</g>
<line x1="98" y1="258" x2="98" y2="274" class="f1-c"/>
<g transform="translate(0,274)">
<rect x="40" y="0" width="740" height="118" rx="8" class="f1-card"/><circle cx="98" cy="59" r="28" class="f1-n"/><text x="98" y="67" class="f1-nt">2</text>
<text x="150" y="50" class="f1-t">Pain points + positioning</text><text x="150" y="88" class="f1-s">What hurts, and how Blaze solves it</text>
</g>
<line x1="98" y1="392" x2="98" y2="408" class="f1-c"/>
<g transform="translate(0,408)">
<rect x="40" y="0" width="740" height="118" rx="8" class="f1-card hl"/><circle cx="98" cy="59" r="28" class="f1-n"/><text x="98" y="67" class="f1-nt">3</text>
<text x="150" y="50" class="f1-t">Fetch &amp; enrich leads</text><text x="150" y="88" class="f1-s">Clay + Apollo → 3,000 leads per ICP</text>
</g>
<line x1="98" y1="526" x2="98" y2="542" class="f1-c"/>
<g transform="translate(0,542)">
<rect x="40" y="0" width="740" height="118" rx="8" class="f1-card hl"/><circle cx="98" cy="59" r="28" class="f1-n"/><text x="98" y="67" class="f1-nt">4</text>
<text x="150" y="50" class="f1-t">Launch campaigns</text><text x="150" y="88" class="f1-s">Instantly for email, LinkedIn Helper</text>
</g>
<line x1="98" y1="660" x2="98" y2="676" class="f1-c"/>
<g transform="translate(0,676)">
<rect x="40" y="0" width="740" height="118" rx="8" class="f1-card hl"/><circle cx="98" cy="59" r="28" class="f1-n"/><text x="98" y="67" class="f1-nt">5</text>
<text x="150" y="50" class="f1-t">7-day sequence</text><text x="150" y="88" class="f1-s">Every email personalised, day 1 → day 7</text>
</g>
<line x1="98" y1="794" x2="98" y2="810" class="f1-c"/>
<g transform="translate(0,810)">
<rect x="40" y="0" width="740" height="118" rx="8" class="f1-card hl"/><circle cx="98" cy="59" r="28" class="f1-n"/><text x="98" y="67" class="f1-nt">6</text>
<text x="150" y="50" class="f1-t">Claude handles replies</text><text x="150" y="88" class="f1-s">Human-checked in month 1, automated after</text>
</g>
<line x1="98" y1="928" x2="98" y2="944" class="f1-c"/>
<g transform="translate(0,944)">
<rect x="40" y="0" width="740" height="118" rx="8" class="f1-card hl"/><circle cx="98" cy="59" r="28" class="f1-n"/><text x="98" y="67" class="f1-nt">7</text>
<text x="150" y="50" class="f1-t">Daily dashboard</text><text x="150" y="88" class="f1-s">Interested, maybe, or a clear no, per ICP</text>
</g>
<path d="M780 1003 H846 V467 H792" class="f1-loop"/>
<path d="M800 457 L782 467 L800 477" fill="none" stroke="#4338CA" stroke-width="3"/>
<text transform="translate(872,735) rotate(-90)" class="f1-ll">TOP 3 ICPs × 10,000</text>
<text x="780" y="1094" class="f1-tag" text-anchor="end">STEPS 3–7 RUN FROM ONE CLAUDE DASHBOARD</text>
</svg>
<figcaption>The whole engine. Steps 3 to 7 run from one Claude dashboard, and the loop is where we doubled down.</figcaption>
</figure>

## Step 1: Defining the ICPs

First, we identified the ideal customer profiles we wanted to reach. We took everyone who had used our product before, plus our whole target audience, and segmented them into 7 separate buckets. For example:

- Freelancers
- Payment aggregators
- Teachers
- HVAC and home service providers
- Chambers of Commerce (for partnerships)
- Digital nomads and international students sending money

…and a couple more.

For each ICP, we didn't stop at who they are. We also defined:

1. The exact problems that ICP is facing
2. How Blaze presents itself as the solution

That became the foundation for everything. The lead search, the emails and the replies were all built from these definitions.

For example, "freelancers" for us meant people who:

- make cross-border payments every month
- are based in the US and LatAm
- make a certain amount of money
- are in specific cities

## Step 2: Testing the waters on LinkedIn

Before going big, I spent a couple of weeks exploring LinkedIn Helper. It's a pretty cool tool for limited, controlled outreach. With their 15-day free trial, you can reach out to 50 different profiles, and it will:

- send them messages
- run follow-ups
- start liking their posts

LinkedIn Helper is smart enough to avoid LinkedIn's detection algorithm, which is actually pretty cool. I plugged in our ICPs and reached out to a bunch of people. Because it was so automated, we figured out a lot of stuff very quickly.

## Step 3: Building the engine on Claude

Now for the actual automation part. We built an entire Claude-based system where the ICP definitions, their pain points and how to present Blaze as the solution all live together.

Then we connected the tools:

- **Clay and Apollo**, two of the biggest lead enrichment tools, to fetch and enrich leads. Their API keys are plugged straight into the Claude system.
- **Instantly**, the email platform we used to put everything together into campaigns.
- **LinkedIn Helper** for LinkedIn.

So whenever I said, *"Hey, we want to start a campaign for freelancers,"* the system would take the freelancer definition, fetch matching leads from Apollo and Clay, and push them into Instantly as a new campaign. We started with 3,000 leads per ICP, so 7 campaigns and around 21,000 people.

## Step 4: A 7-day sequence where every email is personalised

Every single email was personalised, based on the lead enrichment for that specific person in that specific ICP.

The sequence ran for 7 days. You reach out on day 1, then follow up on day 2, day 3 and so on until day 7, when the cap ends, or until you get a response back.

As a lead got warmer over the campaign, the system would smartly add the right next step: a calendar link, my LinkedIn, and sometimes a WhatsApp number.

## Step 5: Claude handles the replies

The moment we received a response, Claude would create a personalised reply based on what the person actually said.

For the first month, we kept a manual check here. Every reply was verified before it went out. After a month of validation, we automated that too.

## Step 6: One dashboard instead of five tools

We built another Claude system on top of the replies. Every day, it gave us an analytics dashboard like this:

<div class="callout">
Out of the 7 ICPs, with 3,000 people each: <strong>X%</strong> replied today. Of those, <strong>A%</strong> are showing interest, <strong>B%</strong> could consider us with more information, and <strong>C%</strong> are a clear no or asked to unsubscribe.
</div>

Initially, we were thinking of getting a separate lead management system, but we eventually realised Claude could do a better job. So we built our own dashboard where everything can be done in one place. You don't even need to open Clay, Apollo or Instantly.

With basically one command, you can launch multiple campaigns for multiple ICPs at the same time, and get real-time analytics telling you:

- what's working
- what's not working
- what you should change
- what was wrong in the approach
- what was wrong in the reply we gave

## Step 7: Double down on what's working

After running this for a month, we had a good idea of which ICPs were more responsive and comparatively warmer towards what we were offering.

For us, it was payment aggregators and freelancers. When I say freelancers, I mean consultants working for foreign companies who expect to be paid from abroad but don't have a proper payment setup. They rely on products like Stripe or PayPal, which come with their own issues: higher FX fees and slower turnaround times. Blaze was solving both.

The difference in warm and cold response rates between the top 3 ICPs and the rest was significant. At the end of the day, it's a volume game. So we tripled our volume: over the next 2 months, we reached out to approximately 10,000 people for each of the top 3 ICPs and repeated the same process.

## What we were measuring

For the first 2 months, the end goal was simple: **calls booked**.

Once calls were booked, we looked at the bigger picture. Out of, say, 10 high-ticket and 5 medium-ticket sales, how many actually closed, and how much revenue were we making? Blaze is a B2B company and we were doing B2B sales, so that's what matters in the end.

## The results

We got a huge uptick in meetings booked. For certain aggregators, response rates got close to **17%**. Across the top 3 ICPs, it was around **8%**.

Out of the people who replied, we booked calls with about half. That's roughly **4% of all outreach**. Out of those calls, we closed almost 2%, and those were still large-ticket sales.

<figure class="portrait">
<svg viewBox="0 0 900 1010" role="img" aria-labelledby="f2t f2d" xmlns="http://www.w3.org/2000/svg">
<title id="f2t">Outreach volume and results</title>
<desc id="f2d">Month 1: 7 ICPs at 3,000 leads each, 21,000 total. Months 2 and 3: the top 3 ICPs at 10,000 leads each, 30,000 total. Across the top 3 ICPs, about 8% replied, about 4% of all outreach booked a call, and almost 2% of those calls closed. The best ICP, payment aggregators, reached a 17% reply rate.</desc>
<style>
.f2-k{font-family:'JetBrains Mono',monospace;font-size:16px;letter-spacing:.14em;fill:#888898}
.f2-h{font-family:'Syne',sans-serif;font-size:38px;font-weight:800;fill:#0C0C18;letter-spacing:-.02em}
.f2-a{fill:#4338CA}
.f2-b{fill:#B9B6EE}
.f2-base{stroke:#C2C2D8;stroke-width:2}
.f2-tot{font-family:'Syne',sans-serif;font-size:34px;font-weight:800;fill:#0C0C18;text-anchor:middle}
.f2-gl{font-family:'JetBrains Mono',monospace;font-size:17px;letter-spacing:.06em;fill:#3A3A52;text-anchor:middle}
.f2-num{font-family:'Syne',sans-serif;font-size:54px;font-weight:800;fill:#0C0C18}
.f2-ap{font-family:'JetBrains Mono',monospace;font-weight:400;font-size:40px;fill:#4338CA}
.f2-lab{font-family:'Syne',sans-serif;font-size:25px;fill:#3A3A52}
.f2-arr{stroke:#4338CA;stroke-width:3;fill:none}
.f2-call{fill:#fff;stroke:#4338CA;stroke-width:2}
.f2-ct{font-family:'Syne',sans-serif;font-size:24px;fill:#0C0C18}
</style>
<rect width="900" height="1010" fill="#F5F5F3"/>
<text x="40" y="54" class="f2-k">FROM TESTING TO VOLUME</text>
<text x="40" y="102" class="f2-h">Test wide, then go deep.</text>
<g>
<path d="M60 420 V346 a4 4 0 0 1 4-4 h42 a4 4 0 0 1 4 4 V420Z" class="f2-b"/>
<path d="M116 420 V346 a4 4 0 0 1 4-4 h42 a4 4 0 0 1 4 4 V420Z" class="f2-b"/>
<path d="M172 420 V346 a4 4 0 0 1 4-4 h42 a4 4 0 0 1 4 4 V420Z" class="f2-b"/>
<path d="M228 420 V346 a4 4 0 0 1 4-4 h42 a4 4 0 0 1 4 4 V420Z" class="f2-b"/>
<path d="M284 420 V346 a4 4 0 0 1 4-4 h42 a4 4 0 0 1 4 4 V420Z" class="f2-b"/>
<path d="M340 420 V346 a4 4 0 0 1 4-4 h42 a4 4 0 0 1 4 4 V420Z" class="f2-b"/>
<path d="M396 420 V346 a4 4 0 0 1 4-4 h42 a4 4 0 0 1 4 4 V420Z" class="f2-b"/>
<text x="253" y="318" class="f2-tot">21,000</text>
<text x="253" y="456" class="f2-gl">MONTH 1</text>
<text x="253" y="482" class="f2-gl">7 ICPs × 3,000</text>
</g>
<g>
<path d="M540 420 V184 a4 4 0 0 1 4-4 h82 a4 4 0 0 1 4 4 V420Z" class="f2-a"/>
<path d="M640 420 V184 a4 4 0 0 1 4-4 h82 a4 4 0 0 1 4 4 V420Z" class="f2-a"/>
<path d="M740 420 V184 a4 4 0 0 1 4-4 h82 a4 4 0 0 1 4 4 V420Z" class="f2-a"/>
<text x="685" y="158" class="f2-tot">30,000</text>
<text x="685" y="456" class="f2-gl">MONTHS 2–3</text>
<text x="685" y="482" class="f2-gl">Top 3 ICPs × 10,000</text>
</g>
<line x1="40" y1="420" x2="860" y2="420" class="f2-base"/>
<text x="40" y="566" class="f2-k">WHAT CAME BACK · TOP 3 ICPs</text>
<text x="40" y="640" class="f2-num"><tspan class="f2-ap">≈</tspan>8%</text><text x="250" y="632" class="f2-lab">replied</text>
<path d="M80 664 V684 M72 676 L80 686 L88 676" class="f2-arr"/>
<text x="40" y="742" class="f2-num"><tspan class="f2-ap">≈</tspan>4%</text><text x="250" y="734" class="f2-lab">of all outreach booked a call</text>
<path d="M80 766 V786 M72 778 L80 788 L88 778" class="f2-arr"/>
<text x="40" y="844" class="f2-num"><tspan class="f2-ap">≈</tspan>2%</text><text x="250" y="836" class="f2-lab">of those calls closed, large-ticket deals</text>
<rect x="40" y="890" width="820" height="80" rx="8" class="f2-call"/>
<text x="68" y="940" class="f2-ct"><tspan font-weight="800">17%</tspan> reply rate from payment aggregators, the best ICP</text>
</svg>
<figcaption>Month 1 told us where to go. Months 2 and 3 were about volume.</figcaption>
</figure>

## The whole point

The goal was to build an end-to-end automation that combines all these third-party tools (Clay and Apollo for leads, LinkedIn Helper and Instantly for outreach) into one smart system that does the work and tells you how it's going. That's what we built.
