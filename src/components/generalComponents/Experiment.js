// @flow
import React from 'react'

import { InfoIcon } from './Icons'
import { theme } from '../../theme'

const { Section, Span, Footer } = theme

// This is the primary `section` designed to contain each experiment
export default (props: { children: Array<React$Component<any>> }) => (
  <Section {...props}>
    <Footer absolute>
      <Span small whiteText monospace margin='0 0.5rem 0 0'>Sample text.</Span>
      <InfoIcon margin='0 0.25rem' shaded button />
    </Footer>
    {props.children}
  </Section>
)
