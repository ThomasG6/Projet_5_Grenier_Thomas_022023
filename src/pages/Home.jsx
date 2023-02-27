import Banner from "../components/Banner";
import banner from "../images/banner_home.png";
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import housingList from "../data.json";
import styles from "./Home.module.scss";

function Home() {
  return (
    <>
      <Banner image={banner} text="Chez vous, partout et ailleurs" />
      <div className={styles.housingList}>
        {housingList.map((housing) => (
          <NavLink key={housing.id} to={"/housing/" + housing.id + "/#"}>
            <Card
              key={housing.id}
              image={housing.cover}
              title={housing.title}
            />
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Home;
