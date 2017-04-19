// @flow
import React from 'react'

import { InfoIcon, CodeIcon } from './Icons'

import { mapComponents } from '../utils'
import { theme } from '../../theme'

const { Section, Span, Header } = theme

// This is the primary `section` designed to contain each experiment
export default (props: {
  children: Array<any>
}) => (
  <Section {...props}>
    <Header absolute>
      <Span small whiteText monospace margin='0 0.5rem 0 0'>Sample text.</Span>
      {
        mapComponents(
          [InfoIcon, CodeIcon],
          { margin: '0 0.25rem', shaded: true }
        )
      }
    </Header>
    {props.children}
  </Section>
)
