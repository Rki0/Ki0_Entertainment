import Layout from "../../Layout/Layout";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { loadLikeArtist } from "../../_reducers/likeSlice";
import Artist from "./Artist";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user.userData);
  const authData = useAppSelector((state) => state.user.authData);
  const artistArr = useAppSelector((state) => state.like.artistArr);
  const navigate = useNavigate();

  useEffect(() => {
    let body = {
      email: userData?.email,
    };

    dispatch(loadLikeArtist(body));
  }, [userData]);

  useEffect(() => {
    if (!authData.isAuth) {
      alert("로그인이 필요한 기능입니다.");
      navigate("/login");
    }
  }, []);

  return authData.isAuth ? (
    <Layout>
      <h1 className="text-xl font-bold text-center md:text-3xl xl:text-5xl lg:my-6">
        관심 있는 아티스트
      </h1>

      <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:flex-wrap">
        {artistArr ? (
          artistArr?.map((item: any, index: number) => (
            <Artist src={item.src} name={item.name} key={index} />
          ))
        ) : (
          <p>아티스트를 불러오는 중입니다.</p>
        )}
      </div>
    </Layout>
  ) : null;
}

export default MyPage;
