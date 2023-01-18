import React from "react";

import { AiOutlinePlusCircle, AiFillCheckCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

interface LikeControlButtonProps {
  likeArtist: boolean;
  artistId: string | null;
  clickHandler: () => void;
}

function LikeControlButton(props: LikeControlButtonProps) {
  return (
    <button
      type="button"
      className="flex flex-col items-center w-full text-xl font-bold"
      onClick={props.clickHandler}
    >
      {props.artistId ? (
        props.likeArtist ? (
          <div className="flex flex-col items-center">
            <GiCancel size={50} className="mb-4" />
            <span>관심 아티스트 해제 완료</span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <AiFillCheckCircle size={50} className="mb-4" />
            <span>추가 완료</span>
          </div>
        )
      ) : props.likeArtist ? (
        <div className="flex flex-col items-center justify-center">
          <AiFillCheckCircle size={50} className="mb-4" />
          <span>추가 완료</span>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <AiOutlinePlusCircle size={50} className="mb-4" />
          <span>관심 아티스트 추가</span>
        </div>
      )}
    </button>
  );
}

export default LikeControlButton;
