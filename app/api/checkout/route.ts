import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(()=>({}));
    const email = body.email || "customer@altima.store";
    const name = body.name || "Altima Customer";
    
    const res = await fetch("https://api.tap.company/v2/charges", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.TAP_SECRET_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: 249,
        currency: "SAR",
        customer: {
          first_name: name.split(" ")[0] || "Customer",
          last_name: name.split(" ").slice(1).join(" ") || "Altima",
          email: email
        },
        merchant: { id: process.env.TAP_MERCHANT_ID || "68090867" },
        source: { id: "src_all" },
        redirect: { url: "https://altima-store.vercel.app/success" },
        description: "ALTIMA 15 Luxury Templates - 249 SAR",
        statement_descriptor: "ALTIMA STORE"
      })
    });
    
    const data = await res.json();
    if (!res.ok) return NextResponse.json({ error: data }, { status: 400 });
    
    return NextResponse.json({
      success: true,
      transaction_url: data.transaction?.url || data.url
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}