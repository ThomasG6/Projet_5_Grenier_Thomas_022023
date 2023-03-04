import styles from "./Tag.module.scss";

function Tag({ name }) {
  return <span className={styles.tag}>{name}</span>;
}

export default Tag;
