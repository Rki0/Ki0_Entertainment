import React, { useEffect, useState } from "react";
import { TbArrowTopBar } from "react-icons/tb";

function ToTheTop() {
  const [toggleBtn, setToggleBtn] = useState(true);

  const handleScroll = () => {
    const { scrollY } = window;

    scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return toggleBtn ? (
    <div
      className="bg-[rgba(0,0,0,0.6)] rounded-full text-white z-10 w-[40px] h-[40px] md:w-[50px] md:h-[50px] fixed bottom-3 right-3 hover:cursor-pointer hover:bg-[rgba(0,0,0,0.9)]"
      onClick={goToTop}
    >
      <div className="flex items-center justify-center w-full h-full">
        <TbArrowTopBar size={20} />
      </div>
    </div>
  ) : null;
}

export default ToTheTop;
