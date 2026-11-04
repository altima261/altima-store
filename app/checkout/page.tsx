// Tap Live - ALTIMASTOREKSA26 - 68090867 - 249 SAR - Ready
"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [email, setEmail] = useState("ashwan241@gmail.com");
  const [name, setName] = useState("Mohammed Binashwan");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePay = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "فشل الدفع");
      if (data.transaction_url) {
        window.location.href = data.transaction_url;
      } else {
        throw new Error("ما جا رابط الدفع من Tap");
      }
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#141414] rounded-[24px] p-8 border border-[#222]">
        <h1 className="text-[28px] font-bold text-center">ALTIMA EXECUTIVE</h1>
        <p className="text-[#888] text-center mt-2 text-[14px]">15 Luxury Templates - CEO Collection</p>
        <div className="mt-6 flex items-baseline justify-center gap-2">
          <span className="text-[42px] font-bold">249</span>
          <span className="text-[#888]">ر.س</span>
          <span className="ml-2 line-through text-[#555]">499 ر.س</span>
        </div>
        <div className="mt-8 space-y-4">
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="الاسم" className="w-full h-[52px] px-4 rounded-[12px] bg-[#1e1e1e] border border-[#2a2a2a]" />
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="الإيميل *" className="w-full h-[52px] px-4 rounded-[12px] bg-[#1e1e1e] border border-[#2a2a2a]" />
          {error && <p className="text-[#ff6b6b] text-center text-[13px]">{error}</p>}
          <button onClick={handlePay} disabled={loading} className="w-full h-[56px] rounded-[14px] bg-gradient-to-r from-[#c5a059] to-[#e8c88a] text-black font-bold">
            {loading ? "جاري التحويل لـ Tap..." : "ادفع الآن - 249 ر.س 💳"}
          </button>
          <div className="flex justify-center gap-2 pt-2 opacity-60 text-[10px]">
            <span className="border border-[#333] px-2 py-1 rounded">MADA</span>
            <span className="border border-[#333] px-2 py-1 rounded">Apple Pay</span>
            <span className="border border-[#333] px-2 py-1 rounded">STC Pay</span>
            <span className="border border-[#333] px-2 py-1 rounded">VISA</span>
          </div>
          <p className="text-[11px] text-[#666] text-center">دفع آمن عبر Tap - ALTIMASTOREKSA26 - 68090867<br/>بعد الدفع تحويل تلقائي لصفحة التحميل</p>
        </div>
      </div>
    </div>
  );
}