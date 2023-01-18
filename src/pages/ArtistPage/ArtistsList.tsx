import React from "react";
import { artistArr, ArtistsListPropsType } from "./Interface";

function ArtistsList({ moveToArtist, currArtist }: ArtistsListPropsType) {
  return (
    <nav className="fixed justify-center hidden w-screen lg:flex top-1/2">
      <ul className="flex flex-col items-center font-semibold xl:text-xl">
        {artistArr.map((item, index) => (
          <li
            className={
              `hover:cursor-pointer transition-all duration-300 ease-in-out` +
              `${
                currArtist === index ? "font-bold text-black" : " text-gray-400"
              }`
            }
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
