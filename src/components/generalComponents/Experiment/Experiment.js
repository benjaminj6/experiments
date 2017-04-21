// @flow
import React from 'react'

import ExperimentFooter from './ExperimentFooter'
import { theme } from '../../../theme'

const { Section } = theme

// This is the primary `section` designed to contain each experiment
export default (props: { children: Array<React$Component<any>> }) => (
  <Section {...props}>
    <ExperimentFooter title='foo' />
    {props.children}
  </Section>
)
