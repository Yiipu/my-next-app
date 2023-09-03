'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext('')

export default function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [colorTheme, setColorTheme] = useState(localStorage.getItem('theme') || '')

    useEffect(() => {
        const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)")
        setColorTheme(darkModeQuery.matches ? 'dark' : 'light')
        localStorage.setItem('theme', colorTheme)
        
        // 添加事件监听器，以便在用户切换颜色模式时更新 colorTheme
        darkModeQuery.addEventListener('change', (e) => {
            if (e.matches) {
                setColorTheme('dark');
            } else {
                setColorTheme('light');
            }
            localStorage.setItem('theme', colorTheme)
            console.log('darkModeQuery-事件监听器触发');
        })

        // 清除事件监听器
        return () => {
            darkModeQuery.removeEventListener('change', () => { });
        }
    }, [])

    return (
        <ThemeContext.Provider value={colorTheme}>
            {children}
        </ThemeContext.Provider>
    )
}
