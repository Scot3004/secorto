import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavImage from './NavImage';

it('renders correctly', () => {
  const config = {
    userAvatar: "userAvatar",
    userName: "userName",
  }
  const tree = shallow(<NavImage config={config} />);
  expect(toJson(tree)).toMatchSnapshot();
});
