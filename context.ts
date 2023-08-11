import { createContext } from "react";

type SideMenu = true | false;
type SideMenuContext = { isSideMenuVisible: SideMenu, toggleSideMenu: () => void };

export const SideMenuContext = createContext<SideMenuContext>({} as SideMenuContext);