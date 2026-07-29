import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Inter } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Webasto R25 & R20 — Điều hòa đỗ xe cho Cabin Xe Tải | Đông Á Group',
  description:
    'Đông Á Group phân phối điều hòa đỗ xe Webasto chính hãng R25 (2 quạt) và R20 (1 quạt) cho xe tải, xe đầu kéo. Làm lạnh sâu khi tắt máy, tiết kiệm dầu. Hotline 0906.02.04.99.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${oswald.variable} ${inter.variable} bg-[var(--da-ivory)]`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
