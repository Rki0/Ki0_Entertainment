// 공용
// NavMenu와 ToggleMenu에서 NavLink에 쓰일 값들의 타입 정의
interface MenuArrType {
  route: string;
  title: string;
}

export const menuArr: MenuArrType[] = [
  {
    route: "/company",
    title: "Company",
  },
  {
    route: "/artist",
    title: "Artist",
  },
  {
    route: "/business",
    title: "Business",
  },
  {
    route: "/loginout",
    title: "Login/Logout",
  },
];

// ToggleMenu.tsx
// 컴포넌트 props 타입 정의
export interface ToggleMenuPropsType {
  toggleMenuHandler: () => void;
}
