"use client";
import { useState } from "react";

const templates = [
  { id: "CEO", name: "Alexander Stone", title: "Chief Executive Officer", color: "from-black to-zinc-900", kpi: "42% Growth | $120M M&A", best: "CEO / GM" },
  { id: "CFO", name: "Alexander Reed", title: "Chief Financial Officer", color: "from-zinc-900 to-black", kpi: "+34% EBITDA | $12.5M Saved", best: "CFO / Finance - الأكثر مبيعاً", badge: "BEST" },
  { id: "CTO", name: "David Chen", title: "Chief Technology Officer", color: "from-slate-900 to-blue-950", kpi: "100M+ Users | AWS 99.99%", best: "CTO / Tech" },
  { id: "COO", name: "【entity-James Harrison¦canonical_name=James Harrison】", title: "Chief Operating Officer", color: "from-neutral-900 to-zinc-800", kpi: "98.2% Delivery | 22% Cost Cut", best: "COO / Operations" },
  { id: "CMO", name: "Sophia Reynolds", title: "Chief Marketing Officer", color: "from-black to-rose-950", kpi: "+142% Growth | +310% ROI", best: "CMO / Marketing" },
  { id: "CHRO", name: "Emma Williams", title: "CHRO - People & Culture", color: "from-zinc-900 to-red-950", kpi: "8K+ Employees | 60% Scale", best: "CHRO / HR" },
  { id: "GM", name: "Robert Mitchell", title: "Executive General Manager", color: "from-black to-stone-900", kpi: "200+ Staff | 28% YoY", best: "GM / Director" },
  { id: "Sales", name: "Michael Torres", title: "Sales Director", color: "from-zinc-900 to-amber-950", kpi: "$35M Revenue | 15% Growth", best: "Sales" },
  { id: "Project", name: "Sarah Kim", title: "Project Director | PMP", color: "from-slate-900 to-zinc-900", kpi: "PMP | $50M Projects", best: "Project Mgmt" },
  { id: "Finance", name: "William Chen", title: "Finance Director", color: "from-black to-yellow-950", kpi: "$400M Portfolio | 22% Margin", best: "Finance" },
  { id: "Operations", name: "【entity-Jennifer Lopez¦canonical_name=Jennifer Lopez】", title: "Operations Manager", color: "from-neutral-900 to-black", kpi: "6.5x Turnover | 99.1% SLA", best: "Operations" },
  { id: "Legal", name: "【entity-Amanda Black¦canonical_name=Amanda Black】", title: "Legal Counsel Executive", color: "from-slate-950 to-blue-950", kpi: "$600M Deals | Compliance", best: "Legal" },
  { id: "Product", name: "Daniel Park", title: "Product Manager", color: "from-black to-zinc-800", kpi: "$100M ARR | 45% Retention", best: "Product" },
  { id: "Marketing", name: "Lisa Martinez", title: "Marketing Director", color: "from-black to-pink-950", kpi: "+127% Awareness | +210% ROI", best: "Marketing" },
  { id: "HR", name: "Olivia Green", title: "HR Director", color: "from-zinc-900 to-neutral-900", kpi: "120+ HR Team | 42% Efficiency", best: "HR" },
];

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white antialiased" dir="rtl">
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-[#C5A055] to-[#8B6F2B] rounded-lg flex items-center justify-center font-serif font-bold">A</div>
            <div>
              <div className="font-serif text-xl tracking-[0.2em]">ALTIMA</div>
              <div className="text-[10px] tracking-widest text-[#C5A055]">ألتيما - قوالب تنفيذية فاخرة</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#templates" className="text-white/70 hover:text-white">القوالب</a>
            <a href="/privacy-policy" className="text-white/70 hover:text-white">الخصوصية</a>
            <a href="/checkout" className="bg-[#C5A055] text-black px-5 py-2 rounded-full font-bold">شراء الباقة - 199 ر.س</a>
          </div>
          <button className="md:hidden w-11 h-11 rounded-full bg-white/10 flex items-center justify-center" onClick={()=>setMobileOpen(!mobileOpen)}>☰</button>
        </div>
        {mobileOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
            <a href="#templates" className="py-3 px-4 bg-white/5 rounded-xl">القوالب الـ 15</a>
            <a href="/checkout" className="py-3 px-4 bg-[#C5A055] text-black rounded-xl font-bold text-center">شراء الآن - 199 ر.س</a>
          </div>
        )}
      </nav>
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A055]/15 border border-[#C5A055]/30 text-[#C5A055] text-xs mb-4">✦ V2 فاخر - 15 قالب تنفيذي</div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1]">سير ذاتية<br/><span className="text-[#C5A055]">لمجالس الإدارة</span></h1>
          <p className="mt-4 text-white/60 text-base md:text-lg">15 قالب فاخر أسود-ذهبي، كل قالب شكل مختلف، بدون اسمك، Generic.</p>
          <div className="mt-8 flex gap-3">
            <a href="/checkout" className="flex-1 md:flex-none bg-[#C5A055] text-black px-8 py-4 rounded-full font-bold text-center">احصل على الـ 15 قالب - 199 ر.س</a>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[24px] border border-[#C5A055]/30 bg-gradient-to-br from-zinc-900 to-black p-2">
            <div className="rounded-[18px] bg-white text-black p-6 aspect-[3/4] flex flex-col justify-between">
              <div>
                <div className="text-[#C5A055] text-xs">ALTIMA • CFO</div>
                <div className="font-serif text-3xl mt-2">ALEXANDER REED</div>
                <div className="text-[#8B6F2B] text-xs mt-1">CHIEF FINANCIAL OFFICER — CFO</div