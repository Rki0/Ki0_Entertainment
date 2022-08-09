// 공용 //
interface artistArrType {
  src: string;
  name: string;
  from: string;
}

export const artistArr: artistArrType[] = [
  {
    src: "/assets/images/kazuha.jpeg",
    name: "카즈하(Kazuha)",
    from: "https://biz.chosun.com/entertainment/enter_general/2022/04/08/LKRYLJ7CGLYIL464UWWEMWNYPI/",
  },
  {
    src: "/assets/images/kimyuna.jpeg",
    name: "김연아(Kim-yuna)",
    from: "https://sports.news.nate.com/view/20220401n04533?mid=s0301",
  },
  {
    src: "/assets/images/karina.jpeg",
    name: "카리나(Karina)",
    from: "https://twitter.com/arioec/status/1365789959169400833",
  },
  {
    src: "/assets/images/shinsekyoung.jpeg",
    name: "신세경(Shin-sekyoung)",
    from: "https://hqphotos.tistory.com/134",
  },
  {
    src: "/assets/images/jin.jpg",
    name: "진(Jin)",
    from: "https://www.hankyung.com/news/article/2022010295154",
  },
];

// ArtistList.tsx //
export interface ArtistsListPropsType {
  moveToArtist: (index: number) => void;
}

// ToOtherPgae.tsx //
interface linkArrType {
  to: string;
  title: string;
}

export const linkArr: linkArrType[] = [
  {
    to: "/company",
    title: "Company",
  },
  {
    to: "/business",
    title: "Business",
  },
];
