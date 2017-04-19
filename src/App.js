import React from 'react'

// Components
import * as components from './components'
import { Experiment } from './components/generalComponents'

// Theme colors
import { colors } from './theme'

// Intro component...temporary for now.
const { Intro } = components

// Filter out white from the background colors
const backgroundColors = Object.keys(colors).filter(c => c !== 'white')

const App = () => (
  <div id='app'>
    <Intro />
    {
      backgroundColors.map(c => (
        <Experiment key={colors[c]} background={colors[c]} />
      ))
    }
  </div>
)

export default App
