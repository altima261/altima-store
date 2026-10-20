'use client';
import { useState } from 'react';

export default function Page() {
  const [cart, setCart] = useState(0);
  
  function order(p: string, amount: number) {
    setCart(c => c + 1);
    fetch('https://sahariosv4-5.vercel.app/api/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        product: p,
        amount: amount,
        customer: 'Guest',
        order_id: 'ALT-' + Date.now(),
        time: new Date().toISOString(),
        source: 'altima-store'
      })
    });
  }

  return (
    <div dir="rtl" style={{ minHeight: '100vh', background: '#08080a', color: '#fff', padding: 20 }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#00F5FF' }}>ALTIMA STORE - مربوط بـ SAHARI OS v4.5</h1>
        <p style={{ textAlign: 'center', fontSize: 11, color: '#888' }}>https://sahariosv4-5.vercel.app - Ready ✅</p>
        <div style={{ textAlign: 'center', background: '#D44F37', color: '#fff', padding: 8, borderRadius: 999, margin: '10px auto', width: 150 }}>السلة: {cart}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 20 }}>
          <div style={{ background: '#111114', border: '1px solid #222', borderRadius: 20, padding: 16, textAlign: 'center' }}>
            <h3>Hoodie</h3><p>199 SAR</p>
            <button onClick={() => order('Hoodie Altima - 199 SAR', 199)} style={{ width: '100%', height: 44, borderRadius: 999, background: '#00F5FF', color: '#000', fontWeight: 900, border: 'none', cursor: 'pointer', marginTop: 10 }}>أضف للسلة - 199 SAR</button>
          </div>
          <div style={{ background: '#111114', border: '1px solid #222', borderRadius: 20, padding: 16, textAlign: 'center' }}>
            <h3>CEO</h3><p>99 SAR</p>
            <button onClick={() => order('CEO - 99 SAR', 99)} style={{ width: '100%', height: 44, borderRadius: 999, background: '#00F5FF', color: '#000', fontWeight: 900, border: 'none', cursor: 'pointer', marginTop: 10 }}>أضف للسلة - 99 SAR</button>
          </div>
          <div style={{ background: '#111114', border: '1px solid #222', borderRadius: 20, padding: 16, textAlign: 'center' }}>
            <h3>CMD</h3><p>99 SAR</p>
            <button onClick={() => order('CMD - 99 SAR', 99)} style={{ width: '100%', height: 44, borderRadius: 999, background: '#00F5FF', color: '#000', fontWeight: 900, border: 'none', cursor: 'pointer', marginTop: 10 }}>أضف للسلة - 99 SAR</button>
          </div>
        </div>
        <div style={{ marginTop: 20, background: '#111114', border: '1px solid #00F5FF', borderRadius: 16, padding: 12, textAlign: 'center' }}>
          <div style={{ color: '#00F5FF', fontWeight: 900 }}>SAHARI OS Integration Status ✅</div>
          <div style={{ fontSize: 11, color: '#888', marginTop: 6 }}>Webhook: https://sahariosv4-5.vercel.app/api/webhook - Ready</div>
          <a href="/checkout" style={{ display: 'inline-block', marginTop: 10, background: '#D44F37', color: '#fff', padding: '8px 20px', borderRadius: 999, textDecoration: 'none' }}>اذهب للدفع →</a>
        </div>
      </div>
    </div>
  );
}
