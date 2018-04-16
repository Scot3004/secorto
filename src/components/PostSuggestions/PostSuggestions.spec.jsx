import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostSuggestions from './PostSuggestions';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  translate: () => Component => {
    // eslint-disable-next-line no-param-reassign
    Component.defaultProps = { ...Component.defaultProps, t: (text) => text };
    return Component;
  },
}));

const postNode = {
  fields: {
    prevSlug: "prevSlug",
    prevTitle: "prevTitle",
    nextSlug: "nextSlug",
    nextTitle: "nextTitle"
  }
}

it('renders correctly', () => {
  const tree = shallow(<PostSuggestions postNode={postNode} />);
  expect(toJson(tree)).toMatchSnapshot();
});
