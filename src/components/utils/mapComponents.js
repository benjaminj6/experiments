// @flow
import React from 'react'

export default (
  components: Array<any>,
  props: any
) => components.map(Component => <Component {...props} />)
