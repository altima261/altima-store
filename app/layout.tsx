import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ALTIMA FACTORY - قوالب بزنس فاخرة',
  description: '15 قالب بزنس احترافي CEO CFO CTO COO CMO بتصميم Black Marble و Gold',
  verification: {
    google: 'Pq9WOrfXACdlZRisSUyCZp0RzredZexUlDTlgxzIEpU',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}