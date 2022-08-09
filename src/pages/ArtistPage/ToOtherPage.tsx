import { linkArr } from "./Interface";
import { Link } from "react-router-dom";

function ToOhterPage() {
  return (
    <nav className="hidden xl:flex font-bold text-4xl fixed">
      {linkArr.map((item, index) => (
        <div
          key={index}
          className="odd:border-r-2 even:border-l-2 border-black fixed odd:left-0 even:right-0 bottom-[80px] top-[108px]"
        >
          <Link to={item.to} className="block pt-36 w-[42px]">
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

export default ToOhterPage;
