import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayout;
