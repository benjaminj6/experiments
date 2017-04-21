import React from 'react'

import { theme } from '../../theme'

// Styles
import './Intro.css'

const { Section } = theme

export default props => (
  <Section
    id='intro'>
    <h1>Hello world!</h1>
    <h3>Welcome to my playground</h3>
  </Section>
)
