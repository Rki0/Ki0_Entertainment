import { useState } from "react";
import { AiOutlinePlusCircle, AiFillCheckCircle } from "react-icons/ai";
import { ArtistType } from "./Interface";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addLikeArtist } from "../../_reducers/likeSlice";
import { useNavigate } from "react-router-dom";

function Artist({ src, name }: ArtistType) {
  const userData = useAppSelector((state) => state.user.userData);
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
    if (userData?.isAuth) {
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
      alert("먼저 로그인을 해주세요.");
      navigate("/login");
    }
  };

  // 피드백
  // 1. 아티스트 리스트에서 클릭된 아티스트만 강조되면 좋을 것 같다(ArtistList.tsx)
  // 2. 아티스트에 마우스 호버하면 빈 화면에 아티스트 경력이 나타나면 좋겠다(ArtistPage.tsx)
  // 3. 아티스트 추가에 제한이 없어서, 같은 아티스트가 추가되는 문제
  // 4. 3번으로 인해서 아티스트 삭제시 중복된 아티스트 전부가 삭제되는 문제
  // 3,4번은 3번만 해결하면 됨
  // 3번은 DB 모델 생성에서 unique로 해결하려고 했으나, 안 먹힌다.
  // 따라서, 라우터에서 조건 설정을 해줘야할듯

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
