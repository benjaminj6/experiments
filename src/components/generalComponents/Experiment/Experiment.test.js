import React from 'react'

import Experiment from './Experiment'
import { shallowRenderTest } from 'src/_testUtils'

const mockData = {
  title: 'test',
  background: 'white'
}

const shallowRenderDefaultExperiment = fn => shallowRenderTest(<Experiment data={mockData} />, fn)

it('should render without crashing', shallowRenderDefaultExperiment())

it(
  'should render the background color of `data.background`',
  shallowRenderDefaultExperiment(wrapper => {
    expect(wrapper.props().background).toBe('white')
  })
)

it(
  'should pass `data.title` & `data.background` props to a `ExperimentFooter` component',
  shallowRenderDefaultExperiment(wrapper => {
    const experimentFooterProps = wrapper.find('ExperimentFooter').props()
    expect(experimentFooterProps.title).toBe(mockData.title)
    expect(experimentFooterProps.background).toBe(mockData.background)
  })
)

const TestChild = () => (<span>Test</span>)
it(
  'should render the children when passed',
  shallowRenderTest(
    <Experiment data={mockData}><TestChild /></Experiment>,
    wrapper => {
      expect(wrapper.find(TestChild).html()).toBe('<span>Test</span>')
    }
  )
)

it('should render `ContainerDiv` if `state.info === true`',
  shallowRenderDefaultExperiment(wrapper => {
    wrapper.setState({ info: true })

    expect(wrapper.find('div.info').exists()).toBe(true)
  })
)

it(
  'should modify `state.info` on `toggleInfo`',
  shallowRenderDefaultExperiment(wrapper => {
    wrapper.instance().toggleInfo()
    console.log(wrapper)
  })
)
