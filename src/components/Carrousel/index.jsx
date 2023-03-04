import { useState } from "react";
import styles from "./Carrousel.module.scss";
import arrow from "../../images/arrow.png";

function Carrousel({ images }) {
  let [imageDisplay, imageChange] = useState(0);
  let imageQuantity = images.length;

  const previousImg = () => {
    if (imageDisplay === 0) {
      imageChange(imageQuantity - 1);
    } else {
      imageChange(imageDisplay - 1);
    }
    return imageChange;
  };

  const imgFollowing = () => {
    if (imageDisplay === imageQuantity - 1) {
      imageChange((imageQuantity = 0));
    } else {
      imageChange(imageDisplay + 1);
    }
    return imageChange;
  };
  console.log({ images });
  return (
    <div className={styles.carrousel}>
      {imageQuantity > 1 && (
        <img
          className={`${styles.arrow} ${styles.arrow__right}`}
          src={arrow}
          alt="précedent"
          onClick={previousImg}
        />
      )}
      {images.map((image, index) => {
        return (
          <img
            key={index}
            className={
              index === imageDisplay
                ? `${styles.carrousel__img} ${styles.active}`
                : styles.carrousel__img
            }
            src={image}
            alt="Logement"
          />
        );
      })}
      {imageQuantity > 1 && (
        <img
          className={`${styles.arrow} ${styles.arrow__left}`}
          src={arrow}
          alt="suivant"
          onClick={imgFollowing}
        />
      )}
    </div>
  );
}

export default Carrousel;
