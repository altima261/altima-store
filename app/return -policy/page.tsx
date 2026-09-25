export default function ReturnPolicyPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#08080A] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[42px] font-black">سياسة <span className="text-[#D4AF37]">الاسترجاع</span> والاستبدال</h1>
        <p className="mt-2 text-white/50">آخر تحديث: 14 مايو 2026 — متوافق مع جيديا</p>

        <div className="mt-8 rounded-[24px] bg-[#121214] border border-white/10 p-8 space-y-6">
          <section>
            <h2 className="text-[20px] font-bold mb-3">1. طبيعة المنتج</h2>
            <p className="text-white/60 leading-8">منتجات ألتيما قوالب رقمية قابلة للتحميل الفوري بعد الدفع عبر جيديا.</p>
          </section>
          <div className="h-px bg-white/10"></div>
          <section>
            <h2 className="text-[20px] font-bold mb-3">2. عدم الاسترجاع بعد التحميل</h2>
            <div className="rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 p-4 text-[#FFE8A3] text-[14px]">
              لا يمكن استرجاع المبلغ بعد تحميل الملف حماية للملكية الفكرية، متوافق مع جيديا Geidea.
            </div>
          </section>
          <section>
            <h2 className="text-[20px] font-bold mb-3">3. حالات الاستثناء</h2>
            <ul className="list-disc pr-5 text-white/60 text-[14px] space-y-2">
              <li>الملف تالف ولا يفتح</li>
              <li>خصم مكرر — يسترجع خلال 3 أيام</li>
              <li>قالب خاطئ</li>
            </ul>
          </section>
          <section>
            <h2 className="text-[20px] font-bold mb-3">4. كيفية طلب الاسترجاع</h2>
            <div className="rounded-xl bg-black border border-white/10 p-4">
              <div className="text-[11px] text-white/40">البريد الرسمي الموحد مع جيديا</div>
              <div className="font-bold text-[#D4AF37]">ashwan241@gmail.com</div>
            </div>
            <p className="mt-3 text-[13px] text-white/40">الرد خلال 24 ساعة، المعالجة 3-5 أيام عبر جيديا.</p>
          </section>
          <div className="rounded-full bg-[#0A3D1F] border border-[#00D26A]/20 p-3 text-center text-[12px] text-[#9DFFC0]">
            متوافق مع ZATCA وهيئة الزكاة والضريبة
          </div>
        </div>
      </div>
    </div>
  );
}
