import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  isValid: boolean | null;
  submitMode: boolean;
}

function Button(props: ButtonProps) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  if (props.submitMode && props.isValid === null) {
    return (
      <button
        className="border-2 border-black w-[100px] md:w-[200px] md:text-xl hover:text-white hover:bg-black"
        type="submit"
      >
        {props.children}
      </button>
    );
  }

  if (props.submitMode && props.isValid !== null) {
    return (
      <button
        className={
          props.isValid
            ? "border-2 border-black w-[100px] md:w-[200px] md:text-xl"
            : "border-2 border-black bg-black text-white w-[100px] md:w-[200px] md:text-xl"
        }
        type="submit"
        disabled={!props.isValid}
      >
        {props.children}
      </button>
    );
  }

  return (
    <button
      className="border-2 border-black w-[100px] md:w-[200px] md:text-xl hover:text-white hover:bg-black"
      type="submit"
      onClick={goBack}
    >
      돌아가기
    </button>
  );
}

export default Button;
