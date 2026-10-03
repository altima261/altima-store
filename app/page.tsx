
export default function Page(){
 return(
 <div dir="rtl" style={{minHeight:'100vh',background:'#08080A',color:'#fff',fontFamily:'system-ui'}}>
  <header style={{padding:'16px 20px',borderBottom:'1px solid #1a1a1e',display:'flex',justifyContent:'space-between',maxWidth:1100,margin:'0 auto'}}>
   <div style={{fontWeight:900,fontSize:18}}>ALTIMA<span style={{color:'#D4AF37'}}>.</span></div>
   <div style={{fontSize:11,color:'#666'}}>المتجر التنفيذي</div>
  </header>
  <main style={{maxWidth:900,margin:'0 auto',padding:20}}>
   <div style={{background:'#D4AF37',color:'#000',display:'inline-block',padding:'4px 10px',borderRadius:999,fontSize:10,fontWeight:900}}>الأكثر مبيعا</div>
   <h1 style={{fontSize:30,fontWeight:900,marginTop:12}}>حزمة النخبة التنفيذية<br/>10 قوالب <span style={{color:'#D4AF37'}}>ALTIMA</span></h1>
   <p style={{color:'#aaa',fontSize:14,marginTop:8}}>ليست سيرة ذاتية، هي اداة تفاوض على منصب بملايين الريالات.</p>
   
   <div style={{marginTop:20,background:'#111114',border:'1px solid #222',borderRadius:16,padding:16}}>
    <p style={{fontSize:14,fontWeight:800}}>ماذا ستحصل (1290 - اليوم 199 ر.س):</p>
    <p style={{fontSize:13,color:'#bbb',marginTop:8,lineHeight:2}}>✅ 10 قوالب Word قابلة للتعديل<br/>✅ متوافق مع ATS 99%<br/>✅ عربي + انجليزي<br/>✅ تحميل فوري - ضمان 14 يوم</p>
   </div>

   <a href="/checkout" style={{display:'block',textAlign:'center',background:'#D4AF37',color:'#000',padding:'16px',borderRadius:999,fontWeight:900,textDecoration:'none',fontSize:16,marginTop:20}}>اشتري الآن - 199 ر.س 🚀</a>
   
   <div style={{marginTop:20,display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
    <div style={{background:'#111114',border:'1px solid #1e1e22',borderRadius:10,padding:10,fontSize:11}}>📄 CEO</div>
    <div style={{background:'#111114',border:'1px solid #1e1e22',borderRadius:10,padding:10,fontSize:11}}>📄 CMO</div>
    <div style={{background:'#111114',border:'1px solid #1e1e22',borderRadius:10,padding:10,fontSize:11}}>📄 CFO</div>
    <div style={{background:'#111114',border:'1px solid #1e1e22',borderRadius:10,padding:10,fontSize:11}}>📄 COO</div>
    <div style={{background:'#111114',border:'1px solid #1e1e22',borderRadius:10,padding:10,fontSize:11}}>📄 CTO</div>
    <div style={{background:'#111114',border:'1px solid #1e1e22',borderRadius:10,padding:10,fontSize:11}}>📄 CHRO</div>
    <div style={{background:'#111114',border:'1px solid #1e1e22',borderRadius:10,padding:10,fontSize:11}}>📄 Project Director</div>
    <div style={{background:'#111114',border:'1px solid #1e1e22',borderRadius:10,padding:10,fontSize:11}}>📄 Sales Director</div>
    <div style={{background:'#111114',border:'1px solid #1e1e22',borderRadius:10,padding:10,fontSize:11}}>📄 GM</div>
    <div style={{background:'#111114',border:'1px solid #1e1e22',borderRadius:10,padding:10,fontSize:11}}>📄 ATS Minimal</div>
   </div>

   <div style={{marginTop:20,fontSize:10,color:'#555',display:'flex',gap:12,justifyContent:'center'}}>
    <a href="/privacy-policy" style={{color:'#666'}}>الخصوصية</a>
    <a href="/return-policy" style={{color:'#666'}}>الاسترجاع</a>
    <a href="/terms" style={{color:'#666'}}>الشروط</a>
   </div>
  </main>
  <footer style={{textAlign:'center',padding:20,fontSize:10,color:'#333'}}>© 2026 ALTIMA - ashwan241@gmail.com - 0502836333</footer>
 </div>
 )
}

