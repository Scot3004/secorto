import React, { Component } from "react";
import { Card, CardText} from "react-md";
import { translate } from "react-i18next";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./About.scss";

class About extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <img
              src={config.userAvatar}
              className="about-img"
              alt={config.userName}
            />
            <CardText>
              <p className="about-text md-body-1">{t("description")}</p>
            </CardText>
            <UserLinks labeled config={config} />
          </div>
        </Card>
      </div>
    );
  }
}

export default translate("about")(About);
