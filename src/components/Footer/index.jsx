import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import Link from "gatsby-link";
import UserLinks from "../UserLinks";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const { userLinks, config } = this.props;
    const { copyright, fixedFooter, siteRss } = config;
    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>
        {userLinks ? <UserLinks config={config} labeled /> : null}
        <div className="notice-container">
          <div className="copyright">
            {copyright}
          </div>
          <div className="rss">
            <Link to={siteRss}>
              <Button flat primary swapTheming iconClassName="fa fa-rss">
                Subscribe
              </Button>
            </Link>
          </div>
          <div className="based-on">
            Based on
            <a
              className="footer-link"
              href="https://github.com/Vagr9K/gatsby-material-starter"
            >
              Gatsby Material Starter
            </a>.
          </div>
        </div>
      </footer>
    );
  }
}

Footer.defaultProps = {
  config: {}
}

export default Footer;
