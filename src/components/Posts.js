import React from "react";
import Post from "../components/Post";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
