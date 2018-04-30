import gatsbyNode from '../gatsby-node';

describe('Gastby config', () => {
  it('should be equals to snapshot', () => {
    expect(gatsbyNode).toMatchSnapshot();
  });
});
