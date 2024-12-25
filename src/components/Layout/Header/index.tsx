import classNames from "classnames";
import { ReactNode } from "react";
import { Col, Container, Dropdown, Form, Nav, Navbar, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { TbAdjustments, TbLogout, TbSearch, TbUserCircle } from "react-icons/tb";
import { Link } from "react-router-dom";
import HeaderMenu from "~/components/Layout/Header/Menu";
import { useRedux } from "~/hooks";
import { RootState } from "~/store";
import { LayoutColor, LayoutPosition, LayoutType, LayoutVerticalLocation, MenuItemTypes } from "~/types";
import { logoutUserHandle, setSettingMenuHandle } from "~/utils/storeHandle";
// import languages from "~/locales/languages.json";

const NavbarPosition = ({ children, isSticky }: { children: ReactNode; isSticky: boolean }) => {
  return isSticky ? <div className="sticky-top">{children}</div> : children;
};

const NavbarUserContent = ({
  hideProfileMenu,
  // t = (x: string) => x,
}: {
  hideProfileMenu?: boolean;
  t?: (x: string) => string;
}) => {
  const { appSelector } = useRedux();
  const user = appSelector((state: RootState) => state.auth.user);
  // const { theme } = appSelector((state: RootState) => state.theme);

  return (
    <Nav
      className={classNames("flex-row order-md-last ms-auto gap-3", {
        "d-lg-none": hideProfileMenu,
        // "flex-wrap flex-grow-0 order-lg-last pb-lg-3 ps-lg-3": LayoutType.VERTICAL === type,
      })}
    >
      {/* <div className="d-none d-md-flex">
        <Nav.Link className="p-0" onClick={() => setThemeHandle(theme === LayoutTheme.DARK ? LayoutTheme.LIGHT : LayoutTheme.DARK)}>
          {theme === LayoutTheme.DARK ? <TbSun className="icon" title={t("Açık Mod")} /> : <TbMoon className="icon" title={t("Koyu Mod")} />}
        </Nav.Link>
        <HeaderNotification />
      </div> */}
      {/* <Dropdown align="end" className="nav-item">
        <Dropdown.Toggle as="a" role="button" className="nav-link d-flex lh-1 text-reset p-0">
          <TbLanguage className="icon icon-md w-4 h-4" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-arrow">
          {languages?.map((item, key) => (
            <Dropdown.Item key={key} onClick={() => i18n.changeLanguage(item?.code)} disabled={item?.code === i18n?.language}>
              {item?.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown> */}
      <Dropdown align="end" className="nav-item">
        <Dropdown.Toggle as="a" role="button" className="nav-link d-flex lh-1 text-reset p-0">
          {/* <img
            src={user?.image}
            alt="Profil Fotoğrafı"
            className="avatar avatar-sm object-fit-cover"
            // onError={({ currentTarget }) => {
            //   currentTarget.onerror = null;
            //   currentTarget.src = import.meta.env.VITE_DEFAULT_IMAGE;
            // }}
          /> */}
          <TbUserCircle className="icon icon-md w-5 h-5" />
          <div className="d-none d-xl-block ps-2">
            <div>{user?.FullName}</div>
            {/* <div className="mt-1 small text-muted">{user?.job}</div> */}
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-arrow">
          {/* <Dropdown.Item as={Link} to="/settings">
            <TbSettings className="icon me-1" /> Ayarlar
          </Dropdown.Item>
          <Dropdown.Divider /> */}
          <Dropdown.Item onClick={() => setSettingMenuHandle(true)}>
            <TbAdjustments className="icon me-1" /> Tema Ayarları
          </Dropdown.Item>
          <Dropdown.Item onClick={() => logoutUserHandle()}>
            <TbLogout className="icon me-1" /> Çıkış Yap
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  );
};

const Header = ({ MENU, isSearch = false }: { MENU: MenuItemTypes[]; isSearch?: boolean }) => {
  const VITE_SHOW_MENU = import.meta.env.VITE_SHOW_MENU !== "false";
  const { appSelector } = useRedux();
  const { color, position, type, verticalLocation } = appSelector((state: RootState) => state.theme);
  const searchForm = useForm();
  const searchSubmit = (values: any) => {
    console.log(values);
  };

  //! ROLE MANAGEMENT
  const userRoles = appSelector((state: RootState) => state.auth.user?.[import.meta.env.VITE_AUTH_ROLE_NAME]);
  const filterMenuByRoles = (menu: MenuItemTypes[], role?: string | string[]): MenuItemTypes[] => {
    if (role) {
      return menu
        .filter(
          (item) =>
            !item?.roles ||
            item?.roles?.every((menuRole) => (Array.isArray(role) ? role?.includes(menuRole) : role === menuRole)),
        )
        .map((item) => ({ ...item, ...(item?.children && { children: filterMenuByRoles(item.children, role) }) }));
    }
    return menu;
  };

  return (
    <NavbarPosition
      isSticky={
        position === LayoutPosition.STICKY &&
        ![LayoutType.OVERLAP, LayoutType.VERTICAL, LayoutType.COMBINED].includes(type)
      }
    >
      <Navbar
        id="topbar"
        variant=""
        collapseOnSelect
        expand={[LayoutType.VERTICAL, LayoutType.COMBINED].includes(type) ? "lg" : "md"}
        className={classNames("d-print-none", {
          "navbar-overlap": type === LayoutType.OVERLAP,
          "navbar-vertical": [LayoutType.VERTICAL, LayoutType.COMBINED].includes(type),
          "navbar-transparent":
            color === LayoutColor.TRANSPARENT && [LayoutType.VERTICAL, LayoutType.COMBINED].includes(type),
          "navbar-right": verticalLocation === LayoutVerticalLocation.RIGHT,
        })}
        data-bs-theme={color === LayoutColor.DARK ? LayoutColor.DARK : undefined}
      >
        <Container fluid={[LayoutType.VERTICAL, LayoutType.COMBINED].includes(type) ? true : "xl"}>
          {VITE_SHOW_MENU && <Navbar.Toggle data-bs-toggle="collapse" data-bs-target="#navbar-menu" />}
          <Link
            to="/"
            className={classNames("navbar-brand navbar-brand-autodark", {
              "d-none-navbar-horizontal pe-0 pe-md-3": ![LayoutType.VERTICAL, LayoutType.COMBINED].includes(type),
            })}
          >
            <img
              src={import.meta.env.VITE_APP_ICON}
              alt={import.meta.env.VITE_APP_NAME}
              width={110}
              height={32}
              className="navbar-brand-image"
              style={{ filter: "none" }}
              // onError={({ currentTarget }) => {
              //   currentTarget.onerror = null;
              //   currentTarget.src = import.meta.env.VITE_DEFAULT_IMAGE;
              // }}
            />
          </Link>
          <NavbarUserContent hideProfileMenu={[LayoutType.COMBINED, LayoutType.VERTICAL].includes(type)} />
          {VITE_SHOW_MENU &&
            [LayoutType.COMBINED, LayoutType.CONDENSED, LayoutType.OVERLAP, LayoutType.VERTICAL].includes(type) && (
              <Navbar.Collapse
                id="navbar-menu"
                className={classNames({
                  "pt-lg-3": type === LayoutType.VERTICAL,
                })}
              >
                <HeaderMenu menuItems={filterMenuByRoles(MENU, userRoles)} />
              </Navbar.Collapse>
            )}
        </Container>
      </Navbar>
      {type === LayoutType.COMBINED && (
        <Navbar expand="md" variant="" collapseOnSelect className="d-none d-lg-flex d-print-none">
          <Container fluid="xl">
            <Navbar.Toggle data-bs-toggle="collapse" data-bs-target="#navbar-menu" />
            <NavbarUserContent />
            {isSearch && (
              <Navbar.Collapse id="navbar-menu">
                <div>
                  <form onSubmit={searchForm.handleSubmit(searchSubmit)} autoComplete="off">
                    <div className="input-icon">
                      <span className="input-icon-addon">
                        <TbSearch className="icon" />
                      </span>
                      <Form.Control defaultValue="" placeholder="Ara..." {...searchForm.register("search")} />
                    </div>
                  </form>
                </div>
              </Navbar.Collapse>
            )}
          </Container>
        </Navbar>
      )}
      {type === LayoutType.HORIZONTAL && (
        <div className="navbar-expand-md">
          <Navbar.Collapse id="navbar-menu">
            <Navbar expand={false} variant="" collapseOnSelect>
              <Container fluid="xl">
                <Row className="flex-fill align-items-center">
                  <Col>
                    <HeaderMenu menuItems={filterMenuByRoles(MENU, userRoles)} />
                  </Col>
                  {isSearch && (
                    <Col xs="auto" className="d-none d-xxl-block">
                      <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                        <form onSubmit={searchForm.handleSubmit(searchSubmit)} autoComplete="off">
                          <div className="input-icon">
                            <span className="input-icon-addon">
                              <TbSearch className="icon" />
                            </span>
                            <Form.Control defaultValue="" placeholder="Ara..." {...searchForm.register("search")} />
                          </div>
                        </form>
                      </div>
                    </Col>
                  )}
                </Row>
              </Container>
            </Navbar>
          </Navbar.Collapse>
        </div>
      )}
    </NavbarPosition>
  );
};

export default Header;
