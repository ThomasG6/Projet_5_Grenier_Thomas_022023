import styles from "./Collapse.module.scss";
import { useState } from "react";
import vector from "../../images/vector.png";

function Collapse({ title, description }) {
  const [opener, setOpener] = useState(false);

  return (
    <div className={styles.collapse} id={`collapse--${title}`}>
      <div className={styles.collapse__header}>
        <div className={styles.collapse__header__title}>{title}</div>
        <div
          className={`${styles.collapse__header__vector} ${opener}`}
          onClick={() => setOpener(!opener)}
        >
          <img src={vector} alt="ouvrir la liste" />
        </div>
      </div>
      {opener && (
        <div className={styles.collapse__description}>{description}</div>
      )}
    </div>
  );
}

export default Collapse;
