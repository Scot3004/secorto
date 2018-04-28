import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Post from '../post';

const data = {
  "markdownRemark": {
    "fields": {
      "slug": "/slug"
    },
    "excerpt": "The Post Excerpt",
    "timeToRead": 2,
    "frontmatter": {
      "title": "The post Title",
      "tags": [
        "gatsby",
        "material",
        "starter"
      ],
      "cover": "/logos/logo-1024.png",
      "date": "28/04/2018"
    }
  }
}

const pathContext = {
  slug: "slug"
}

it('renders correctly', () => {
  const tree = shallow(<Post data={data} pathContext={pathContext} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders correctly Mobile', () => {
  const testsWidth = global.innerWidth;
  global.innerWidth = 600;
  const tree = shallow(<Post data={data} pathContext={pathContext} />);
  expect(toJson(tree)).toMatchSnapshot();
  global.innerWidth = testsWidth;
});

it('componentWillUnmount should be called on unmount', () => {
  const component = shallow(<Post data={data} pathContext={pathContext} />);
  const componentWillUnmount = jest.spyOn(component.instance(), 'componentWillUnmount');
  component.unmount();
  expect(componentWillUnmount).toHaveBeenCalled();
});





