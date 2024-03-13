import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./postItem.module.css";

const PostItem = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((result) => setPost(result));
  }, [id]);

  return (
    <div className={style.container}>
      {post && (
        <>
          <h2 className={style.item__title}>{post.title}</h2>
          <div className={style.item__body}>{post.body}</div>
        </>
      )}
      <Link to={"/posts"}>
        <button className={style.item__btn}>Назад к постам</button>
      </Link>
    </div>
  );
};
export default PostItem;
