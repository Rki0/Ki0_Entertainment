import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

interface ToggleMenuPropsType {
  toggleMenu: boolean;
  toggleMenuHandler: () => void;
}

function ToggleMenu({ toggleMenu, toggleMenuHandler }: ToggleMenuPropsType) {
  const toggleMenuArr: string[] = ["Company", "Artist", "Business"];

  return toggleMenu ? (
    <nav className="z-10 flex w-screen h-screen absolute top-0 left-0">
      <div className="w-1/5 h-screen bg-[rgba(0,0,0,0.3)]"></div>

      <div className="w-4/5 h-screen bg-white">
        <ul>
          <li className="h-[52px] flex justify-end items-center px-2">
            <AiOutlineClose onClick={toggleMenuHandler} size={25} />
          </li>

          {toggleMenuArr.map((item, index) => (
            <li
              key={index}
              className="h-[45px] px-4 font-bold md:text-2xl md:h-[52px]"
            >
              {/* <NavLink to="/">{item}</NavLink> */}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  ) : null;
}

export default ToggleMenu;
