import React from "react";

import { BiShow, BiHide } from "react-icons/bi";

interface PasswordShowBtnProps {
  showPswd: boolean;
  setShowPswd: React.Dispatch<React.SetStateAction<boolean>>;
}

function PasswordShowBtn(props: PasswordShowBtnProps) {
  const toggleShowPswd = () => {
    props.setShowPswd((prev) => !prev);
  };

  return (
    <div className="absolute top-[40px] right-[20px] sm:right-[30px] md:top-[45px] hover:cursor-pointer">
      {props.showPswd ? (
        <BiShow onClick={toggleShowPswd} />
      ) : (
        <BiHide onClick={toggleShowPswd} />
      )}
    </div>
  );
}

export default React.memo(PasswordShowBtn);
