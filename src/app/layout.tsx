import '@/styles/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header';
import React from 'react'
import { PtengineAnalytics } from '@/components/analytics';

export const metadata: Metadata = {
  title: {
    default: 'Dodo',
    template: '%s | Dodo'
  },
  description: '用作练习next.js的App',
  keywords: ['Next.js', 'React', 'JavaScript', 'Dodo'],
  authors: [{ name: 'Yiipu', url: 'https://github.com/Yiipu' }],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#debbf7' },
    { media: '(prefers-color-scheme: dark)', color: '#60267d' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ${} 的正确用法
    <html lang='zh-cn'>
      <PtengineAnalytics />
      <body className='bg-perfume-300 dark:bg-perfume-900 text-perfume-800 dark:text-white'>
        <Header className='fixed top-0 backdrop-blur-sm'></Header>
        {/* 抵消 fixed-top 带来的副作用 */}
        <div className="pt-12 h-0"></div>
        <main className='container-md px-2 py-2'>
          {children}
        </main>
      </body>
    </html>
  )
}
