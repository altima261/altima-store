"use client";
import { useState } from "react";

const templates = [
  { id: "CEO", name: "Alexander Stone", kpi: "42% Growth | $120M M&A" },
  { id: "CFO", name: "Alexander Reed", kpi: "+34% EBITDA | $12.5M Saved" },
  { id: "CTO", name: "David Chen", kpi: "100M+ Users | AWS 99.99%" },
  { id: "COO", name: "【entity-James Harrison¦canonical_name=James Harrison】", kpi: "98.2% Delivery | 22% Cut" },
  { id: "CMO", name: "Sophia Reynolds", kpi: "+142% Growth | +310% ROI" },
  { id: "CHRO", name: "Emma Williams", kpi: "8K+ Employees | 60% Scale" },
  { id: "GM", name: "Robert Mitchell", kpi: "200+ Staff | 28% YoY" },
  { id: "Sales", name: "Michael Torres", kpi: "$35M Revenue" },
  { id: "Project", name: "Sarah Kim", kpi: "PMP | $50M Projects" },
  { id: "Finance", name: "William Chen", kpi: "$400M Portfolio" },
  { id: "Operations", name: "【entity-Jennifer Lopez¦canonical_name=Jennifer Lopez】", kpi: "6.5x Turnover" },
  { id: "Legal", name: "【entity-Amanda Black¦canonical_name=Amanda Black】", kpi: "$600M Deals" },
  { id: "Product", name: "Daniel Park", kpi: "$100M ARR" },
  { id: "Marketing", name: "Lisa Martinez", kpi: "+127% Awareness" },
  { id: "HR", name: "Olivia Green", kpi: "120+ HR Team" },
];

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" dir="rtl">
      <nav className="sticky top-0 z-50 bg-black/80 border-b border-white/10 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-serif text-xl tracking-widest">ALTIMA</div>
          <button onClick={() => setOpen(!open)} className="md:hidden w-10 h-10 bg-white/10 rounded-full">☰</button>
          <a href="/checkout" className="hidden md:block bg-[#C5A055] text-black px-5 py-2 rounded-full font-bold">شراء 199 ر.س</a>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 pt-16 pb-12">
        <h1 className="font-serif text-4xl md:text-6xl">سير ذاتية<br/><span className="text-[#C5A055]">لمجالس الإدارة</span></h1>
        <p className="mt-4 text-white/60">15 قالب فاخر أسود-ذهبي - كل قالب شكل مختلف - Generic بدون اسمك</p>
        <a href="/checkout" className="inline-block mt-6 bg-[#C5A055] text-black px-8 py-4 rounded-full font-bold">احصل على الـ 15 قالب - 199 ر.س</a>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((t) => (
          <div key={t.id} className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
            <div className="text-xs text-[#C5A055]">ALTIMA • {t.id}</div>
            <div className="font-serif text-xl mt-1">{t.name}</div>
            <div className="mt-3 text-xs text-[#C5A055] bg-white/5 border border-white/10 rounded-xl px-3 py-2">{t.kpi}</div>
            <div className="mt-2 text-[11px] text-white/40">Word • A4 • Generic</div>
          </div>
        ))}
      </section>

      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-black/80 border-t border-white/10">
        <a href="/checkout" className="w-full bg-[#C5A055] text-black py-4 rounded-full font-bold text-center block">شراء 15 قالب - 199 ر.س</a>
      </div>
    </main>
  );
}