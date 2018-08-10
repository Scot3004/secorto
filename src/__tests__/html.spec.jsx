import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Html from '../html';

it('renders correctly', () => {
  const tree = shallow(<Html />);
  expect(toJson(tree)).toMatchSnapshot();
});
