import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Category from '../category';

it('renders correctly', () => {
  const data = {
    "allMarkdownRemark": {
      "edges": [
        "post_edges"
      ]
    }
  }

  const pathContext = {
    category: "Category Name"
  }

  const tree = shallow(<Category data={data} pathContext={pathContext} />);
  expect(toJson(tree)).toMatchSnapshot();
});
