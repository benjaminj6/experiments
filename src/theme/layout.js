// @flow
/*
 * Contains components to be used in layout
**/
import React from 'react'
import styled from 'styled-components'

import { getPropOrDefault } from './mixins'

export const StyledRow = styled.div`
  width: 100%
`

export const StyledRowChild = styled.div`
  width: ${getPropOrDefault('width', '100%')}
  display: inline-block
`

export const RowEven = ({
  children
}: {
  children: Array<any>
}) => (
  <StyledRow>
    {
      [...children].map((child, i, arr) => (
        <StyledRowChild width={`${100 / arr.length}%`}>
          {child}
        </StyledRowChild>
      ))
    }
  </StyledRow>
)
