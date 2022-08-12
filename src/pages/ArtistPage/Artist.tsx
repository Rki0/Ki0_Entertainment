import { useState } from "react";
import { AiOutlinePlusCircle, AiFillCheckCircle } from "react-icons/ai";
import { ArtistType } from "./Interface";

function Artist({ src, name }: ArtistType) {
  const [toggleLike, setToggleLike] = useState(false);

  // 이미지 클릭 시 관심 아티스트 추가 버튼 토글
  const toggleShowLike = () => {
    setToggleLike((prev) => !prev);
  };

  const [likeArtist, setLikeArtist] = useState(false);

  // 관심 아티스트 추가 버튼 클릭 시
  const likeBtnHandler = () => {
    setLikeArtist((prev) => !prev);

    setTimeout(() => {
      setToggleLike((prev) => !prev);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="lg:overflow-hidden lg:w-[300px] lg:h-auto mb-2 xl:w-[400px] hover:cursor-pointer relative"
        // onClick={toggleShowLike}
      >
        <img
          onClick={toggleShowLike}
          src={process.env.PUBLIC_URL + `${src}`}
          alt="artist"
          className="lg:hover:scale-110 transition-transform ease-in-out duration-500 xl:w-[400px]"
        />

        {toggleLike ? (
          <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full flex justify-cetner items-center">
            <button
              type="button"
              className="text-xl w-full flex flex-col items-center text-white font-bold"
              onClick={likeBtnHandler}
            >
              {likeArtist ? (
                <div className="flex flex-col justify-center items-center">
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

export default Artist;
