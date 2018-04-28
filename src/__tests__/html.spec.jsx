import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Html, { getInlinedStyles } from '../html';

it('renders correctly', () => {
  const tree = shallow(<Html />);
  expect(toJson(tree)).toMatchSnapshot();
});

describe('Mocking ENV Production', () => {
  let defaultEnv;

  beforeAll(() => {
    defaultEnv = global.process.env.NODE_ENV;
    global.process.env.NODE_ENV = "production"
  });

  afterAll(() => {
    global.process.env.NODE_ENV = defaultEnv;
  });

  it('renders correctly Production', () => {
    const tree = shallow(<Html />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});

describe('Mocking Console logging', () => {
  let defaultConsole;

  beforeAll(() => {
    defaultConsole = global.console.log;
    global.console.log = jest.fn();
  });

  afterAll(() => {
    global.console.log = defaultConsole;
  });

  it('error on file', () => {
    jest.mock('../public/styles.css', () => {
      throw new Error('Loading error');
    });
    getInlinedStyles()
    expect(global.console.log).toBeCalled();
  });
});
