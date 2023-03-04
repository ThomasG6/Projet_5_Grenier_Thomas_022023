import styles from "./Housing.module.scss";
import { useParams, Navigate } from "react-router-dom";
import Housinglist from "../data.json";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";

function Housing() {
  const id = useParams();
  const housingDetails = Housinglist.find((logement) => logement.id === id.id);

  const equipmentsHousing = housingDetails?.equipments.map(
    (equipment, index) => {
      return <li key={index}>{equipment}</li>;
    }
  );
  return (
    <>
      {housingDetails ? (
        <div className={styles.housing}>
          <Carrousel images={housingDetails?.pictures} />
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
