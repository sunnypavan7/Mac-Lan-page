"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [investment, setInvestment] = useState(1000000);
  const [navShadow, setNavShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavShadow(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatCurrency = (num: number) => {
    const lakhs = (num / 100000).toFixed(1);
    return lakhs.endsWith(".0")
      ? `₹${lakhs.slice(0, -2)}L`
      : `₹${lakhs}L`;
  };

  const returns = investment * 4.5;
  const profit = returns - investment;

  const roiStages = [
    { yr: 1, stage: "Establishment", pct: 0 },
    { yr: 2, stage: "Growth", pct: 0 },
    { yr: 3, stage: "Light bearing", pct: 5 },
    { yr: 4, stage: "Early yield", pct: 15 },
    { yr: 5, stage: "Production", pct: 35 },
    { yr: 6, stage: "Increasing", pct: 55 },
    { yr: 7, stage: "Near peak", pct: 70 },
    { yr: 8, stage: "Peak", pct: 80 },
    { yr: 9, stage: "Peak", pct: 85 },
    { yr: 10, stage: "Peak", pct: 90 },
  ];

  const toggleAccordion = (index: number) => {
    const elem = document.querySelector(`[data-accordion="${index}"]`);
    if (elem) {
      elem.classList.toggle("active");
      const content = elem as HTMLElement;
      if (content.style.maxHeight) {
        content.style.maxHeight = "";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = (e.target as HTMLFormElement).querySelector("button");
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = "Sending...";
      btn.disabled = true;
      btn.classList.add("opacity-75");
      setTimeout(() => {
        (e.target as HTMLFormElement).reset();
        btn.textContent = originalText;
        btn.disabled = false;
        btn.classList.remove("opacity-75");
        const toast = document.getElementById("toast");
        if (toast) {
          toast.classList.remove("translate-y-20", "opacity-0");
          setTimeout(() => {
            toast?.classList.add("translate-y-20", "opacity-0");
          }, 3000);
        }
      }, 1500);
    }
  };

  return (
    <>
      {/* Navigation */}
      <header
        className={`fixed w-full z-50 glass-nav transition-all duration-300 ${
          navShadow ? "shadow-md" : ""
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="w-10 h-10 bg-forest-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                H
              </div>
              <span className="font-bold text-xl tracking-tight text-forest-900">
                Hebbal<span className="text-forest-600">Orchard</span>
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#opportunity"
                className="text-slate-600 hover:text-forest-700 font-medium transition"
              >
                Why Macadamia
              </a>
              <a
                href="#plots"
                className="text-slate-600 hover:text-forest-700 font-medium transition"
              >
                Plot Pricing
              </a>
              <a
                href="#roi"
                className="text-slate-600 hover:text-forest-700 font-medium transition"
              >
                ROI Calculator
              </a>
              <a
                href="#faq"
                className="text-slate-600 hover:text-forest-700 font-medium transition"
              >
                FAQ
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden md:inline-flex bg-forest-600 hover:bg-forest-700 text-white px-6 py-2.5 rounded-full font-semibold transition shadow-lg shadow-forest-500/30"
              >
                Book Site Visit
              </a>
              <button
                id="mobile-menu-btn"
                className="md:hidden text-slate-600 p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-100 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
              <a
                href="#opportunity"
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-forest-50 rounded-md"
              >
                Why Macadamia
              </a>
              <a
                href="#plots"
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-forest-50 rounded-md"
              >
                Plot Pricing
              </a>
              <a
                href="#roi"
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-forest-50 rounded-md"
              >
                ROI Calculator
              </a>
              <a
                href="#contact"
                className="block px-3 py-3 text-base font-medium text-forest-600 font-bold"
              >
                Book Site Visit
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-forest-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-600 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
            <div className="lg:w-2/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-green-200 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                25 Acres | 25+ Plots Available
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Own a Macadamia Plot in an{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
                  Orchard That's Already Growing
                </span>
              </h1>
              <p className="text-xl text-green-50/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                We planted, water and work this grove ourselves. You buy a titled 0.5-acre
                plot, let us farm it for you, and share in what an orchard earns once the
                trees mature.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-forest-500 hover:bg-forest-400 text-white rounded-xl font-bold text-lg transition shadow-xl shadow-forest-900/20"
                >
                  Book Free Site Visit
                </a>
                <a
                  href="#roi"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold text-lg transition"
                >
                  See 10-Year Projection
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="relative z-10 -mt-10 max-w-6xl mx-auto px-4 mb-20">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8 border border-slate-100">
            <div className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-forest-700">
                ₹8-12L
              </p>
              <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold mt-1">
                Plot Price Range
              </p>
            </div>
            <div className="text-center border-l border-slate-100">
              <p className="text-3xl lg:text-4xl font-bold text-forest-700">
                0.5 acre
              </p>
              <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold mt-1">
                Per Plot Size
              </p>
            </div>
            <div className="text-center border-l border-slate-100">
              <p className="text-3xl lg:text-4xl font-bold text-forest-700">
                35-40%
              </p>
              <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold mt-1">
                YoY Demand Growth
              </p>
            </div>
            <div className="text-center border-l border-slate-100">
              <p className="text-3xl lg:text-4xl font-bold text-forest-700">
                Clear Title
              </p>
              <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold mt-1">
                Guaranteed
              </p>
            </div>
          </div>
        </section>

        {/* Why Macadamia */}
        <section id="opportunity" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-forest-600 font-bold tracking-wide uppercase text-sm mb-3">
                Why Macadamia?
              </h2>
              <h3 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
                A crop the market wants more of
              </h3>
              <p className="text-lg text-slate-600">
                Macadamia trades at ₹3,000–4,000 per kg on demand that's grown 35–40%
                globally. You're buying into an orchard that already exists, not a promise of
                one.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4 text-forest-700 text-2xl">
                  💎
                </div>
                <h4 className="font-bold text-slate-900 mb-2">High Market Value</h4>
                <p className="text-sm text-slate-600">
                  ₹3,000–4,000 per kg, among the highest of any tree nut globally.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4 text-forest-700 text-2xl">
                  🌳
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Owner-Operated Farm</h4>
                <p className="text-sm text-slate-600">
                  The farm is planted and worked by us on-site before plots are offered.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4 text-forest-700 text-2xl">
                  📈
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Direct Sales</h4>
                <p className="text-sm text-slate-600">
                  No middleman markup. Processing and market linkage stay with the
                  cooperative.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4 text-forest-700 text-2xl">
                  ⏱️
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Long-Term Asset</h4>
                <p className="text-sm text-slate-600">
                  Trees produce for 40+ years once mature. This is an orchard, not a harvest.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Plot Pricing */}
        <section id="plots" className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-forest-600 font-bold tracking-wide uppercase text-sm mb-3">
                Plot Pricing
              </h2>
              <h3 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
                Simple, transparent pricing
              </h3>
              <p className="text-lg text-slate-600">
                Every tier includes the same title guarantee, agronomic report and farm
                management — the difference is plot position and how many you take.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200 bg-forest-50">
                      <th className="text-left px-6 py-4 font-bold text-slate-900">
                        Tier
                      </th>
                      <th className="text-left px-6 py-4 font-bold text-slate-900">
                        Plot Size
                      </th>
                      <th className="text-left px-6 py-4 font-bold text-slate-900">
                        Price
                      </th>
                      <th className="text-left px-6 py-4 font-bold text-slate-900">
                        Detail
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-bold text-slate-900">
                        Standard plot
                      </td>
                      <td className="px-6 py-4 text-slate-600">0.5 acre</td>
                      <td className="px-6 py-4 font-bold text-forest-700">
                        ₹8,00,000
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        Interior rows, full agronomic support, clear title.
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-bold text-slate-900">
                        Premium plot
                      </td>
                      <td className="px-6 py-4 text-slate-600">0.5 acre</td>
                      <td className="px-6 py-4 font-bold text-forest-700">
                        ₹12,00,000
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        Roadside frontage, deeper topsoil, priority irrigation line.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-bold text-slate-900">
                        Group plot
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        0.5 acre each, min. 3 plots
                      </td>
                      <td className="px-6 py-4 font-bold text-forest-700">
                        ₹8,50,000
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        For families or partners buying adjoining plots together.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 max-w-4xl mx-auto bg-forest-50 border border-forest-200 rounded-xl p-8">
              <h4 className="font-bold text-slate-900 mb-4">
                What Every Plot Includes
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-forest-600 mt-1">✓</span>
                  <span>Legal documentation and clear-title transfer</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-forest-600 mt-1">✓</span>
                  <span>Agronomic report for your specific plot</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-forest-600 mt-1">✓</span>
                  <span>Free farmer training before and after planting</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-forest-600 mt-1">✓</span>
                  <span>Access to our input supply network</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-forest-600 mt-1">✓</span>
                  <span>Market linkage through the farm cooperative</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-forest-600 mt-1">✓</span>
                  <span>Community support from other plot owners</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-forest-600 mt-1">✓</span>
                  <span>Optional buyback arrangement at harvest</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-forest-600 mt-1">✓</span>
                  <span>Ongoing support for the life of the orchard</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section id="roi" className="py-20 lg:py-28 bg-forest-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-forest-300 font-bold tracking-wide uppercase text-sm mb-3">
                10-Year Projections
              </h2>
              <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                See your wealth creation
              </h3>
              <p className="text-lg text-green-100">
                Illustrative year-by-year projections based on early trial yields and current
                kernel prices.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <label className="block text-sm font-medium text-green-100 mb-2">
                    Your Investment (₹)
                  </label>
                  <div className="flex items-center gap-4 mb-6">
                    <input
                      type="range"
                      min="500000"
                      max="2400000"
                      step="50000"
                      value={investment}
                      onChange={(e) => setInvestment(Number(e.target.value))}
                      className="w-full h-2 bg-forest-700 rounded-lg appearance-none cursor-pointer accent-forest-400"
                    />
                  </div>
                  <input
                    type="text"
                    value={formatCurrency(investment)}
                    className="w-full bg-white/20 border border-white/30 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-forest-400 text-right mb-6"
                    readOnly
                  />

                  <div className="space-y-4 border-t border-white/20 pt-6">
                    <div className="flex justify-between">
                      <span className="text-green-100">10-Year Returns</span>
                      <span className="font-bold text-2xl text-green-300">
                        {formatCurrency(returns)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-100">Estimated Profit</span>
                      <span className="font-bold text-2xl text-green-300">
                        {formatCurrency(profit)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 text-slate-800 shadow-2xl overflow-x-auto">
                <h4 className="font-bold text-lg mb-4 border-b pb-2">
                  Year-by-Year Breakdown
                </h4>
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="text-slate-500 border-b">
                      <th className="py-2 font-medium">Year</th>
                      <th className="py-2 font-medium">Stage</th>
                      <th className="py-2 font-medium text-right">Est. Yield</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roiStages.map((stage) => (
                      <tr
                        key={stage.yr}
                        className="border-b last:border-0 hover:bg-slate-50"
                      >
                        <td className="py-3 font-medium text-slate-900">
                          Yr {stage.yr}
                        </td>
                        <td className="py-3 text-slate-500 text-sm">
                          {stage.stage}
                        </td>
                        <td className="py-3 text-right font-medium text-forest-700">
                          {stage.pct > 0
                            ? formatCurrency(
                                (investment * stage.pct) / 100
                              )
                            : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-slate-400 mt-4 italic">
                  *Based on illustrative projection. Not a guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reality Check */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Reality Check
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>
                  • Macadamia is a long-term orchard crop — full bearing takes 7–10
                  years.
                </li>
                <li>
                  • Commercial-scale agronomy data for macadamia in India is still
                  developing.
                </li>
                <li>
                  • We plant validated grafted material and run local trials before
                  scaling.
                </li>
                <li>• We recommend you visit the orchard before you buy.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Is the title actually clear?",
                  a: "Yes. Every plot is surveyed and transferred with clear, marketable title in your name, and we provide the full legal documentation before you pay the balance.",
                },
                {
                  q: "Do I need farming experience?",
                  a: "No. Most of our plot owners have never farmed macadamia before. The orchard is managed on-site, and we run free training if you want to be more hands-on.",
                },
                {
                  q: "When does the plot start earning?",
                  a: "Trees begin light bearing around year three, with meaningful yield from year five and full bearing from year seven to ten onward. This is a long-horizon crop, not a quick flip.",
                },
                {
                  q: "Can I sell my plot later?",
                  a: "Yes, the title is yours to hold, sell or pass on. We can also introduce buyers through our waiting list, though we don't guarantee a resale price or timeline.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-lg overflow-hidden bg-white"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition focus:outline-none"
                    onClick={() => toggleAccordion(idx)}
                  >
                    <span className="font-semibold text-slate-800">{item.q}</span>
                    <svg
                      className="w-5 h-5 transform transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className="accordion-content bg-white"
                    data-accordion={idx}
                  >
                    <div className="px-6 py-4 text-slate-600 border-t border-slate-100">
                      {item.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-br from-forest-900 to-forest-800 rounded-2xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
              <div className="p-10 lg:p-14 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Book a Free Site Visit
                  </h2>
                  <p className="text-green-100 mb-8">
                    Walk the orchard, see the plot grid, and talk to us before you decide on
                    anything. There's no cost and no obligation to buy.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                        📞
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a
                          href="tel:+919876543210"
                          className="text-green-100 hover:text-white"
                        >
                          +91-XXXX-XXXX-XXX
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                        📧
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a
                          href="mailto:contact@hebbalorchard.example"
                          className="text-green-100 hover:text-white"
                        >
                          contact@hebbalorchard.example
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                        📍
                      </div>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-green-100">Karnataka, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 lg:p-14">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-forest-500 outline-none text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-forest-500 outline-none text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-forest-500 outline-none text-slate-900"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-forest-600 hover:bg-forest-700 text-white font-bold py-4 rounded-lg transition shadow-lg"
                  >
                    Book Free Site Visit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Hebbal Orchard</h4>
              <p className="text-slate-400 text-sm">
                Creating sustainable wealth through high-value commercial farming in Karnataka.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#opportunity"
                    className="text-slate-400 hover:text-forest-400 transition"
                  >
                    Why Macadamia
                  </a>
                </li>
                <li>
                  <a
                    href="#plots"
                    className="text-slate-400 hover:text-forest-400 transition"
                  >
                    Plot Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#roi"
                    className="text-slate-400 hover:text-forest-400 transition"
                  >
                    ROI Calculator
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-forest-400 transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-forest-400 transition"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-sm text-slate-400">
              &copy; 2024 Hebbal Orchard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Toast */}
      <div
        id="toast"
        className="fixed bottom-5 right-5 z-50 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none"
      >
        <div className="bg-white border-l-4 border-forest-500 rounded shadow-2xl p-4 flex items-center gap-3">
          <div className="text-forest-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-slate-800">Thank You!</h4>
            <p className="text-sm text-slate-600">We'll contact you shortly.</p>
          </div>
        </div>
      </div>
    </>
  );
}
