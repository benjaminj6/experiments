// @flow
import rgba from 'hex-rgba'
import { css } from 'styled-components'

import { COLORS, TRANSITIONS, BREAKPOINTS } from './constants'

export const colorMixins = {
  shade: (amt: number) => rgba(COLORS.black, amt),
  fade: (amt: number) => rgba(COLORS.white, amt)
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

export class PropMixins {
  static propOrDefault (prop: string, defaultValue: mixed) {
    return (props: any) => props[prop]
        ? css`${prop}: ${props[prop]}`
        : css`${prop}: ${defaultValue}`
  }

  static getPropConditionally (prop: string, conditionalValue: mixed, defaultValue: mixed) {
    return (props: any) => props[prop] ? conditionalValue : defaultValue
  }

  // shortcut for getPropConditionally('absolute', value, 'initial')
  static getPropertyIfAbsolute (conditionalValue: mixed) {
    return this.getPropConditionally('absolute', conditionalValue, 'initial')
  }
}

export class PseudoMixins {
  static _composePseudo (selector: string, ...args: Array<any>) {
    return () => css`
      ;&:${selector} {
        ${css(...args)}
      }
    `
  }

  static hover (...args: Array<any>) {
    return this._composePseudo('hover', ...args)
  }

  static focus (...args: Array<any>) {
    return this._composePseudo('focus', ...args)
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

  static percentWidth (width: number) {
    return css`width: ${width}%`
  }

  static maxWidthCentered (width: string) {
    return css`
      margin: 0 auto
      max-width: ${width}
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
