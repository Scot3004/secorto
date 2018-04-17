import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SocialLinks, {shareCount} from './SocialLinks';

const postNode = {
  "fields": {
    "slug": "/introducing-gatsby-material-starter"
  },
  "excerpt": "This is a original post of ruben, but reflect all technologies applied on this website Not so long ago, this project got ported to v…",
  "timeToRead": 2,
  "frontmatter": {
    "title": "Introducing Gatsby Material Starter",
    "tags": [
      "gatsby",
      "material",
      "starter"
    ],
    "cover": "/logos/logo-1024.png",
    "date": "18/07/2017"
  }
}

it('renders correctly', () => {
  const tree = shallow(<SocialLinks postNode={postNode} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders correctly mobile', () => {
  const tree = shallow(<SocialLinks postNode={postNode} mobile />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('share count 0', () => {
  const tree = shallow(shareCount(0));
  expect(toJson(tree)).toMatchSnapshot();
});

it('share count 0', () => {
  const tree = shallow(shareCount(10));
  expect(toJson(tree)).toMatchSnapshot();
});
