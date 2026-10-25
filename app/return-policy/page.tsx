export default function RefundPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <a href="/" className="text-sm text-gray-500 hover:text-black">← الرجوع للمتجر</a>
        </div>
        <h1 className="text-4xl font-black mb-2">سياسة الاسترداد والاسترجاع</h1>
        <p className="text-gray-500 mb-10">آخر تحديث: 21 أكتوبر 2026 - منتجات رقمية</p>
        
        <div className="space-y-8 text-[15px] leading-8 text-gray-800">
          <section>
            <h2 className="text-xl font-bold mb-3">1. طبيعة المنتجات</h2>
            <p>منتجاتنا رقمية قابلة للتحميل الفوري وليست مادية، لذلك تختلف سياسة الاسترداد وفق المادة 8 من لائحة التجارة الإلكترونية السعودية.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. سياسة الاسترداد</h2>
            <p><strong>قبل التحميل:</strong> يمكنك طلب استرداد كامل خلال 7 أيام إذا لم تقم بتحميل الملفات.<br/>
            <strong>بعد التحميل:</strong> لا يمكن الاسترداد بعد التحميل لأن المنتج رقمي ولا يمكن إرجاعه.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. حالات الاسترداد الكامل</h2>
            <p>نقوم بالاسترداد الكامل إذا: لم تستلم رابط التحميل خلال 24 ساعة، الملفات تالفة وتم إبلاغنا خلال 7 أيام، تم الدفع مرتين بالخطأ.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. كيفية طلب الاسترداد</h2>
            <p>أرسل إيميل إلى ashwan241@gmail.com مع رقم الطلب والبريد المستخدم وسبب الاسترداد. نرد خلال 24 ساعة ونعالج الاسترداد خلال 3-7 أيام عمل عبر نفس وسيلة الدفع (Tap/Paylink).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. الدعم بدلاً من الاسترداد</h2>
            <p>بدلاً من الاسترداد نقدم: دعم فني مجاني لتعديل القوالب، استبدال القالب بقالب آخر مجاناً خلال 7 أيام، شروحات فيديو.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. التواصل</h2>
            <p>البريد: ashwan241@gmail.com - الجوال: 0502963333<br/>
            المتجر: https://altima-store.vercel.app<br/>
            وثيقة العمل الحر: FL-371212741<br/>
            جميع عمليات الاسترداد تتم عبر Tap Payments أو Paylink.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
