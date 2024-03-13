import { Outlet, NavLink } from "react-router-dom";
import style from "./layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/posts">Blog</NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Test React</footer>
    </>
  );
};

export { Layout };
