import React from "react";
import NavList from "./NavList";

function NavBarMenu() {
  return (
    <nav className="hidden w-4/5 lg:block">
      <ul className="flex items-center justify-around text-xl font-bold">
        <NavList />
      </ul>
    </nav>
  );
}

export default NavBarMenu;
