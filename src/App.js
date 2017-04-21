// @flow
import React from 'react'

// Components
import { layout } from './theme'
import pageLayout from './pageLayout'

const { RowEven } = layout

const mapInnerComponents = (rowIndex: number) => (Item, i) => (
  <Item key={`row-${rowIndex}-item-${i}`} />
)

const mapRows = (rowContent, i) => (
  <RowEven key={`row-${i}`}>
    {rowContent.map(mapInnerComponents(i))}
  </RowEven>
)

const App = () => (
  <div id='app'>
    {
      pageLayout.map(mapRows)
    }
  </div>
)

export default App
