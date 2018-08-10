import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Portfolio from '../portfolio';

it('renders correctly', () => {
  const tree = shallow(<Portfolio />);
  expect(toJson(tree)).toMatchSnapshot();
});
