import React from 'react'

import { colors } from './theme'

// Temporary...will be replaced by the experiments themselves
import { Intro, Experiment } from './components'

// Each nested array represents a single row
export default [
  [
    <Intro />
  ],
  [
    <Experiment background={colors.teal}>
      <span>Hi theeeeerererere</span>
    </Experiment>
  ],
  [
    <Experiment background={colors.red}>
      <span>Hey now!</span>
    </Experiment>,
    <Experiment background={colors.blue}>
      <span>Yay!!!</span>
    </Experiment>
  ],
  [
    <Experiment background={colors.purple}>
      <span>This will be really cool once it gets going</span>
    </Experiment>
  ]
]
