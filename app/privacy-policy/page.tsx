export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <a href="/" className="text-sm text-gray-500 hover:text-black">← الرجوع للمتجر</a>
        </div>
        <h1 className="text-4xl font-black mb-2">سياسة الخصوصية</h1>
        <p className="text-gray-500 mb-10">آخر تحديث: 21 أكتوبر 2026 - ملتزمون بنظام حماية البيانات الشخصية السعودي</p>
        
        <div className="space-y-8 text-[15px] leading-8 text-gray-800">
          <section>
            <h2 className="text-xl font-bold mb-3">1. البيانات التي نجمعها</h2>
            <p>الاسم، البريد، الجوال عند الشراء - عنوان IP ونوع المتصفح للتحليلات - بيانات الدفع تتم عبر Tap/Paylink ولا نحتفظ بها.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. كيف نستخدم بياناتك</h2>
            <p>لمعالجة الطلبات وتسليم المنتجات الرقمية، إرسال روابط التحميل والفواتير، تحسين تجربة المستخدم.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. مشاركة البيانات</h2>
            <p>لا نبيع بياناتك أبداً. نشاركها فقط مع بوابات الدفع (Tap, Paylink) لمعالجة الدفع، وخدمات الاستضافة (Vercel)، والجهات الحكومية إذا طلبت قانوناً.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. حماية البيانات</h2>
            <p>تشفير SSL لجميع الصفحات - عدم تخزين بيانات البطاقات (PCI DSS) - خوادم آمنة في Vercel.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. حقوقك</h2>
            <p>الحق في معرفة ما نجمعه، طلب حذف بياناتك عبر ashwan241@gmail.com، الاعتراض على المعالجة.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. التواصل</h2>
            <p>ashwan241@gmail.com - 0502963333 - وثيقة العمل الحر FL-371212741</p>
          </section>
        </div>
      </div>
    </div>
  )
}
