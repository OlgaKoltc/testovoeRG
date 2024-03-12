import React, { useState } from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, loading }) => {
  const [currentPost, setCurrentPost] = useState();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  // const openPost = (postId) => {
  //   const currentPost = posts?.find((item) => item.id === postId);
  //   setCurrentPost(currentPost);
  // };

  return (
    <div className="contaner">
      <ul className="list">
        {posts.map((post, i) => (
          <li className="item" key={post.id}>
            <Link className="title" to={`/${post.id}`}>
              {post.title}
            </Link>
            <div className="body">{post.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PostList;
