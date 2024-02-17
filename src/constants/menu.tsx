import { MenuItemTypes } from "~/types";
import { TbAdjustments, TbHome, TbLogout, TbUser } from "react-icons/tb";
import { logoutUserHandle, setSettingMenuHandle } from "~/utils/storeHandle";

export const MENU: MenuItemTypes[] = [
  {
    key: "anasayfa",
    label: "Ana Sayfa",
    icon: <TbHome className="icon" />,
    url: "/",
  },
  {
    key: "profile",
    label: "Profil",
    icon: <TbUser className="icon" />,
    className: "d-none d-lg-vertical-flex",
    children: [
      {
        key: "settings",
        label: "Tema Ayarları",
        icon: <TbAdjustments className="icon" />,
        onClick: () => setSettingMenuHandle(true),
        parentKey: "profile",
      },
      {
        key: "logout",
        label: "Çıkış Yap",
        icon: <TbLogout className="icon" />,
        onClick: () => logoutUserHandle(),
        parentKey: "profile",
      },
    ],
  },
];
