"use client";
import { useState } from "react";
const DRIVE_LINK = "https://drive.google.com/drive/folders/1iyo_1gS593ge8_3o9Ns3zRgwxbb_MbTz";
export default function CheckoutPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const msg = `طلب جديد ALTIMA V2%0Aالاسم: ${form.name}%0Aالبريد: ${form.email}%0Aالجوال: ${form.phone}%0Aالمنتج: 15 قالب فاخر - 199 ر.س%0Aرابط: ${DRIVE_LINK}`;
    window.open(`https://wa.me/966502836333?text=${msg}`, "_blank");
    window.location.href = `/success?email=${encodeURIComponent(form.email)}&name=${encodeURIComponent(form.name)}`;
  };
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" dir="rtl">
      <div className="max-w-xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl mt-4">إتمام الطلب - دفع آمن</h1>
          <p className="text-white/50 text-sm mt-2">الباقة الكاملة 15 قالب • توصيل فوري</p>
        </div>
        <div className="rounded-[24px] bg-white/[0.04] border border-white/10 p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="w-full rounded-xl bg-white text-black px-4 py-4" placeholder="الاسم الكامل" />
            <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="w-full rounded-xl bg-white text-black px-4 py-4" placeholder="البريد الإلكتروني" />
            <input required value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} className="w-full rounded-xl bg-white text-black px-4 py-4" placeholder="رقم الجوال" dir="ltr" />
            <div className="rounded-xl bg-[#C5A055]/10 border border-[#C5A055]/20 p-4 text-sm">STC Pay: <b>0502836333</b><div className="text-xs text-white/50 mt-1">بعد التحويل نرسل الرابط فوراً</div></div>
            <button disabled={loading} type="submit" className="w-full bg-[#C5A055] text-black font-bold py-4 rounded-full">{loading ? "جاري..." : "تأكيد الطلب عبر واتساب - 199 ر.س"}</button>
          </form>
        </div>
      </div>
    </main>
  );
}