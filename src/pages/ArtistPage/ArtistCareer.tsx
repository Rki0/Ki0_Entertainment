import { ArtistCareerPropsType } from "./Interface";

function ArtistCareer({ career }: ArtistCareerPropsType) {
  return (
    <div className="hidden lg:block mx-10 font-medium text-xl xl:text-2xl">
      {career.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default ArtistCareer;
