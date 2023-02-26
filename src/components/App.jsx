import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Housing from "../pages/Housing";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import BannerLayout from "../layouts/BannerLayout";
import DefaultLayout from "../layouts/DefaultLayout";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<BannerLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route element={<DefaultLayout />}>
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
