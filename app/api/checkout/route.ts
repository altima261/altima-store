import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const TAP_SECRET = process.env.TAP_SECRET_KEY;
    const TAP_MERCHANT = process.env.TAP_MERCHANT_ID || "68090908";

    if (!TAP_SECRET) {
      return NextResponse.json({ message: "TAP_SECRET_KEY missing in Production" }, { status: 500 });
    }

    const payload = {
      amount: 249,
      currency: "SAR",
      customer: {
        first_name: body.name?.split(" ")[0] || "Mohammed",
        last_name: body.name?.split(" ")[1] || "Binashwan",
        email: body.email || "ashwan241@gmail.com",
        phone: { country_code: "966", number: "502836333" }
      },
      merchant_id: TAP_MERCHANT,
      source: { id: "src_all" },
      payment_type: "all",
      redirect: { url: "https://altima-store.vercel.app/success" },
      post: { url: "https://altima-store.vercel.app/success" },
      description: "ALTIMA 15 Luxury Templates",
      reference: { transaction: "ALTIMA-" + Date.now(), order: "ALTIMA-249" }
    };

    const r = await fetch("https://api.tap.company/v2/checkout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TAP_SECRET}`,
        "Content-Type": "application/json"
      },
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