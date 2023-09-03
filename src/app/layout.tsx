'use client'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from 'next'
import React from 'react'
import { ThemeProvider } from '@/components/theme-context'

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
      <ThemeProvider>
        <body>
          <div>
            <header>
              <h1>Global Header</h1>
            </header>
            {children}
            <footer>
              <h2>Global Footer</h2>
            </footer>
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}
