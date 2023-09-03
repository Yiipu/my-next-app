'use client'
import Image from 'next/image'
import { Counter } from '@/components/counter';
import useTheme from '@/components/theme-context';
import themeToggle from '@/components/theme-context';

export default function Home() {
  const colorTheme = useTheme();
  return (
    <div className='container-md'>
      <nav>

        <Counter className=''></Counter>
        
        <div data-bs-theme={colorTheme}>
          <h1>Hello, {colorTheme} Theme!</h1>
          <p>This is a {colorTheme}-themed section.</p>
        </div>
        
      </nav>
    </div>
  )
}
