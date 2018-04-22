import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostListing from '../PostListing';

it('renders correctly', () => {
  const postEdges = [
    {
      "node": {
        "fields": {
          "slug": "/introducing-gatsby-material-starter"
        },
        "excerpt": "This is a original post of ruben, but reflect all technologies applied on this website Not so long ago, this project got ported to v…",
        "timeToRead": 2,
        "frontmatter": {
          "title": "Introducing Gatsby Material Starter",
          "tags": [
            "gatsby",
            "material",
            "starter"
          ],
          "cover": "/logos/logo-1024.png",
          "date": "18/07/2017"
        }
      }
    },
    {
      "node": {
        "fields": {
          "slug": "/big-sample-test"
        },
        "excerpt": "NOTE: This \"post\" is based on  Markdown Cheatsheet  and is meant to test styling of Markdown generated documents. This is intended as a…",
        "timeToRead": 8,
        "frontmatter": {
          "title": "Big Test",
          "tags": [
            "test",
            "huge"
          ],
          "cover": "https://unsplash.it/400/300/?random?BigTest",
          "date": "01/03/2018"
        }
      }
    }
  ]
  const tree = shallow(<PostListing postEdges={postEdges} />);
  expect(toJson(tree)).toMatchSnapshot();
});
