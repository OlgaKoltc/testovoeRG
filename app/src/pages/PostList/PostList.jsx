import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import style from "./postList.module.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((result) => {
          setPosts(result);
          setLoading(false);
        });
    };
    getPosts();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={style.container}>
      <ul className={style.container__list}>
        {currentPost.map((post) => (
          <li className={style.list__item} key={post.id}>
            <Link className={style.item__title} to={`/${post.id}`}>
              {post.title}
            </Link>
            <div className={style.item__body}>{post.body}</div>
          </li>
        ))}
      </ul>
      <div className={style.btn__block}>
        <button onClick={prevPage}>Назад</button>
        <button onClick={nextPage}>Вперед</button>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};
export default PostList;
