import Layout from "../../Layout/Layout";

function BusinessPage() {
  return (
    <Layout>
      <h1 className="font-bold text-4xl mt-36 px-4 mb-16">
        작품으로 세상에 울림을 <br />
        전하고 산업을 현신하여 <br />
        삶의 변화를 만들어갑니다.
      </h1>

      <p className="px-4 font-semibold text-xl mb-16">
        Ki0(기영).Ent는 한국 본사 Ki0.Ent와 미국 본사 Ki0 아메리카(Ki0 AMERICA),
        일본 본사 Ki0 재팬(Ki0 JAPAN)으로 구성됩니다. 사업적으로는 플랫폼,
        엔터테인먼트로 구분됩니다.
      </p>

      <article className="mb-14 px-4">
        <h2 className="font-bold mb-8">PLATFORMS</h2>
        <h3 className="font-semibold text-xl mb-12">
          Ki0.Ent의 <br />
          모든 콘텐츠와 서비스를 <br />
          연결하고 확장시킵니다.
        </h3>

        <hr className="h-[2px] bg-black mb-4" />

        <div>
          <h4 className="font-bold text-lg">기영 네이버</h4>
          <p>
            기영 네이버(Ki0 Naver)는 글로벌 ICT 기업으로서 한국 최대 검색포털
            네기버를 서비스하고 있고, 그 계열사에서 모바일 메신저 라인, 동영상
            카메라 스노우, 디지털 만화 서비스 네이버웹툰, 메타버스 서비스 제페토
            등을 서비스하고 있습니다. 또한, 네이버(주)는 인공지능, 로보틱스,
            모빌리티 등 미래 기술에 대한 지속적인 연구개발을 통해 기술 플랫폼의
            변화와 혁신을 추구하며 세계 각국의 수많은 이용자와 다양한 파트너들이
            함께 성장할 수 있도록 노력하고 있습니다.
          </p>
        </div>
      </article>
    </Layout>
  );
}

export default BusinessPage;
