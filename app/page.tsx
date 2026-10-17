// ALTIMA Store - Fully Responsive - Mobile / iPad / Desktop Auto-Adaptive
// Copy this to app/page.tsx in your altima-store.vercel.app project
// Owner: Mohammed Bin Ashwan - @altima261 - ashwan241@gmail.com
// Tech: Next.js 14 + Tailwind CSS + Tap Payments

import { useState } from 'react';

export default function Page() {
  const [cart, setCart] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const products = [
    { id: 1, name: 'CEO Executive', price: '99 ر.س', badge: 'الأكثر مبيعاً', en: 'C-Level Resume' },
    { id: 2, name: 'Modern Professional', price: '79 ر.س', badge: 'جديد', en: 'Modern' },
    { id: 3, name: 'ATS Optimized', price: '79 ر.س', badge: 'ATS', en: 'ATS Friendly' },
    { id: 4, name: 'Tech Engineer', price: '69 ر.س', badge: '', en: 'Tech' },
    { id: 5, name: 'Creative Designer', price: '69 ر.س', badge: '', en: 'Creative' },
    { id: 6, name: 'Medical', price: '89 ر.س', badge: '', en: 'Medical' },
    { id: 7, name: 'Legal', price: '89 ر.س', badge: '', en: 'Legal' },
    { id: 8, name: 'Finance', price: '89 ر.س', badge: '', en: 'Finance' },
    { id: 9, name: 'Startup Founder', price: '99 ر.س', badge: '', en: 'Founder' },
    { id: 10, name: 'Minimalist', price: '59 ر.س', badge: '', en: 'Minimal' },
  ];

  return (
    <main className="min-h-screen bg-black text-white antialiased" dir="rtl">
      {/* HEADER - Responsive */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex h-14 md:h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-bold tracking-widest">ALTIMA</span>
              <span className="hidden md:inline text-[10px] px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">TAP ACTIVE</span>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
              <a className="hover:text-white" href="#products">القوالب</a>
              <a className="hover:text-white" href="/privacy-policy">الخصوصية</a>
              <a className="hover:text-white" href="/return-policy">الاسترجاع</a>
              <span className="text-zinc-600">68090875</span>
            </nav>

            {/* Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <button className="relative min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 px-3 md:px-4 py-2 rounded-full bg-white text-black text-sm font-medium">
                السلة ({cart})
              </button>
              <button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden min-h-[44px] min-w-[44px] grid place-items-center rounded-full border border-zinc-800">
                ☰
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden py-4 border-t border-zinc-800 flex flex-col gap-3 text-sm">
              <a href="#products" className="py-2">القوالب</a>
              <a href="/privacy-policy" className="py-2">الخصوصية</a>
              <a href="/return-policy" className="py-2">الاسترجاع</a>
            </div>
          )}
        </div>
      </header>

      {/* HERO - Responsive Text & Layout */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-[11px] md:text-xs px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 mb-4">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              متجر لايف - altima-store.vercel.app
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              قوالب سيرة ذاتية
              <span className="block text-zinc-500 mt-1 md:mt-2">تنفيذية بمعايير CEO</span>
            </h1>
            <p className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg text-zinc-400 leading-relaxed max-w-xl">
              10 قوالب احترافية متوافقة مع ATS، بالعربي والإنجليزي، جاهزة للتعديل. دفع آمن عبر مدى و Apple Pay و STC Pay بواسطة Tap.
            </p>
            
            {/* CTA - Stack on mobile, row on desktop */}
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#bundle" className="min-h-[48px] grid place-items-center px-6 md:px-8 rounded-full bg-white text-black font-medium text-sm md:text-base">
                احصل على الباقة الكاملة - 199 ر.س
              </a>
              <a href="#products" className="min-h-[48px] grid place-items-center px-6 rounded-full border border-zinc-800 text-sm">
                تصفح القوالب
              </a>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-zinc-500">
              <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800">✓ مدى</span>
              <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800">✓ Apple Pay</span>
              <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800">✓ STC Pay</span>
              <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800">✓ ATS</span>
            </div>
          </div>
          
          {/* CEO Bundle Card - Responsive */}
          <div id="bundle" className="order-1 lg:order-2">
            <div className="relative rounded-[24px] md:rounded-[32px] border border-yellow-500/20 bg-gradient-to-b from-zinc-900 to-black p-5 md:p-8">
              <div className="absolute top-4 left-4 md:top-6 md:left-6 text-[10px] px-2 py-1 rounded-full bg-yellow-500 text-black font-bold">CEO BUNDLE</div>
              <h3 className="text-xl md:text-2xl font-bold mt-6">الباقة التنفيذية الكاملة</h3>
              <p className="text-xs md:text-sm text-zinc-400 mt-2">10 قوالب + خطابات + دليل ATS</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-bold">199</span><span className="text-sm">ر.س</span>
                <span className="text-xs line-through text-zinc-600 mr-2">990 ر.س</span>
              </div>
              <button onClick={()=>setCart(c=>c+1)} className="mt-5 md:mt-6 w-full min-h-[48px] md:min-h-[52px] rounded-full bg-yellow-500 text-black font-bold text-sm md:text-base">
                شراء فوري - تحميل مباشر
              </button>
              <p className="mt-3 text-[11px] text-center text-zinc-500">Tap Payments • 68090875 ACTIVE</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID - 1 col mobile, 2 iPad, 4 desktop */}
      <section id="products" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pb-24 md:pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold">كل القوالب</h2>
          <p className="text-xs md:text-sm text-zinc-500">متجاوب تلقائياً - جوال / آيباد / كمبيوتر</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map(p=>(
            <div key={p.id} className="group relative rounded-2xl md:rounded-3xl border border-zinc-800 bg-zinc-900/50 p-4 md:p-5 hover:border-zinc-700 transition">
              {p.badge && <span className="absolute top-3 left-3 md:top-4 md:left-4 text-[10px] px-2 py-0.5 rounded-full bg-white text-black">{p.badge}</span>}
              <div className="aspect-[4/3] rounded-xl md:rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 grid place-items-center text-zinc-600 text-xs">
                {p.en} Preview
              </div>
              <h3 className="mt-3 md:mt-4 font-medium text-sm md:text-[15px]">{p.name}</h3>
              <p className="text-[11px] text-zinc-500">{p.en}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-bold">{p.price}</span>
                <button onClick={()=>setCart(c=>c+1)} className="min-h-[40px] px-4 rounded-full bg-white text-black text-xs font-medium">إضافة</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE STICKY CHECKOUT - Only on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-800 bg-black/95 backdrop-blur p-3">
        <div className="flex gap-2">
          <button className="flex-1 min-h-[48px] rounded-full bg-white text-black font-bold text-sm">الدفع {cart>0?`(${cart})`:''} - Tap</button>
          <button className="min-h-[48px] px-4 rounded-full border border-zinc-800 text-sm">Pay</button>
        </div>
        <p className="mt-2 text-[10px] text-center text-zinc-500">altima-store.vercel.app • آمن ومشفر</p>
      </div>

      {/* FOOTER - Stacked mobile, 4 cols desktop */}
      <footer className="border-t border-zinc-800 mt-10 md:mt-0">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-sm">
            <div>
              <div className="font-bold">ALTIMA</div>
              <p className="mt-2 text-xs text-zinc-500 leading-relaxed">متجر قوالب تنفيذية - جدة، السعودية. وثيقة عمل حر: برمجة وتطوير المواقع. Tap 68090875.</p>
            </div>
            <div>
              <div className="text-zinc-400 text-xs mb-2">روابط</div>
              <div className="flex flex-col gap-2 text-zinc-300">
                <a href="/privacy-policy">سياسة الخصوصية</a>
                <a href="/return-policy">سياسة الاسترجاع</a>
                <a href="/terms">الشروط</a>
              </div>
            </div>
            <div>
              <div className="text-zinc-400 text-xs mb-2">الدفع</div>
              <div className="text-zinc-300 text-xs leading-6">مدى • Apple Pay • STC Pay<br/>Tap Company KSA<br/>Account: ALTIMASTOREKSA261</div>
            </div>
            <div>
              <div className="text-zinc-400 text-xs mb-2">تواصل</div>
              <div className="text-zinc-300 text-xs">ashwan241@gmail.com<br/>@altima261 • جدة</div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-900 text-[11px] text-zinc-600 text-center md:text-left">
            © 2026 ALTIMA - Responsive • Mobile / iPad / Desktop Auto
          </div>
        </div>
      </footer>
    </main>
  );
}
