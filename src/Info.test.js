import React from 'react'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Info from './Info.js'

it('Info component should render', () => {

  const wrapper = shallow(<Info info={['choose cuisine']} />);
  expect(wrapper.find('h2').length).toEqual(1);
})
