import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(()=>({}));
    const TAP_SECRET = process.env.TAP_SECRET_KEY;
    
    if (!TAP_SECRET) {
      return NextResponse.json({ message: "TAP_SECRET_KEY missing in Production" }, { status: 500 });
    }

    const payload = {
      amount: 249,
      currency: "SAR",
      customer: {
        first_name: body.name?.split(" ")[0] || "Mohammed",
        last_name: "Binashwan",
        email: body.email || "ashwan241@gmail.com"
      },
      redirect: { url: "https://altima-store.vercel.app/success" },
      description: "ALTIMA 15 Luxury Templates"
    };

    const r = await fetch("https://api.tap.company/v2/checkout", {
      method: "POST",
      headers: { Authorization: `Bearer ${TAP_SECRET}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await r.json();
    
    if (!r.ok) {
      return NextResponse.json({ message: `Tap Error: ${JSON.stringify(data)}`, data }, { status: 400 });
    }

    return NextResponse.json({ transaction_url: data.transaction?.url || data.url });

  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}