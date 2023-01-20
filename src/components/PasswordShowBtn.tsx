import React from "react";

import { BiShow, BiHide } from "react-icons/bi";

interface PasswordShowBtnProps {
  showPswd: boolean;
  toggleShowPswd: () => void;
}

function PasswordShowBtn(props: PasswordShowBtnProps) {
  return (
    <div className="absolute top-[40px] right-[20px] sm:right-[30px] md:top-[45px] hover:cursor-pointer">
      {props.showPswd ? (
        <BiShow onClick={props.toggleShowPswd} />
      ) : (
        <BiHide onClick={props.toggleShowPswd} />
      )}
    </div>
  );
}

export default PasswordShowBtn;
