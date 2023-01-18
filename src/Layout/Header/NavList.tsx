import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { menuArr } from "../Interface";
import { AuthContext } from "../../context/auth-context";

function NavList() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    auth.logout();

    navigate("/");
  };

  return (
    <>
      {menuArr.map((item, index) => (
        <li
          key={index}
          className="h-[45px] px-4 font-bold md:text-2xl md:h-[52px] lg:h-1/2"
        >
          <NavLink
            to={
              item.route === "/mypage"
                ? `${item.route}/${auth.userId}`
                : item.route
            }
            className={({ isActive }) =>
              isActive ? "py-1 border-b-2 border-black" : ""
            }
          >
            {item.title}
          </NavLink>
        </li>
      ))}

      <li className="h-[45px] px-4 font-bold md:text-2xl md:h-[52px] lg:h-1/2">
        {auth.isLoggedIn ? (
          <button onClick={logoutHandler}>Logout</button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "py-1 border-b-2 border-black" : ""
            }
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );
}

export default NavList;
