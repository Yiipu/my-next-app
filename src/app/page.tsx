'use client'
import Image from 'next/image'
import { Counter } from '@/components/counter';
import useTheme from '@/components/theme-context';
import Header from '@/components/header';
import Banner from '@/components/banner';

export default function Home() {

  const colorTheme = useTheme();

  return (
    <div data-bs-theme={colorTheme}>

      <Header></Header>
      <Banner></Banner>
      <div data-bs-theme={colorTheme}>
        <h1>Hello, {colorTheme} Theme!</h1>
        <p>This is a {colorTheme}-themed section.</p>
      </div>

    </div>
  )
}
