import React from 'react'
import { shallow } from 'enzyme'

import ExperimentFooter from './ExperimentFooter'

it('should render without crashing', () => {
  shallow(<ExperimentFooter />)
})
