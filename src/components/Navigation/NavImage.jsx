import React, { Component } from "react";
import {CardTitle} from "react-md";
import "./NavImage.scss";

class NavImage extends Component {
  render() {
    const { config } = this.props;
    return (
      <div className="nav-image" >
        <CardTitle
          avatar={<img
            role="presentation"
            src={config.userAvatar}
            alt={config.userName}
            style={{
              width: 72,
              height: 72,
              padding: 10
            }}
          />}
          title={config.userName}
          subtitle="Web developer"
          style={{color: "white"}}
        />
      </div>
    )
  }
}

export default NavImage;
