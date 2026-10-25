'use client'

export default function Home() {
  const templates = [
    { id: 'CEO-Gold', name: 'CEO Minimal Gold', role: 'المدير التنفيذي', color: '#D4AF37', price: '59 ر.س', tags: 'CEO, Executive, Gold' },
    { id: 'CFO', name: 'CFO Executive', role: 'المدير المالي', color: '#0A1931', price: '49 ر.س', tags: 'CFO, Finance, Blue' },
    { id: 'Legal', name: 'محامي شركات', role: 'المستشار القانوني', color: '#1A1A1A', price: '39 ر.س', tags: 'Legal, Lawyer, Black' },
    { id: 'PMP', name: 'مدير مشاريع PMP', role: 'PMP Certified', color: '#0F4C75', price: '49 ر.س', tags: 'PMP, Project, Manager' },
    { id: 'Sales', name: 'مدير مبيعات', role: 'Sales Director', color: '#B22222', price: '29 ر.س', tags: 'Sales, Director, Red' },
    { id: 'HR', name: 'الاستشاري الذهبي', role: 'HR Consultant', color: '#2C3E50', price: '39 ر.س', tags: 'HR, Consultant' },
  ]

  return (
    <div dir="rtl" style={{ minHeight: '100vh', background: '#08080a', color: '#fff', fontFamily: 'system-ui', padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1100, margin: '0 auto 24px', padding: '12px 20px', background: '#111114', borderRadius: 24, border: '1px solid #222' }}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 900 }}>ALTIMA STORE</h1>
          <p style={{ fontSize: 11, color: '#aaa' }}>قوالب سيرة تنفيذية - وثيقة FL-371212741</p>
        </div>
        <a href="/checkout" style={{ background: '#fff', color: '#000', padding: '8px 18px', borderRadius: 20, fontSize: 12, fontWeight: 'bold', textDecoration: 'none' }}>المتجر</a>
      </header>

      <main style={{ maxWidth: 1100, margin: '0 auto' }}>
        <section style={{ textAlign: 'center', padding: '40px 20px 30px' }}>
          <h2 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            سيرتك الذاتية<br/>
            <span style={{ color: '#00F5FF' }}>بلمسة ALTIMA</span>
          </h2>
          <p style={{ fontSize: 14, color: '#aaa', maxWidth: 700, margin: '0 auto 20px', lineHeight: 1.8 }}>
            تم! حولت لك مدير الأعمال إلى مصنع قوالب سيرة تنفيذية للشركات للسوق العربي والإنجليزي معاً.
            <br/>20 قالب تنفيذي جاهز للتصميم فوراً - مو للطلاب، فقط لموظفي الشركات
          </p>
          <a href="/checkout" style={{ display: 'inline-block', background: '#00F5FF', color: '#000', padding: '14px 32px', borderRadius: 30, fontWeight: 900, textDecoration: 'none', fontSize: 16 }}>اطلب حزمة 10 قوالب - 199 ريال</a>
          <p style={{ marginTop: 12, fontSize: 11, color: '#666' }}>✅ دفع آمن Tap | ✅ تسليم فوري | ✅ ضمان استرداد</p>
        </section>

        <section style={{ marginTop: 30 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h3 style={{ fontSize: 18, fontWeight: 800 }}>Cv Template Factory - مصنعك الخاص</h3>
            <span style={{ fontSize: 12, color: '#00F5FF', background: '#111', padding: '4px 10px', borderRadius: 10, border: '1px solid #222' }}>20 قالب • 84% مبيعات</span>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 16 }}>
            {templates.map((t) => (
              <div key={t.id} style={{ background: '#111114', border: '1px solid #222', borderRadius: 16, padding: 12, textAlign: 'left' }}>
                <div style={{ height: 90, background: `linear-gradient(135deg, ${t.color} 0%, #000 100%)`, borderRadius: 12, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 900, letterSpacing: 1 }}>{t.name}</div>
                <div style={{ fontSize: 12, fontWeight: 700 }}>{t.name}</div>
                <div style={{ fontSize: 10, color: '#888', marginTop: 2 }}>{t.role}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                  <span style={{ fontSize: 11, background: '#00F5FF', color: '#000', padding: '2px 8px', borderRadius: 20, fontWeight: 800 }}>{t.price}</span>
                  <span style={{ fontSize: 9, color: '#666' }}>{t.tags}</span>
                </div>
                <div style={{ marginTop: 8, background: '#FFD700', color: '#000', textAlign: 'center', padding: '4px', borderRadius: 8, fontSize: 10, fontWeight: 800 }}>جاهز</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20, background: '#111114', border: '1px dashed #333', borderRadius: 16, padding: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>وش فيه المصنع؟</p>
            <p style={{ fontSize: 12, color: '#aaa', lineHeight: 1.8 }}>
              1. 20 قالب تنفيذي جاهز للتصميم فوراً - مو للطلاب، فقط لموظفي الشركات: محامي شركات، مدير مشاريع، CEO Minimal Gold, CFO, مدير مبيعات PMP...<br/>
              2. كل قالب معه: الألوان المقترحة، السعر (29-59 ر.س)، والكلمات المفتاحية اللي تخليه يطلع أول في بحث Canva
            </p>
          </div>
        </section>
      </main>

      <div style={{ marginTop: 40, borderTop: '1px solid #222', padding: '30px 20px', textAlign: 'center', background: '#111114', borderRadius: 20, maxWidth: 1100, margin: '40px auto 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: 14 }}>
          <a href="/terms" style={{ color: '#00F5FF', textDecoration: 'underline' }}>الشروط والأحكام</a>
          <a href="/privacy-policy" style={{ color: '#00F5FF', textDecoration: 'underline' }}>سياسة الخصوصية</a>
          <a href="/return-policy" style={{ color: '#00F5FF', textDecoration: 'underline' }}>سياسة الاسترداد</a>
        </div>
        <div style={{ marginTop: 15, fontSize: 11, color: '#888' }}>
          ALTIMA Store - وثيقة العمل الحر FL-371212741 - ashwan241@gmail.com - 0502963333<br/>
          مصنع قوالب تنفيذية - 10 قوالب احترافية - دفع آمن عبر Tap
        </div>
      </div>
    </div>
  )
}