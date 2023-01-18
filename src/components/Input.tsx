import React, { useState, useReducer, useEffect } from "react";

import PasswordShowBtn from "./PasswordShowBtn";
import { validate } from "../utils/validators";

const inputReducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };

    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };

    default:
      return state;
  }
};

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  errorText: string;
  validText: string | null;
  onInput: (id: string, value: string, isValid: boolean) => void;
  validators: any[];
}

function Input(props: InputProps) {
  const [showPswd, setShowPswd] = useState<boolean>(false);

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE",
      value: e.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const toggleShowPswd = () => {
    setShowPswd((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={props.id} className="md:text-lg lg:text-xl">
          {props.label}
        </label>
        <input
          id={props.id}
          type={
            props.type === "email" ? props.type : showPswd ? "text" : "password"
          }
          placeholder={props.placeholder}
          value={inputState.value}
          onChange={changeHandler}
          onBlur={touchHandler}
          minLength={props.type === "password" ? 8 : undefined}
          maxLength={props.type === "password" ? 12 : undefined}
          required
          className="border-2 border-black mb-2 h-12 pl-2 w-[300px] md:w-[500px] md:text-xl focus:outline-none"
        />

        {props.type === "password" && (
          <PasswordShowBtn
            showPswd={showPswd}
            toggleShowPswd={toggleShowPswd}
          />
        )}

        {!inputState.isValid && inputState.isTouched && (
          <p className="mb-2 font-bold text-red-500">{props.errorText}</p>
        )}

        {inputState.isValid && (
          <p className="mb-2 font-bold text-green-400">{props.validText}</p>
        )}
      </div>
    </>
  );
}

export default Input;
