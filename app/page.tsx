'use client'

export default function Home() {
  const templates = [
    { id: '01', name: 'CEO Executive', nameAr: 'المدير التنفيذي', file: '01-CEO-Executive-ALTIMA.docx', driveId: '11ZfRN-qL4kX-2zhgAEt9dsZRuYBkY4uN', price: '59 ر.س', color: '#D4AF37' },
    { id: '02', name: 'CMO Marketing', nameAr: 'مدير التسويق', file: '02-CMO-Marketing-ALTIMA.docx', driveId: '1AKwyv4ImTw01ZyjIAy-Uu7iIws7qgCHC', price: '49 ر.س', color: '#8E44AD' },
    { id: '03', name: 'CFO Finance', nameAr: 'المدير المالي', file: '03-CFO-Finance-ALTIMA.docx', driveId: '1aWVrhqK40DfPhdNnAMZxue1zPVSquogh', price: '49 ر.س', color: '#0A1931' },
    { id: '04', name: 'COO Operations', nameAr: 'مدير العمليات', file: '04-COO-Operations-ALTIMA.docx', driveId: '1be03tw5On2ASfTa08s7cZl7y2Tn-dCrb', price: '39 ر.س', color: '#2C3E50' },
    { id: '05', name: 'CTO Technology', nameAr: 'المدير التقني', file: '05-CTO-Technology-ALTIMA.docx', driveId: '1V1nU0eMBGo-XjAsN-lfJ363HDRjcAjjn', price: '39 ر.س', color: '#0F4C75' },
    { id: '06', name: 'CHRO HR', nameAr: 'مدير الموارد البشرية', file: '06-CHRO-HR-ALTIMA.docx', driveId: '1mvsvxKDFTWrMPY8F9JFe2ua3vO9h1SHl', price: '39 ر.س', color: '#1A5276' },
    { id: '07', name: 'Project Director PMP', nameAr: 'مدير مشاريع PMP', file: '07-Project-Director-ALTIMA.docx', driveId: '1SksGYJkgaeHsCOxyYd4tAIZW4poBJMgc', price: '49 ر.س', color: '#117A65' },
    { id: '08', name: 'Sales Director', nameAr: 'مدير مبيعات', file: '08-Sales-Director-ALTIMA.docx', driveId: '1jgTxuow_8z2paBIvm-QTDuwgFaVjbxtK', price: '29 ر.س', color: '#B22222' },
    { id: '09', name: 'General Manager', nameAr: 'المدير العام', file: '09-GM-General-Manager-ALTIMA.docx', driveId: '17ccI4k9nx31x5cKHc8Y0rXbMfdZjjWNR', price: '39 ر.س', color: '#212121' },
    { id: '10', name: 'Executive Minimal', nameAr: 'التنفيذي المينيمال', file: '10-Executive-Minimal-ALTIMA.docx', driveId: '15EvAR0FcnkgPdVJAqSsRQPJ2LXwgkrb_', price: '29 ر.س', color: '#5D6D7E' },
  ]

  const folderLink = 'https://drive.google.com/drive/folders/1iyo_1gS593ge8_3o9Ns3zRgwxbb_MbTz'

  return (
    <div dir="rtl" style={{ minHeight: '100vh', background: '#08080a', color: '#fff', fontFamily: 'system-ui', padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1100, margin: '0 auto 24px', padding: '12px 20px', background: '#111114', borderRadius: 24, border: '1px solid #222' }}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 900 }}>ALTIMA STORE</h1>
          <p style={{ fontSize: 11, color: '#aaa' }}>مصنع قوالب تنفيذية - وثيقة FL-371212741 - 10 قوالب جاهزة</p>
        </div>
        <a href={folderLink} target="_blank" style={{ background: '#fff', color: '#000', padding: '8px 18px', borderRadius: 20, fontSize: 12, fontWeight: 'bold', textDecoration: 'none' }}>عرض الدرايف</a>
      </header>

      <main style={{ maxWidth: 1100, margin: '0 auto' }}>
        <section style={{ textAlign: 'center', padding: '30px 20px 20px' }}>
          <h2 style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
            مصنعك الخاص<br/>
            <span style={{ color: '#00F5FF' }}>Cv Template Factory</span>
          </h2>
          <p style={{ fontSize: 13, color: '#aaa', maxWidth: 700, margin: '0 auto 16px', lineHeight: 1.8 }}>
            20 قالب تنفيذي جاهز فوراً - مو للطلاب، فقط لموظفي الشركات: CEO, CFO, محامي شركات، مدير مشاريع PMP
          </p>
          <div style={{ display: 'inline-flex', gap: 10, alignItems: 'center', background: '#111', border: '1px solid #222', padding: '8px 16px', borderRadius: 30, fontSize: 12 }}>
            <span style={{ background: '#00F5FF', color: '#000', padding: '2px 8px', borderRadius: 10, fontWeight: 800 }}>10 ملفات</span>
            <span>مرفوعة على Google Drive وجاهزة للتسليم</span>
            <span style={{ color: '#00FF88' }}>✅ 84% مبيعات</span>
          </div>
        </section>

        <section style={{ marginTop: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 14 }}>
            {templates.map((t) => (
              <div key={t.id} style={{ background: '#111114', border: '1px solid #222', borderRadius: 16, padding: 10 }}>
                <div style={{ height: 80, background: `linear-gradient(135deg, ${t.color} 0%, #000 100%)`, borderRadius: 12, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 900, textAlign: 'center', padding: 4 }}>{t.name}</div>
                <div style={{ fontSize: 11, fontWeight: 700 }}>{t.name}</div>
                <div style={{ fontSize: 10, color: '#888' }}>{t.nameAr} • {t.file.replace('.docx','')}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                  <span style={{ fontSize: 10, background: '#00F5FF', color: '#000', padding: '2px 6px', borderRadius: 10, fontWeight: 800 }}>{t.price}</span>
                  <a href={`https://docs.google.com/document/d/${t.driveId}/edit`} target="_blank" style={{ fontSize: 9, color: '#00F5FF', textDecoration: 'underline' }}>معاينة</a>
                </div>
                <a href={folderLink} target="_blank" style={{ display: 'block', marginTop: 8, background: '#FFD700', color: '#000', textAlign: 'center', padding: '5px', borderRadius: 8, fontSize: 10, fontWeight: 800, textDecoration: 'none' }}>جاهز - تحميل</a>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24, background: '#00F5FF', color: '#000', borderRadius: 20, padding: 20, textAlign: 'center' }}>
            <h3 style={{ fontSize: 18, fontWeight: 900 }}>حزمة ALTIMA التنفيذية - 10 قوالب - 199 ر.س</h3>
            <p style={{ fontSize: 12, marginTop: 6 }}>كل القوالب اللي فوق في ملف واحد - تسليم فوري بعد الدفع عبر Google Drive</p>
            <div style={{ marginTop: 12, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/checkout" style={{ background: '#000', color: '#fff', padding: '10px 24px', borderRadius: 30, fontWeight: 800, textDecoration: 'none' }}>اطلب الآن - 199 ر.س</a>
              <a href={folderLink} target="_blank" style={{ background: '#fff', color: '#000', padding: '10px 24px', borderRadius: 30, fontWeight: 800, textDecoration: 'none' }}>فتح مجلد الدرايف</a>
            </div>
          </div>
        </section>
      </main>

      <div style={{ marginTop: 40, borderTop: '1px solid #222', padding: '24px 20px', textAlign: 'center', background: '#111114', borderRadius: 20, maxWidth: 1100, margin: '40px auto 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: 13 }}>
          <a href="/terms" style={{ color: '#00F5FF', textDecoration: 'underline' }}>الشروط والأحكام</a>
          <a href="/privacy-policy" style={{ color: '#00F5FF', textDecoration: 'underline' }}>سياسة الخصوصية</a>
          <a href="/return-policy" style={{ color: '#00F5FF', textDecoration: 'underline' }}>سياسة الاسترداد</a>
        </div>
        <div style={{ marginTop: 12, fontSize: 10, color: '#888', lineHeight: 1.6 }}>
          ALTIMA Store - وثيقة FL-371212741 - ashwan241@gmail.com - 0502963333<br/>
          10 قوالب: CEO, CMO, CFO, COO, CTO, CHRO, Project Director, Sales, GM, Minimal - Google Drive مرفوع ✅<br/>
          رابط المجلد: {folderLink}
        </div>
      </div>
    </div>
  )
}