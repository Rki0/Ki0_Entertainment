import Layout from "../../Layout/Layout";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect, useState } from "react";
import { loadLikeArtist } from "../../_reducers/likeSlice";

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
            <div
              key={index}
              className="lg:overflow-hidden lg:w-[300px] lg:h-auto mb-2 xl:w-[400px] hover:cursor-pointer flex flex-col items-center"
            >
              <img src={process.env.PUBLIC_URL + item.src} alt="artist" />
              <p className="font-bold xl:text-xl">{item.name}</p>
            </div>
          ))
        ) : (
          <p>아티스트를 불러오는 중입니다.</p>
        )}
      </div>
    </Layout>
  );
}

export default MyPage;
