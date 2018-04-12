import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Navigation from './Navigation';


it('renders correctly', () => {
  const config = {
    userAvatar: "userAvatar",
    userName: "userName",
  }
  const tree = shallow(<Navigation config={config} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders social links', () => {
  const config = {
    userAvatar: "userAvatar",
    userName: "userName",
    userLinks: [
      {
        label: "LinkLabel",
        url: "https://example.com",
        iconClassName: "fa fa-github"
      }
    ]
  }
  const tree = shallow(<Navigation config={config} />);
  expect(toJson(tree)).toMatchSnapshot();
});
