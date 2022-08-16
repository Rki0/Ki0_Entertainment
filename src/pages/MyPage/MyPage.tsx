import Layout from "../../Layout/Layout";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { authUser } from "../../_reducers/userSlice";
import { useEffect } from "react";

function MyPage() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user.userData);

  return <Layout>로그인 해야지만 들어올 수 있습니다.</Layout>;
}

export default MyPage;
