import styles from "./Housing.module.scss";
import { useParams, Navigate } from "react-router-dom";
import Housinglist from "../data.json";
import Carrousel from "../components/Carrousel";

function Housing() {
  const id = useParams();
  const housingDetails = Housinglist.find((logement) => logement.id === id.id);

  return (
    <>
      {housingDetails ? (
        <div className={styles.details}>
          <Carrousel images={housingDetails?.pictures} />
        </div>
      ) : (
        <Navigate replace to="/Error404" />
      )}
    </>
  );
}

export default Housing;
