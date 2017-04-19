// @flow
/*
 * Contains various mixins to make life with styled-components a little easier to manage
**/

// Conditional application of properties.
export const getPropOrDefault = (
  prop: string,
  defaultValue: mixed
) => (props: any) => props[prop] || defaultValue

export const getPropConditionally = (
  prop: string,
  conditionalValue: mixed,
  defaultValue: mixed
) => (props: any) => props[prop] ? conditionalValue : defaultValue

// Allows for setting of styles when an `absolute` prop is provided
export const getPropertyIfAbsolute = (
  conditionalValue: mixed
) => getPropConditionally('absolute', conditionalValue, 'initial')

