import { linkArr } from "./Interface";
import { Link } from "react-router-dom";

function ToOtherPage() {
  return (
    <nav className="hidden xl:flex bg-white w-[84px] font-bold text-4xl fixed top-[108px] left-0 bottom-[80px] z-10">
      {linkArr.map((item, index) => (
        <div key={index}>
          <Link
            to={item.to}
            className="block h-full border-r-2 border-black pt-36"
          >
            <h1
              style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
            >
              {item.title}
            </h1>
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default ToOtherPage;
