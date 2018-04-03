import React, { Component } from "react";
import UserLinks from "../UserLinks/UserLinks";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./ToolbarActions.scss";

class Toolbar extends Component {
  render() {
    const { config } = this.props;
    return (
      <div className="toolbar-actions">
        <LanguageSwitcher />
        <div className="userlinks-container">
          <UserLinks config={config} />
        </div>
      </div>
    );
  }
}

export default Toolbar;
