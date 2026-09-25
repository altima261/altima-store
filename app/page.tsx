export default function Home(){
return(
<div dir="rtl" style={{background:'#08080A',color:'#fff',minHeight:'100vh',fontFamily:'Inter,system-ui'}}>
  {/* TOP BAR */}
  <div style={{background:'#D4AF37',color:'#000',textAlign:'center',padding:'8px',fontSize:'12px',fontWeight:'800',letterSpacing:'1px'}}>شحن فوري بعد الدفع • دفع آمن عبر جيديا Geidea • متوافق مع ZATCA</div>

  {/* HEADER */}
  <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'18px 32px',borderBottom:'1px solid #1e1e22',position:'sticky',top:0,background:'rgba(8,8,10,0.9)',backdropFilter:'blur(10px)',zIndex:50}}>
    <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
      <div style={{width:42,height:42,background:'linear-gradient(135deg,#D4AF37,#8B6914)',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,color:'#000',fontSize:18}}>A</div>
      <div><div style={{fontWeight:900,fontSize:18,lineHeight:1}}>ألتيما</div><div style={{fontSize:9,opacity:0.5,letterSpacing:2}}>EXECUTIVE CVS — BY MOHAMMED</div></div>
    </div>
    <nav style={{display:'flex',gap:18,fontSize:13}}>
      <a href="/return-policy" style={{color:'#D4AF37',textDecoration:'none'}}>الاسترجاع</a>
      <a href="/privacy-policy" style={{color:'#888',textDecoration:'none'}}>الخصوصية</a>
      <a href="/terms" style={{color:'#888',textDecoration:'none'}}>الشروط</a>
    </nav>
  </header>

  {/* HERO */}
  <section style={{textAlign:'center',padding:'70px 20px 40px',maxWidth:900,margin:'0 auto'}}>
    <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'#151519',border:'1px solid #232326',padding:'6px 14px',borderRadius:20,fontSize:12,color:'#aaa'}}><span style={{width:8,height:8,background:'#00D26A',borderRadius:'50%',display:'inline-block'}}></span> إصدار 2025 — دفع آمن بمدى و Apple Pay</div>
    <h1 style={{fontSize:'clamp(36px,6vw,62px)',fontWeight:900,lineHeight:1.05,margin:'24px 0 14px'}}>قوالب سيرة ذاتية<br/><span style={{background:'linear-gradient(90deg,#D4AF37,#F6E7A8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>تنفيذية فاخرة</span></h1>
    <p style={{color:'#9a9aa0',fontSize:16,lineHeight:1.8,maxWidth:520,margin:'0 auto 28px'}}>للـ CEO, CMO, CTO — بصيغة Word قابلة للتعديل 100%. تحميل فوري بعد إتمام الدفع عبر بوابة جيديا. مصمم ليمر من أنظمة ATS.</p>
    <div style={{display:'flex',justifyContent:'center',gap:10,flexWrap:'wrap'}}>
      <span style={{background:'#fff',color:'#000',padding:'8px 18px',borderRadius:22,fontSize:13,fontWeight:700}}>Visa • MC</span>
      <span style={{background:'#00A651',color:'#fff',padding:'8px 18px',borderRadius:22,fontSize:13,fontWeight:700}}>mada مدى</span>
      <span style={{background:'#000',border:'1px solid #2a2a2e',padding:'8px 18px',borderRadius:22,fontSize:13}}> Apple Pay</span>
    </div>
  </section>

  {/* PRODUCTS */}
  <section style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))',gap:18,padding:'20px 32px',maxWidth:1120,margin:'0 auto'}}>
    {[
      {id:1,name:'حزمة المدير التنفيذي CEO',desc:'قالب مجلس إدارة + رسالة تغطية',price:'129',old:'199'},
      {id:2,name:'حزمة التسويق CMO',desc:'أرقام ونمو — تصميم تسويقي فاخر',price:'89',old:'149'},
      {id:3,name:'حزمة التقنية CTO',desc:'للمدراء التقنيين وقادة المنتجات',price:'89',old:'149'},
    ].map(p=>(
      <div key={p.id} style={{background:'#111114',border:'1px solid #222227',borderRadius:22,padding:18}}>
        <div style={{height:170,background:'linear-gradient(135deg,#1c1c1f,#0d0d0f)',borderRadius:16,display:'flex',alignItems:'center',justifyContent:'center',border:'1px dashed #2a2a30',color:'#D4AF37',fontWeight:900,letterSpacing:1}}>{p.name}</div>
        <div style={{marginTop:14,fontWeight:800}}>{p.name}</div>
        <div style={{fontSize:12,color:'#777',marginTop:4}}>{p.desc}</div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:16}}>
          <div><span style={{fontWeight:900,fontSize:18,color:'#D4AF37'}}>{p.price} ر.س</span> <span style={{fontSize:12,color:'#555',textDecoration:'line-through',marginRight:6}}>{p.old}</span></div>
          <button style={{background:'#D4AF37',color:'#000',border:0,padding:'8px 16px',borderRadius:12,fontWeight:800,fontSize:13,cursor:'pointer'}}>شراء الآن</button>
        </div>
      </div>
    ))}
  </section>

  {/* TRUST */}
  <section style={{maxWidth:1120,margin:'30px auto',padding:'0 32px',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:12}}>
    <div style={{background:'#111114',border:'1px solid #1e1e22',borderRadius:16,padding:16,textAlign:'center',fontSize:13,color:'#aaa'}}>⚡ تحميل فوري بعد الدفع</div>
    <div style={{background:'#111114',border:'1px solid #1e1e22',borderRadius:16,padding:16,textAlign:'center',fontSize:13,color:'#aaa'}}>🛡️ دفع آمن عبر جيديا Geidea</div>
    <div style={{background:'#111114',border:'1px solid #1e1e22',borderRadius:16,padding:16,textAlign:'center',fontSize:13,color:'#aaa'}}>✅ متوافق مع ZATCA وهيئة الزكاة</div>
  </section>

  {/* FOOTER */}
  <footer style={{marginTop:50,borderTop:'1px solid #1e1e22',padding:'28px 32px',textAlign:'center',color:'#666',fontSize:12,lineHeight:2}}>
    <div style={{fontWeight:800,color:'#aaa'}}>ألتيما - قوالب السيرة التنفيذية</div>
    <div>محمد بن عشوان — وثيقة عمل حر FL-611870833</div>
    <div>الهفوف، المنطقة الشرقية، السعودية | ashwan241@gmail.com | altima261@</div>
    <div style={{marginTop:12}}><a href="/return-policy" style={{color:'#D4AF37',textDecoration:'none'}}>سياسة الاسترجاع والاستبدال</a> • <a href="/privacy-policy" style={{color:'#888',textDecoration:'none'}}>الخصوصية</a> • <a href="/terms" style={{color:'#888',textDecoration:'none'}}>الشروط</a></div>
    <div style={{marginTop:14,display:'inline-block',background:'#0e2b18',color:'#6fdf9a',border:'1px solid #1a4d2e',padding:'8px 16px',borderRadius:20}}>مدعوم من البنوك السعودية - متوافق مع هيئة الزكاة والضريبة والجمارك ZATCA</div>
  </footer>
</div>
)
}
