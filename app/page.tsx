export default function Page() {
  const features = [
    "📷 OCR receipt scanning via mobile or web upload",
    "🤖 AI-powered tax category suggestions",
    "🏦 Bank feed integration for automatic imports",
    "📊 Export-ready reports for tax filing",
    "🗂️ IRS schedule C & freelance deduction categories",
    "🔒 Secure, encrypted document storage"
  ];

  const faqs = [
    {
      q: "What expense categories does TaxScan support?",
      a: "TaxScan covers all major freelancer deductions: home office, software subscriptions, equipment, travel, meals, professional development, and more — mapped to IRS Schedule C categories."
    },
    {
      q: "How does the bank feed integration work?",
      a: "Connect your bank or credit card via secure read-only access. TaxScan automatically imports transactions and uses AI to suggest the correct tax category for each expense."
    },
    {
      q: "Can I export my data for my accountant?",
      a: "Yes. Export a clean CSV or PDF summary of all categorized expenses, ready to hand off to your accountant or import into tax software like TurboTax or TaxAct."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Receipts.<br />
          <span className="text-[#58a6ff]">Maximize Tax Writeoffs.</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload receipts from your phone or desktop. TaxScan uses OCR + AI to instantly categorize every expense for freelancer tax deductions — no spreadsheets required.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors"
        >
          Start Scanning — $29/mo
        </a>
        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
          {features.map((f) => (
            <li key={f} className="bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-sm text-[#c9d1d9]">
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$29<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to file with confidence</p>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {["Unlimited receipt scans","AI expense categorization","Bank feed sync","CSV & PDF export","Priority support"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pb-8">
        © {new Date().getFullYear()} TaxScan. Built for freelancers.
      </footer>
    </main>
  );
}
