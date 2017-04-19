// @flow
/*
 * Styled components to be used throughout page for consistent UI
 */
import styled from 'styled-components'

import { white, black } from './colors'
import { getPropOrDefault, getPropertyIfAbsolute } from './mixins'

export const Header = styled.header`
  left: ${getPropertyIfAbsolute(0)}
  padding: 0.5rem
  position: ${getPropertyIfAbsolute('absolute')}
  right: ${getPropertyIfAbsolute(0)}
  top: ${getPropertyIfAbsolute(0)}
`

export const Section = styled.section`
  background: ${getPropOrDefault('background', white)}
  color: ${({ background }) => background && background !== white ? white : black}
  height: ${getPropOrDefault('height', 'auto')}
  min-height: 200px
  padding: 1rem
  position: relative
  width: 100%
`

export const Span = styled.span`
  color: ${({ whiteText }) => whiteText ? white : black}
  fontSize: ${({ small }) => small ? '0.75rem' : 'auto'}
`

export const Svg = styled.svg`
  fill: ${getPropOrDefault('color', black)}
`
