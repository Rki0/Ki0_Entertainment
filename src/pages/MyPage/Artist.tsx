import { useState } from "react";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { ArtistType } from "./Interface";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { deleteLikeArtist, adoptArtistList } from "../../_reducers/likeSlice";

function Artist({ src, name }: ArtistType) {
  const userData = useAppSelector((state) => state.user.userData);
  const dispatch = useAppDispatch();
  const [toggleLike, setToggleLike] = useState(false);

  // 이미지 클릭 시 관심 아티스트 제거 버튼 토글
  const toggleShowLike = () => {
    setToggleLike((prev) => !prev);
  };

  const [likeArtist, setLikeArtist] = useState(false);

  // 관심 아티스트 추가 버튼 클릭 시
  const likeBtnHandler = () => {
    setLikeArtist((prev) => !prev);

    let body = {
      email: userData?.email,
      name: name,
    };

    // 바로 데이터를 삭제하면 해제 완료 버튼이 보이지 않으므로
    // setTimeout을 통해 사용자가 해제 상황을 인지할 수 있는 시간을 확보하고 데이터 삭제
    setTimeout(() => {
      // 얘는 왜 또 다시 사용하느냐?
      // 스토어에서 데이터를 가져와 아티스트를 보여주다보니
      // 아티스트 삭제를 할 경우, 인덱스가 달라져서
      // likeArtist가 true로 유지되면서 아티스트 목록이 변경되는 문제가 발생했다.
      // 즉, 의도하지 않은 아티스트의 사진에서
      // 클릭시 보이는 화면이 보임과 동시에 버튼이 변경된 상태가 유지되는 것.
      // 이를 해결하기 위해 다시 한번 likeArtist를 변경함.(버튼 변경 유지 문제 해결)
      setLikeArtist((prev) => !prev);

      // toggleShowLike을 한번 더 실행함으로써 클릭 화면이 보이는 것을 해결함
      toggleShowLike();

      // reducers에 있는 action
      // 스토어에 있는 데이터를 삭제해서, 재랜더링을 유도할 것.
      dispatch(adoptArtistList(name));

      // extraReducers에 있는 action
      // DB에서 해당 관심 아티스트를 삭제할 것
      dispatch(deleteLikeArtist(body));
    }, 500);
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
          <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full text-white font-bold flex justify-center items-center">
            <AiOutlineClose
              size={25}
              className="absolute top-1 right-1"
              onClick={toggleShowLike}
            />

            <div className="flex-col">
              <p className="font-bold text-center text-xl md:text-3xl lg:text-2xl xl:text-3xl mb-4">
                {name}
              </p>

              <button
                type="button"
                className="text-xl w-full flex flex-col items-center"
                onClick={likeBtnHandler}
              >
                {likeArtist ? (
                  <div className="flex flex-col items-center">
                    <GiCancel size={50} className="mb-4" />
                    <span>관심 아티스트 해제 완료</span>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <AiFillCheckCircle size={50} className="mb-4" />
                    <span>추가 완료</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Artist;
