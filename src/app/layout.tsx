import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// 字体实例，用于设置全局字体
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Next App',
  description: '用作练习next.js的App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-cn">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
