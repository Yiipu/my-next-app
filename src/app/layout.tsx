import '@/styles/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header';
import React from 'react'

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

  let darkmode = false;

  async function setDarkmode(value: boolean){
    // 'use server'
    darkmode = value;
  }

  return (
    // ${} 的正确用法
    <html lang='zh-cn' className={` ${darkmode ? 'dark' : ''} `}>
      <body className='bg-perfume-300 dark:bg-perfume-900 text-perfume-800 dark:text-white'>
        <Header currentTheme={darkmode} callBack={undefined}></Header>
        <div className="w-full mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl">
          {children}
        </div>
      </body>
    </html>
  )
}
