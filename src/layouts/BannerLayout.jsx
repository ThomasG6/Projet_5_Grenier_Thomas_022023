import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

function BannerLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default BannerLayout;
