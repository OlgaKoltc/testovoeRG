import style from "./pagination.module.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageCount = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className={style.container}>
      <ul className={style.pages}>
        {pageNumbers.map((number) => (
          <li className={style.page_item} key={number}>
            <a
              href="#"
              className={style.page__link}
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
