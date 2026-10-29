"use client";
import { useState } from "react";
const templates = [
  { id: 1, en: "CEO Royal Black Gold", ar: "المدير التنفيذي الملكي", price: "79 ر.س", color: "from-black to-zinc-800" },
  { id: 2, en: "CFO Diamond", ar: "المدير المالي الماسي", price: "69 ر.س", color: "from-slate-900 to-blue-900" },
  { id: 3, en: "General Manager", ar: "المدير العام", price: "49 ر.س", color: "from-zinc-800 to-zinc-900" },
  { id: 4, en: "Executive Minimal", ar: "التنفيذي المينيمال", price: "29 ر.س", color: "from-zinc-700 to-zinc-800" },
  { id: 5, en: "CTO Sapphire", ar: "المدير التقني الياقوتي", price: "59 ر.س", color: "from-blue-900 to-slate-900" },
  { id: 6, en: "COO Onyx", ar: "مدير عمليات أونيكس", price: "59 ر.س", color: "from-gray-800 to-black" },
  { id: 7, en: "Legal Platinum", ar: "محامي بلاتيني", price: "69 ر.س", color: "from-zinc-900 to-black" },
  { id: 8, en: "CMO Gold", ar: "مدير تسويق ذهبي", price: "59 ر.س", color: "from-yellow-900 to-zinc-900" },
  { id: 9, en: "CHRO Elite", ar: "مدير موارد بشرية", price: "49 ر.س", color: "from-stone-800 to-zinc-900" },
  { id: 10, en: "Sales Titan", ar: "مبيعات تيتان", price: "39 ر.س", color: "from-zinc-800 to-neutral-900" },
  { id: 11, en: "Project Commander", ar: "مدير مشاريع", price: "49 ر.س", color: "from-neutral-800 to-zinc-800" },
  { id: 12, en: "Finance Sovereign", ar: "مالية سيادية", price: "69 ر.س", color: "from-slate-800 to-black" },
  { id: 13, en: "Operations Forge", ar: "عمليات فورج", price: "49 ر.س", color: "from-zinc-900 to-stone-900" },
  { id: 14, en: "Product Vision", ar: "منتج فيجن", price: "59 ر.س", color: "from-gray-900 to-zinc-900" },
  { id: 15, en: "Marketing Pulse", ar: "تسويق نبض", price: "59 ر.س", color: "from-zinc-800 to-black" },
];
export default function Page() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#080808] text-white">
      <nav className="sticky top-0 z-50 bg-black/90 border-b border-white/10 px-4 py-3 flex justify-between">
        <div className="font-serif text-xl">ALTIMA</div>
        <div className="text-xs text-white/60">FL-371212741 | 1035611989</div>
      </nav>
      <section className="px-4 py-10 text-center">
        <h1 className="text-4xl md:text-6xl font-serif">حزمة ALTIMA الفاخرة<br/>15 قالب تنفيذي</h1>
        <p className="mt-4 text-white/60 text-sm">مصنعك الخاص Luxury Edition - تسليم فوري Google Drive</p>
      </section>
      <section className="px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-28">
        {templates.map((t) => (
          <div key={t.id} className="rounded-2xl border border-white/10 overflow-hidden bg-[#121212]">
            <div className={`h-28 bg-gradient-to-br ${t.color} flex items-center justify-center`}>
              <span className="text-sm">{t.en}</span>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold">{t.en}</h3>
              <p className="text-xs text-white/50">{t.ar}</p>
              <a href="/checkout" className="mt-3 block w-full text-center bg-[#f5d76e] text-black py-2.5 rounded-xl text-sm font-bold">جاهز - اطلب 249 ر.س</a>
            </div>
          </div>
        ))}
      </section>
      <footer className="border-t border-white/10 bg-black px-4 py-8 text-center text-xs text-white/50">
        <div className="flex justify-center gap-4 mb-4">
          <a href="/terms" className="underline">الشروط</a>
          <a href="/privacy-policy" className="underline">الخصوصية</a>
          <a href="/return-policy" className="underline">الاسترجاع</a>
        </div>
        <p>ALTIMA - 1035611989 - FL-371212741 - ashwan241@gmail.com - 0502836333</p>
        <p>https://altima-store.vercel.app</p>
      </footer>
    </main>
  );
}