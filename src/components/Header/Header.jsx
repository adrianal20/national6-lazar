import { AppLogo } from "../AppLogo/AppLogo";
import "./Header.css";
import { Menu } from "./Menu/Menu";



export function Header() {
    return (
      <div className="app-header">
        <Menu />
        <AppLogo />
        <p className="app-header-title"> To Do App</p>
      </div>
    );
  }