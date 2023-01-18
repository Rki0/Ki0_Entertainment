import React from "react";
import ReactDOM from "react-dom";

interface ModalPropsType {
  clearModal: () => void;
  error: string;
}

function Modal(props: ModalPropsType) {
  const content = (
    <div
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen backdrop-blur-sm"
      onClick={props.clearModal}
    >
      <div className="flex flex-col items-center p-2 bg-white border-2 border-black rounded">
        <h1 className="mb-8 text-2xl font-semibold sm:text-3xl">알림</h1>

        <p className="mb-8 text-lg sm:text-xl md:text-2xl">{props.error}</p>

        <button
          className="px-4 border-2 border-black rounded hover:bg-black hover:text-white"
          onClick={props.clearModal}
        >
          확인
        </button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("modal") as HTMLElement
  );
}

export default Modal;
