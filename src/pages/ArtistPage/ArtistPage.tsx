import Layout from "../../Layout/Layout";
import { artistArr } from "./Interface";
import ArtistsList from "./ArtistsList";
import { useRef } from "react";
import ToOtherPage from "./ToOtherPage";
import Artist from "./Artist";
import ArtistCareer from "./ArtistCareer";

function ArtistPage() {
  // const artistRef = useRef<any>([]);
  // const artistRef = useRef(new Array(artistArr.length));
  const artistRef = useRef<null[] | HTMLDivElement[]>([]);

  const moveToArtist = (index: number) => {
    artistRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <Layout>
      <ToOtherPage />

      <h1 className="font-bold text-3xl pl-4 mb-12 sm:text-6xl lg:pt-4 lg:mb-0 xl:pl-[84px]">
        WE <br />
        WILL BE <br />
        THE BEST
      </h1>

      <ArtistsList moveToArtist={moveToArtist} />

      <article className="px-3 flex flex-col xl:px-[50px]">
        {/* {artistArr.map((item, index) => (
          <div
            className="mb-8 flex flex-col items-center lg:odd:items-end lg:even:items-start"
            key={index}
            ref={(element) => {
              artistRef.current[index] = element;
            }}
          >
            <Artist src={item.src} name={item.name} />
          </div>
        ))} */}
        {artistArr.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:odd:items-end lg:even:items-start"
          >
            <ArtistCareer />

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
