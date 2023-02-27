import styles from "./Error404.module.scss";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className={styles.error404}>
      <h1 className={styles.error404__title}>404</h1>
      <p className={styles.error404__description}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className={styles.error404__link}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error404;
