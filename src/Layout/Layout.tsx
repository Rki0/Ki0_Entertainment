import { useState } from "react";
import Header from "./Header/Header";
import ToggleMenu from "./Header/ToggleMenu";

function Layout() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <div className="relative">
      <Header toggleMenuHandler={toggleMenuHandler} />

      <ToggleMenu
        toggleMenu={toggleMenu}
        toggleMenuHandler={toggleMenuHandler}
      />
    </div>
  );
}

export default Layout;
