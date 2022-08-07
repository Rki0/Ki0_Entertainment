import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { ToggleMenuPropsType, menuArr } from "../Interface";
import { useEffect } from "react";

function ToggleMenu({ toggleMenuHandler }: ToggleMenuPropsType) {
  useEffect(() => {
    document.body.style.cssText = "overflow: hidden";

    return () => {
      document.body.style.cssText = "overflow: auto";
    };
  }, []);

  return (
    <nav className="z-10 flex w-screen h-screen absolute top-0 left-0">
      <div
        className="w-1/5 h-screen bg-[rgba(0,0,0,0.3)]"
        onClick={toggleMenuHandler}
      ></div>

      <div className="w-4/5 h-screen bg-white">
        <ul>
          <li className="h-[52px] flex justify-between items-center px-2">
            <Link to="/" className="font-bold text-xl md:text-2xl">
              Ki0.Ent
            </Link>
            <AiOutlineClose
              onClick={toggleMenuHandler}
              className="text-xl md:text-2xl"
            />
          </li>

          {menuArr.map((item, index) => (
            <li
              key={index}
              className="h-[45px] px-4 font-bold md:text-2xl md:h-[52px]"
            >
              <NavLink
                to={item.route}
                className={({ isActive }) =>
                  isActive ? "py-1 border-b-2 border-black" : ""
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default ToggleMenu;
