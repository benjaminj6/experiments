// @flow
import styled, { css } from 'styled-components'

import { COLORS, DEFAULT_SVG_SIZE } from './constants'
import {
  pseudoSelectors as pseudo,
  colorMixins,
  PropMixins as Pm,
  SizingMixins,
  transitionShort
} from './mixins'

const { black, white } = COLORS
const { shade } = colorMixins


// General html tags, styled according to the app's theme
export const Button = styled.button`
  background-color: transparent
  border: none
  padding: 0
  ${SizingMixins.circle(`${24}px`)}
`

export const Footer = styled.footer`
  align-items: center
  bottom: ${Pm.getPropertyIfAbsolute(0)}
  display: flex
  left: ${Pm.getPropertyIfAbsolute(0)}
  justify-content: flex-end
  padding: 0.5rem
  position: ${Pm.getPropertyIfAbsolute('absolute')}
  right: ${Pm.getPropertyIfAbsolute(0)}
`

export const H1 = styled.h1`
  font-weight: bolder
`

export const Section = styled.section`
  background: ${Pm.getPropOrDefault('background', white)}
  color: ${({ background }) => background && background !== white ? white : black}
  height: ${Pm.getPropOrDefault('height', 'auto')}
  min-height: 400px
  padding: 1rem
  position: relative
  width: 100%
`

export const Span = styled.span`
  color: ${Pm.getPropConditionally('whiteText', white, black)}
  font-size: ${Pm.getPropConditionally('small', '0.75rem', 'auto')}
  font-family: ${Pm.getPropConditionally('monospace', 'monospace', 'inherit')}
  margin: ${Pm.getPropOrDefault('margin', 0)}
`

// TODO: move these to mixins as well
const setShadedProp = (shaded, defaultValue) => Pm.getPropConditionally('shaded', shaded, defaultValue)

export const Svg = styled.svg`
  fill: ${Pm.getPropOrDefault('color', black)}
  margin: ${Pm.getPropOrDefault('margin', 0)}
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
    Pm.getPropConditionally('button', pseudo.hover`
      background-color: ${setShadedProp(shade(30), shade(10))}
      cursor: pointer
    `, '')
  }
`
