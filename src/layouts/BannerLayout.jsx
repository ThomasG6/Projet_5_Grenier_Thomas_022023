import { Outlet } from "react-router-dom";

function BannerLayout() {
  return (
    <>
      <header></header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default BannerLayout;
