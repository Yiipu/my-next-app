'use client'
import useTheme from '@/components/theme-context';
import Header from '@/components/header';

export default function About() {

  const colorTheme = useTheme();

  return (
    <div data-bs-theme={colorTheme}>

      <Header></Header>

      <div data-bs-theme={colorTheme}>
        <h1>Hello, {colorTheme} Theme!</h1>
        <p>This is a {colorTheme}-themed section.</p>
      </div>

    </div>
  )
}
