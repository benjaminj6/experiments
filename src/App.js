// @flow
import React from 'react'

// Components
import { layout } from './theme'
import pageLayout from './pageLayout'

const { RowEven } = layout

const App = () => (
  <div id='app'>
    {
      pageLayout.map((rowContent, i) => (
        <RowEven key={`row-${i}`}>
          {rowContent.map((Item, j) => <Item key={`row-${i}-item-${j}`} />)}
        </RowEven>
      ))
    }
  </div>
)

export default App
