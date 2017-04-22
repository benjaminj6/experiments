import React from 'react'

import ExperimentInfo from './ExperimentInfo'
import { shallowRenderTest } from 'src/_testUtils'

const mockProps = {
  info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
}

it(
  'should render without crashing',
  shallowRenderTest(<ExperimentInfo />)
)

it(
  'should render a <styled.div />',
  shallowRenderTest(
    <ExperimentInfo />,
    wrapper => expect(wrapper.text()).toBe('<styled.div />')
  )
)

it(
  'should render `info` props contents to div',
  shallowRenderTest(
    <ExperimentInfo info={mockProps.info} />,
    wrapper => expect(wrapper.html()).toMatch(mockProps.info)
  )
)
