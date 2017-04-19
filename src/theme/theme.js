import styled from 'styled-components'

import { white, black } from './colors'

export const Section = styled.section`
  background: ${({ background }) => background || white};
  color: ${({ background }) => background || background === 'white' ? white : black};
  height: ${({ height }) => height || 'auto'};
  min-height: 200px;
  width: 100%;
  padding: 1rem;
`

export const Span = styled.span`
  color: ${({ whiteText }) => white || black}
`
