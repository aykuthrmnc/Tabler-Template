import classNames from "classnames";
import { Fragment, useState } from "react";
import { Dropdown, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MenuItemTypes } from "~/types";

const findAllParent = (menuItems: MenuItemTypes[], menuItem: MenuItemTypes): string[] => {
  let parents: string[] = [];
  const parent = findMenuItem(menuItems, menuItem?.parentKey);

  if (parent) {
    parents.push(parent?.key);
    if (parent?.parentKey) parents = [...parents, ...findAllParent(menuItems, parent)];
  }

  return parents;
};

const findMenuItem = (
  menuItems: MenuItemTypes[] | undefined,
  menuItemKey: MenuItemTypes["key"] | undefined,
): MenuItemTypes | null => {
  if (menuItems && menuItemKey) {
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i];
      }
      const found = findMenuItem(menuItems[i].children, menuItemKey);
      if (found) return found;
    }
  }
  return null;
};

const MenuItem = ({ item }: { item: MenuItemTypes }) => (
  <Nav.Item>
    <Nav.Link
      onClick={item?.onClick}
      to={item?.url!}
      {...(item?.url && { as: NavLink, end: item?.end })}
      className={item?.className}
    >
      {item?.icon && <span className="nav-link-icon d-md-none d-lg-inline-block color-inherit">{item?.icon}</span>}{" "}
      {item?.label && <span className="nav-link-title">{item?.label}</span>}
      {item?.badge && (
        <span className={`badge badge-sm bg-${item?.badge?.variant || "green"}-lt text-uppercase ms-auto`}>
          {item?.badge?.text}
        </span>
      )}
    </Nav.Link>
  </Nav.Item>
);

const DropdownItem = ({ item }: { item: MenuItemTypes }) =>
  item?.isDropdownDivider ? (
    <Dropdown.Divider />
  ) : item?.isDropdownHeader ? (
    <Dropdown.Header className={classNames("d-flex align-items-center", item?.className)}>
      {item?.icon && <span className="nav-link-icon d-md-none d-lg-inline-block color-inherit">{item?.icon}</span>}{" "}
      {item?.label && <span className="nav-link-title">{item?.label}</span>}
      {item?.badge && (
        <span className={`badge badge-sm bg-${item?.badge?.variant || "green"}-lt text-uppercase ms-auto`}>
          {item?.badge?.text}
        </span>
      )}
    </Dropdown.Header>
  ) : (
    <Dropdown.Item
      onClick={item?.onClick}
      to={item?.url!}
      {...(item?.url && { as: NavLink, end: item?.end })}
      className={item?.className}
    >
      {item?.icon && <span className="nav-link-icon d-md-none d-lg-inline-block color-inherit">{item?.icon}</span>}{" "}
      {item?.label && <span className="nav-link-title">{item?.label}</span>}
      {item?.badge && (
        <span className={`badge badge-sm bg-${item?.badge?.variant || "green"}-lt text-uppercase ms-auto`}>
          {item?.badge?.text}
        </span>
      )}
    </Dropdown.Item>
  );

const MenuItemWithChildren = ({
  item,
  activeMenuItems,
  toggleMenu,
  drop = "down",
}: {
  item: MenuItemTypes;
  activeMenuItems?: any;
  toggleMenu?: any;
  drop?: "end" | "down";
}) => {
  // const [open, setOpen] = useState(activeMenuItems.includes(item.key));
  // const toggle = () => {
  //   setOpen(!open);
  //   if (toggleMenu) toggleMenu(item, !open);
  // };

  // useEffect(() => {
  //   setOpen(activeMenuItems!.includes(item.key));
  // }, [activeMenuItems, item]);

  return (
    <Dropdown
      className={classNames(item?.className, {
        "nav-item": drop === "down",
      })}
      drop={drop}
      // show={open}
      // onToggle={toggle}
    >
      <Dropdown.Toggle
        as="a"
        role="button"
        className={classNames("nav-link", {
          "dropdown-item": drop === "end",
          // active: open,
        })}
      >
        {item?.icon && <span className="nav-link-icon d-md-none d-lg-inline-block color-inherit">{item?.icon}</span>}{" "}
        {item?.label && <span className="nav-link-title">{item?.label}</span>}
      </Dropdown.Toggle>

      <Dropdown.Menu
        className={classNames({ "dropdown-menu-grid": item?.children?.length! > 8 })}
        renderOnMount
        align={item?.align}
        style={
          item?.children?.length! > 8
            ? {
                // display: "grid",
                gridTemplateRows: `repeat(${Math.round(item?.children?.length! / 2)}, 1fr)`,
                gridAutoFlow: "column",
              }
            : {}
        }
      >
        {item?.children?.map((subItem, key) =>
          subItem?.children ? (
            <MenuItemWithChildren
              item={subItem}
              toggleMenu={toggleMenu}
              activeMenuItems={activeMenuItems}
              key={key}
              drop="end"
            />
          ) : (
            <DropdownItem item={subItem} key={key} />
          ),
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const HeaderMenu = ({ menuItems }: { menuItems: MenuItemTypes[] }) => {
  const [activeMenuItems, setActiveMenuItems] = useState<Array<string>>([]);

  const toggleMenu = (menuItem: MenuItemTypes, show: boolean) => {
    if (show) setActiveMenuItems([menuItem?.key, ...findAllParent(menuItems, menuItem)]);
  };

  return (
    <Nav>
      {menuItems?.map((item, key) => (
        <Fragment key={key}>
          {item.children ? (
            <MenuItemWithChildren
              item={item}
              toggleMenu={toggleMenu}
              activeMenuItems={activeMenuItems}
              // subMenuClassNames="nav-second-level"
              // linkClassName="side-nav-link"
            />
          ) : (
            <MenuItem
              item={item}
              // linkClassName="side-nav-link" className={activeMenuItems!.includes(item.key) ? "menuitem-active" : ""}
            />
          )}
        </Fragment>
      ))}
    </Nav>
  );
};
export default HeaderMenu;
