import styles from "./Housing.module.scss";
import { useParams, Navigate } from "react-router-dom";
import Housinglist from "../data.json";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import Star from "../images/star.png";
import Greystar from "../images/grey_star.png";

function Housing() {
  const id = useParams();
  const housingDetails = Housinglist.find((logement) => logement.id === id.id);

  const equipmentsHousing = housingDetails?.equipments.map(
    (equipment, index) => {
      return <li key={index}>{equipment}</li>;
    }
  );

  const tagsHousing = housingDetails?.tags.map((tags, index) => {
    return <Tag key={index} name={tags} />;
  });

  let noteHousing = [];
  let starColor = true;
  for (let index = 0; index < 5; index++) {
    if (index === parseInt(housingDetails?.rating)) {
      starColor = false;
    }
    if (starColor === true) {
      noteHousing.push(
        <img
          key={index}
          className={styles.star}
          src={Star}
          alt={`${housingDetails?.rating}/5`}
        />
      );
    } else {
      noteHousing.push(
        <img
          key={index}
          className={styles.star}
          src={Greystar}
          alt={`${housingDetails?.rating}/5`}
        />
      );
    }
  }

  return (
    <>
      {housingDetails ? (
        <div className={styles.housing}>
          <Carrousel images={housingDetails?.pictures} />
          <div className={styles.housing__informations}>
            <div className={styles.housing__informations__house}>
              <span className={styles.housing__informations__house__name}>
                {housingDetails?.title}
              </span>
              <span className={styles.housing__informations__house__location}>
                {housingDetails?.location}
              </span>
              <div className={styles.housing__informations__house__tag}>
                {tagsHousing}
              </div>
            </div>
            <div className={styles.housing__informations__owner}>
              <div className={styles.housing__informations__owner__house}>
                <span
                  className={styles.housing__informations__owner__house__name}
                >
                  {housingDetails?.host.name}
                </span>
                <img
                  className={
                    styles.housing__informations__owner__house__picture
                  }
                  src={housingDetails?.host.picture}
                  alt="Propriétaire"
                />
              </div>
              <div className={styles.housing__informations__owner__note}>
                {noteHousing}
              </div>
            </div>
          </div>
          <div className={styles.housing__details}>
            <Collapse
              title="Description"
              description={housingDetails?.description}
            />
            <Collapse title="Equipements" description={equipmentsHousing} />
          </div>
        </div>
      ) : (
        <Navigate replace to="/Error404" />
      )}
    </>
  );
}

export default Housing;
