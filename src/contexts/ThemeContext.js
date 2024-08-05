import { createContext, useContext, useState } from 'react';
import useTheme from "@/hooks/useTheme";
import { getInitialColorMode } from '@/lib/utils';

export const TOKENS_DARK = 'dark';
export const TOKENS_LIGHT = 'light';

const ThemeContext = createContext({
  theme: TOKENS_DARK,
  isDarkTheme: false, 
  toggleTheme: () => {},
  setTheme: () => {},
})

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeProvider({children}) {
  const [colorMode, rawSetColorMode] = useState(/*getInitialColorMode*/'light');
  const {theme} = useTheme();

  const setColorMode = (value) => {
    rawSetColorMode(value);
    // Persist it on update
    window.localStorage.setItem('color-mode', value);
  };

  return (
    <ThemeContext.Provider value={{ theme, colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

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


// export const lightTheme = {
//   body: '#E2E2E2',
//   text: '#363537',
//   toggleBorder: '#FFF',
//   gradient: 'linear-gradient(#39598A, #79D7ED)',
// }

// export const darkTheme = {
//   body: '#363537',
//   text: '#FAFAFA',
//   toggleBorder: '#6B8096',
//   gradient: 'linear-gradient(#091236, #1E215D)',
// }

export const darkTheme = {
  color: {
    primary: 'red',
    darkIndigo: '#071530',
    paleGray: '#e5e5e8',
    background: '#252525',
    text: '#ffffff',
  },
};

export const lightTheme = {
  color: {
    primary: 'red',
    darkIndigo: '#071530',
    paleGray: '#e5e5e8',
    background: '#efefef',
    text: '#252525',
  },
};

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