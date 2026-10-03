'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function Content(){
 const p = useSearchParams()
 const name = p.get('name') || 'عميل'
 const email = p.get('email') || ''
 const phone = p.get('phone') || ''
 const product = p.get('product') || 'حزمة 10 قوالب'

 const DRIVE = "https://drive.google.com/drive/folders/1PUT-YOUR-FOLDER-ID-HERE"
 const msg = `هلا ${name} %0Aشكرا لشرائك ${product} %0Aرابط التحميل: ${DRIVE} %0Aايميلك: ${email}`

 return(
 <div dir="rtl" style={{minHeight:'100vh',background:'#08080A',color:'#fff',display:'flex',justifyContent:'center',padding:20,fontFamily:'system-ui'}}>
  <div style={{maxWidth:460,width:'100%',background:'#111114',border:'1px solid #222',borderRadius:24,padding:20,textAlign:'center',marginTop:20}}>
   <div style={{width:50,height:50,background:'#00D26A',borderRadius:999,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto',fontSize:24}}>✓</div>
   <h1 style={{fontSize:20,fontWeight:900,marginTop:10}}>تم استلام طلبك!</h1>
   <p style={{color:'#888',fontSize:12}}>شكرا {name} - {product}</p>
   <div style={{background:'#08080A',border:'1px solid #333',borderRadius:12,padding:10,textAlign:'right',margin:'16px 0',fontSize:12}}>
    <div>الاسم: {name}</div><div>الجوال: {phone}</div><div>الايميل: {email}</div>
   </div>
   <a href={DRIVE} target="_blank" style={{display:'block',background:'#D4AF37',color:'#000',padding:12,borderRadius:12,fontWeight:900,textDecoration:'none'}}>⬇️ تحميل القوالب الآن</a>
   <a href={`https://wa.me/${phone.replace(/[^0-9]/g,'')}?text=${msg}`} target="_blank" style={{display:'block',marginTop:10,background:'#25D366',color:'#fff',padding:12,borderRadius:12,fontWeight:900,textDecoration:'none'}}>📲 ارسال رابط التحميل للعميل واتساب</a>
   <a href="/" style={{display:'block',marginTop:10,color:'#666',fontSize:11}}>العودة للمتجر</a>
  </div>
 </div>
 )
}

export default function SuccessPage(){
 return <Suspense><Content/></Suspense>
}