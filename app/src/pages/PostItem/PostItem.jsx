import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PostItem = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((result) => setPost(result));
  }, [id]);

  return (
    <div className="container">
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
      <Link to={"/posts"}>
        <button>Назад к постам</button>
      </Link>
    </div>
  );
};
export default PostItem;
