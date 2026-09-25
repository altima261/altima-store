import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest){
  const { amount, product } = await req.json()
  // بعد ما توافق جيديا، بتحط هنا المفاتيح اللي يعطونك إياها
  // مؤقتاً نرجع رابط واتساب عشان لا يعلق المتجر
  
  const checkoutUrl = `https://wa.me/966502836333?text=طلب شراء: ${product} - ${amount} ر.س`
  
  // لما تاخذ مفاتيح جيديا، استبدل الكود فوق بهذا:
  /*
  const res = await fetch('https://api.geidea.net/pgw/api/v1/direct/pay', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      merchantPublicKey: process.env.GEIDEA_PUBLIC_KEY,
      amount: amount,
      currency: 'SAR',
      orderId: 'ALTIMA-'+Date.now(),
      callbackUrl: 'https://altima-store.vercel.app/success'
    })
  })
  const data = await res.json()
  return NextResponse.json({ url: data.orderUrl })
  */

  return NextResponse.json({ url: checkoutUrl })
}
