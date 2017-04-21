// @flow
import React from 'react'
import styled from 'styled-components'

import { getPropOrDefault, media } from './mixins'

export const StyledRow = styled.div`
  width: 100%
`

export const StyledRowChild = styled.div`
  display: inline-block
  width: 100%;

  ${media.medium`
    width: ${getPropOrDefault('width', '100%')}
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
