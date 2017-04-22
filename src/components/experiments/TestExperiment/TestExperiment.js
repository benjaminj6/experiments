// @flow
import React from 'react'

import { Experiment } from 'src/components/generalComponents'

import data from './data'

export default (props: any) => (
  <Experiment data={data}>
    <span>content.</span>
  </Experiment>
)
