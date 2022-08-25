import { artistArr, ArtistsListPropsType } from "./Interface";

function ArtistsList({ moveToArtist, currArtist }: ArtistsListPropsType) {
  console.log(currArtist);

  return (
    <nav className="hidden lg:flex justify-center w-screen top-1/2 fixed">
      <ul className="flex flex-col items-center font-semibold xl:text-xl">
        {artistArr.map((item, index) => (
          <li
            className="hover:cursor-pointer first:border-b-2 border-black"
            // className={`hover:cursor-pointer [&:nth-child(${
            //   currArtist + 1
            // })]:border-b-2 border-black`}
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
