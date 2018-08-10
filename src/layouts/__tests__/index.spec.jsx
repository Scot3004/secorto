import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import config from "../../../data/SiteConfig";
import Index, { getTitleFromPath } from '../';

it.skip('renders correctly', () => {
  const location = {pathname: ""}
  const tree = shallow(<Index path location={location} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('default path is Home', () => {
  expect(getTitleFromPath("")).toBe("Home");
});

it('about path is About', () => {
  expect(getTitleFromPath("about")).toBe("About");
});

it('tag path is Tag', () => {
  expect(getTitleFromPath("tags")).toBe("Tags");
});

it('categories path is Categories', () => {
  expect(getTitleFromPath("categories")).toBe("Categories");
});

it('post path is Article', () => {
  expect(getTitleFromPath("posts/algo")).toBe("Article");
});

it('Get tag from path', () => {
  expect(getTitleFromPath("tags/prueba")).toBe("Tagged in Prueba");
});

it('Get category from path', () => {
  expect(getTitleFromPath("categories/prueba")).toBe("Prueba");
});

describe("Overriding pathPrefix", () => {
  it.skip('Path from config empty', () => {
    const currentPathPrefix = config.pathPrefix;
    config.pathPrefix = undefined;
    expect(getTitleFromPath("")).toBe("Home");
    config.pathPrefix = currentPathPrefix;
  });
})
