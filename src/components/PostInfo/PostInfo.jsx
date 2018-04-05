import React, { Component } from "react";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Avatar from "react-md/lib/Avatars";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";
import { translate } from "react-i18next";
import _ from "lodash";
import "./PostInfo.scss";

class PostInfo extends Component {
  render() {
    const { postNode, t } = this.props;
    const post = postNode.frontmatter;
    return (
      <div className="post-info">
        <CardTitle
          avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
          title={t("published on", post)}
          subtitle={t("readTime", { count: postNode.timeToRead })}
        />
        <Link
          className="category-link"
          to={`/categories/${_.kebabCase(post.category)}`}
        >
          <CardTitle
            avatar={
              <Avatar icon={<FontIcon iconClassName="fa fa-folder-open" />} />
            }
            title={t("category")}
            subtitle={post.category}
          />
        </Link>
      </div>
    );
  }
}

export default translate("Blog")(PostInfo);
