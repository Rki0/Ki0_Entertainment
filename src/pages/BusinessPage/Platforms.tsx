import React from "react";

function Platforms() {
  return (
    <article className="mb-16 px-4 lg:flex xl:pl-[100px]">
      <div className="mb-12 lg:w-1/2 lg:mb-0 lg:mr-8">
        <hr className="hidden lg:block h-[2px] bg-black mb-4" />

        <h2 className="mb-8 font-bold">PLATFORMS</h2>
        <h3 className="text-xl font-semibold">
          Ki0.Ent의 <br />
          모든 콘텐츠와 서비스를 <br />
          연결하고 확장시킵니다.
        </h3>
      </div>

      <div className="lg:w-1/2">
        <hr className="h-[2px] bg-black mb-4" />

        <div className="mb-8">
          <h4 className="mb-4 text-lg font-extrabold">기영 네이버</h4>
          <p>
            기영 네이버(Ki0 Naver)는 글로벌 ICT 기업으로서 한국 최대 검색포털
            네기버를 서비스하고 있고, 그 계열사에서 모바일 메신저 라잉, 동영상
            카메라 기노우, 디지털 만화 서비스 네기버웹툰, 메타버스 서비스 대페토
            등을 서비스하고 있습니다. 또한, 기영 네이버(주)는 인공지능,
            로보틱스, 모빌리티 등 미래 기술에 대한 지속적인 연구개발을 통해 기술
            플랫폼의 변화와 혁신을 추구하며 세계 각국의 수많은 이용자와 다양한
            파트너들이 함께 성장할 수 있도록 노력하고 있습니다.
          </p>
        </div>

        <hr className="h-[2px] bg-black mb-4" />

        <div className="mb-8">
          <h4 className="mb-4 text-lg font-extrabold">기영 카카오</h4>
          <p>
            기영 카카오는 우리의 일상을 새롭게 만드는 ‘모바일 라이프 플랫폼’
            기업입니다. 더 나은 세상을 만들기 위해 사람과 사람 그리고 사람과
            기술을 연결하고, 의미 있는 관계를 만들기 위한 도전을 이어 가고
            있습니다. 대표 서비스로는 키키오톡, 수박, 이전 등이 있습니다.
          </p>
        </div>
      </div>
    </article>
  );
}

export default Platforms;
