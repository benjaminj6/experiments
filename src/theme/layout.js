// @flow
import React from 'react'
import styled from 'styled-components'

import { MediaMixins, PropMixins, SizingMixins } from './mixins'

const fullWidth = SizingMixins.percentWidth(100)

export const StyledRow = styled.div`
  ${fullWidth}
`

export const StyledRowChild = styled.div`
  display: inline-block
  ${fullWidth}

  ${MediaMixins.medium`
    ${PropMixins.propOrDefault('width', '100%')}
  `}
`

export const RowEven = (props: {
  children: Array<React$Component<any>>
}) => (
  <StyledRow>
    {
      [...props.children].map((child, i, arr) => (
        <StyledRowChild key={`row-item-${i}`} width={`${100 / arr.length}%`}>
          {child}
        </StyledRowChild>
      ))
    }
  </StyledRow>
)
