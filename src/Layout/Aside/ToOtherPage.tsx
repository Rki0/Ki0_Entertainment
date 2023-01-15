import React from "react";
import { useLocation, Link } from "react-router-dom";

import { linkArr } from "./Interface";

function ToOtherPage() {
  const location = useLocation();

  const newLinkArr = linkArr.filter((item) => item.to !== location.pathname);

  if (location.pathname === "/company" || location.pathname === "/business") {
    return (
      <nav
        className={`hidden xl:flex bg-white w-[84px] font-bold text-4xl fixed top-[108px]  bottom-[80px] z-10 ${
          location.pathname === "/company" ? "right-0" : "left-0"
        }`}
      >
        {newLinkArr.map((item, index) => (
          <div key={index}>
            <Link
              to={item.to}
              className={`block h-full border-black pt-36 ${
                location.pathname === "/company" ? "border-l-2" : " border-r-2"
              }`}
            >
              <h1
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                }}
              >
                {item.title}
              </h1>
            </Link>
          </div>
        ))}
      </nav>
    );
  }

  return (
    <nav className="fixed hidden text-4xl font-bold xl:flex">
      {newLinkArr.map((item, index) => (
        <div
          key={index}
          className="odd:border-r-2 even:border-l-2 border-black fixed odd:left-0 even:right-0 bottom-[80px] top-[108px]"
        >
          <Link to={item.to} className="block pt-36 w-[42px]">
            <h1
              style={{
                writingMode: "vertical-rl",
                textOrientation: "upright",
              }}
            >
              {item.title}
            </h1>
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default React.memo(ToOtherPage);
