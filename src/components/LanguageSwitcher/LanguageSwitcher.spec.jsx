import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ListItem } from "react-md";
import LanguageSwitcher from './LanguageSwitcher';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  translate: () => Component => {
    // eslint-disable-next-line no-param-reassign
    Component.defaultProps = { ...Component.defaultProps, t: (text) => text };
    return Component;
  },
}));

const i18n = {
  language: 'es',
  changeLanguage: (lang) => (lang)
}

const spy = jest.spyOn(i18n, 'changeLanguage');

describe('LanguageSwitcher', () => {
  it('should render correct content', () => {
    const tree = shallow(<LanguageSwitcher i18n={i18n} />);
    expect(toJson(tree)).toMatchSnapshot();
    expect(tree.state().language).toBe('es');
  });

  it('should render correct lang choice', () => {
    const tree = shallow(<LanguageSwitcher i18n={i18n} />);
    const lang = shallow(<div>{tree.instance().renderLanguageChoice({code: 'es', label: 'Español'})}</div>)
    expect(toJson(lang)).toMatchSnapshot();
    lang.find(ListItem).simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
