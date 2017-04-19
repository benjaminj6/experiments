import React from 'react'

// Components
import * as components from './components'
import { Experiment } from './components/generalComponents'

// Theme colors
import { colors, theme } from './theme'

// Intro component...temporary for now.
const { Intro } = components
const { Section, Span } = theme

const colorNames = Object.keys(colors)

const App = () => (
  <div id='app'>
    <Intro />
    {
      colorNames.filter(c => c !== 'white').map(c => (
        <Experiment key={colors[c]} background={colors[c]}>
          <Span whiteText>Sample text.</Span>
        </Experiment>
      ))
    }
  </div>
)

export default App
