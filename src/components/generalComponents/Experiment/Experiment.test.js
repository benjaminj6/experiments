import React from 'react'
import { shallow } from 'enzyme'

import Experiment from './Experiment'

it('should render without crashing', () => {
  shallow(<Experiment />)
})

it('should render the children when passed', () => {
  const Child = () => <span>Test</span>
  const wrapper = shallow(<Experiment><Child /></Experiment>)

  expect(wrapper.find(Child).html()).toBe('<span>Test</span>')
})
