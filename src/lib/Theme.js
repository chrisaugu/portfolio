import { createContext } from 'react'

import { TOKENS_DARK } from './Tokens'

export const ThemeContext = createContext({
  theme: TOKENS_DARK,
  setTheme: () => {},
})

// const customTheme = {
//   ...theme,
//   colors: {
//     ...theme.colors,
//     purple: {
//       50: '#f5e9ff',
//       100: '#dac1f3',
//       200: '#c098e7',
//       300: '#a571dc',
//       400: '#8c48d0',
//       500: '#722fb7',
//       600: '#59238f',
//       700: '#3f1968',
//       800: '#260f40',
//       900: '#10031a',
//     }
//   }
// }


export const lightTheme = {
  body: '#E2E2E2',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
}


const light = {
  bg: 'white',
  fontColor: 'purple'
}

const dark = {
  bg: 'black',
  fontColor: 'white'
}

// export const darkTheme = { ...dark }
// export const lightTheme = { ...light }