"use client";
import { useState } from "react";

export default function Checkout() {
  const [name, setName] = useState("Mohammed Binashwan");
  const [email, setEmail] = useState("ashwan241@gmail.com");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function pay() {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (data.transaction_url) {
        window.location.href = data.transaction_url;
      } else {
        setError(data.message || "فشل الدفع");
      }
    } catch (e: any) {
      setError("فشل الدفع: " + e.message);
    }
    setLoading(false);
  }

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", display: "flex", justifyContent: "center", padding: "20px" }}>
      <div style={{ background: "#111", borderRadius: "20px", padding: "30px", maxWidth: "480px", width: "100%", textAlign: "center" }}>
        <h1 style={{ color: "#fff", fontSize: "32px", fontWeight: "bold" }}>ALTIMA EXECUTIVE</h1>
        <p style={{ color: "#999" }}>Luxury Templates - CEO Collection 15</p>
        <div style={{ margin: "20px 0" }}>
          <span style={{ color: "#666", textDecoration: "line-through" }}>499 ر.س</span>
          <span style={{ color: "#fff", fontSize: "48px", fontWeight: "bold", marginRight: "10px" }}>249 ر.س</span>
        </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="الاسم"
          style={{ width: "100%", padding: "14px", borderRadius: "12px", background: "#1a1a1a", color: "#fff", border: "1px solid #333", marginBottom: "12px", textAlign: "right" }}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="الإيميل"
          style={{ width: "100%", padding: "14px", borderRadius: "12px", background: "#1a1a1a", color: "#fff", border: "1px solid #333", marginBottom: "12px", textAlign: "right" }}
        />
        {error && <p style={{ color: "#ff5555", fontSize: "14px", wordBreak: "break-word" }}>{error}</p>}
        <button
          onClick={pay}
          disabled={loading}
          style={{ width: "100%", padding: "16px", borderRadius: "14px", background: "#d4af6a", color: "#000", fontWeight: "bold", fontSize: "18px", border: "none", cursor: "pointer" }}
        >
          {loading ? "جاري..." : "ادفع الآن - 249 ر.س 💳"}
        </button>
        <div style={{ marginTop: "16px", display: "flex", gap: "8px", justifyContent: "center" }}>
          {["【entity-VISA¦canonical_name=VISA】", "STC Pay", "Apple Pay", "MADA"].map((m) => (
            <span key={m} style={{ border: "1px solid #333", padding: "6px 10px", borderRadius: "8px", color: "#999", fontSize: "13px" }}>{m}</span>
          ))}
        </div>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>
          Tap - ALTIMASTOREKSA26 - 68090908 دفع آمن عبر
          <br />بعد الدفع تحويل تلقائي لصفحة التحميل
        </p>
      </div>
    </div>
  );
}