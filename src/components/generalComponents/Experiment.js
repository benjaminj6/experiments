// @flow
import React from 'react'

import { InfoIcon, CodeIcon } from './Icons'

import { theme } from '../../theme'

const { Section, Span, Footer } = theme

// This is the primary `section` designed to contain each experiment
export default (props: {
  children: Array<any>
}) => (
  <Section {...props}>
    <Footer absolute>
      <Span small whiteText monospace margin='0 0.5rem 0 0'>Sample text.</Span>
      {
        [InfoIcon, CodeIcon].map((Icon, i: number) => (
          <Icon
            key={`icon-list-item-${i}`}
            margin='0 0.25rem'
            shaded />
        ))
      }
    </Footer>
    {props.children}
  </Section>
)
