'use client'
import Image from 'next/image'
import { Counter } from '@/components/client-components';
import { useContext } from 'react';
import { ThemeContext } from '@/components/glocal-context';

export default function Home() {
  const colorTheme = useContext(ThemeContext)
  return (
    <div className='container-md'>
      <nav>
        <Counter className=''></Counter>
        <div data-bs-theme='dark'>
          <h1>Hello, Dark Theme!</h1>
          <p>This is a dark-themed section.</p>
        </div>

        <div data-bs-theme='light'>
          <h1>Hello, Light Theme!</h1>
          <p>This is a light-themed section.</p>
        </div>

        <div data-bs-theme={colorTheme}>
          <h1>Hello, {colorTheme} Theme!</h1>
          <p>This is a {colorTheme}-themed section.</p>
        </div>

      </nav>
    </div>
  )
}
