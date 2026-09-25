import React from 'react';

export default function ReturnPolicyPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#08080A] text-white font-[Tajawal] selection:bg-[#D4AF37]/30">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap');`}</style>
      
      {/* Header - Same as your store screenshot */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#08080A]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-[12px] bg-gradient-to-br from-[#FFD86B] to-[#B8962E] flex items-center justify-center text-black font-black text-xl shadow-lg">A</div>
            <div className="leading-none">
              <div className="font-black text-[20px] tracking-tight">ألتيما</div>
              <div className="text-[11px] tracking-[0.18em] text-white/50 mt-[1px]">EXECUTIVE CVS — BY MOHAMMED</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-4 py-2 rounded-full bg-white text-black text-sm font-bold flex items-center gap-2">EN <span className="w-2 h-2 bg-black/40 rounded-full"></span></div>
          </div>
        </div>
      </header>

      {/* Badge */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[12px] text-white/60">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          إصدار 2025 — دفع آمن بمدى و APPLE PAY
        </div>
      </div>

      {/* Title */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-6">
        <h1 className="text-[42px] md:text-[52px] font-black leading-[0.95] tracking-tight">
          سياسة <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#FFE8A3] to-[#D4AF37]">الاسترجاع</span><br/>والاستبدال
        </h1>
        <p className="mt-4 text-white/50 text-[15px]">آخر تحديث: 14 مايو 2026 — متوافق مع متطلبات جيديا للدفع</p>
      </div>

      {/* Payment pills - same as store */}
      <div className="max-w-4xl mx-auto px-6 pb-10">
        <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white/[0.06] border border-white/10">
          <span className="text-[12px] text-white/50 pr-2">ادفع بـ</span>
          <span className="px-3 py-1.5 rounded-full bg-black text-white text-xs flex items-center gap-1">Apple Pay </span>
          <span className="px-3 py-1.5 rounded-full bg-[#00D26A] text-black text-xs font-bold">mada مدى</span>
          <span className="px-3 py-1.5 rounded-full bg-white text-black text-xs font-bold">Visa • MC</span>
        </div>
      </div>

      {/* Content Card */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="rounded-[24px] bg-[#121214] border border-white/10 p-8 md:p-10 space-y-8">
          
          <section>
            <h2 className="text-[20px] font-bold mb-3">1. طبيعة المنتج</h2>
            <p className="text-white/60 leading-8 text-[15px]">
              جميع منتجات <span className="text-white font-bold">ألتيما</span> هي قوالب سيرة ذاتية رقمية تنفيذية بصيغة Word قابلة للتحميل الفوري بعد إتمام الدفع عبر بوابة جيديا. بمجرد إتمام التحميل، يعتبر المنتج قد تم استلامه والاستفادة منه.
            </p>
          </section>

          <div className="h-px bg-white/10"></div>

          <section>
            <h2 className="text-[20px] font-bold mb-3">2. عدم إمكانية الاسترجاع بعد التحميل</h2>
            <div className="rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 p-4 text-[14px] leading-7 text-[#FFE8A3]">
              نظراً لطبيعة المنتجات الرقمية، لا يمكن استرجاع المبلغ بعد تحميل الملف، وذلك حماية لحقوق الملكية الفكرية، وهذا البند متوافق مع سياسات بوابات الدفع العالمية ومع متطلبات <strong>جيديا Geidea</strong>.
            </div>
          </section>

          <div className="h-px bg-white/10"></div>

          <section>
            <h2 className="text-[20px] font-bold mb-3">3. حالات الاستثناء للاسترجاع</h2>
            <ul className="space-y-3 text-[14px] text-white/60 leading-7 list-disc pr-5">
              <li>الملف تالف ولا يفتح نهائياً بعد المحاولة على أكثر من جهاز</li>
              <li>تم خصم المبلغ مرتين (دفع مكرر) — يسترجع المبلغ الزائد خلال 3 أيام</li>
              <li>تم إرسال قالب خاطئ غير الذي طلبته</li>
            </ul>
            <p className="mt-3 text-[13px] text-white/40">يجب تقديم طلب الاسترجاع خلال 7 أيام من تاريخ الشراء.</p>
          </section>

          <div className="h-px bg-white/10"></div>

          <section>
            <h2 className="text-[20px] font-bold mb-3">4. كيفية طلب الاسترجاع</h2>
            <p className="text-white/60 text-[14px] leading-7">
              راسلنا على البريد الرسمي الموحد مع عقد جيديا:
            </p>
            <div className="mt-4 flex flex-col md:flex-row gap-3">
              <div className="flex-1 rounded-xl bg-black border border-white/10 p-4">
                <div className="text-[11px] text-white/40">البريد الإلكتروني</div>
                <div className="text-[15px] font-bold text-[#D4AF37] dir-ltr text-right">ashwan241@gmail.com</div>
              </div>
              <div className="flex-1 rounded-xl bg-black border border-white/10 p-4">
                <div className="text-[11px] text-white/40">رقم الطلب + سكرين شوت</div>
                <div className="text-[13px] text-white/60">يرجى إرفاق رقم الطلب وصورة المشكلة</div>
              </div>
            </div>
            <p className="mt-3 text-[13px] text-white/40">سيتم الرد خلال 24 ساعة، ومعالجة الاسترجاع خلال 3-5 أيام عمل عبر بوابة جيديا لنفس وسيلة الدفع.</p>
          </section>

          <div className="h-px bg-white/10"></div>

          <section>
            <h2 className="text-[20px] font-bold mb-3">5. معلومات التاجر</h2>
            <div className="grid md:grid-cols-2 gap-3 text-[13px]">
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                <div className="text-white/40">اسم المتجر</div>
                <div className="font-bold">ألتيما - قوالب السيرة التنفيذية</div>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                <div className="text-white/40">صاحب المتجر</div>
                <div className="font-bold">محمد بن عشوان — وثيقة عمل حر FL-611870833</div>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                <div className="text-white/40">انستقرام</div>
                <div className="font-bold">@altima261</div>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                <div className="text-white/40">الموقع</div>
                <div className="font-bold">الهفوف، المنطقة الشرقية، السعودية</div>
              </div>
            </div>
          </section>

          <div className="rounded-full bg-[#0A3D1F] border border-[#00D26A]/20 p-3 text-center text-[12px] text-[#9DFFC0]">
            مدعوم من البنوك السعودية - متوافق مع هيئة الزكاة والضريبة والجمارك ZATCA
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-8 flex justify-center">
          <a href="/" className="px-8 py-3 rounded-full bg-gradient-to-br from-[#FFD86B] to-[#B8962E] text-black font-black text-[14px]">العودة للمتجر</a>
        </div>
      </div>
    </div>
  );
}
