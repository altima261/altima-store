'use client';
import { useState } from 'react';

export default function Checkout() {
  const [form, setForm] = useState({ product: 'Hoodie Altima - 199 SAR', name: '', email: '', phone: '' });
  const [status, setStatus] = useState('');
  
  function submit(e: any) {
    e.preventDefault();
    const payload = {
      product: form.product,
      customer: form.name,
      email: form.email,
      phone: form.phone,
      amount: form.product.includes('199') ? 199 : 99,
      order_id: 'ALT-' + Date.now(),
      time: new Date().toISOString()
    };
    fetch('https://sahariosv4-5.vercel.app/api/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    setStatus('✅ تم الطلب - SAHARI OS v4.5 ينفذ 163 خدمة - https://sahariosv4-5.vercel.app');
  }
  
  return (
    <div dir="rtl" style={{ minHeight: '100vh', background: '#08080a', color: '#fff', padding: 20 }}>
      <div style={{ maxWidth: 460, margin: '30px auto', background: '#111114', borderRadius: 24, padding: 20 }}>
        <h1 style={{ textAlign: 'center' }}>SAHARI OS + altima-store</h1>
        <p style={{ textAlign: 'center', fontSize: 10, color: '#00F5FF' }}>https://sahariosv4-5.vercel.app - Connected ✅</p>
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
          <select value={form.product} onChange={e => setForm({ ...form, product: e.target.value })} style={{ padding: 12, borderRadius: 12, background: '#1a1a1a', color: '#fff' }}>
            <option>Hoodie Altima - 199 SAR</option>
            <option>CEO - 99 SAR</option>
            <option>CMD - 99 SAR</option>
          </select>
          <input required placeholder="اسمك" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={{ padding: 12, borderRadius: 12, background: '#1a1a1a', color: '#fff' }} />
          <input required type="email" placeholder="بريدك" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={{ padding: 12, borderRadius: 12, background: '#1a1a1a', color: '#fff' }} />
          <input required placeholder="جوالك" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={{ padding: 12, borderRadius: 12, background: '#1a1a1a', color: '#fff' }} />
          <div style={{ background: '#08080a', border: '1px dashed #2a2a30', borderRadius: 12, padding: 10, fontSize: 11, color: '#aaa' }}>STC Pay: 0502830333 - صالح الهذلي - مربوط بـ SAHARI OS v4.5</div>
          <button style={{ height: 50, borderRadius: 999, background: '#D44F37', color: '#fff', fontWeight: 900, border: 'none' }}>اطلب الآن</button>
          {status && <div style={{ background: '#0a1a0a', border: '1px solid #0f0', borderRadius: 12, padding: 10, color: '#0f0', textAlign: 'center' }}>{status}</div>}
        </form>
      </div>
    </div>
  );
}
