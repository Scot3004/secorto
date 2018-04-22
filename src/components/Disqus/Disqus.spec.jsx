import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Snackbar from "react-md/lib/Snackbars";
import ReactDisqusComments from "react-disqus-comments";
import Disqus from './Disqus';


const config = {
  disqusShortname: 'disqusShortname',
  pathPrefix: 'pathPrefix',
  siteUrl: 'siteUrl'
}

const postNode = {
  frontmatter: {
    title: 'title',
    category_id: 'category_id'
  },
  fields: {
    slug: 'post-slug'
  }
}

it('should no render if not disqusShortname', () => {
  const emptyConfig = {
    disqusShortname: null,
  }
  const tree = shallow(<Disqus config={emptyConfig} postNode={postNode} />);
  expect(toJson(tree)).toMatchSnapshot();
});

describe('should render correct content', () =>{

  it('should match default state', () => {
    const tree = shallow(<Disqus config={config} postNode={postNode} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('should add new comment to snackbar', () => {
    const tree = shallow(<Disqus config={config} postNode={postNode} />);
    tree.find(ReactDisqusComments).simulate('newComment')
    tree.find(ReactDisqusComments).simulate('newComment')
    expect(toJson(tree)).toMatchSnapshot();
    tree.find(Snackbar).simulate('dismiss')
    expect(toJson(tree)).toMatchSnapshot();
  });
});
