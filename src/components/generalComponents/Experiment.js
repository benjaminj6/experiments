// @flow
import React from 'react'

import { theme } from '../../theme'
import { InfoIcon, CodeIcon } from './Icons'

const { Section, Span, Header } = theme

/*
 * This is the primary `section` component for the App, intended to house each experiement
**/
export default (props: {
  children: Array<any>
}) => (
  <Section {...props}>
    <Header absolute>
      <InfoIcon />
      <CodeIcon />
      <Span small whiteText>Sample text.</Span>
    </Header>
    {props.children}
  </Section>
)
