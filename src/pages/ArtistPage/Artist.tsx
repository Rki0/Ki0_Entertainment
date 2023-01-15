import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AiOutlinePlusCircle,
  AiFillCheckCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { ArtistType } from "./Interface";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addLikeArtist } from "../../_reducers/likeSlice";

function Artist({ src, name }: ArtistType) {
  const userData = useAppSelector((state) => state.user.userData);
  const authData = useAppSelector((state) => state.user.authData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [toggleLike, setToggleLike] = useState(false);

  // 이미지 클릭 시 관심 아티스트 추가 버튼 토글
  const toggleShowLike = () => {
    setToggleLike((prev) => !prev);
  };

  const [likeArtist, setLikeArtist] = useState(false);

  // 관심 아티스트 추가 버튼 클릭 시
  const likeBtnHandler = () => {
    if (authData?.isAuth) {
      setLikeArtist((prev) => !prev);

      let body = {
        email: userData?.email,
        src: src,
        name: name,
      };

      dispatch(addLikeArtist(body))
        .then((response) =>
          response.payload?.addLikeSuccess
            ? null
            : alert(response.payload?.message)
        )
        .catch((err) => console.log(err));

      setTimeout(() => {
        setToggleLike((prev) => !prev);
      }, 500);
    } else {
      alert("로그인 후 이용 가능한 기능입니다.");
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="lg:overflow-hidden lg:w-[300px] lg:h-auto mb-2 xl:w-[400px] hover:cursor-pointer relative">
        <img
          onClick={toggleShowLike}
          src={process.env.PUBLIC_URL + `${src}`}
          alt="artist"
          className="lg:hover:scale-110 transition-transform ease-in-out duration-500 xl:w-[400px]"
        />

        {toggleLike ? (
          <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full flex justify-cetner items-center text-white">
            <AiOutlineClose
              size={25}
              className="absolute top-1 right-1"
              onClick={toggleShowLike}
            />

            <button
              type="button"
              className="flex flex-col items-center w-full text-xl font-bold"
              onClick={likeBtnHandler}
            >
              {likeArtist ? (
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
          </div>
        ) : null}
      </div>

      <p className="font-semibold">{name}</p>
    </div>
  );
}

export default React.memo(Artist);
