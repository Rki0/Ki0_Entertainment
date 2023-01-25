import React from "react";
import { useParams } from "react-router-dom";
import StyledLinkMenu from "../../components/StyledLinkMenu";

import Layout from "../../Layout/Layout";

function MyPage() {
  const params = useParams();

  return (
    <Layout>
      <div className="flex flex-col justify-center my-10 sm:mx-4 md:mx-6 xl:mx-24">
        <StyledLinkMenu to={`/mypage/${params.userId}/myartist`} last={false}>
          &gt; 내 아티스트
        </StyledLinkMenu>
        <StyledLinkMenu to={`/mypage/${params.userId}/changepswd`} last={false}>
          &gt; 비밀번호 변경
        </StyledLinkMenu>
        <StyledLinkMenu to={`/mypage/${params.userId}/withdraw`} last={true}>
          &gt; 회원 탈퇴
        </StyledLinkMenu>
      </div>
    </Layout>
  );
}

export default MyPage;
