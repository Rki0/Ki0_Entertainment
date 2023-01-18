import React from "react";

import Layout from "../../Layout/Layout";
import Platforms from "./Platforms";
import Entertainment from "./Entertainment";
import ToOtherPage from "../../Layout/Aside/ToOtherPage";

function BusinessPage() {
  return (
    <Layout>
      <ToOtherPage />

      <div className="lg:flex lg:items-center lg:relative lg:mb-72 xl:pl-[100px]">
        <h1 className="px-4 mb-16 text-4xl font-bold mt-36 lg:text-6xl xl:text-7xl">
          작품으로 세상에 울림을 <br />
          전하고 산업을 혁신하여 <br />
          삶의 변화를 만들어갑니다.
        </h1>

        <div className="hidden lg:block absolute top-[250px] right-[-225px] xl:right-[20px]">
          <div className="flex justify-end">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/background1.png"}
              alt="business background"
              className="w-[600px]"
            />
          </div>
        </div>
      </div>

      <p className="px-4 font-semibold text-xl mb-16 xl:pl-[100px]">
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
