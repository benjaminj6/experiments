// @flow
import styled from 'styled-components'

import { COLORS, DEFAULT_SVG_SIZE } from './constants'
import {
  PseudoMixins,
  colorMixins,
  PropMixins as Pm,
  SizingMixins,
  TransitionMixins
} from './mixins'

const { black, white } = COLORS
const { shade } = colorMixins


// General html tags, styled according to the app's theme
const buttonPadding = 2
export const Button = styled.button`
  background-color: ${shade(20)}
  border: none
  padding: ${buttonPadding}px

  ${SizingMixins.circle(`${DEFAULT_SVG_SIZE + (buttonPadding * 2)}px`)}
  ${TransitionMixins.short('background-color')}

  ${PseudoMixins.hover`
    background-color: ${shade(30)}
    cursor: pointer
  `}
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
  color: ${({ background }) => background && background !== white ? white : black}
  min-height: 400px
  padding: 1rem
  position: relative
  width: 100%

  ${Pm.propOrDefault('background', white)}
  ${Pm.propOrDefault('height', 'auto')}
`

export const Span = styled.span`
  color: ${Pm.getPropConditionally('whiteText', white, black)}
  font-size: ${Pm.getPropConditionally('small', '0.75rem', 'auto')}
  font-family: ${Pm.getPropConditionally('monospace', 'monospace', 'inherit')}

  ${Pm.propOrDefault('margin', 0)}
`

export const Svg = styled.svg`
  ${Pm.propOrDefault('fill', black)}
  ${Pm.propOrDefault('margin', 0)}
`
