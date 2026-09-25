import React from 'react';

export default function TermsPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#08080A] text-white">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap');`}</style>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#08080A]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-[12px] bg-gradient-to-br from-[#FFD86B] to-[#B8962E] flex items-center justify-center text-black font-black text-xl">A</div>
            <div className="leading-none"><div className="font-black text-[20px]">ألتيما</div><div className="text-[11px] tracking-[0.18em] text-white/50">EXECUTIVE CVS — BY MOHAMMED</div></div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pt-10 pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[12px] text-white/60 mb-6">الشروط والأحكام — إصدار 2025</div>
        <h1 className="text-[42px] font-black leading-[0.95]">الشروط <span className="text-[#D4AF37]">والأحكام</span></h1>
        <p className="mt-3 text-white/50 text-[14px]">آخر تحديث: 14 مايو 2026</p>

        <div className="mt-10 rounded-[24px] bg-[#121214] border border-white/10 p-8 md:p-10 space-y-8 text-[14px] leading-8 text-white/60">
          <section><h2 className="text-white font-bold text-[18px] mb-2">1. الترخيص</h2><p>شراء القالب يمنحك ترخيص استخدام شخصي واحد. يمنع إعادة البيع أو التوزيع أو المشاركة العامة للقوالب. جميع القوالب محمية بحقوق ألتيما.</p></section>
          <section><h2 className="text-white font-bold text-[18px] mb-2">2. الاستخدام</h2><p>القوالب بصيغة Word قابلة للتعديل الكامل. نضمن توافقها مع أنظمة ATS. الدعم الفني يشمل المساعدة في التعديل البسيط عبر ashwan241@gmail.com</p></section>
          <section><h2 className="text-white font-bold text-[18px] mb-2">3. الدفع</h2><p>جميع المدفوعات تتم عبر بوابة <strong>جيديا Geidea</strong> المدعومة من البنوك السعودية وتدعم مدى و Apple Pay و Visa/MC. الأسعار بالريال السعودي وتشمل الضريبة.</p></section>
          <section><h2 className="text-white font-bold text-[18px] mb-2">4. الملكية الفكرية</h2><p>تصاميم ألتيما تنفيذية حصرية لمدراء C-Level ورؤساء الأقسام. أي نسخ أو تقليد يعرض للمساءلة القانونية حسب نظام المملكة.</p></section>
          <section><h2 className="text-white font-bold text-[18px] mb-2">5. التواصل الرسمي</h2><div className="rounded-xl bg-black border border-white/10 p-4"><div className="text-white/40 text-[11px]">البريد الموحد مع عقد جيديا</div><div className="text-[#D4AF37] font-bold dir-ltr text-right">ashwan241@gmail.com</div><div className="mt-2">انستقرام: @altima261 — وثيقة عمل حر: FL-611870833</div></div></section>
          <div className="rounded-full bg-[#0A3D1F] border border-[#00D26A]/20 p-3 text-center text-[12px] text-[#9DFFC0]">متوافق مع نظام التجارة الإلكترونية السعودي - ZATCA</div>
        </div>
      </div>
    </div>
  );
}
