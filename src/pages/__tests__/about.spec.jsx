import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import About from '../about';

it('renders correctly', () => {
  const tree = shallow(<About />);
  expect(toJson(tree)).toMatchSnapshot();
});
