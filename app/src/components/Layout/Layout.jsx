import { Outlet, NavLink } from "react-router-dom";
import style from "./style.module.css";

const Layout = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/posts">Blog</NavLink>
        </div>
      </header>
      <main className={style.container}>
        <Outlet />
      </main>
      <footer className="container">Test React</footer>
    </>
  );
};

export { Layout };
