import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ToolbarActions from '../ToolbarActions';

const config = "stub"

it('renders correctly', () => {
  const tree = shallow(<ToolbarActions config={config} />);
  expect(toJson(tree)).toMatchSnapshot();
});
