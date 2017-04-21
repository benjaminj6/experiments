import React from 'react'

import { COLORS } from './theme'

// Temporary...will be replaced by the experiments themselves
import { Intro, Experiment } from './components'

// Each nested array represents a single row
export default [
  [
    <Intro />
  ],
  [
    <Experiment background={COLORS.teal}>
      <span>Hi theeeeerererere</span>
    </Experiment>
  ],
  [
    <Experiment background={COLORS.red}>
      <span>Hey now!</span>
    </Experiment>,
    <Experiment background={COLORS.blue}>
      <span>Yay!!!</span>
    </Experiment>
  ],
  [
    <Experiment background={COLORS.purple}>
      <span>This will be really cool once it gets going</span>
    </Experiment>
  ]
]
