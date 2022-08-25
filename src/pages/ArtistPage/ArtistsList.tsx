import { artistArr, ArtistsListPropsType } from "./Interface";

function ArtistsList({ moveToArtist, currArtist }: ArtistsListPropsType) {
  // 스크롤에 따라 currArtist가 변경됨. 0,1,2,3,4
  // 해당 값(인덱스)에 있는 artist만 black으로 처리하고
  // 나머지는 불투명 처리
  // 방법
  // currArtist와 artistArr의 index를 비교하자

  return (
    <nav className="hidden lg:flex justify-center w-screen top-1/2 fixed">
      <ul className="flex flex-col items-center font-semibold xl:text-xl">
        {artistArr.map((item, index) => (
          <li
            // className={
            //   currArtist === index
            //     ? "hover:cursor-pointer font-bold text-black"
            //     : "hover:cursor-pointer text-gray-400"
            // }
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
