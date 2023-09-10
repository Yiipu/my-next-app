'use client'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header';
import { Inter } from 'next/font/google'
import React, { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

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

  const [darkmode, setDarkmode] = useState(false);

  return (
    // ${} 的正确用法
    <html lang='zh-cn' className={` ${inter.className} ${darkmode ? 'dark' : ''} `}>
      <body className='bg-perfume-300 dark:bg-perfume-900 text-perfume-800 dark:text-white'>
        <Header currentTheme={darkmode} onDarkModeToggle={setDarkmode}></Header>
        <div className="w-full mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl">
          {children}
        </div>
      </body>
    </html>
  )
}
