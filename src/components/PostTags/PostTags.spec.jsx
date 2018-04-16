import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostTags from './PostTags';


const tags = [
  "gatsby",
  "material",
  "starter"
]

it('renders correctly', () => {
  const tree = shallow(<PostTags tags={tags} />);
  expect(toJson(tree)).toMatchSnapshot();
});
