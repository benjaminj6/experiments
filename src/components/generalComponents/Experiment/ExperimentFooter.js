// @flow
import React from 'react'

import { InfoIcon } from '../Icons'
import { theme } from '../../../theme'

const { Button, Footer, Span } = theme

export default (props: { title: string }) => (
  <Footer absolute>
    <Span small whiteText monospace margin='0 0.5rem 0 0'>{props.title}</Span>
    <Button>
      <InfoIcon shaded button />
    </Button>
  </Footer>
)
