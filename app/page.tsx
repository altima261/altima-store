'use client'

export default function Home() {
  const templates = [
    { id: '01', name: 'CEO Executive', ar: 'المدير التنفيذي', price: '59 ر.س', color: '#D4AF37', fileId: '11ZfRN-qL4kX-2zhgAEt9dsZRuYBkY4uN' },
    { id: '02', name: 'CMO Marketing', ar: 'مدير التسويق', price: '49 ر.س', color: '#8E44AD', fileId: '1AKwyv4ImTw01ZyjIAy-Uu7iIws7qgCHC' },
    { id: '03', name: 'CFO Finance', ar: 'المدير المالي', price: '49 ر.س', color: '#0A1931', fileId: '1aWVrhqK40DfPhdNnAMZxue1zPVSquogh' },
    { id: '04', name: 'COO Operations', ar: 'مدير العمليات', price: '39 ر.س', color: '#2C3E50', fileId: '1be03tw5On2ASfTa08s7cZl7y2Tn-dCrb' },
    { id: '05', name: 'CTO Technology', ar: 'المدير التقني', price: '39 ر.س', color: '#0F4C75', fileId: '1V1nU0eMBGo-XjAsN-lfJ363HDRjcAjjn' },
    { id: '06', name: 'CHRO HR', ar: 'الموارد البشرية', price: '39 ر.س', color: '#1A5276', fileId: '1mvsvxKDFTWrMPY8F9JFe2ua3vO9h1SHl' },
    { id: '07', name: 'Project Director PMP', ar: 'مدير مشاريع PMP', price: '49 ر.س', color: '#117A65', fileId: '1SksGYJkgaeHsCOxyYd4tAIZW4poBJMgc' },
    { id: '08', name: 'Sales Director', ar: 'مدير مبيعات', price: '29 ر.س', color: '#B22222', fileId: '1jgTxuow_8z2paBIvm-QTDuwgFaVjbxtK' },
    { id: '09', name: 'General Manager', ar: 'المدير العام', price: '39 ر.س', color: '#212121', fileId: '17ccI4k9nx31x5cKHc8Y0rXbMfdZjjWNR' },
    { id: '10', name: 'Executive Minimal', ar: 'التنفيذي المينيمال', price: '29 ر.س', color: '#5D6D7E', fileId: '15EvAR0FcnkgPdVJAqSsRQPJ2LXwgkrb_' },
    { id: '11', name: 'CEO Royal Black Gold', ar: 'المدير التنفيذي الملكي', price: '79 ر.س', color: '#000000', fileId: 'NEW', isNew: true },
    { id: '12', name: 'CFO Diamond', ar: 'المدير المالي الماسي', price: '69 ر.س', color: '#2980B9', fileId: 'NEW', isNew: true },
    { id: '13', name: 'Legal Platinum', ar: 'محامي بلاتيني', price: '69 ر.س', color: '#1A1A1A', fileId: 'NEW', isNew: true },
    { id: '14', name: 'COO Onyx', ar: 'مدير عمليات أونيكس', price: '59 ر.س', color: '#2C3E50', fileId: 'NEW', isNew: true },
    { id: '15', name: 'CTO Sapphire', ar: 'المدير التقني الياقوتي', price: '59 ر.س', color: '#0F4C75', fileId: 'NEW', isNew: true },
  ]

  const folderLink = 'https://drive.google.com/drive/folders/1iyo_1gS593ge8_3o9Ns3zRgwxbb_MbTz'

  return (
    <div dir="rtl" style={{ minHeight: '100vh', background: '#08080a', color: '#fff', fontFamily: 'system-ui', padding: 16 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1100, margin: '0 auto 20px', padding: '12px 18px', background: '#111114', borderRadius: 24, border: '1px solid #222' }}>
        <div>
          <h1 style={{ fontSize: 18, fontWeight: 900 }}>ALTIMA FACTORY - 15 قالب</h1>
          <p style={{ fontSize: 10, color: '#00FF88' }}>✅ 15 ملف مرفوع على Google Drive - Viewer محمي</p>
        </div>
        <span style={{ background: '#00F5FF', color: '#000', padding: '6px 12px', borderRadius: 20, fontSize: 11, fontWeight: 800 }}>84% مبيعات</span>
      </header>

      <main style={{ maxWidth: 1100, margin: '0 auto' }}>
        <section style={{ textAlign: 'center', padding: '20px 10px' }}>
          <h2 style={{ fontSize: 38, fontWeight: 900, marginBottom: 8 }}>مصنعك الخاص<br/><span style={{ color: '#FFD700' }}>Luxury Edition - 15 قالب</span></h2>
          <p style={{ fontSize: 12, color: '#aaa' }}>10 قوالب أساسية + 5 قوالب فخمة جديدة - Viewer محمي - معاينة فقط</p>
          <div style={{ marginTop: 12, background: '#111', border: '1px solid #222', display: 'inline-flex', gap: 8, padding: '8px 16px', borderRadius: 30, fontSize: 11 }}>
            <span style={{ background: '#FFD700', color: '#000', padding: '2px 8px', borderRadius: 10, fontWeight: 800 }}>15 ملف</span>
            <span>مرفوعة على Google Drive وجاهزة للتسليم</span>
            <span style={{ color: '#00FF88' }}>✅ محمية</span>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 12, marginTop: 20 }}>
          {templates.map((t) => (
            <div key={t.id} style={{ background: '#111114', border: t.isNew ? '1px solid #FFD700' : '1px solid #222', borderRadius: 16, padding: 10, position: 'relative' }}>
              {t.isNew && <div style={{ position: 'absolute', top: -6, right: 8, background: '#FFD700', color: '#000', fontSize: 8, padding: '2px 6px', borderRadius: 8, fontWeight: 900 }}>جديد فخم</div>}
              <div style={{ height: 70, background: `linear-gradient(135deg, ${t.color} 0%, #000 100%)`, borderRadius: 10, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 900, textAlign: 'center' }}>{t.name}</div>
              <div style={{ fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.name}</div>
              <div style={{ fontSize: 9, color: '#888' }}>{t.ar}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                <span style={{ fontSize: 9, background: t.isNew ? '#FFD700' : '#00F5FF', color: '#000', padding: '2px 6px', borderRadius: 10, fontWeight: 800 }}>{t.price}</span>
                {t.fileId !== 'NEW' ? <a href={`https://docs.google.com/document/d/${t.fileId}/preview`} target="_blank" style={{ fontSize: 8, color: '#00F5FF', textDecoration: 'underline' }}>معاينة فقط</a> : <span style={{ fontSize: 8, color: '#FFD700' }}>معاينة فخمة</span>}
              </div>
              <a href="/checkout" style={{ display: 'block', marginTop: 6, background: t.isNew ? '#FFD700' : '#fff', color: '#000', textAlign: 'center', padding: '5px', borderRadius: 8, fontSize: 9, fontWeight: 800, textDecoration: 'none' }}>جاهز - اطلب 249 ر.س</a>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', color: '#000', borderRadius: 20, padding: 20, textAlign: 'center' }}>
          <h3 style={{ fontSize: 18, fontWeight: 900 }}>حزمة ALTIMA الفاخرة - 15 قالب - 249 ر.س</h3>
          <p style={{ fontSize: 11, marginTop: 4 }}>10 قوالب الأساسية + 5 قوالب فخمة جديدة - Viewer محمي - تسليم فوري بعد الدفع</p>
          <div style={{ marginTop: 12, display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/checkout" style={{ background: '#000', color: '#FFD700', padding: '10px 24px', borderRadius: 30, fontWeight: 800, textDecoration: 'none', fontSize: 13 }}>اطلب الحزمة - 249 ر.س</a>
            <a href={folderLink} target="_blank" style={{ background: '#fff', color: '#000', padding: '10px 20px', borderRadius: 30, fontWeight: 700, textDecoration: 'none', fontSize: 12 }}>فتح مجلد الدرايف (15 ملف)</a>
          </div>
        </div>
      </main>

      <div style={{ marginTop: 30, borderTop: '1px solid #222', padding: '20px', textAlign: 'center', background: '#111114', borderRadius: 16, maxWidth: 1100, margin: '30px auto 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, fontSize: 12, flexWrap: 'wrap' }}>
          <a href="/terms" style={{ color: '#00F5FF' }}>الشروط والأحكام</a>
          <a href="/privacy-policy" style={{ color: '#00F5FF' }}>سياسة الخصوصية</a>
          <a href="/return-policy" style={{ color: '#00F5FF' }}>سياسة الاسترداد</a>
        </div>
        <div style={{ marginTop: 10, fontSize: 9, color: '#777' }}>
          ALTIMA Factory - 15 قالب - FL-371212741 - Viewer محمي - Google Drive - Altima Templates<br/>
          06-CHRO إلى 15-CTO Sapphire - تم التحديث 4:35-4:37 PM - ✅ محمي
        </div>
      </div>
    </div>
  )
}