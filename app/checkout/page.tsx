'use client'
import { useState } from 'react'

export default function Checkout(){
 const [form,setForm]=useState({name:'',email:'',phone:'',product:'حزمة 10 قوالب - 199 ر.س'})
 
 function submit(e:any){
  e.preventDefault()
  const q = `name=${encodeURIComponent(form.name)}&email=${encodeURIComponent(form.email)}&phone=${encodeURIComponent(form.phone)}&product=${encodeURIComponent(form.product)}`
  window.location.href = `/success?${q}`
 }

 return(
 <div dir="rtl" style={{minHeight:'100vh',background:'#08080A',color:'#fff',padding:20,fontFamily:'system-ui'}}>
  <div style={{maxWidth:460,margin:'30px auto',background:'#111114',border:'1px solid #222',borderRadius:24,padding:20}}>
   <h1 style={{fontSize:20,fontWeight:900,textAlign:'center'}}>إتمام الطلب</h1>
   <p style={{color:'#888',textAlign:'center',fontSize:12,margin:'6px 0 16px'}}>الدفع الآمن - تفعيل جيديا قريبا</p>
   <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:10}}>
    <select value={form.product} onChange={e=>setForm({...form,product:e.target.value})} style={{padding:12,borderRadius:12,background:'#08080A',border:'1px solid #333',color:'#fff'}}>
     <option>حزمة 10 قوالب - 199 ر.س</option>
     <option>حزمة CEO - 99 ر.س</option>
     <option>حزمة CMO - 99 ر.س</option>
    </select>
    <input required placeholder="الاسم الكامل" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={{padding:12,borderRadius:12,background:'#08080A',border:'1px solid #333',color:'#fff'}}/>
    <input required type="email" placeholder="البريد للاستلام" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={{padding:12,borderRadius:12,background:'#08080A',border:'1px solid #333',color:'#fff'}}/>
    <input required placeholder="رقم الجوال" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} style={{padding:12,borderRadius:12,background:'#08080A',border:'1px solid #333',color:'#fff'}}/>
    <div style={{background:'#08080A',border:'1px dashed #2a2a30',borderRadius:12,padding:10,fontSize:11,color:'#aaa',lineHeight:1.8}}>
     طرق الدفع المؤقتة:<br/>STC Pay: 0502836333<br/>بعد التحويل نرسل القوالب على ايميلك فورا
    </div>
    <button style={{height:50,borderRadius:999,background:'#D4AF37',color:'#000',fontWeight:900,border:0,cursor:'pointer'}}>تأكيد الطلب عبر واتساب</button>
   </form>
   <div style={{textAlign:'center',marginTop:10}}><a href="/" style={{color:'#666',fontSize:11}}>العودة للمتجر</a></div>
  </div>
 </div>
 )
}