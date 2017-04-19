import React from 'react'

import { theme } from '../../theme'
const { Section } = theme

export default props => (
  <Section {...props}>
    {props.children}
  </Section>
)
