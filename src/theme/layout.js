// @flow
import React from 'react'
import styled from 'styled-components'

import { MediaMixins, PropMixins, SizingMixins } from './mixins'
import { BREAKPOINTS } from './constants'

export const ContainerDiv = styled.div`
  position: absolute
  top: 0
  right: 0
  left: 0
  bottom: 0
  padding: 1rem

  ${SizingMixins.maxWidthCentered(BREAKPOINTS.extraLarge)}
`

export const TextContainerDiv = styled.div`
  ${SizingMixins.maxWidthCentered(BREAKPOINTS.medium)}
`

const fullWidth = SizingMixins.percentWidth(100)

const StyledRow = styled.div`
  ${fullWidth}
`

const StyledRowChild = styled.div`
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
