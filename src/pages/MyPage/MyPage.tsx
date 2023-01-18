import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "../../Layout/Layout";
import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hoc/http-hook";
import LoadingSpinner from "../../shared/LoadingSpinner";
import ArtistContainer from "../../components/ArtistContainer";
import Modal from "../../shared/Modal";

function MyPage() {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const navigate = useNavigate();
  const params = useParams();

  const [likeList, setLikeList] = useState<any>([]);

  useEffect(() => {
    if (!auth.isLoggedIn) {
      alert("로그인이 필요한 기능입니다.");
      navigate("/login");
      return;
    }

    // 로그인한 유저가 가지고 있는 아티스트 리스트 불러오기
    const fetchLikeList = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/like/load/${params.userId}`,
          "GET",
          null,
          {
            Authorization: "Bearer " + auth.token,
          }
        );

        setLikeList(responseData.likeList);
      } catch (err) {}
    };

    fetchLikeList();
  }, []);

  const likeDeleteHandler = (deletedArtistId: string | null) => {
    setLikeList((prevList: any) =>
      prevList.filter((like: any) => like.id !== deletedArtistId)
    );
  };

  return (
    <Layout>
      {error && <Modal error={error} clearModal={clearError} />}

      {isLoading && <LoadingSpinner />}

      <h1 className="text-xl font-bold text-center md:text-3xl xl:text-5xl lg:my-6">
        관심 있는 아티스트
      </h1>

      <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:flex-wrap">
        {likeList.length !== 0 ? (
          likeList?.map((item: any, index: number) => (
            <ArtistContainer
              src={item.src}
              name={item.name}
              artistId={item.id}
              onDelete={likeDeleteHandler}
              key={index}
            />
          ))
        ) : (
          <p>관심 아티스트가 없습니다.</p>
        )}
      </div>
    </Layout>
  );
}

export default MyPage;
