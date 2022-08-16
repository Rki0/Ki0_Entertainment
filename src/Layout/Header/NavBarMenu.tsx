import { menuArr, notAuthmenuArr } from "../Interface";
import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { logoutUser } from "../../_reducers/userSlice";
import { useNavigate } from "react-router-dom";

function NavBarMenu() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user.userData);

  const logoutHandler = () => {
    dispatch(logoutUser(null))
      .then((response) => console.log(response.payload))
      .catch((err) => console.log(err));

    navigate("/login");
  };

  return (
    <nav className="hidden lg:block w-4/5">
      <ul className="flex items-center justify-around text-xl font-bold">
        {userData?.isAuth
          ? notAuthmenuArr.map((item, index) =>
              index === notAuthmenuArr.length - 1 ? (
                <button onClick={logoutHandler} key={index}>
                  {item.title}
                </button>
              ) : (
                <NavLink
                  to={item.route}
                  key={index}
                  className={({ isActive }) =>
                    isActive ? "py-1 border-b-2 border-black" : ""
                  }
                >
                  {item.title}
                </NavLink>
              )
            )
          : menuArr.map((item, index) => (
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
