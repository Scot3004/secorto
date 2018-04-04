import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class PortfolioPage extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <Helmet>
          <title>{`About | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/portfolio/`} />
        </Helmet>
        <div>
            Hola
        </div>
      </div>
    );
  }
}

export default PortfolioPage;
