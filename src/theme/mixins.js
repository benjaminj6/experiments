// @flow
import rgba from 'hex-rgba'
import { css } from 'styled-components'

import { COLORS, TRANSITIONS } from './constants'

export const colorMixins = {
  shade: (amt: number) => rgba(COLORS.black, amt),
  fade: (amt: number) => rgba(COLORS.white, amt)
}

export class PropMixins {
  static getPropOrDefault (prop: string, defaultValue: mixed) {
    return (props: any) => props[prop] || defaultValue
  }

  static getPropConditionally (prop: string, conditionalValue: mixed, defaultValue: mixed) {
    return (props: any) => props[prop] ? conditionalValue : defaultValue
  }

  // shortcut for getPropConditionally('absolute', value, 'initial')
  static getPropertyIfAbsolute (conditionalValue: mixed) {
    console.log(this)
    return this.getPropConditionally('absolute', conditionalValue, 'initial')
  }
}

// Media queries -- use ems to handle users that modify font sizes
export const media = {
  medium: (...args: Array<any>) => css`
    ;@media (min-width: 30em) {
      ${css(...args)}
    }
  `
}

export const pseudoSelectors = {
  hover: (...args: Array<any>) => css`
    ;&:hover {
      ${css(...args)}
    }
  `
}

export class SizingMixins {
  static square (size) {
    return css`
      height: ${size}
      width: ${size}
    `
  }

  static circle (size) {
    return css`
      ${this.square(size)}
      border-radius: 50%
    `
  }
}

export const transitionShort = (prop: string) => css`
  transition: ${prop} ${TRANSITIONS.short}
`
