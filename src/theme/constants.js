export const COLORS = {
  blue: '#2196f3',
  green: '#4caf50',
  teal: '#009688',
  red: '#f44336',
  purple: '#9c27b0',
  indigo: '#3f51b5',
  orange: '#ff5722',
  black: '#222222', // Slightly off-black improves readability
  white: '#efefef' // Slightly off-white improves readability
}

export const TRANSITIONS = {
  short: '0.25s linear'
}

export const REM = 18
export const DEFAULT_SVG_SIZE = REM + 2 // Needs to be a `px` amt for svg props

export const BREAKPOINTS = {
  medium: '25em',
  extraLarge: `${1200 / REM}em` // 1200px in em
}
