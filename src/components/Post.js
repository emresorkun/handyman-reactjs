import React from "react";
import PropTypes from "prop-types";

const Post = ({ post }) => {
  console.log(post);
  return <div>
    {post.fields.title}
  </div>;
};

Post.propTypes = {};

export default Post;
