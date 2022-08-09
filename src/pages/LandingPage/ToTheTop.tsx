import { useEffect, useState } from "react";
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
      className="bg-[rgba(0,0,0,0.7)] rounded-full text-white z-10 w-[30px] h-[30px] md:w-[50px] md:h-[50px] fixed bottom-[45px] right-2 hover:cursor-pointer"
      onClick={goToTop}
    >
      <div className="flex justify-center items-center h-full w-full">
        <TbArrowTopBar />
      </div>
    </div>
  ) : null;
}

export default ToTheTop;
