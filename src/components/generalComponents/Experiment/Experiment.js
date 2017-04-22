// @flow
import React, { Component } from 'react'

import ExperimentFooter from './ExperimentFooter'
import { theme, layout } from '../../../theme'

const { ContainerDiv } = layout
const { Section } = theme

class Experiment extends Component {
  props: {
    children?: Array<any>,
    data: {
      title: string, // eslint-disable-line
      background: string // eslint-disable-line
    }
  }

  state = {
    info: false
  }

  render () {
    const { data, children } = this.props

    return (
      <Section background={data.background}>
        <ContainerDiv>
          <ExperimentFooter
            background={data.background}
            buttonClickHandler={this.toggleInfo}
            title={data.title} />
          {
            // This toggles between info and the experiment based on `this.state.info`
            this.state.info
              ? <ContainerDiv>HI</ContainerDiv>
              : children
          }
        </ContainerDiv>
      </Section>
    )
  }

  toggleInfo = () => {
    console.log(this.state.info)
    this.setState({ info: !this.state.info })
  }
}

export default Experiment
