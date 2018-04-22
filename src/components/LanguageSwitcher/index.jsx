import React, { Component } from "react";
import { ListItem, MenuButton } from "react-md";
import { translate } from "react-i18next";

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
    const { i18n } = this.props;
    this.state = { language: i18n.language };
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language });
  }

  handleChangeLanguage(lng) {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  }

  renderLanguageChoice({ code, label }) {
    return (
      <ListItem
        key={code}
        onClick={() => this.handleChangeLanguage(code)}
        primaryText={`${label} (${code})`}
      />
    );
  }

  render() {
    const languages = [
      { code: "en", label: "English" },
      { code: "es", label: "Español" }
    ];

    return (
      <div className="LanguageSwitcher">
        <MenuButton
          flat
          id="lang-menu"
          centered
          menuItems={languages.map(language =>
            this.renderLanguageChoice(language)
          )}
        >
          {this.state.language}
        </MenuButton>
      </div>
    );
  }
}

export default translate()(LanguageSwitcher);
