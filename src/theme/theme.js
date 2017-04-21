// @flow
import rgba from 'hex-rgba'
import styled, { css } from 'styled-components'

import { colors } from './constants'
import {
  getPropConditionally,
  getPropertyIfAbsolute,
  getPropOrDefault,
  hover,
  transitionShort
} from './mixins'

const { black, white } = colors

// General html tags, styled according to the app's theme
export const Footer = styled.footer`
  align-items: center
  bottom: ${getPropertyIfAbsolute(0)}
  display: flex
  left: ${getPropertyIfAbsolute(0)}
  justify-content: flex-end
  padding: 0.5rem
  position: ${getPropertyIfAbsolute('absolute')}
  right: ${getPropertyIfAbsolute(0)}
`

export const H1 = styled.h1`
  font-weight: bolder
`

export const Section = styled.section`
  background: ${getPropOrDefault('background', white)}
  color: ${({ background }) => background && background !== white ? white : black}
  height: ${getPropOrDefault('height', 'auto')}
  min-height: 400px
  padding: 1rem
  position: relative
  width: 100%
`

export const Span = styled.span`
  color: ${getPropConditionally('whiteText', white, black)}
  font-size: ${getPropConditionally('small', '0.75rem', 'auto')}
  font-family: ${getPropConditionally('monospace', 'monospace', 'inherit')}
  margin: ${getPropOrDefault('margin', 0)}
`

// TODO: move these to mixins as well
const shade = amt => rgba(black, amt)
const setShadedProp = (shaded, defaultValue) => getPropConditionally('shaded', shaded, defaultValue)

export const Svg = styled.svg`
  fill: ${getPropOrDefault('color', black)}
  margin: ${getPropOrDefault('margin', 0)}
  ${transitionShort('background-color')}

  /* Shaded background */
  ${
    setShadedProp(css`
      background-color: ${shade(20)}
      border-radius: 50%
      padding: 0.25rem
    `, '')
  }

  /* Hover state for button svgs */
  ${
    getPropConditionally('button', hover`
      background-color: ${setShadedProp(shade(30), shade(10))}
      cursor: pointer
    `, '')
  }
`
