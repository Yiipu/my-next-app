import '@/styles/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header';
import React from 'react'
import Script from 'next/script';

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
    // ${} 的正确用法
    <html lang='zh-cn'>
      {/* Google Analytics */}
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-S72BH8NKD1'
        strategy="afterInteractive"
      />
      <Script id='google-analytics' strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-xxxxxxxxxx');
        `}
      </Script>
      <body className='bg-perfume-300 dark:bg-perfume-900 text-perfume-800 dark:text-white'>
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
