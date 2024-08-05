import {useState, useEffect } from 'react';
import {TOKENS_LIGHT, TOKENS_DARK} from "@/contexts/ThemeContext";

export default function useTheme() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches
      ? TOKENS_DARK
      : TOKENS_LIGHT)
  }, []);

  const toggleTheme = () => {
    // setTheme(theme == 'light' ? 'dark' : 'light');
    setTheme(last => (last === 'dark' ? 'light' : 'dark'))
  }

  return {
    theme,
    toggleTheme
  }
};

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  // const [componentMounted, setComponentMounted] = useState(false);
  
  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark')
    } 
    else {
      setMode('light')
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  
  // useEffect(() => {
  //   const localTheme = window.localStorage.getItem('theme');

  //   if (localTheme) {
  //     setTheme(localTheme);
  //   } else {
  //     window.localStorage.setItem('theme', 'light');
  //   }
  // })

  // useEffect(() => {
  // if (
  //   window.matchMedia &&
  //   window.matchMedia('(prefers-color-scheme: dark)').matches && 
  //   !localTheme
  // ) {
  //   setTheme('dark')
  //   }
  // })

  // useEffect(() => {
  //   const localTheme = window.localStorage.getItem('theme');
  //   window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ? 
  //     setMode('dark') :
  //       localTheme ?
  //         setTheme(localTheme) :
  //           setMode('light');

  //   setComponentMounted(true);
  // })

  return [theme, toggleTheme/*, componentMounted*/]
};