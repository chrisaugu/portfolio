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