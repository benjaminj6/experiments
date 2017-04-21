import React from 'react'
import styled from 'styled-components'

import { theme } from '../../theme'

const { Section, H1 } = theme

const StyledSection = styled(Section)`
  text-align: center
  display: flex
  justify-content: center
  flex-direction: column
`

const Intro = props => (
  <StyledSection
    id='intro'>
    <H1>Hello world!</H1>
    <h3>Welcome to my playground</h3>
  </StyledSection>
)

export default Intro
