import React from 'react'

import ExperimentFooter from './ExperimentFooter'
import { shallowRenderTest } from 'src/_testUtils'
import { COLORS } from 'src/theme'

const mockProps = {
  background: 'white',
  title: 'test',
  buttonClickHandler: jest.fn()
}

const shallowRenderTestDefault = fn => shallowRenderTest(<ExperimentFooter {...mockProps} />, fn)

it('should render without crashing', shallowRenderTest(<ExperimentFooter />))

it(
  'should pass `title` props to a `StyledSpan` component',
  shallowRenderTestDefault(wrapper => {
    expect(wrapper.find('StyledSpan').props().title).toBe(mockProps.title)
  })
)

it(
  'should pass `whiteText === true` if background !== COLORS.white',
  shallowRenderTest(
    <ExperimentFooter {...mockProps} />,
    wrapper => {
      expect(wrapper.find('StyledSpan').props().whiteText).toBe(true)
    }
  )
)

it(
  'should pass `whiteText === false` if background === COLORS.white',
  shallowRenderTest(
    <ExperimentFooter {...{...mockProps, background: COLORS.white}} />,
    wrapper => {
      expect(wrapper.find('StyledSpan').props().whiteText).toBe(false)
    }
  )
)

const shallowRenderButtonTest = fn => shallowRenderTestDefault(wrapper => {
  const button = wrapper.childAt(1).shallow() // button is the second child
  fn(button)
})

it(
  'should pass `buttonClickHandler` to buttons `onClick` property',
  shallowRenderButtonTest(button => {
    expect(button.props().onClick).toBe(mockProps.buttonClickHandler)
  })
)

it(
  'should call `buttonClickHandler` on a button click event',
  shallowRenderButtonTest(button => {
    button.simulate('click')
    expect(button.props().onClick.mock.calls).toHaveLength(1)
  })
)
