// @flow
import rgba from 'hex-rgba'
import { css } from 'styled-components'

import { COLORS, TRANSITIONS, BREAKPOINTS } from './constants'

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
    return this.getPropConditionally('absolute', conditionalValue, 'initial')
  }
}

// Media queries -- use ems to handle users that modify font sizes
export class MediaMixins {
  static _media (breakpoint, ...args: Array<any>) {
    return () => css`
      ;@media (min-width: ${breakpoint}) {
        ${css(...args)}
      }
    `
  }

  static medium (...args) {
    return this._media(BREAKPOINTS.medium, ...args)
  }
}

export class PseudoMixins {
  static hover (...args: Array<any>) {
    return css`
      ;&:hover {
        ${css(...args)}
      }
    `
  }
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

export class TransitionMixins {
  static _transition (prop: string, transitionType: string) {
    return css`transition: ${prop} ${transitionType}`
  }

  static short (prop: string) {
    return this._transition(prop, TRANSITIONS.short)
  }
}

export const transitionShort = (prop: string) => css`
  transition: ${prop} ${TRANSITIONS.short}
`
