import React from 'react'
import { shallow } from 'enzyme'

import ExperimentInfo from './ExperimentInfo'

it('renders without crashing', () => {
  shallow(<ExperimentInfo />)
})
