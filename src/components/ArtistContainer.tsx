import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useHttpClient } from "../hoc/http-hook";
import { AuthContext } from "../context/auth-context";
import Artist from "./Artist";

interface ArtistType {
  src: string;
  name: string;
  artistId: string | null;
  onDelete?: (props: string | null) => void;
}

function ArtistContainer({ src, name, artistId, onDelete }: ArtistType) {
  const auth = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const [toggleLike, setToggleLike] = useState(false);
  const [likeArtist, setLikeArtist] = useState(false);

  const navigate = useNavigate();

  // 이미지 클릭 시 관심 아티스트 추가 버튼 토글
  const toggleShowLike = () => {
    setToggleLike((prev) => !prev);
  };

  // 관심 아티스트 추가
  const likeBtnHandler: any = async () => {
    if (!auth.isLoggedIn) {
      alert("로그인 후 이용 가능한 기능입니다.");
      navigate("/login");
    }

    try {
      await sendRequest(
        // "http://localhost:5000/api/like/add",
        `${process.env.REACT_APP_API_BASE}/like/add`,
        "POST",
        JSON.stringify({
          src: src,
          name: name,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );

      setLikeArtist((prev) => !prev);
    } catch (err) {
      alert("이미 추가된 아티스트입니다.");
    }

    setTimeout(() => {
      setToggleLike((prev) => !prev);
    }, 500);
  };

  // 관심 아티스트 제거
  const likeCancelBtnHandler = async () => {
    setLikeArtist((prev) => !prev);

    try {
      await sendRequest(
        // `http://localhost:5000/api/like/delete/${artistId}`,
        `${process.env.REACT_APP_API_BASE}/like/delete/${artistId}`,
        "DELETE",
        null,
        {
          Authorization: "Bearer " + auth.token,
        }
      );

      setLikeArtist((prev) => !prev);

      toggleShowLike();

      setTimeout(() => {
        if (onDelete) {
          onDelete(artistId);
        }
      }, 500);
    } catch (err) {}
  };

  return (
    <div className="flex flex-col items-center">
      <Artist
        src={src}
        name={name ? name : null}
        artistId={artistId ? artistId : null}
        clickHandler={artistId ? likeCancelBtnHandler : likeBtnHandler}
        likeArtist={likeArtist}
        toggleLike={toggleLike}
        toggleShowLike={toggleShowLike}
      />

      {!artistId && <p className="font-semibold">{name}</p>}
    </div>
  );
}

export default React.memo(ArtistContainer);
