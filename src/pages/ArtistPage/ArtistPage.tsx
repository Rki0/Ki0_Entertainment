import Layout from "../../Layout/Layout";
import { artistArr } from "./Interface";
import ArtistsList from "./ArtistsList";
import { useRef } from "react";
import ToOtherPage from "./ToOtherPage";

function ArtistPage() {
  const artistRef = useRef<HTMLDivElement>(null);
  const two = useRef<HTMLDivElement>(null);
  const three = useRef<HTMLDivElement>(null);
  const four = useRef<HTMLDivElement>(null);
  const five = useRef<HTMLDivElement>(null);

  const refArr = [artistRef, two, three, four, five];

  const moveToArtist = (index: number) => {
    refArr[index]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <Layout>
      <ToOtherPage />

      <h1 className="font-bold text-3xl pl-4 mb-12 sm:text-6xl lg:pt-4 lg:mb-0">
        WE <br />
        WILL BE <br />
        THE BEST
      </h1>

      <ArtistsList moveToArtist={moveToArtist} />

      <article className="px-3 flex flex-col">
        {artistArr.map((item, index) => (
          <div
            className="mb-8 flex flex-col items-center lg:odd:items-end lg:even:items-start"
            key={index}
            ref={refArr[index]}
          >
            <div className="flex flex-col items-center" key={index}>
              <div className="lg:overflow-hidden lg:w-[300px] lg:h-auto mb-2 xl:w-[400px]">
                <img
                  src={process.env.PUBLIC_URL + `${item.src}`}
                  alt="artist"
                  className="lg:hover:scale-110 transition-transform ease-in-out duration-500"
                />
              </div>

              <p className="font-semibold">{item.name}</p>
            </div>
          </div>
        ))}
      </article>
    </Layout>
  );
}

export default ArtistPage;
