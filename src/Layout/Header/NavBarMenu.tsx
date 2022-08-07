import { menuArr } from "../Interface";
import { NavLink } from "react-router-dom";

function NavBarMenu() {
  return (
    <nav className="hidden lg:block w-4/5">
      <ul className="flex items-center justify-around text-xl font-bold">
        {menuArr.map((item, index) => (
          <NavLink
            to={item.route}
            key={index}
            className={({ isActive }) =>
              isActive ? "py-1 border-b-2 border-black" : ""
            }
          >
            {item.title}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default NavBarMenu;
