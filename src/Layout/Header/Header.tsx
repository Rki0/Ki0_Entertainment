import { GiHamburgerMenu } from "react-icons/gi";

interface HeaderPropsType {
  toggleMenuHandler: () => void;
}

function Header({ toggleMenuHandler }: HeaderPropsType) {
  return (
    <header className="flex w-screen justify-between items-center p-2">
      {/* <Link to={}>Ki0</Link> */}
      <h1 className="text-3xl">Ki0.Ent</h1>

      {/* lg 사이즈 이전까지만 보임 */}
      <GiHamburgerMenu
        onClick={toggleMenuHandler}
        size={25}
        className="lg:hidden"
      />

      {/* lg 사이즈 이후부터 보임 */}
    </header>
  );
}

export default Header;
