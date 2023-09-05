import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        sm: `${540 / 16}rem`,
        md: `${720 / 16}rem`,
        lg: `${960 / 16}rem`,
        xl: `${1140 / 16}rem`,
        xxl: `${1320 / 16}rem`,
      },
      screens: {
        // Don't need xs since Tailwind uses min-width approach
        // to its media queries.
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
      },
    },
  },
  plugins: [],
}
export default config
