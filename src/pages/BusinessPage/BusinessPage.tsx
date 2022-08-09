import Layout from "../../Layout/Layout";
import Platforms from "./Platforms";
import Entertainment from "./Entertainment";

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

      <Platforms />

      <Entertainment />
    </Layout>
  );
}

export default BusinessPage;
