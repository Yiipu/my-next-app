'use client'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from 'next'
import React, { useState, useEffect} from 'react'
import { ThemeContext } from '@/components/glocal-context'

export const metadata: Metadata = {
  title: 'My Next App',
  description: '用作练习next.js的App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [colorTheme, setColorTheme] = useState('light')

  // ISSUE 
  // 使用 Effect 钩子在顶级组件获取 colorTheme 导致所有子级组件都是 client component ？
  useEffect(() => {
    // 创建一个媒体查询，检测用户的首选颜色模式
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

    // 初始化 colorTheme 值
    if (darkModeQuery.matches) {
      console.log('用户设备颜色模式-dark')
      setColorTheme('dark')
    }

    // 添加事件监听器，以便在用户切换颜色模式时更新 colorTheme
    darkModeQuery.addEventListener('change', (e) => {
      if (e.matches) {
        setColorTheme('dark');
      } else {
        setColorTheme('light');
      }
    })

    // 清除事件监听器
    return () => {
      darkModeQuery.removeEventListener('change', () => { });
      console.log('颜色模式事件监听器卸载');
    }
  }, [])

  return (
    <html lang='zh-cn'>
      <body className="bg-body" data-bs-theme={colorTheme}>
        <div className='wrapper'>
          <header className='navbar navbar-expand-md'><h1>Global Header</h1></header>
          <ThemeContext.Provider value={colorTheme}>
            {children}
          </ThemeContext.Provider>
        </div>
      </body>
    </html>
  )
}
