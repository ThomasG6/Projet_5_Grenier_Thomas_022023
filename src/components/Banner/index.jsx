import styles from "./Banner.module.scss";

function Banner({ image, text, size = "basic" }) {
  return (
    <div className={styles.banner}>
      <img
        className={`${styles.banner__image} ${
          styles[`banner__image--${size}`]
        }`}
        src={image}
        alt="banner"
      />
      <div className={styles.banner__darken}></div>
      {text ? <h1 className={styles.banner__title}>{text}</h1> : null}
    </div>
  );
}

export default Banner;
