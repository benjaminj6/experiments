// @flow
import { css } from 'styled-components'

import { transitionTypes } from './constants'

// Conditional application of properties.
export const getPropOrDefault = (
  prop: string,
  defaultValue: mixed
) => (props: any) => props[prop] || defaultValue

export const getPropConditionally = (
  prop: string,
  conditionalValue: mixed,
  defaultValue: mixed
) => (props: any) => props[prop] ? conditionalValue : defaultValue

// Allows for setting of styles when an `absolute` prop is provided
export const getPropertyIfAbsolute = (
conditionalValue: mixed
) => getPropConditionally('absolute', conditionalValue, 'initial')

export const hover = (...args: Array<any>) => css`
  ;&:hover {
    ${css(...args)}
  }
`

// Media queries -- use ems to handle users that modify font sizes
export const media = {
  medium: (...args: Array<any>) => css`
    ;@media (min-width: 30em) {
      ${css(...args)}
    }
  `
}

export const transitionShort = (prop: string) => css`
  transition: ${prop} ${transitionTypes.short}
`
