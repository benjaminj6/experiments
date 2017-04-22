// @flow
import React from 'react'

import { InfoIcon } from '../Icons'
import { theme, COLORS } from 'src/theme'

const { Button, Footer, Span } = theme

const StyledSpan = (props: { title: string }) => (
  <Span
    small
    monospace
    margin='0 0.5rem 0 0'
    {...props}>
    {props.title}
  </Span>
)

const ExperimentFooter = (props: {
  background: string,
  title: string,
  buttonClickHandler: Function
}) => (
  <Footer absolute>
    <StyledSpan
      title={props.title}
      whiteText={props.background !== COLORS.white} />
    <Button onClick={props.buttonClickHandler}>
      <InfoIcon shaded button />
    </Button>
  </Footer>
)

export default ExperimentFooter
