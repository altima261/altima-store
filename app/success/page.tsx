"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
const DRIVE_LINK = "https://drive.google.com/drive/folders/1iyo_1gS593ge8_3o9Ns3zRgwxbb_MbTz";
function SuccessContent() {
  const params = useSearchParams();
  const email = params.get("email") || "";
  const name = params.get("name") || "عميل ALTIMA";
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4" dir="rtl">
      <div className="max-w-xl w-full rounded-[32px] bg-gradient-to-br from-[#C5A055]/20 to-black border border-[#C5A055]/30 p-8 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#C5A055] flex items-center justify-center text-3xl">✓</div>
        <h1 className="font-serif text-3xl mt-6">تم تأكيد طلبك يا {name}!</h1>
        <div className="mt-8 rounded-2xl bg-white text-black p-6">
          <div className="text-sm font-bold">📦 رابط التحميل المباشر:</div>
          <div className="mt-3 p-3 rounded-xl bg-zinc-100 text-xs break-all font-mono">{DRIVE_LINK}</div>
          <a href={DRIVE_LINK} target="_blank" className="mt-4 w-full bg-[#C5A055] text-black font-bold py-3 rounded-full block text-center">فتح مجلد القوالب الآن - 15 ملف</a>
          <div className="mt-3 text-[11px] text-zinc-500">تم الإرسال إلى: {email}</div>
        </div>
      </div>
    </main>
  );
}
export default function SuccessPage() {
  return <Suspense><SuccessContent /></Suspense>;
}