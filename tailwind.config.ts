import type { Config } from 'tailwindcss';
const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      width: {
        w70: '70%',
      },
      colors: {
        slate: {
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
        },
        sky: {
          300: '#7dd3fc',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        cyan: {
          800: '#155e75',
          950: '#082f49',
        },
      },
    },
  },
  plugins: [],
});
export default config;
