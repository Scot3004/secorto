import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostInfo from '../PostInfo';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  translate: () => Component => {
    // eslint-disable-next-line no-param-reassign
    Component.defaultProps = { ...Component.defaultProps, t: (text) => text };
    return Component;
  },
}));

it('renders correctly', () => {
  const postNode = {
    timeToRead: 'timeToRead',
    frontmatter: {
      category: 'category',
      date: 'date'
    }
  }
  const tree = shallow(<PostInfo postNode={postNode} />);
  expect(toJson(tree)).toMatchSnapshot();
});


