import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../Footer';


it('renders correctly userlinks', () => {
  const config = {
    userLinks: "UserLinks",
    siteRss: "rss"
  };
  const tree = shallow(<Footer userLinks config={config} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders correctly fixedFooter', () => {
  const config = {
    fixedFooter: true,
    siteRss: "rss"
  };
  const tree = shallow(<Footer config={config} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders correctly empty config', () => {
  const config = {
    copyright: 'copyright',
    siteRss: "rss"
  };
  const tree = shallow(<Footer config={config} />);
  expect(toJson(tree)).toMatchSnapshot();
});
