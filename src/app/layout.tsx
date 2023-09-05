import '@/styles/globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import React from 'react'

// ISSUE
// 不起作用
export const metadata: Metadata = {
  title: {
    default: 'Dodo',
    template: '%s | Dodo'
  },
  description: '用作练习next.js的App',
  keywords: ['Next.js', 'React', 'JavaScript', 'Dodo'],
  authors: [{ name: 'Yiipu', url: 'https://github.com/Yiipu' }],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'light' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
      <html lang='zh-cn'>
        <Head>
          <title>Dodo</title>
        </Head>
        <body className='bg-white dark:bg-slate-800'>
          {children}
        </body>
      </html>
  )
}
