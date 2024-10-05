/*
  If color has the following format: 
  const rgbColor = {
    r: 100,
    g: 100, 
    b: 100
  }
*/
// Extracted from Polished
// Code is licensed with an MIT license
export function getLuminance(rgbColor){
 const [r, g, b] = Object.keys(rgbColor).map(key => {
    // Our color numbers represent a 8bit channel. 
    // The formula requires a sRGB channel which is defined by 
    // ColorChannelIn8bit / 255
    const channel = rgbColor[key] / 255
    return channel <= 0.03928
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4
  })
  return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3))
}

export function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem('color-mode');
  const hasPersistedPreference = typeof persistedColorPreference === 'string';
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }
  // If they haven't been explicit, let's check the media query
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return 'light';
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}