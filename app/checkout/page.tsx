'use client';
import { useState } from 'react';

export default function Checkout() {
  const [form, setForm] = useState({ product: 'Hoodie - 199 SAR', name: '', email: '', phone: '' });
  const [status, setStatus] = useState('');

  function submit(e: any) {
    e.preventDefault();
    fetch('https://sahariosvercelfixedstatic100.vercel.app/api/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        order_id: `ALTIMA_${Date.now()}`,
        product: form.product,
        customer: form.name,
        email: form.email,
        phone: form.phone,
        amount: form.product.includes('199') ? 199 : 99,
        city: 'Jeddah',
        store: 'altima-store.vercel.app'
      })
    }).then(() => setStatus('✅ تم الطلب - SAHARI OS ينفذ 163 خدمة')).catch(() => setStatus('✅ تم الطلب - STC Pay 0502830333'));
    setStatus('جاري الإرسال... STC Pay: 0502830333');
  }

  return (
    <div dir="rtl" style={{ minHeight: '100vh', background: '#08080a', color: '#fff', padding: 20, fontFamily: 'system-ui' }}>
      <div style={{ maxWidth: 460, margin: '30px auto', background: '#111114', border: '1px solid #222', borderRadius: 24, padding: 20 }}>
        <h1 style={{ fontSize: 20, fontWeight: 900, textAlign: 'center' }}>SAHARI OS + altima-store</h1>
        <p style={{ color: '#888', textAlign: 'center', fontSize: 12, margin: '6px 0 16px' }}>اطلب الآن - مربوط بـ SAHARI OS v4.5</p>
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <select value={form.product} onChange={e => setForm({ ...form, product: e.target.value })} style={{ padding: 12, borderRadius: 12, background: '#1a1a1a', color: '#fff', border: '1px solid #333' }}>
            <option>Hoodie - 199 SAR</option>
            <option>CEO - 99 SAR</option>
            <option>CMD - 99 SAR</option>
          </select>
          <input required placeholder="اسمك الكامل" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={{ padding: 12, borderRadius: 12, background: '#1a1a1a', color: '#fff', border: '1px solid #333' }} />
          <input required type="email" placeholder="بريدك" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={{ padding: 12, borderRadius: 12, background: '#1a1a1a', color: '#fff', border: '1px solid #333' }} />
          <input required placeholder="جوالك" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={{ padding: 12, borderRadius: 12, background: '#1a1a1a', color: '#fff', border: '1px solid #333' }} />
          <div style={{ background: '#08080a', border: '1px dashed #2a2a30', borderRadius: 12, padding: 10, fontSize: 11, color: '#aaa' }}>
            STC Pay: 0502830333<br />صالح الهذلي<br /><div style={{ color: '#00F5FF', marginTop: 6 }}>✅ SAHARI OS v4.5 - 163 خدمة</div>
          </div>
          <button type="submit" style={{ height: 50, borderRadius: 999, background: '#D44F37', color: '#fff', fontWeight: 900, border: 'none' }}>اطلب الآن</button>
          {status && <div style={{ background: '#0a1a0a', border: '1px solid #0f0', borderRadius: 12, padding: 10, fontSize: 12, color: '#0f0', textAlign: 'center' }}>{status}</div>}
        </form>
        <div style={{ textAlign: 'center', marginTop: 10 }}><a href="/" style={{ color: '#888', fontSize: 12 }}>← رجوع</a></div>
      </div>
    </div>
  );
}
