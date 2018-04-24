import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SEO from '../SEO';

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

const config = {
  siteUrl: 'siteUrl',
  siteFBAppID: 'fbid',
  userTwitter: 'userTwitter',
  siteTitleAlt: 'siteTitleAlt',
  pathPrefix: '/'
}

it('renders correctly', () => {
  const tree = shallow(<SEO postNode={postNode} config={config} />);
  expect(toJson(tree)).toMatchSnapshot();
});


it('renders correctly postSEO', () => {
  const tree = shallow(<SEO postNode={postNode} postSEO config={config} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders correctly empty config', () => {
  const emptyConfig = {
    pathPrefix: ''
  }
  const tree = shallow(<SEO postNode={postNode} postSEO config={emptyConfig} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders correctly postmeta', () => {
  const { frontmatter } = { ...postNode }
  frontmatter.description = 'description';
  const postNodeDesc = {...postNode,
    frontmatter
  };
  const tree = shallow(<SEO postNode={postNodeDesc} postSEO config={config} />);
  expect(toJson(tree)).toMatchSnapshot();
});
