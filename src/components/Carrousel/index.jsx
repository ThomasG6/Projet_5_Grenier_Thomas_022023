import { useState } from "react";
import styles from "./Carrousel.module.scss";
import arrow from "../../images/arrow.png";

function Carrousel({ images }) {
  let [imageDisplay, setImageDisplay] = useState(0);
  let imageQuantity = images.length;

  const previousImg = () => {
    if (imageDisplay === 0) {
      setImageDisplay(imageQuantity - 1);
    } else {
      setImageDisplay(imageDisplay - 1);
    }
  };

  const nextImg = () => {
    if (imageDisplay === imageQuantity - 1) {
      setImageDisplay(0);
    } else {
      setImageDisplay(imageDisplay + 1);
    }
  };

  return (
    <div className={styles.carrousel}>
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
          alt="précedent"
          onClick={previousImg}
        />
      )}
      {imageQuantity > 1 && (
        <img
          className={`${styles.arrow} ${styles.arrow__right}`}
          src={arrow}
          alt="suivant"
          onClick={nextImg}
        />
      )}
      <div className={styles.carrousel__currentIndex}>
        {imageDisplay + 1}/{imageQuantity}
      </div>
    </div>
  );
}

export default Carrousel;
