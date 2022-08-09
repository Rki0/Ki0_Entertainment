import { artistArr, ArtistsListPropsType } from "./Interface";

function ArtistsList({ moveToArtist }: ArtistsListPropsType) {
  return (
    <nav className="hidden lg:block top-1/2 left-1/2 sticky">
      <ul className="flex flex-col items-center font-semibold xl:text-xl">
        {artistArr.map((item, index) => (
          <li
            className="hover:cursor-pointer"
            key={index}
            onClick={() => moveToArtist(index)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ArtistsList;
