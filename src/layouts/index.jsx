import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import { I18nextProvider } from "react-i18next";
import Navigation from "../components/Navigation";
import i18n from "../components/i18n";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";

export function getTitleFromPath(pathname) {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
  const currentPath = pathname
    .replace(pathPrefix, "")
    .replace("/", "");
  let title = "";
  if (currentPath === "") {
    title = "Home";
  } else if (currentPath === "tags") {
    title = "Tags";
  } else if (currentPath === "categories") {
    title = "Categories";
  } else if (currentPath === "about") {
    title = "About";
  } else if (currentPath.includes("posts")) {
    title = "Article";
  } else if (currentPath.includes("tags")) {
    const tag = currentPath
      .replace("tags", "")
      .replace("/", "")
      .replace("-", " ");
    title = `Tagged in ${capitalize(tag)}`;
  } else if (currentPath.includes("categories")) {
    const category = currentPath
      .replace("categories", "")
      .replace("/", "")
      .replace("-", " ");
    title = `${capitalize(category)}`;
  }
  return title;
}

export default class MainLayout extends React.Component {
  getLocalTitle() {
    return getTitleFromPath(this.props.location.pathname);
  }
  render() {
    const { children } = this.props;
    return (
      <I18nextProvider i18n={i18n}>
        <Navigation config={config} LocalTitle={this.getLocalTitle()}>
          <div>
            <Helmet>
              <meta name="description" content={config.siteDescription} />
            </Helmet>
            {children()}
          </div>
        </Navigation>
      </I18nextProvider>
    );
  }
}
