---
title: "How we built stablecoin remittance rails at Aspora"
dek: "Back when Aspora was Vance: UK to India over USDC and USDT, a 7% stablecoin premium, fully compliant rails built around it, and $1M in monthly gross profit."
company: "Aspora"
companyUrl: "https://aspora.com"
brand:
  logo: "/writing/brand/aspora.png"
  width: 104
  color: "#5523B2"
  blurb: "Formerly Vance. Cross-border remittances to India."
role: "Early team · Stablecoin (VDA) rails"
date: 2026-11-11
readTime: "6 min read"
status: published
order: 2
visual: ledger
tags: ["Stablecoins", "Remittances", "Payments", "Compliance"]
stats:
  - { value: "$1M", label: "Monthly gross profit, VDA rails (UK)" }
  - { value: "$25K", label: "Gross profit in month 1" }
  - { value: "2.5%", label: "Our cut of a 7% gross spread" }
  - { value: "$600M", label: "Already moved on traditional rails" }
steps:
  - "Understand the traditional rails (Truelayer + Thunes)"
  - "Spot the stablecoin premium: ≈ $1.00 vs ≈ $1.07"
  - "On-ramp partners in the UK and UAE"
  - "Off-ramp partners in India"
  - "Compliance + white-label SDKs"
  - "NDAs, pricing, API integrations"
  - "Watch every transaction"
tldr:
  - "Vance was already moving $15–20M a month from the UK and UAE to India on traditional banking rails."
  - "Stablecoins cost about $1.00 in the UK but sell for about $1.07 in India, so we built fully compliant VDA rails to use that premium."
  - "First month: $25K gross profit. By the latest month: $1M gross profit, just from UK remittances."
---

## Some context first

Before Aspora was Aspora, it was Vance. I was part of the early team there, working on remittances.

Vance was a neobank for Non-Resident Indians (NRIs). Remittance was the major thing we were solving for: NRIs in the United Kingdom and the United Arab Emirates sending money back home to India.

## How it worked on traditional rails

We partnered with a payment collection partner, **Truelayer**, and a remittance partner, **Thunes**. The flow looked like this:

1. The user signs up on our mobile app.
2. They do their KYC verification.
3. They connect their bank account: GBP for NRIs in the UK, AED for NRIs in the UAE.
4. In the UK, Truelayer collects the payment and stores the money in Thunes' bank account in the UK.

Now, Thunes had a bank account in both the UK and India. Every time the UK account received money, say £1,000, along with the details of the customer sending it and the beneficiary receiving it, an API call was sent to the Thunes bank account in India.

Here's the interesting part. The money doesn't actually travel between the UK and Indian banks, because the same entity owns both accounts. Once the API call lands, the information is reconciled, the amount is converted to INR at a rate that changes dynamically (based on the agreement between Thunes and Vance), and it's finally transferred to the beneficiary's bank account. Then we let the customer know the money has been deposited.

And we were doing good volume on it: **$600 million to date**, about **$15–20 million a month** across both countries, growing **25–30% month on month**.

## Cut to April: the stablecoin premium

In April, we noticed something interesting going on with the well-known arbitrage trade in crypto.

In developed (web3-wise) markets like the US and UK, buying a dollar-backed stablecoin like USDC or USDT costs almost exactly 1 USD. But if you sell that same stablecoin in India, it goes for about **1.07 USD**. There's a premium on it, because of a supply–demand mismatch.

We'd already built on traditional rails, we were processing significant volume, and our customer base was growing really fast. So we built **fully compliant virtual digital asset (VDA) rails** on top of it.

## How did we do it?

### 1. On-ramp partners in the UK and UAE

We found on-ramp partners in both of our operating countries who could work with our existing (semi-traditional) banking rails. Their job: buy the crypto for our individual, KYC'd customers.

Vance would make sure the money from the user reached the on-ramp partner through Truelayer. The partner would then convert it (GBP to USDC/USDT) and store it in internal or external non-custodial hot wallets. Fully legal, and at a percentage cut that worked for both sides.

### 2. Off-ramp partners in India

On the other side, we found off-ramp partners in India who could take that crypto, either from the external hot wallets or into wallets of their own, and convert it to INR.

Then, based on the transaction hash, they'd send the converted amount to the beneficiary account details attached to that hash.

### 3. Compliance first, and no break in the Vance experience

We worked with both companies to build the entire pipeline, starting from the law and compliance side of things and the possible repercussions.

We also didn't want our customers to step outside the native Vance experience. So we had to make sure both partners had white-label, or near white-label, SDK and API solutions available.

### 4. NDAs, pricing, integrations, and a lot of edge cases

Once we'd signed the NDAs and agreed on pricing, their teams shared the APIs, we did quick integrations and finalised the flows.

Then a lot of unusual use cases turned up that we weren't prepared for. So we kept a close eye on every single transaction, and any discrepancy or error was communicated to the on-ramp and off-ramp partners straight away.

<figure class="portrait">
<svg viewBox="0 0 900 1120" role="img" aria-labelledby="a1t a1d" xmlns="http://www.w3.org/2000/svg">
<title id="a1t">Traditional rails versus VDA rails</title>
<desc id="a1d">Both start with a customer in the UK or UAE paying in GBP or AED, and end with a beneficiary in India paid in INR. Traditional rails: Truelayer collects into Thunes' UK bank account, an API call goes to Thunes India with sender and beneficiary details, no money crosses because the same entity owns both accounts, and it is converted to INR at the agreed live rate. VDA rails: Truelayer collects and sends to the on-ramp partner, which buys USDC or USDT at about 1.00 dollar, holds it in a non-custodial hot wallet with a transaction hash, and an off-ramp partner in India sells it at about 1.07 dollars and pays out in INR.</desc>
<style>
.a1-k{font-family:'JetBrains Mono',monospace;font-size:16px;letter-spacing:.14em;fill:#888898}
.a1-h{font-family:'Syne',sans-serif;font-size:36px;font-weight:800;fill:#0C0C18;letter-spacing:-.02em}
.a1-end{fill:#0C0C18}
.a1-et{font-family:'Syne',sans-serif;font-size:24px;font-weight:800;fill:#fff;text-anchor:middle}
.a1-es{font-family:'JetBrains Mono',monospace;font-size:15px;letter-spacing:.08em;fill:rgba(255,255,255,.65);text-anchor:middle}
.a1-lane{font-family:'JetBrains Mono',monospace;font-size:16px;letter-spacing:.14em}
.a1-box{fill:#fff;stroke:#DFDFE8;stroke-width:2}
.a1-box.v{stroke:#4338CA}
.a1-t{font-family:'Syne',sans-serif;font-size:21px;font-weight:800;fill:#0C0C18}
.a1-s{font-family:'Syne',sans-serif;font-size:19px;fill:#3A3A52}
.a1-c{stroke:#C2C2D8;stroke-width:3}
.a1-c.v{stroke:#4338CA}
</style>
<rect width="900" height="1120" fill="#F5F5F3"/>
<text x="40" y="54" class="a1-k">TWO WAYS TO SEND £1,000 HOME</text>
<text x="40" y="102" class="a1-h">Same app. Different rails.</text>
<rect x="40" y="140" width="820" height="90" rx="8" class="a1-end"/>
<text x="450" y="182" class="a1-et">Customer in the UK / UAE</text>
<text x="450" y="210" class="a1-es">PAYS IN GBP / AED</text>
<line x1="235" y1="270" x2="235" y2="300" class="a1-c"/><line x1="665" y1="270" x2="665" y2="300" class="a1-c v"/>
<text x="40" y="258" class="a1-lane" fill="#888898">TRADITIONAL RAILS</text>
<text x="470" y="258" class="a1-lane" fill="#4338CA">VDA RAILS</text>
<rect x="40" y="300" width="390" height="130" rx="8" class="a1-box"/><text x="64" y="354" class="a1-t">Truelayer collects</text><text x="64" y="394" class="a1-s">into Thunes' UK bank account</text>
<rect x="470" y="300" width="390" height="130" rx="8" class="a1-box v"/><text x="494" y="354" class="a1-t">Truelayer collects</text><text x="494" y="394" class="a1-s">sent to the on-ramp partner</text>
<line x1="235" y1="430" x2="235" y2="470" class="a1-c"/><line x1="665" y1="430" x2="665" y2="470" class="a1-c v"/>
<rect x="40" y="470" width="390" height="130" rx="8" class="a1-box"/><text x="64" y="524" class="a1-t">API call to India</text><text x="64" y="564" class="a1-s">sender + beneficiary details</text>
<rect x="470" y="470" width="390" height="130" rx="8" class="a1-box v"/><text x="494" y="524" class="a1-t">On-ramp buys crypto</text><text x="494" y="564" class="a1-s">GBP → USDC/USDT at ≈ $1.00</text>
<line x1="235" y1="600" x2="235" y2="640" class="a1-c"/><line x1="665" y1="600" x2="665" y2="640" class="a1-c v"/>
<rect x="40" y="640" width="390" height="130" rx="8" class="a1-box"/><text x="64" y="694" class="a1-t">No money crosses</text><text x="64" y="734" class="a1-s">same entity owns both accounts</text>
<rect x="470" y="640" width="390" height="130" rx="8" class="a1-box v"/><text x="494" y="694" class="a1-t">Held in a hot wallet</text><text x="494" y="734" class="a1-s">non-custodial, with a tx hash</text>
<line x1="235" y1="770" x2="235" y2="810" class="a1-c"/><line x1="665" y1="770" x2="665" y2="810" class="a1-c v"/>
<rect x="40" y="810" width="390" height="130" rx="8" class="a1-box"/><text x="64" y="864" class="a1-t">Converted to INR</text><text x="64" y="904" class="a1-s">at the agreed live rate</text>
<rect x="470" y="810" width="390" height="130" rx="8" class="a1-box v"/><text x="494" y="864" class="a1-t">Sold in India</text><text x="494" y="904" class="a1-s">by off-ramp partner at ≈ $1.07</text>
<line x1="235" y1="940" x2="235" y2="990" class="a1-c"/><line x1="665" y1="940" x2="665" y2="990" class="a1-c v"/>
<rect x="40" y="990" width="820" height="90" rx="8" class="a1-end"/>
<text x="450" y="1032" class="a1-et">Beneficiary in India</text>
<text x="450" y="1060" class="a1-es">PAID IN INR</text>
</svg>
<figcaption>Same customer, same app. The VDA rails swap the bank-to-bank step for stablecoins, and that's where the premium is.</figcaption>
</figure>

## The results

Within one month of deploying it, we made **$25K in gross profit**.

Out of the roughly 7% gross spread, our cut was **2.5%**. The rest went to partnership and marketing costs.

By the latest month, we made **$1 million in gross profit**, just from VDA rails remittances out of the UK. It was only the UK because we'd acquired the FCA-regulated API license a couple of months earlier, which is essentially what lets you send money across borders.

<figure class="portrait">
<svg viewBox="0 0 900 900" role="img" aria-labelledby="a2t a2d" xmlns="http://www.w3.org/2000/svg">
<title id="a2t">The economics of the VDA rails</title>
<desc id="a2d">One USDC or USDT costs about 1.00 dollar to buy in the UK and sells for about 1.07 dollars in India. Of the roughly 7 percent gross spread, Vance kept 2.5 percent and the rest went to partnerships and marketing. Monthly gross profit from the VDA rails in the UK went from 25 thousand dollars in month 1 to 1 million dollars in the latest month.</desc>
<style>
.a2-k{font-family:'JetBrains Mono',monospace;font-size:16px;letter-spacing:.14em;fill:#888898}
.a2-h{font-family:'Syne',sans-serif;font-size:36px;font-weight:800;fill:#0C0C18;letter-spacing:-.02em}
.a2-l{font-family:'Syne',sans-serif;font-size:22px;fill:#3A3A52}
.a2-v{font-family:'Syne',sans-serif;font-size:26px;font-weight:800;fill:#0C0C18}
.a2-a{fill:#4338CA}
.a2-b{fill:#B9B6EE}
.a2-n{fill:#DFDFE8}
.a2-in{font-family:'Syne',sans-serif;font-size:20px;font-weight:800;fill:#fff}
.a2-ind{font-family:'Syne',sans-serif;font-size:20px;font-weight:800;fill:#0C0C18}
.a2-base{stroke:#C2C2D8;stroke-width:2}
</style>
<rect width="900" height="900" fill="#F5F5F3"/>
<text x="40" y="54" class="a2-k">THE ECONOMICS</text>
<text x="40" y="102" class="a2-h">Where the money came from.</text>
<text x="40" y="172" class="a2-k">1 USDC / USDT</text>
<text x="40" y="226" class="a2-l">Buy in UK</text>
<path d="M200 200 H676 a4 4 0 0 1 4 4 V236 a4 4 0 0 1 -4 4 H200Z" class="a2-n"/>
<text x="696" y="230" class="a2-v">≈ $1.00</text>
<text x="40" y="296" class="a2-l">Sell in India</text>
<path d="M200 270 H680 V310 H200Z" class="a2-n"/>
<path d="M682 270 H710 a4 4 0 0 1 4 4 V306 a4 4 0 0 1 -4 4 H682Z" class="a2-a"/>
<text x="730" y="300" class="a2-v">≈ $1.07</text>
<text x="682" y="340" class="a2-l" font-size="18">↑ the 7% premium</text>
<text x="40" y="430" class="a2-k">WHO GETS THE ~7% GROSS SPREAD</text>
<path d="M44 460 H330 V530 H44 a4 4 0 0 1 -4 -4 V464 a4 4 0 0 1 4 -4Z" class="a2-a"/>
<path d="M332 460 H856 a4 4 0 0 1 4 4 V526 a4 4 0 0 1 -4 4 H332Z" class="a2-b"/>
<text x="64" y="503" class="a2-in">Our cut · 2.5%</text>
<text x="356" y="502" class="a2-ind" font-size="18">The rest · partners + marketing</text>
<text x="40" y="630" class="a2-k">MONTHLY GROSS PROFIT · VDA RAILS (UK)</text>
<text x="40" y="694" class="a2-l">Month 1</text>
<path d="M200 670 H210 a4 4 0 0 1 4 4 V706 a4 4 0 0 1 -4 4 H200Z" class="a2-b"/>
<text x="230" y="700" class="a2-v">$25K</text>
<text x="40" y="784" class="a2-l">Latest month</text>
<path d="M200 760 H756 a4 4 0 0 1 4 4 V796 a4 4 0 0 1 -4 4 H200Z" class="a2-a"/>
<text x="776" y="790" class="a2-v">$1M</text>
<line x1="200" y1="650" x2="200" y2="820" class="a2-base"/>
<text x="40" y="866" class="a2-k">UK ONLY · FCA-REGULATED API LICENSE</text>
</svg>
<figcaption>A small premium per coin, our share of it, and what that turned into at volume.</figcaption>
</figure>

## Where it led

That's the experience I took into my next role. When I reached out to the CTO of Blaze, a YC W24 company, it was about exactly this: building stablecoin infrastructure for cross-border remittances, end to end. There, I ended up building the [GTM engine that sells it](/writing/blaze-gtm-automation).
