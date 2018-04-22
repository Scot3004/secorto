import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserLinks from '../UserLinks';

const config = {
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Scot3004",
      iconClassName: "fa fa-github"
    },
    {
      label: "Facebook",
      url: "https://facebook.com/Scot3004",
      iconClassName: "fa fa-facebook"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Scot3004",
      iconClassName: "fa fa-twitter"
    }
  ],
}

it('renders correctly', () => {
  const tree = shallow(<UserLinks config={config} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = shallow(<UserLinks config={config} labeled />);
  expect(toJson(tree)).toMatchSnapshot();
});


it('div on empty userlinks', () => {
  const configEmpty = {userLinks: []}
  const tree = shallow(<UserLinks config={configEmpty} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('null when not send userlinks', () => {
  const configNull = {}
  const tree = shallow(<UserLinks config={configNull} />);
  expect(toJson(tree)).toMatchSnapshot();
});
