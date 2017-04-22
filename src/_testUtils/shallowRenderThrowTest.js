import { shallow } from 'enzyme'

export default Component => () => {
  expect(() => { shallow(Component) }).toThrow()
}
