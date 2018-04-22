import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserInfo from '../UserInfo';

const config = {
  userName: "Sergio Orozco", // Username to display in the author segment.
  userTwitter: "scot3004", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Barranquilla, Colombia", // User location to display in the author segment.
  userAvatar: "/logos/logo-192.png", // User avatar to display in the author segment.
  userDescription:
  "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
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
  const tree = shallow(<UserInfo config={config} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders correctly empty config', () => {
  const emptyConfig = {};
  const tree = shallow(<UserInfo config={emptyConfig} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders correctly user links', () => {
  const emptyConfig = {
    userLinks: config.userLinks
  };
  const tree = shallow(<UserInfo config={emptyConfig} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders correctly no twitter', () => {
  const config1 = {...config,
    userTwitter: null
  }
  const tree = shallow(<UserInfo config={config1} />);
  expect(toJson(tree)).toMatchSnapshot();
});
