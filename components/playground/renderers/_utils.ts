export function hexRgb(h: string): string {
  try { return `${parseInt(h.slice(1,3),16)},${parseInt(h.slice(3,5),16)},${parseInt(h.slice(5,7),16)}` }
  catch { return '127,119,221' }
}

export function lighten(h: string, a = 60): string {
  try { return `rgba(${Math.min(255,parseInt(h.slice(1,3),16)+a)},${Math.min(255,parseInt(h.slice(3,5),16)+a)},${Math.min(255,parseInt(h.slice(5,7),16)+a)},.9)` }
  catch { return h }
}

export function contrast(h: string): string {
  try {
    const r=parseInt(h.slice(1,3),16), g=parseInt(h.slice(3,5),16), b=parseInt(h.slice(5,7),16)
    return ((.299*r+.587*g+.114*b)/255)>.5?'#0a0a0b':'#f0ede8'
  } catch { return '#f0ede8' }
}

export const COLORS = [
  {hex:'#7F77DD',name:'Purple'},{hex:'#378ADD',name:'Blue'},
  {hex:'#e24b4a',name:'Red'},{hex:'#EF9F27',name:'Amber'},
  {hex:'#1D9E75',name:'Teal'},{hex:'#D4537E',name:'Pink'},
  {hex:'#f5e642',name:'Yellow'},{hex:'#f0ede8',name:'White'},
  {hex:'#888780',name:'Gray'},{hex:'#4CAF50',name:'Green'},
]
