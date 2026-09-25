import AltimaFooter from '../components/AltimaFooter'
import Link from 'next/link'
export default function Home(){
  return (<div dir='rtl' className='min-h-screen bg-[#08080A] text-white'><div className='p-10 text-center'><h1 className='text-3xl font-black'>ألتيما</h1><p>EXECUTIVE CVS</p><Link href='/return-policy' className='text-[#D4AF37]'>سياسة الاسترجاع</Link></div><AltimaFooter/></div>)
}
