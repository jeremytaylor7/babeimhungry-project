import React from 'react'
import { shallow } from 'enzyme'
import Info from './Info.js'

it('Info component should render', () => {

  const wrapper = shallow(<Info />);
  expect(wrapper).toExist(true);
})
