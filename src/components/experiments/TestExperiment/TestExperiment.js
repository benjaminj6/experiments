// @flow
import React from 'react'

import { Experiment } from 'src/components/generalComponents'

import data from './data'

export default () => (
  <Experiment data={data}>
    <span>content.</span>
  </Experiment>
)
