import { Outlet } from "react-router";
import Breadcrumbs from "~/components/Breadcrumbs";
import Header from "~/components/Layout/Header";
import ThemeOffcanvas from "~/components/Layout/ThemeOffcanvas";
import { MenuItemTypes } from "~/types";

const MainLayout = ({ MENU, isSearch = false }: { MENU: MenuItemTypes[]; isSearch?: boolean }) => {
  return (
    <>
      <div className="page min-vh-100">
        <Header MENU={MENU} isSearch={isSearch} />
        <div className="page-wrapper">
          <Breadcrumbs />
          <Outlet />
        </div>
      </div>
      <ThemeOffcanvas />
    </>
  );
};

export default MainLayout;
