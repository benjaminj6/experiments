import React from 'react'

import TestExperiment from './TestExperiment'
import { shallowRenderTest } from 'src/_testUtils'

it(
  'should render without crashing',
  shallowRenderTest(<TestExperiment />)
)
