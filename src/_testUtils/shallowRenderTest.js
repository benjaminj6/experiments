import { shallow } from 'enzyme'

export default (Component, fn) => done => {
  const wrapper = shallow(Component)

  if (fn) {
    fn(wrapper)
  }

  done()
}
