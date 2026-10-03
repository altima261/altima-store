
'use client'
import Link from 'next/link'

export default function Page(){
 return(
 <div dir="rtl" style={{minHeight:'100vh',background:'#08080A',color:'#fff',fontFamily:'system-ui'}}>
  {/* HEADER */}
  <header style={{padding:'16px 20px',borderBottom:'1px solid #1a1a1e',display:'flex',justifyContent:'space-between',alignItems:'center',maxWidth:1100,margin:'0 auto'}}>
   <div style={{fontWeight:900,fontSize:18,letterSpacing:2}}>ALTIMA<span style={{color:'#D4AF37'}}>.</span></div>
   <div style={{fontSize:11,color:'#666'}}>المتجر التنفيذي الأول في الخليج</div>
  </header>

  <main style={{maxWidth:1100,margin:'0 auto',padding:'20px',display:'grid',gridTemplateColumns:'1.2fr 0.8fr',gap:20}}>
   {/* LEFT - DESCRIPTION */}
   <div>
    <div style={{background:'#D4AF37',color:'#000',display:'inline-block',padding:'4px 10px',borderRadius:999,fontSize:10,fontWeight:900}}>الأكثر مبيعاً - 1,247 تنفيذي اشتروا الحزمة</div>
    <h1 style={{fontSize:32,fontWeight:900,lineHeight:1.2,marginTop:12}}>حزمة النخبة التنفيذية<br/>10 قوالب <span style={{color:'#D4AF37'}}>ALTIMA</span></h1>
    <p style={{color:'#aaa',fontSize:14,marginTop:8,lineHeight:1.8}}>ليست مجرد سيرة ذاتية. هي أداة تفاوض على منصب بملايين الريالات. مصممة لمدراء تنفيذيين يريدون الانتقال من 15K إلى 40K+.</p>

    <div style={{background:'#111114',border:'1px solid #222',borderRadius:16,padding:16,margin:'16px 0'}}>
     <p style={{fontWeight:800,color:'#D4AF37',fontSize:12}}>🎯 صُممت لمن:</p>
     <p style={{fontSize:12,color:'#ccc',marginTop:6,lineHeight:1.8}}>CEO, COO, CTO, مدراء عموم، مدراء مشاريع PMP، قادة في أرامكو، نيوم، روشن، STC، البنوك. قوالب مرّت على مديري توظيف حقيقيين.</p>
    </div>

    <p style={{fontWeight:800,fontSize:14}}>ماذا ستحصل (القيمة 1,290 ر.س - اليوم 199 ر.س):</p>
    <ul style={{fontSize:13,color:'#bbb',listStyle:'none',padding:0,marginTop:8,lineHeight:2.2}}>
     <li>✅ 10 قوالب Word قابلة للتعديل 100% - بدون قفل</li>
     <li>✅ 3 تصاميم Gold فاخرة + 1 تصميم Minimal متوافق ATS 99%</li>
     <li>✅ عبارات إنجاز جاهزة بالأرقام (240% نمو، خفض 32%...)</li>
     <li>✅ دليل الاستخدام: كيف تكتب ملخص تنفيذي يقنع في 6 ثواني</li>
     <li>✅ خطوط عربية/إنجليزية فاخرة + تحديثات مجانية مدى الحياة</li>
    </ul>

    <div style={{display:'flex',gap:8,marginTop:16,flexWrap:'wrap'}}>
     <span style={{background:'#1a1a1e',border:'1px solid #333',borderRadius:999,padding:'6px 12px',fontSize:10}}>ATS 99% قبول</span>
     <span style={{background:'#1a1a1e',border:'1px solid #333',borderRadius:999,padding:'6px 12px',fontSize:10}}>عربي + إنجليزي</span>
     <span style={{background:'#1a1a1e',border:'1px solid #333',borderRadius:999,padding:'6px 12px',fontSize:10}}>Word + PDF</span>
     <span style={{background:'#1a1a1e',border:'1px solid #333',borderRadius:999,padding:'6px 12px',fontSize:10}}>تحميل فوري</span>
    </div>

    <div style={{marginTop:18,background:'linear-gradient(135deg,rgba(212,175,55,0.15),transparent)',border:'1px solid rgba(212,175,55,0.3)',borderRadius:12,padding:12}}>
     <p style={{fontSize:11,color:'#D4AF37',fontWeight:800}}>💬 ماذا قال عملاؤنا:</p>
     <p style={{fontSize:11,color:'#aaa',fontStyle:'italic',marginTop:4}}>"استخدمت قالب CEO وجاني عرضين في أسبوع، واحد 38K. شكراً ألتيما" - م.عبدالله، الرياض</p>
    </div>

    <div style={{marginTop:20,display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
     {['CEO','CMO','CFO','COO','CTO','CHRO','Project Director','Sales Director','GM','ATS Minimal'].map(t=>(
      <div key={t} style={{background:'#111114',border:'1px solid #1e1e22',borderRadius:10,padding:'8px 10px',fontSize:11}}>📄 {t}</div>
     ))}
    </div>
   </div>

   {/* RIGHT - CHECKOUT CARD */}
   <div style={{background:'#111114',border:'1px solid #222',borderRadius:24,padding:20,height:'fit-content',position:'sticky',top:20}}>
    <div style={{textAlign:'center'}}>
     <p style={{color:'#666',fontSize:12,textDecoration:'line-through'}}>1,290 ر.س</p>
     <p style={{fontSize:36,fontWeight:900}}>199 <span style={{fontSize:14}}>ر.س</span></p>
     <p style={{color:'#D4AF37',fontSize:11,fontWeight:800,background:'rgba(212,175,55,0.1)',display:'inline-block',padding:'4px 10px',borderRadius:999,marginTop:4}}>خصم 85% هذا الأسبوع فقط</p>
    </div>

    <div style={{marginTop:16,display:'flex',flexDirection:'column',gap:10}}>
     <Link href="/checkout" style={{display:'block',textAlign:'center',background:'linear-gradient(135deg,#FFD86B,#B8962E)',color:'#000',padding:'16px',borderRadius:999,fontWeight:900,textDecoration:'none',fontSize:16}}>اشتري الآن - تحميل فوري 🚀</Link>
     <div style={{textAlign:'center',fontSize:10,color:'#666'}}>🔒 دفع آمن - مدى - Apple Pay - STC Pay - تحويل بنكي</div>
     <div style={{background:'#08080A',borderRadius:12,padding:10,border:'1px dashed #2a2a30',fontSize:11,color:'#888',lineHeight:1.8}}>
      ✔️ تحميل فوري بعد الدفع<br/>✔️ يعمل على Word و Google Docs<br/>✔️ ضمان استرجاع 14 يوم<br/>الدعم: ashwan241@gmail.com
     </div>
    </div>

    <div style={{marginTop:16,borderTop:'1px solid #1a1a1e',paddingTop:12,display:'flex',justifyContent:'space-between',fontSize:10,color:'#555'}}>
     <Link href="/privacy-policy" style={{color:'#666',textDecoration:'none'}}>الخصوصية</Link>
     <Link href="/return-policy" style={{color:'#666',textDecoration:'none'}}>الاسترجاع</Link>
     <Link href="/terms" style={{color:'#666',textDecoration:'none'}}>الشروط</Link>
    </div>
   </div>
  </main>

  <footer style={{textAlign:'center',padding:20,fontSize:10,color:'#333',marginTop:20}}>© 2026 ALTIMA Executive Store - ashwan241@gmail.com - 0502836333</footer>
 </div>
 )
}

