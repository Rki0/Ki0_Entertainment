import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { ToggleMenuPropsType } from "../Interface";
import NavList from "./NavList";

function ToggleMenu({ toggleMenuHandler }: ToggleMenuPropsType) {
  useEffect(() => {
    document.body.style.cssText = "overflow: hidden";

    return () => {
      document.body.style.cssText = "overflow: auto";
    };
  }, []);

  return (
    <nav className="absolute top-0 left-0 z-20 flex w-screen h-screen lg:hidden">
      <div
        className="w-1/5 h-screen bg-[rgba(0,0,0,0.3)]"
        onClick={toggleMenuHandler}
      ></div>

      <div className="w-4/5 h-screen bg-white">
        <ul>
          <li className="h-[52px] flex justify-between items-center px-2">
            <Link to="/" className="text-xl font-bold md:text-2xl">
              Ki0.Ent
            </Link>
            <AiOutlineClose
              onClick={toggleMenuHandler}
              className="text-xl md:text-2xl"
            />
          </li>

          <NavList />
        </ul>
      </div>
    </nav>
  );
}

export default ToggleMenu;
