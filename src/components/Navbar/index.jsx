import { Link, NavLink } from "react-router-dom";

import logo from "../../images/logo.png";

import styles from "./Navbar.module.scss";

function WrappedLink(props) {
  const { children, to } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          styles.navbar__nav__link,
          isActive ? styles["navbar__nav__link--active"] : undefined,
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navbar__brand}>
        <img src={logo} alt="logo" />
      </Link>
      <nav className={styles.navbar__nav}>
        <WrappedLink to="/" className={styles.navbar__nav__link}>
          Accueil
        </WrappedLink>
        <WrappedLink to="/about" className={styles.navbar__nav__link}>
          A Propos
        </WrappedLink>
      </nav>
    </div>
  );
}

export default Navbar;
