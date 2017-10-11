import React from 'react'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Info from './Info.js'

it('Info component should render', () => {

  const wrapper = shallow(<Info />);
  expect(wrapper).toEqual(1);
})
