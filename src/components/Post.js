import React from "react";
import { marked } from "marked";

const Post = ({ post }) => {
  const { title, photos, shortDescription, longDescription } = post.fields;
  const longPostDescription = marked(longDescription);
  const shortPostDescription = marked(shortDescription);
  return (
    <div className="post">
      <h2 className="title">{title}</h2>
      {photos && (
        <img
          className="featuredImage"
          src={photos[0].fields.file.url}
          alt={title}
          title={title}
        />
      )}
      <section dangerouslySetInnerHTML={{ __html: shortPostDescription }} />
      <section dangerouslySetInnerHTML={{ __html: longPostDescription }} />
    </div>
  );
};

export default Post;
