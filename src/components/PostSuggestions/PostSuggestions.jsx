import React, { Component } from "react";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";
import { translate } from "react-i18next";
import "./PostSuggestions.scss";

class PostSuggestions extends Component {
  render() {
    const { postNode, t } = this.props;
    const postFields = postNode.fields;
    return (
      <div className="post-suggestions md-grid md-cell--12">
        <Link to={postFields.prevSlug} className="post-suggestion">
          <FontIcon
            forceFontSize
            forceSize={64}
            className="secondary-color arrow-nav"
          >
            arrow_back
          </FontIcon>
          <div className="headline-container hide-on-mobile">
            <h2 className="md-body-2 secondary-color">
              {t("commons:previous")}
            </h2>
            <h6 className="md-headline secondary-color">
              {postFields.prevTitle}
            </h6>
          </div>
        </Link>
        <Link to={postFields.nextSlug} className="post-suggestion">
          <div className="headline-container">
            <h2 className="md-body-2 secondary-color">{t("commons:next")}</h2>
            <h6 className="md-headline secondary-color">
              {postFields.nextTitle}
            </h6>
          </div>
          <FontIcon
            forceFontSize
            forceSize={64}
            className="secondary-color arrow-nav"
          >
            arrow_forward
          </FontIcon>
        </Link>
      </div>
    );
  }
}

export default translate("Blog")(PostSuggestions);
