const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // darkMode: 'media',
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    colors: {
      gray: colors.gray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    // colors: {
      // 'blue': '#1fb6ff',
      // 'purple': '#7e5bef',
      // 'pink': '#ff49db',
      // 'orange': '#ff7849',
      // 'green': '#13ce66',
      // 'yellow': '#ffc82c',
      // 'gray-dark': '#273444',
      // 'gray': '#8492a6',
      // 'gray-light': '#d3dce6',
      // primary: {
      //   50: '#eff6ff',
      //   100: '#dbeafe',
      //   200: '#bfdbfe',
      //   300: '#93c5fd',
      //   400: '#60a5fa',
      //   500: '#3b82f6',
      //   600: '#2563eb',
      //   700: '#1d4ed8',
      //   800: '#1e40af',
      //   900: '#1e3a8a',
      // },
      // secondary: {
      //   50: '#f8fafc',
      //   100: '#f1f5f9',
      //   200: '#e2e8f0',
      //   300: '#cbd5e1',
      //   400: '#94a3b8',
      //   500: '#64748b',
      //   600: '#475569',
      //   700: '#334155',
      //   800: '#1e293b',
      //   900: '#0f172a',
      // },
    // },
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      // spacing: {
      //   '7': '1.75rem',
      //   '9': '2.25rem',
      //   '28': '7rem',
      //   '80': '20rem',
      //   '96': '24rem',
      //   '128': '32rem',
      //   '144': '36rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // }
      // height: {
      //   '1/2': '50%',
      // },
      // scale: {
      //   '30': '.3',
      // },
      // boxShadow: {
      //   outline: '0 0 0 3px rgba(101, 31, 255, 0.4)',
      // },
    }
  },
  // variants: {
  //   scale: ['responsive', 'hover', 'focus', 'group-hover'],
  //   textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  //   opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  //   backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  // },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
}