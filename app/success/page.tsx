'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SuccessContent(){
 const params = useSearchParams()
 const name = params.get('name') || 'عميل'
 const email = params.get('email') || ''
 const phone = params.get('phone') || ''
 const product = params.get('product') || 'حزمة CEO'

 // حط هنا رابط ملفاتك في Google Drive
 const DRIVE_LINK = "https://drive.google.com/drive/folders/1PUT-YOUR-FOLDER-ID-HERE"

 // رسالة للعميل
 const customerMsg = `هلا ${name} 🌹%0A%0Aشكراً لشرائك ${product} من متجر ألتيما%0A%0A⬇️ رابط التحميل المباشر:%0A${DRIVE_LINK}%0A%0A📧 تم الإرسال أيضاً على إيميلك: ${email}%0A%0Aأي مساعدة في التعديل على القالب تواصل معي مباشرة:%0A0502836333%0A%0Aبالتوفيق! محمد - ألتيما`

 const sellerMsg = `تم بيع ${product}%0Aللعميل: ${name}%0Aالجوال: ${phone}%0Aالإيميل: ${email}`

 return(
  <div dir="rtl" style={{minHeight:'100vh',background:'#08080A',color:'#fff',display:'flex',justifyContent:'center',padding:20}}>
   <div style={{maxWidth:460,width:'100%',background:'#111114',border:'1px solid #222',borderRadius:24,padding:24,textAlign:'center',marginTop:30}}>
    <div style={{width:56,height:56,background:'#00D26A',borderRadius:999,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto',fontSize:28,color:'#000'}}>✓</div>
    <h1 style={{fontSize:22,fontWeight:900,marginTop:12}}>تم استلام طلبك!</h1>
    <p style={{color:'#888',fontSize:13,marginTop:6}}>رقم الطلب: ALTIMA-{Date.now().toString().slice(-6)}</p>

    <div style={{background:'#08080A',border:'1px solid #333',borderRadius:16,padding:14,textAlign:'right',margin:'20px 0',fontSize:13,lineHeight:2}}>
     <div>المنتج: <b style={{color:'#D4AF37'}}>{product}</b></div>
     <div>العميل: {name}</div>
     <div>الجوال: {phone}</div>
     <div>الإيميل: {email}</div>
    </div>

    <a href={DRIVE_LINK} target="_blank" style={{display:'block',background:'#D4AF37',color:'#000',padding:14,borderRadius:12,fontWeight:900,textDecoration:'none'}}>⬇️ تحميل القوالب الآن</a>

    <a href={`https://wa.me/${phone.replace(/[^0-9]/g,'')}?text=${customerMsg}`} target="_blank" style={{display:'block',marginTop:10,background:'#25D366',color:'#fff',padding:14,borderRadius:12,fontWeight:900,textDecoration:'none'}}>📲 إرسال رابط التحميل للعميل واتساب</a>

    <a href={`https://wa.me/966502836333?text=${sellerMsg}`} target="_blank" style={{display:'block',marginTop:10,background:'#1a1a1e',border:'1px solid #333',color:'#fff',padding:12,borderRadius:12,fontWeight:700,textDecoration:'none',fontSize:13}}>إرسال تنبيه لنفسي</a>

    <p style={{fontSize:11,color:'#555',marginTop:16}}>بعد ما تضغط "إرسال رابط التحميل للعميل" بيفتح واتساب برسالة جاهزة فيها رابط Drive — فقط اضغط إرسال</p>
   </div>
  </div>
 )
}

export default function SuccessPage(){
 return <Suspense><SuccessContent/></Suspense>
}