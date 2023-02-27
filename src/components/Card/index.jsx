import styles from "./Card.module.scss";

function Card({ id, image, title }) {
  return (
    <div className={styles.card} id={id}>
      <img className={styles.card__image} src={image} alt="logement" />
      <div className={styles.card__darken}></div>
      <p className={styles.card__title}>{title}</p>
    </div>
  );
}

export default Card;
