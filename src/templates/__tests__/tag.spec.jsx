import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tag from '../tag';

it('renders correctly', () => {
  const data = {
    "allMarkdownRemark": {
      "edges": [
        "post_edges"
      ]
    }
  }

  const pathContext = {
    tag: "Tag Name"
  }

  const tree = shallow(<Tag data={data} pathContext={pathContext} />);
  expect(toJson(tree)).toMatchSnapshot();
});
