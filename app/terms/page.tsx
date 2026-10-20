'use client';
// Owner: Mohammed Bin Ashwan - @altima261 - ashwan241@gmail.com
// Tech: Next.js 14 + Tailwind CSS + Tap Payments
// Fixed: Added 'use client' for useState - SAHARI OS v4.5 Integrated

import { useState } from 'react';

export default function Page() {
  const [cart, setCart] = useState(0);
  const [products] = useState([
    { id: 1, name: 'Hoodie Altima - 199 SAR', price: 199, image: 'Hoodie' },
    { id: 2, name: 'CEO - 99 SAR', price: 99, image: 'CEO' },
    { id: 3, name: 'CMD - 99 SAR', price: 99, image: 'CMD' },
  ]);

  const addToCart = (product: any) => {
    setCart(cart + 1);
    // SAHARI OS v4.5 - Trigger on add to cart
    fetch('https://sahariosvercelfixedstatic100.vercel.app/api/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        order_id: `CART_${Date.now()}`,
        product: product.name,
        customer: 'Cart Action',
        amount: product.price,
        city: 'Jeddah',
        action: 'ADD_TO_CART',
        store: 'altima-store.vercel.app'
      })
    }).catch(() => {});
  };

  return (
    <div dir="rtl" style={{ minHeight: '100vh', background: '#08080a', color: '#fff', fontFamily: 'system-ui', padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1000, margin: '0 auto 20px', padding: '12px 20px', background: '#111114', borderRadius: 24, border: '1px solid #222' }}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 900 }}>ALTIMA STORE</h1>
          <p style={{ fontSize: 11, color: '#888' }}>مربوط بـ SAHARI OS v4.5 - محمد - جدة</p>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span style={{ background: '#000', color: '#00F5FF', padding: '6px 12px', borderRadius: 999, fontSize: 12 }}>🛒 {cart}</span>
          <a href="/checkout" style={{ background: '#D44F37', color: '#fff', padding: '8px 16px', borderRadius: 999, textDecoration: 'none', fontSize: 12, fontWeight: 900 }}>الشراء</a>
        </div>
      </header>

      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(90deg, #00F5FF, #7C3AED)', color: '#000', padding: 12, borderRadius: 12, marginBottom: 16, fontSize: 12, fontWeight: 900, textAlign: 'center' }}>
          ✅ SAHARI OS v4.5 Super Agents - 163 خدمة + 26 اختراق + 7 أدوات - Clean Legal - No CS35
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {products.map((p) => (
            <div key={p.id} style={{ background: '#111114', border: '1px solid #222', borderRadius: 24, padding: 20, textAlign: 'center' }}>
              <div style={{ height: 120, background: '#1a1a1a', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, marginBottom: 12 }}>{p.image}</div>
              <h3 style={{ fontSize: 16, fontWeight: 900, marginBottom: 6 }}>{p.name}</h3>
              <p style={{ color: '#888', fontSize: 12, marginBottom: 12 }}>جودة عالية - شحن لجدة والرياض ومكة</p>
              <button onClick={() => addToCart(p)} style={{ width: '100%', height: 44, borderRadius: 999, background: '#00F5FF', color: '#000', fontWeight: 900, border: 'none', cursor: 'pointer' }}>
                أضف للسلة - {p.price} SAR
              </button>
              <div style={{ fontSize: 10, color: '#555', marginTop: 8 }}>
                SAHARI: agentic inbox + claude-ads + toprank + hyperframes
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 20, background: '#111114', border: '1px solid #00F5FF33', borderRadius: 16, padding: 16 }}>
          <h3 style={{ color: '#00F5FF', fontSize: 14, marginBottom: 8 }}>🔗 SAHARI OS Integration Status</h3>
          <div style={{ fontSize: 11, color: '#aaa', lineHeight: '18px' }}>
            ✅ app/page.tsx - Fixed with 'use client'<br />
            ✅ app/checkout/page.tsx - Fixed with SAHARI webhook<br />
            ✅ api/webhook - SAHARI OS v4.5 - Ready<br />
            ✅ 7 Golden Tools: claude-ads, toprank, hyperframes, clawrouter, camofox, open-higgsfield, agentic inbox<br />
            ✅ 6 Subagents: rea-explorer, ads-optimizer, content-factory, etc.<br />
            ✅ Clean Legal - No CS35 - No Kronos - MIT/Apache
          </div>
          <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
            <a href="/checkout" style={{ background: '#D44F37', color: '#fff', padding: '8px 16px', borderRadius: 999, textDecoration: 'none', fontSize: 12 }}>جرب الشراء</a>
            <a href="https://sahariosvercelfixedstatic100.vercel.app" target="_blank" style={{ background: '#111', color: '#00F5FF', padding: '8px 16px', borderRadius: 999, textDecoration: 'none', fontSize: 12, border: '1px solid #00F5FF33' }}>افتح SAHARI OS</a>
          </div>
        </div>
      </div>
    </div>
  );
}
