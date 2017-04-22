import React from 'react'

import ExperimentFooter from './ExperimentFooter'
import { shallowRenderTest } from 'src/_testUtils'

const mockProps = {
  background: 'white',
  title: 'test',
  buttonClickHandler: jest.fn()
}

it('should render without crashing', shallowRenderTest(<ExperimentFooter />))

it(
  'should pass `title` prop to a `StyledSpan` component',
  shallowRenderTest(
    <ExperimentFooter {...mockProps} />,
    wrapper => {
      console.log(wrapper)
    }
  )
)
