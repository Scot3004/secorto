import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostPreview from '../PostPreview';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  translate: () => Component => {
    // eslint-disable-next-line no-param-reassign
    Component.defaultProps = { ...Component.defaultProps, t: (text) => text };
    return Component;
  },
}));

const postInfo = {
  "cover": "/logos/logo-1024.png",
  "date": "18/07/2017",
  "excerpt": "This is a original post of ruben, but reflect all technologies applied on this website Not so long ago, this project got ported to v…",
  "path": "/introducing-gatsby-material-starter",
  "tags": [
    "gatsby",
    "material",
    "starter",
  ],
  "timeToRead": 2,
  "title": "Introducing Gatsby Material Starter",
}

it('renders correctly', () => {
  const tree = shallow(<PostPreview postInfo={postInfo} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders correctly Mobile', () => {
  const testsWidth = global.innerWidth;
  global.innerWidth = 600;
  const tree = shallow(<PostPreview postInfo={postInfo} />);
  expect(toJson(tree)).toMatchSnapshot();
  global.innerWidth = testsWidth;
});


it('renders correctly relative cover', () => {
  postInfo.cover = "postcover";
  const tree = shallow(<PostPreview postInfo={postInfo} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('componentWillUnmount should be called on unmount', () => {
  const component = shallow(<PostPreview postInfo={postInfo} />);
  const componentWillUnmount = jest.spyOn(component.instance(), 'componentWillUnmount');
  component.unmount();
  expect(componentWillUnmount).toHaveBeenCalled();
});
