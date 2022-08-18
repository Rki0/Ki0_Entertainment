import Layout from "../../Layout/Layout";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect, useState } from "react";
import { loadLikeArtist } from "../../_reducers/likeSlice";
import Artist from "./Artist";

function MyPage() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user.userData);

  const [likeAritstList, setLikeArtistList] = useState([]);

  useEffect(() => {
    let body = {
      email: userData?.email,
    };

    dispatch(loadLikeArtist(body))
      .then((response) => setLikeArtistList(response.payload?.myLike))
      .catch((err) => console.log(err));
  }, [userData]);

  return (
    <Layout>
      <h1 className="font-bold text-center text-xl md:text-3xl xl:text-5xl lg:my-6">
        관심 있는 아티스트
      </h1>

      <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:flex-wrap">
        {likeAritstList ? (
          likeAritstList?.map((item: any, index) => (
            <Artist src={item.src} name={item.name} key={index} />
          ))
        ) : (
          <p>아티스트를 불러오는 중입니다.</p>
        )}
      </div>
    </Layout>
  );
}

export default MyPage;
