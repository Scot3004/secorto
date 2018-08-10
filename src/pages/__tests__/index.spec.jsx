import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from '../index';

it('renders correctly', () => {
  const data = {
    "allMarkdownRemark": {
      "edges": [
        "post_edges"
      ]
    }
  }

  const tree = shallow(<Home data={data} />);
  expect(toJson(tree)).toMatchSnapshot();
});
