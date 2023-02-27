import styles from "./Footer.module.scss";
import logoFooter from "../../images/logo_footer.png";

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <img className={styles.footer__image} src={logoFooter} alt="logo" />
        <p className={styles.footer__text}>
          &copy; 2020 Kasa. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
