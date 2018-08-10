import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostCover from '../PostCover';


it('renders correctly desktop', () => {
  const postNode = {frontmatter: {
    cover: 'postcover',
    coverHeight: 'coverHeight'
  }}
  const tree = shallow(<PostCover postNode={postNode} mobile={false} />);
  expect(toJson(tree)).toMatchSnapshot();
});


it('renders correctly mobile', () => {
  const postNode = {frontmatter: {
    cover: 'postcover',
    coverHeight: 'coverHeight'
  }}
  const tree = shallow(<PostCover postNode={postNode} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders correctly relative cover', () => {
  const postNode = {frontmatter: {
    cover: '/postcover',
    coverHeight: 'coverHeight'
  }}
  const tree = shallow(<PostCover postNode={postNode} />);
  expect(toJson(tree)).toMatchSnapshot();
});
