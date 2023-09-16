import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      // 使用 Bootstrap 的断点
      maxWidth: {
        sm: `${540 / 16}rem`,
        md: `${720 / 16}rem`,
        lg: `${960 / 16}rem`,
        xl: `${1140 / 16}rem`,
        xxl: `${1320 / 16}rem`,
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
      },
      colors: {
        'perfume': {
          '50': '#fbf6fe',
          '100': '#f5eafd',
          '200': '#edd9fb',
          '300': '#debbf7',
          '400': '#d09cf2',
          '500': '#b665e7',
          '600': '#a145d8',
          '700': '#8b33bd',
          '800': '#752e9b',
          '900': '#60267d',
          '950': '#42105b',
        },
      },
      lineHeight: {
        '12': '3rem',
      },
    },
  },
  plugins: [],
  // 手动启用暗色模式
  // darkMode: 'class',
}
export default config
