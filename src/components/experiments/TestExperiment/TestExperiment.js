// @flow
import React from 'react'

import { Experiment } from '../../generalComponents'
import { COLORS } from '../../../theme'

const data = {
  title: 'testtesttest',
  background: COLORS.red
}

export default (props: any) => (
  <Experiment data={data}>
    <span>content.</span>
  </Experiment>
)
