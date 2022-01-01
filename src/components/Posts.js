import React from "react";
import Post from "../components/Post";

const Posts = ({ posts }) => {
  return (
    <div className="post-container">
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
