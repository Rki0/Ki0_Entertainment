import { GiHamburgerMenu } from "react-icons/gi";
import NavBarMenu from "./NavBarMenu";
import { Link } from "react-router-dom";
import { useState } from "react";
import ToggleMenu from "./ToggleMenu";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <header className="flex w-screen justify-between items-center p-2 fixed top-0 bg-white">
      <Link className="text-3xl lg:w-1/5" to="/">
        Ki0.Ent
      </Link>

      {/* lg 사이즈 이전까지만 보임 */}
      <GiHamburgerMenu
        onClick={toggleMenuHandler}
        size={25}
        className="lg:hidden"
      />

      {/* lg 사이즈 이후부터 보임 */}
      <NavBarMenu />

      {toggleMenu ? <ToggleMenu toggleMenuHandler={toggleMenuHandler} /> : null}
    </header>
  );
}

export default Header;
