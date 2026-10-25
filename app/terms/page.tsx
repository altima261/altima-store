export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <a href="/" className="text-sm text-gray-500 hover:text-black">← الرجوع للمتجر</a>
        </div>
        <h1 className="text-4xl font-black mb-2">الشروط والأحكام</h1>
        <p className="text-gray-500 mb-10">آخر تحديث: 21 أكتوبر 2026 - ALTIMA Store - وثيقة العمل الحر FL-371212741</p>
        
        <div className="space-y-8 text- leading-8 text-gray-800">
          <section>
            <h2 className="text-xl font-bold mb-3">1. صاحب المتجر</h2>
            <p>الاسم: محمد بن عبدالله بن عشوان<br/>رقم الهوية: 1035671989<br/>وثيقة العمل الحر: FL-371212741<br/>البريد: ashwan241@gmail.com - الجوال: 0502963333<br/>المتجر: https://altima-store.vercel.app</p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">2. المنتجات والأسعار</h2>
            <p>منتجات رقمية: حزمة ALTIMA التنفيذية (10 قوالب) - 199 ريال، القالب الفردي - 49 ريال، شاملة الضريبة 15%</p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">3. الدفع والتسليم</h2>
            <p>الدفع عبر Tap Payments و Paylink (مدى، فيزا، ماستركارد، Apple Pay) معتمد من SAMA. التسليم فوري رقمي عبر البريد.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
