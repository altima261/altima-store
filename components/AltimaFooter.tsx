import React from 'react';
import Link from 'next/link';

export default function AltimaFooter() {
  return (
    <footer dir="rtl" className="bg-[#050507] border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#FFD86B] to-[#B8962E] flex items-center justify-center text-black font-black">A</div>
              <div>
                <div className="font-black text-[18px] text-white">ألتيما</div>
                <div className="text-[10px] tracking-[0.18em] text-white/40">EXECUTIVE CVS — BY MOHAMMED</div>
              </div>
            </div>
            <p className="mt-4 text-[13px] leading-7 text-white/50 max-w-[320px]">
              قوالب سيرة ذاتية تنفيذية مصممة لمدراء C-Level ورؤساء الأقسام والاستشاريين الذين تُقاس خبرتهم بالملايين — وليس بعدد الصفحات.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 p-1.5 rounded-full bg-white/[0.06] border border-white/10">
              <span className="px-3 py-1 rounded-full bg-black text-white text-[11px]">Apple Pay </span>
              <span className="px-3 py-1 rounded-full bg-[#00D26A] text-black text-[11px] font-bold">mada مدى</span>
              <span className="px-3 py-1 rounded-full bg-white text-black text-[11px] font-bold">Visa • MC</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-[13px]">
            <div>
              <div className="text-white font-bold mb-3">المتجر</div>
              <div className="space-y-2 text-white/50">
                <div><Link href="/" className="hover:text-[#D4AF37]">تصفح القوالب</Link></div>
                <div><Link href="/#bundle" className="hover:text-[#D4AF37]">حزمة المدراء</Link></div>
                <div className="text-white/30">371 ر.س بدلاً من 450 ر.س</div>
              </div>
            </div>
            <div>
              <div className="text-white font-bold mb-3">قانوني - مطلوب لجيديا</div>
              <div className="space-y-2 text-white/50">
                <div><Link href="/privacy-policy" className="hover:text-[#D4AF37]">سياسة الخصوصية</Link></div>
                <div><Link href="/terms" className="hover:text-[#D4AF37]">الشروط والأحكام</Link></div>
                <div><Link href="/return-policy" className="hover:text-[#D4AF37]">سياسة الاسترجاع والاستبدال</Link></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 items-center">
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="px-4 py-2 rounded-full bg-[#0A3D1F] border border-[#00D26A]/20 text-[11px] text-[#9DFFC0]">
              مدعوم من البنوك السعودية - متوافق مع هيئة الزكاة والضريبة والجمارك ZATCA
            </div>
            <div className="text-[11px] text-white/30">وثيقة عمل حر: FL-611870833</div>
          </div>
          <div className="text-[11px] text-white/30 dir-ltr text-right flex flex-col md:flex-row gap-2 items-center">
            <span>© 2025 Altima. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="text-[#D4AF37]">ashwan241@gmail.com</span>
            <span className="hidden md:inline">•</span>
            <span>@altima261</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
