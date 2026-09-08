"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

/* ---------- small line-icon set (thin stroke, no fill circles) ---------- */

function Icon({
  path,
  className = "",
}: {
  path: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

const icons = {
  gem: "M6 3h12l3 5-9 13L3 8l3-5zM3 8h18M9 3l3 5 3-5M12 8l-3 13m3-13l3 13",
  leaf: "M4 20c8 0 15-4 16-16C10 4 4 12 4 20zM4 20c2-5 6-9 12-12",
  shield: "M12 2l8 3v6c0 5.5-3.4 9.7-8 11-4.6-1.3-8-5.5-8-11V5l8-3z",
  coin: "M12 8v8M9 10.5c0-1.4 1.3-2.5 3-2.5s3 1.1 3 2.5-1.3 2-3 2-3 .6-3 2 1.3 2.5 3 2.5 3-1.1 3-2.5M12 3a9 9 0 100 18 9 9 0 000-18z",
  sun: "M12 4v2m0 12v2m8-8h-2M6 12H4m12.4-6.4l-1.4 1.4M7 17.4l-1.4 1.4m12.8 0l-1.4-1.4M7 6.6L5.6 5.2M12 8a4 4 0 100 8 4 4 0 000-8z",
  drop: "M12 3s7 7.4 7 12a7 7 0 01-14 0c0-4.6 7-12 7-12z",
  soil: "M3 20h18M5 20V11l4-3 4 3 4-3 2 1.4V20M9 20v-5m4 5v-5",
  ship: "M4 15l1.5 5h13L20 15M6 15V6h5l3 3h4v6M4 15h16M9 6V3h4v3",
  pin: "M12 21s7-6.5 7-12a7 7 0 00-14 0c0 5.5 7 12 7 12zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  doc: "M7 3h7l4 4v14H7V3zM14 3v4h4M10 12h6M10 16h6",
  scale: "M12 3v18M5 8l-2 6a3 3 0 006 0l-2-6zM19 8l-2 6a3 3 0 006 0l-2-6zM5 8h14M9 3h6",
  bag: "M6 8h12l1 13H5L6 8zM9 8V6a3 3 0 016 0v2",
  network: "M12 4a2 2 0 100 4 2 2 0 000-4zM5 18a2 2 0 100 4 2 2 0 000-4zM19 18a2 2 0 100 4 2 2 0 000-4zM12 8v6m0 0l-6 4m6-4l6 4",
  refresh: "M4 4v6h6M20 20v-6h-6M4.5 15a8 8 0 0014.5 3M19.5 9a8 8 0 00-14.5-3",
};

/* ---------- static content ---------- */

const whyPoints = [
  {
    icon: icons.gem,
    title: "A crop the market wants more of",
    body: "Macadamia trades at ₹3,000–4,000 per kg for kernel, among the highest of any tree nut, on demand that has grown 35–40% globally as buyers look past almonds and cashews.",
  },
  {
    icon: icons.shield,
    title: "An owner-operated orchard, not a listing",
    body: "The farm is planted, watered and worked by us, on-site, before a single plot is offered. You are buying into an orchard that already exists, not a promise of one.",
  },
  {
    icon: icons.coin,
    title: "You sell the kernel, not through a middleman",
    body: "Processing, grading and buyer relationships stay with the farm's cooperative, so returns pass to plot owners directly rather than being absorbed by a chain of traders.",
  },
  {
    icon: icons.leaf,
    title: "A tree that keeps paying for decades",
    body: "A macadamia tree reaches full bearing after seven to ten years and can then produce for forty years or more — this is an orchard asset, not a single harvest.",
  },
];

const regions = [
  "Karnataka — home orchard, established",
  "Tamil Nadu — commercial trial blocks",
  "Kerala — commercial trial blocks",
  "Andhra Pradesh — commercial trial blocks",
  "Maharashtra — emerging",
  "North East — early trial projects",
];

const climate = [
  { icon: icons.sun, label: "Climate", value: "Tropical to subtropical, 15–30°C" },
  { icon: icons.drop, label: "Rainfall", value: "1,000–2,000 mm, well distributed" },
  { icon: icons.soil, label: "Soil", value: "Well-drained, slightly acidic, pH 5.6–6.5" },
];

const plotTiers = [
  {
    name: "Standard plot",
    price: "₹8,00,000",
    size: "0.5 acre",
    detail: "Interior rows, full agronomic support, clear title.",
  },
  {
    name: "Premium plot",
    price: "₹12,00,000",
    size: "0.5 acre",
    detail: "Roadside frontage, deeper topsoil, priority irrigation line.",
  },
  {
    name: "Group plot",
    price: "₹8,50,000",
    size: "0.5 acre each, min. 3 plots",
    detail: "For families or partners buying adjoining plots together.",
  },
];

const included = [
  { icon: icons.doc, text: "Legal documentation and clear-title transfer" },
  { icon: icons.leaf, text: "Agronomic report for your specific plot" },
  { icon: icons.network, text: "Free farmer training before and after planting" },
  { icon: icons.bag, text: "Access to our input supply network" },
  { icon: icons.ship, text: "Market linkage through the farm cooperative" },
  { icon: icons.shield, text: "Community support from other plot owners" },
  { icon: icons.refresh, text: "Optional buyback arrangement at harvest" },
  { icon: icons.scale, text: "Ongoing support for the life of the orchard" },
];

const journey = [
  { title: "Plantation & cultivation", body: "Healthy grafted trees, matched to your plot's soil and slope." },
  { title: "Harvesting", body: "Nuts are hand-collected at peak maturity, not stripped early." },
  { title: "Processing", body: "Cleaning, grading and shelling at the farm's own facility." },
  { title: "Packaging", body: "Sealed for freshness and traceability back to the plot." },
  { title: "Export", body: "Routed to buyers in six markets through the cooperative." },
];

const products = [
  "Raw nuts, for roasting and retail",
  "Kernels, ready to eat or cook with",
  "Roasted and flavoured, for snacking and gourmet",
  "Nut butter, for healthy spreads",
  "Macadamia oil, for cosmetics and culinary use",
  "Confectionery, for premium chocolates",
];

const markets = ["USA", "UAE", "Europe", "Japan", "Singapore", "Middle East"];

const testimonials = [
  {
    quote:
      "I farm rice on the rest of my land. The macadamia plot was a way to put one field toward something I won't have to replant every season.",
    name: "Manjunath R.",
    role: "Plot owner, working farmer",
  },
  {
    quote:
      "I don't live near the farm, so what mattered to me was that someone else was actually managing it well. Two site visits later, I was convinced.",
    name: "Priya K.",
    role: "Plot owner, investor",
  },
  {
    quote:
      "I wanted a way to stay connected to land back home without moving back. This let me do that and back a crop I think has real legs.",
    name: "Arjun S.",
    role: "Plot owner, NRI",
  },
];

const faqs = [
  {
    q: "Is the title actually clear?",
    a: "Yes. Every plot is surveyed and transferred with clear, marketable title in your name, and we provide the full legal documentation before you pay the balance.",
  },
  {
    q: "Do I need farming experience?",
    a: "No. Most of our plot owners have never farmed macadamia before. The orchard is managed on-site, and we run free training if you want to be more hands-on.",
  },
  {
    q: "When does a plot actually start earning?",
    a: "Trees begin light bearing around year three, with meaningful yield from year five and full bearing from year seven to ten onward. This is a long-horizon crop, not a quick flip.",
  },
  {
    q: "Can I sell my plot later?",
    a: "Yes, the title is yours to hold, sell or pass on. We can also introduce buyers through our waiting list, though we don't guarantee a resale price or timeline.",
  },
  {
    q: "What's the real risk here?",
    a: "Macadamia is still a young commercial crop in India, so yield and price data at scale are thinner than for older crops. Read the note below before you commit.",
  },
];

/* ---------- ROI calculator ---------- */

// net cash flow per year, per ₹10,00,000 invested (illustrative, not guaranteed)
const roiPerTenLakh = [
  { year: 1,  label: "Establishment",        flow: -1000000, yield: null     },
  { year: 2,  label: "Growth",               flow:   -40000, yield: null     },
  { year: 3,  label: "Growth",               flow:   120000, yield: null     },
  { year: 4,  label: "Growth",               flow:   250000, yield: null     },
  { year: 5,  label: "Growth",               flow:   400000, yield: null     },
  { year: 6,  label: "Production",           flow:   550000, yield: "₹5.5L" },
  { year: 7,  label: "Approaching peak",     flow:   680000, yield: "₹7L"   },
  { year: 8,  label: "Near peak production", flow:   750000, yield: "₹7.5L" },
  { year: 9,  label: "Peak production",      flow:   780000, yield: "₹8L"   },
  { year: 10, label: "Peak production",      flow:   800000, yield: "₹8.5L" },
  { year: 11, label: "Peak production",      flow:   820000, yield: "₹9L"   },
];

function formatINR(n: number) {
  const sign = n < 0 ? "-" : "";
  const abs = Math.abs(Math.round(n));
  return sign + "₹" + abs.toLocaleString("en-IN");
}

function RoiCalculator() {
  const [investment, setInvestment] = useState(1000000);
  const scale = investment / 1000000;

  const rows = useMemo(
    () =>
      roiPerTenLakh.map((r) => ({ ...r, flow: r.flow * scale })),
    [scale]
  );

  const cumulative = useMemo(() => {
    let running = 0;
    return rows.map((r) => {
      running += r.flow;
      return running;
    });
  }, [rows]);

  const finalValue = cumulative[cumulative.length - 1];

  return (
    <div>
      <label className="block text-sm mb-2 text-forest/80" htmlFor="investment">
        Your investment
      </label>
      <div className="flex items-center gap-4 mb-6">
        <input
          id="investment"
          type="range"
          min={800000}
          max={2400000}
          step={50000}
          value={investment}
          onChange={(e) => setInvestment(Number(e.target.value))}
          className="w-full accent-forest"
        />
        <span className="font-display text-xl whitespace-nowrap w-32 text-right">
          {formatINR(investment)}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="ledger-rule-b text-left text-forest/70">
              <th className="py-2 pr-4 font-normal w-16">Year</th>
              <th className="py-2 pr-4 font-normal">Stage</th>
              <th className="py-2 font-normal text-right text-kernel">Est. Yield</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.year} className="ledger-rule-b">
                <td className="py-2 pr-4 step-number">Yr {r.year}</td>
                <td className="py-2 pr-4 text-ink/70">{r.label}</td>
                <td className="py-2 text-right tabular-nums text-kernel font-medium">
                  {r.yield ?? <span className="text-ink/30">-</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 font-display text-2xl">
        Illustrative 11-year position: {formatINR(finalValue)} on {formatINR(investment)} invested
      </p>
      <p className="mt-2 text-sm text-ink/60 max-w-[60ch]">
        This is an illustrative projection built from early trial yields and current kernel
        prices, not a forecast or a guarantee. Actual returns depend on tree health, weather,
        agronomic practice and market prices at harvest, and Indian commercial-scale macadamia
        data is still thin. Please treat this as a planning tool, not investment advice.
      </p>
    </div>
  );
}

/* ---------- page ---------- */

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="bg-parchment text-ink">
      {/* NAV */}
      <header className="ledger-rule-b sticky top-0 z-30 bg-parchment/95 backdrop-blur">
        <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-tight">
            Hebbal Macadamia Orchard
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#opportunity" className="hover:text-forest-light">Why macadamia</a>
            <a href="#plots" className="hover:text-forest-light">Plots</a>
            <a href="#roi" className="hover:text-forest-light">Projections</a>
            <a href="#faq" className="hover:text-forest-light">FAQ</a>
            <a
              href="#contact"
              className="border border-forest px-4 py-2 rounded-sm hover:bg-forest hover:text-parchment transition-colors"
            >
              Book a site visit
            </a>
          </nav>
          <button
            className="md:hidden"
            aria-expanded={navOpen}
            aria-label="Toggle menu"
            onClick={() => setNavOpen((v) => !v)}
          >
            <Icon path="M4 7h16M4 12h16M4 17h16" className="w-6 h-6" />
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm">
            <a href="#opportunity" onClick={() => setNavOpen(false)}>Why macadamia</a>
            <a href="#plots" onClick={() => setNavOpen(false)}>Plots</a>
            <a href="#roi" onClick={() => setNavOpen(false)}>Projections</a>
            <a href="#faq" onClick={() => setNavOpen(false)}>FAQ</a>
            <a href="#contact" onClick={() => setNavOpen(false)}>Book a site visit</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="max-w-content mx-auto px-6 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="text-sm text-forest-light mb-4">Karnataka, India — 25-acre working orchard</p>
            <h1 className="font-display text-[2.6rem] leading-[1.05] md:text-6xl md:leading-[1.03]">
              Own a macadamia plot in an orchard that's already growing.
            </h1>
            <p className="mt-6 text-lg text-ink/75 max-w-[52ch]">
              We planted, water and work this grove ourselves. You can buy a titled 0.5-acre
              plot within it, let us farm it for you, and share in what an orchard like this
              earns once the trees mature.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-forest text-parchment px-6 py-3 rounded-sm hover:bg-forest-light transition-colors"
              >
                Book a free site visit
              </a>
              <a
                href="#roi"
                className="border border-ink/30 px-6 py-3 rounded-sm hover:border-forest hover:text-forest-light transition-colors"
              >
                See the 10-year projection
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <dl className="ledger-rule">
              {[
                ["Orchard size", "25 acres, owner-operated"],
                ["Plot size", "0.5 acre, titled individually"],
                ["Plots available", "25+, released in phases"],
                ["Price range", "₹8,00,000 – ₹12,00,000 per plot"],
              ].map(([k, v]) => (
                <div key={k} className="ledger-rule-b py-3 flex justify-between gap-4 text-sm">
                  <dt className="text-ink/60">{k}</dt>
                  <dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* WHY MACADAMIA */}
      <section id="opportunity" className="max-w-content mx-auto px-6 py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl max-w-[24ch]">
          A crop most Indian farmland has never grown — that's the opening.
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {whyPoints.map((p) => (
            <div key={p.title} className="flex gap-4">
              <Icon path={p.icon} className="w-6 h-6 shrink-0 mt-1 text-kernel-dark" />
              <div>
                <h3 className="font-display text-xl mb-1.5">{p.title}</h3>
                <p className="text-ink/70 text-[0.95rem] max-w-[48ch]">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INDIA OPPORTUNITY / REGIONS + CLIMATE */}
      <section className="bg-forest text-parchment">
        <div className="max-w-content mx-auto px-6 py-16 md:py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl">Where macadamia is taking root in India</h2>
            <p className="mt-4 text-parchment/70 max-w-[42ch]">
              Cultivation is still concentrated in a handful of southern states, with our
              orchard among the established plantings in Karnataka.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {regions.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <Icon path={icons.pin} className="w-4 h-4 mt-0.5 shrink-0 text-kernel" />
                  <span className="text-parchment/90">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-3 gap-6">
            {climate.map((c) => (
              <div key={c.label} className="border border-parchment/25 rounded-sm p-5">
                <Icon path={c.icon} className="w-6 h-6 text-kernel mb-4" />
                <p className="text-xs uppercase tracking-wide text-parchment/50 mb-1">{c.label}</p>
                <p className="text-sm text-parchment/90">{c.value}</p>
              </div>
            ))}
            <div className="sm:col-span-3 border border-kernel/40 rounded-sm p-5 text-sm text-parchment/80">
              Commercial-scale agronomy data for macadamia in India is still developing. Our
              own orchard's yields, and the projections on this page, are drawn from that early,
              growing evidence base — strong, but not yet a long track record.
            </div>
          </div>
        </div>
      </section>

      {/* INFOGRAPHIC IMAGE */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl">The whole picture, in one sheet</h2>
            <p className="mt-4 text-ink/70 max-w-[38ch]">
              A single-page view of macadamia farming in India — the same regions, climate and
              export markets covered above, laid out for sharing.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="ledger-rule rounded-sm overflow-hidden border border-line">
              <Image
                src="/farm-images/orchard-infographic.png"
                alt="Infographic: Macadamia nut farming in India, covering cultivation regions, climate needs, the farm-to-export journey, value-added products and global markets."
                width={1536}
                height={1024}
                className="w-full h-auto"
                sizes="(min-width: 768px) 66vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PLOT LEDGER */}
      <section id="plots" className="max-w-content mx-auto px-6 py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl">Plot pricing</h2>
        <p className="mt-3 text-ink/70 max-w-[50ch]">
          Every tier includes the same title guarantee, agronomic report and farm management —
          the difference is plot position and how many you take.
        </p>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="ledger-rule-b text-sm text-ink/60">
                <th className="py-3 pr-4 font-normal">Tier</th>
                <th className="py-3 pr-4 font-normal">Plot size</th>
                <th className="py-3 pr-4 font-normal">Price</th>
                <th className="py-3 font-normal">Detail</th>
              </tr>
            </thead>
            <tbody>
              {plotTiers.map((t) => (
                <tr key={t.name} className="ledger-rule-b">
                  <td className="py-4 pr-4 font-display text-lg">{t.name}</td>
                  <td className="py-4 pr-4 text-sm text-ink/70">{t.size}</td>
                  <td className="py-4 pr-4 font-medium">{t.price}</td>
                  <td className="py-4 text-sm text-ink/70 max-w-[36ch]">{t.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-parchment-deep">
        <div className="max-w-content mx-auto px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl">What every plot includes</h2>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
            {included.map((i) => (
              <div key={i.text} className="flex gap-3">
                <Icon path={i.icon} className="w-5 h-5 shrink-0 mt-0.5 text-forest-light" />
                <p className="text-sm text-ink/80">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section id="roi" className="max-w-content mx-auto px-6 py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl">A ten-year projection, at your investment level</h2>
        <p className="mt-3 text-ink/70 max-w-[56ch]">
          Move the slider to your plot budget. The table scales an illustrative year-by-year
          cash flow, built from establishment costs against expected yield as the trees mature.
        </p>
        <div className="mt-10 ledger-rule pt-8">
          <RoiCalculator />
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-forest-dark text-parchment">
        <div className="max-w-content mx-auto px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl">Farm to export, in five steps</h2>
          <ol className="mt-10 grid md:grid-cols-5 gap-8">
            {journey.map((j, i) => (
              <li key={j.title}>
                <span className="step-number text-3xl text-kernel">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg">{j.title}</h3>
                <p className="mt-2 text-sm text-parchment/70">{j.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRODUCTS + MARKETS */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="font-display text-3xl">More than a raw nut</h2>
          <ul className="mt-6 space-y-3">
            {products.map((p) => (
              <li key={p} className="ledger-rule-b py-2.5 text-sm text-ink/80">{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl">Where the harvest goes</h2>
          <p className="mt-4 text-ink/70">
            Kernel from the farm's cooperative already reaches buyers across:
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {markets.map((m) => (
              <span key={m} className="border border-line rounded-sm px-4 py-2 text-sm">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-parchment-deep">
        <div className="max-w-content mx-auto px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl mb-10">From current plot owners</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t) => (
              <figure key={t.name} className="ledger-rule pt-6">
                <blockquote className="font-display text-lg leading-snug">"{t.quote}"</blockquote>
                <figcaption className="mt-4 text-sm text-ink/60">
                  {t.name} — {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* REALITY CHECK */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-20">
        <div className="border border-rust/40 rounded-sm p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl">Before you commit, a reality check</h2>
          <ul className="mt-6 space-y-3 text-sm text-ink/80 max-w-[64ch]">
            <li>Macadamia is a long-term orchard crop, not a short-cycle one — full bearing takes seven to ten years.</li>
            <li>Commercial-scale agronomy and yield data for macadamia in India is still developing, so treat every projection here as illustrative rather than guaranteed.</li>
            <li>We plant validated grafted material and run local trials on each plot before scaling it up, and recommend you visit the orchard before you buy.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-content mx-auto px-6 py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl mb-10">Questions plot owners ask first</h2>
        <div className="max-w-[70ch]">
          {faqs.map((f) => (
            <details key={f.q} className="group ledger-rule-b py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none font-display text-lg">
                {f.q}
                <Icon path="M12 5v14M5 12h14" className="caret w-5 h-5 shrink-0 text-forest-light" />
              </summary>
              <p className="mt-3 text-sm text-ink/75">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-forest text-parchment">
        <div className="max-w-content mx-auto px-6 py-16 md:py-20 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl">Book a free site visit</h2>
            <p className="mt-4 text-parchment/70 max-w-[40ch]">
              Walk the orchard, see the plot grid, and talk to us before you decide on
              anything. There's no cost and no obligation to buy.
            </p>
            <dl className="mt-10 space-y-3 text-sm">
              <div className="flex gap-3">
                <dt className="text-parchment/50 w-16 shrink-0">Phone</dt>
                <dd>+91-XXXX-XXXX-XXX</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-parchment/50 w-16 shrink-0">Email</dt>
                <dd>contact@macadamia-farm.example</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-parchment/50 w-16 shrink-0">Orchard</dt>
                <dd>Karnataka, India</dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-7">
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="grid sm:grid-cols-2 gap-5"
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm text-parchment/70">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="bg-transparent border border-parchment/30 rounded-sm px-3 py-2.5 text-parchment placeholder:text-parchment/40"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm text-parchment/70">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="bg-transparent border border-parchment/30 rounded-sm px-3 py-2.5 text-parchment placeholder:text-parchment/40"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="email" className="text-sm text-parchment/70">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-transparent border border-parchment/30 rounded-sm px-3 py-2.5 text-parchment placeholder:text-parchment/40"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="message" className="text-sm text-parchment/70">
                  What would you like to know?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="bg-transparent border border-parchment/30 rounded-sm px-3 py-2.5 text-parchment placeholder:text-parchment/40"
                />
              </div>
              <button
                type="submit"
                className="sm:col-span-2 bg-kernel text-forest-dark px-6 py-3 rounded-sm hover:bg-kernel-light transition-colors w-fit"
              >
                Book my site visit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ledger-rule">
        <div className="max-w-content mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6 text-sm text-ink/60">
          <p>Hebbal Macadamia Orchard, Karnataka, India</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-forest-light">Terms</a>
            <a href="#" className="hover:text-forest-light">Privacy</a>
            <a href="#" className="hover:text-forest-light">Disclaimer</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
