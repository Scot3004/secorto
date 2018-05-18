import gatsbyConfig from '../gatsby-config';


describe.skip('Gastby config', () => {
  it('should be equals to snapshot', () => {
    expect(gatsbyConfig).toMatchSnapshot();
  });
});

describe.skip("Setup for gatsby-plugin-feed", () => {
  const ref = {
    query: {
      allMarkdownRemark: {
        edges:[
          {
            node: {
              frontmatter: {
                tags: ["prueba"],
                date: "date",
                title: "title",
                excerpt: "excerpt"
              },
              fields: {
                slug: "slug"
              },
              html: "html"
            }
          }
        ],
      },
      site: {
        siteMetadata: {
          rssMetadata: {
            siteUrl: "siteUrl/"
          }
        }
      }
    }
  }
  const feedSetup = gatsbyConfig.plugins.find((element) => (element.resolve === "gatsby-plugin-feed"));
  it('Snapshot of Setup for gatsby-plugin-feed', () => {
    expect(feedSetup.options.setup(ref)).toMatchSnapshot()
  });
})

