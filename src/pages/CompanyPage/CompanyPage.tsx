import React from "react";

import Layout from "../../Layout/Layout";
import ToOtherPage from "../../Layout/Aside/ToOtherPage";

function CompanyPage() {
  return (
    <Layout>
      <h1 className="pl-4 mb-12 text-3xl font-bold sm:text-6xl lg:pt-4 xl:font-black xl:text-7xl xl:pl-28">
        WE <br />
        WILL BE <br />
        THE BEST
      </h1>

      <div className="hidden xl:block px-[100px] mb-20">
        <hr className="h-[2px] bg-black" />
      </div>

      <article className="mb-14 xl:flex xl:px-32">
        <h2 className="px-4 mb-8 font-bold xl:w-1/2">WHO WE ARE</h2>

        <div>
          <img
            alt="company"
            src={process.env.PUBLIC_URL + `/assets/images/companyBuildings.jpg`}
            className="mb-4"
          />

          <p className="px-4 font-medium">
            기영(Ki0).Ent는 "We will be the best"라는 미션 아래 플랫폼 산업의
            이끌어 나가는 혁신적인 기업입니다. Ki0.Ent는{" "}
            <span className="font-bold">
              경험에 기반한 실력으로 세계 최고의 엔터테인먼트 라이프스타일
              플랫폼 기업을 지향합니다.
            </span>
            글로벌 트렌드를 이끄는 '콘텐츠'와 우리의 '팬'을 최우선 가치로 두고,
            두 가치의 조화를 최대로 이끌어 내도록 노력하고 있습니다.
          </p>
        </div>
      </article>

      <article className="mb-14 xl:flex xl:px-32">
        <h2 className="px-4 mb-8 font-bold xl:w-1/2 xl:mr-8">LEADERSHIP</h2>

        <div>
          <img
            src={process.env.PUBLIC_URL + `/assets/images/leadership.jpg`}
            alt="leader"
            className="mb-4"
          />

          <dl className="px-4 font-medium">
            <dt>
              <dfn>박기영</dfn>
            </dt>
            <dt className="mb-6 font-light">대표</dt>
            <dd>1997 출생</dd>
            <dd>2017 건국대학교 항공우주정보시스템공학과 입학</dd>
            <dd>2019 의무경찰 병장만기 전역</dd>
            <dd>2021 모형 항공기 제작 동아리 HELIUS 회장</dd>
            <dd>2022 프론트엔드 준비 시작</dd>
          </dl>
        </div>
      </article>

      <article className="mb-14 xl:flex xl:px-32">
        <h2 className="pl-4 mb-8 font-bold xl:w-1/6">Mission & Vision</h2>

        <div className="xl:w-5/6">
          <hr className="h-[2px] bg-black bg-gradient-to-l from-white via-black to-white" />
          <p className="w-full px-4 my-2 text-2xl font-bold text-center">
            모두의 행복을, <br />
            우리가 실현한다.
          </p>
          <hr className="h-[2px] bg-black bg-gradient-to-l from-white via-black to-white mb-8" />

          <p className="pl-4 mb-2 font-semibold">
            Ki0.Ent는 3가지 능력을 중요시합니다.
          </p>

          <ul className="px-4">
            <li className="mb-6">
              <h3 className="mb-2 text-lg font-bold">열정</h3>
              <p>
                식지앟는 열정을 가진 사람과 함께하고 싶습니다. <br />
                끊임없이 더 나은 결과를 내기 위해서 달려가고싶습니다.
              </p>
            </li>
            <li className="mb-6">
              <h3 className="mb-2 text-lg font-bold">끈기</h3>
              <p>
                좌절이 있더라도 다시 일어서는 사람과 함께하고 싶습니다. <br />
                넘어진 동료를 일으켜세워 목표를 향해 끝까지 함께 가고싶습니다.
              </p>
            </li>
            <li className="mb-6">
              <h3 className="mb-2 text-lg font-bold">목표</h3>
              <p>
                자신의 목표를 가지고 있는 사람과 함께하고 싶습니다. <br />
                정해진 목표를 향해 열정과 끈기로 도착하고야말겠습니다.
              </p>
            </li>
          </ul>
        </div>
      </article>

      <ToOtherPage />
    </Layout>
  );
}

export default CompanyPage;
