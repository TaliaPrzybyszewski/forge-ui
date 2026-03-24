export function hexRgb(h: string): string {
  try {
    return `${parseInt(h.slice(1,3),16)},${parseInt(h.slice(3,5),16)},${parseInt(h.slice(5,7),16)}`
  } catch { return '127,119,221' }
}

export function lighten(h: string, a = 60): string {
  try {
    return `rgba(${Math.min(255,parseInt(h.slice(1,3),16)+a)},${Math.min(255,parseInt(h.slice(3,5),16)+a)},${Math.min(255,parseInt(h.slice(5,7),16)+a)},.9)`
  } catch { return h }
}

export function contrast(h: string): string {
  try {
    const r = parseInt(h.slice(1,3),16), g = parseInt(h.slice(3,5),16), b = parseInt(h.slice(5,7),16)
    return ((.299*r + .587*g + .114*b) / 255) > .5 ? '#0a0a0b' : '#f0ede8'
  } catch { return '#f0ede8' }
}
