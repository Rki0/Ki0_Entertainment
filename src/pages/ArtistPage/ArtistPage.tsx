import Layout from "../../Layout/Layout";
import { artistArr } from "./Interface";
import ArtistsList from "./ArtistsList";
import { useEffect, useRef, useState } from "react";
import ToOtherPage from "./ToOtherPage";
import Artist from "./Artist";
import ArtistCareer from "./ArtistCareer";

function ArtistPage() {
  // const artistRef = useRef<any>([]);
  // const artistRef = useRef(new Array(artistArr.length));
  const artistRef = useRef<null[] | HTMLDivElement[]>([]);
  const careerRef = useRef<null[] | HTMLDivElement[]>([]);

  const moveToArtist = (index: number) => {
    artistRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  // ArtistList에 몇 번째 아티스트가 보여지는 중인지 알려주기 위함
  const [currArtist, setCurrArtist] = useState(0);

  // 스크롤에 따라 아티스트 수상 경력 보여줌
  const checkScrollAndShowCareer = () => {
    if (
      artistRef.current[0] &&
      artistRef.current[1] &&
      artistRef.current[2] &&
      artistRef.current[3] &&
      artistRef.current[4]
    ) {
      if (
        artistRef.current[0]?.getBoundingClientRect().top +
          artistRef.current[0]?.getBoundingClientRect().height / 2 +
          window.pageYOffset >
        window.scrollY
      ) {
        careerRef.current[0]?.classList.add("lg:visible");
        careerRef.current[0]?.classList.add("text-black");
        setCurrArtist(0);
      } else if (
        artistRef.current[1]?.getBoundingClientRect().top +
          artistRef.current[1]?.getBoundingClientRect().height / 2 +
          window.pageYOffset >
        window.scrollY
      ) {
        careerRef.current[1]?.classList.add("lg:visible");
        careerRef.current[1]?.classList.add("text-black");
        setCurrArtist(1);
      } else if (
        artistRef.current[2]?.getBoundingClientRect().top +
          artistRef.current[2]?.getBoundingClientRect().height / 2 +
          window.pageYOffset >
        window.scrollY
      ) {
        careerRef.current[2]?.classList.add("lg:visible");
        careerRef.current[2]?.classList.add("text-black");
        setCurrArtist(2);
      } else if (
        artistRef.current[3]?.getBoundingClientRect().top +
          artistRef.current[3]?.getBoundingClientRect().height / 2 +
          window.pageYOffset >
        window.scrollY
      ) {
        careerRef.current[3]?.classList.add("lg:visible");
        careerRef.current[3]?.classList.add("text-black");
        setCurrArtist(3);
      } else if (
        artistRef.current[4]?.getBoundingClientRect().top +
          artistRef.current[4]?.getBoundingClientRect().height +
          window.pageYOffset >
        window.scrollY
      ) {
        careerRef.current[4]?.classList.add("lg:visible");
        careerRef.current[4]?.classList.add("text-black");
        setCurrArtist(4);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollAndShowCareer);

    return () => {
      window.removeEventListener("scroll", checkScrollAndShowCareer);
    };
  }, [window.scroll]);

  return (
    <Layout>
      <ToOtherPage />
      <h1 className="font-bold text-3xl pl-4 mb-12 sm:text-6xl lg:pt-4 lg:mb-0 xl:pl-[84px]">
        WE <br />
        WILL BE <br />
        THE BEST
      </h1>

      <ArtistsList moveToArtist={moveToArtist} currArtist={currArtist} />

      <article className="px-3 flex flex-col xl:px-[50px]">
        {artistArr.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center lg:even:flex-row-reverse"
          >
            <div
              className="invisible text-white transition-all duration-500 ease-in-out"
              ref={(element) => {
                careerRef.current[index] = element;
              }}
            >
              <ArtistCareer career={item.career} />
            </div>

            <div
              className="mb-8"
              ref={(element) => {
                artistRef.current[index] = element;
              }}
            >
              <Artist src={item.src} name={item.name} />
            </div>
          </div>
        ))}
      </article>
    </Layout>
  );
}

export default ArtistPage;
