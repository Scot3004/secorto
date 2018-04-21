import i18n from './i18n';

describe('I18n', () => {
  it('should render correct content', () => {
    expect(i18n).toMatchSnapshot();
  });
});
