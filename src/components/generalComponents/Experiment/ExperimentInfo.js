// @flow
import React from 'react'

import { layout } from 'src/theme'

const { TextContainerDiv } = layout

export default (props: { info: string }) => (
  <TextContainerDiv>{props.info}</TextContainerDiv>
)
