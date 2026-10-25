'use client'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')

  return (
    <div dir="rtl" style={{ minHeight: '100vh', background: '#08080a', color: '#fff', fontFamily: 'system-ui', padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1000, margin: '0 auto 20px', padding: '12px 20px', background: '#111114', borderRadius: 24, border: '1px solid #222' }}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 900 }}>ALTIMA STORE</h1>
          <p style={{ fontSize: 11, color: '#aaa' }}>قوالب سيرة ذاتية - وثيقة FL-371212741</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <a href="/checkout" style={{ background: '#fff', color: '#000', padding: '8px 16px', borderRadius: 20, fontSize: 12, fontWeight: 'bold', textDecoration: 'none' }}>المتجر</a>
        </div>
      </header>

      <main style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', padding: '60px 20px' }}>
        <h2 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
          سيرتك الذاتية<br/>
          <span style={{ color: '#00F5FF' }}>بلمسة ALTIMA</span>
        </h2>
        <p style={{ fontSize: 14, color: '#aaa', maxWidth: 600, margin: '0 auto 30px', lineHeight: 1.8 }}>
          حزمة ALTIMA التنفيذية - 10 قوالب احترافية
        </p>
        <div style={{ marginTop: 20, display: 'flex', gap: 15, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/checkout" style={{ background: '#00F5FF', color: '#000', padding: '14px 28px', borderRadius: 30, fontWeight: 900, textDecoration: 'none' }}>اطلب الآن - 199 ريال</a>
        </div>
      </main>

      <div style={{ marginTop: 40, borderTop: '1px solid #222', padding: '30px 20px', textAlign: 'center', background: '#111114', borderRadius: 20, maxWidth: 1000, margin: '40px auto 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: 14 }}>
          <a href="/terms" style={{ color: '#00F5FF', textDecoration: 'underline' }}>الشروط والأحكام</a>
          <a href="/privacy-policy" style={{ color: '#00F5FF', textDecoration: 'underline' }}>سياسة الخصوصية</a>
          <a href="/return-policy" style={{ color: '#00F5FF', textDecoration: 'underline' }}>سياسة الاسترداد</a>
        </div>
        <div style={{ marginTop: 15, fontSize: 11, color: '#888' }}>
          ALTIMA Store - وثيقة FL-371212741 - ashwan241@gmail.com - 0502963333
        </div>
      </div>
    </div>
  )
}