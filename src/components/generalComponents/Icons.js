// @flow
// This contains all of the SVG icons to be used as inline SVG site-wide.
import React from 'react'

import { theme, colors } from '../../theme'
const { Svg: StyledSvg } = theme

const Svg = (props: { size?: number, children?: Array<any> }) => (
  <StyledSvg
    color={colors.white}
    height={props.size || 24}
    viewBox='0 0 24 24'
    width={props.size || 24}
    {...props}>
    {props.children}
  </StyledSvg>
)

export const InfoIcon = (props: any) => (
  <Svg {...props}>
    <path d='M13.5,4A1.5,1.5 0 0,0 12,5.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 15,5.5A1.5,1.5 0 0,0 13.5,4M13.14,8.77C11.95,8.87 8.7,11.46 8.7,11.46C8.5,11.61 8.56,11.6 8.72,11.88C8.88,12.15 8.86,12.17 9.05,12.04C9.25,11.91 9.58,11.7 10.13,11.36C12.25,10 10.47,13.14 9.56,18.43C9.2,21.05 11.56,19.7 12.17,19.3C12.77,18.91 14.38,17.8 14.54,17.69C14.76,17.54 14.6,17.42 14.43,17.17C14.31,17 14.19,17.12 14.19,17.12C13.54,17.55 12.35,18.45 12.19,17.88C12,17.31 13.22,13.4 13.89,10.71C14,10.07 14.3,8.67 13.14,8.77Z' />
  </Svg>
)

export const CodeIcon = (props: any) => (
  <Svg {...props}>
    <path d='M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z' />
  </Svg>
)
