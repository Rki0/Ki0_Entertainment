import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useNavigate } from "react-router-dom";
import { authUser } from "../_reducers/userSlice";

// interface AuthPropsType {
//   SpecificComponent: any;
//   option: boolean | null;
//   adminRoute: boolean | null;
// }

export default function Auth(
  SpecificComponent: any,
  option: boolean | null,
  adminRoute: boolean | null = null
) {
  // option 파라미터
  // 로그인 여부에 따라 접근 가능한 페이지를 구분하는 용도
  // null => 아무나 출입 가능
  // ture => 로그인한 유저만 출입 가능
  // false => 로그인한 유저는 출입 불가능

  // adminRoute 파라미터
  // 관리자인지 일반 유저인지 구분하는 용도
  // null => 일반 유저
  // true => 관리자

  const navigate = useNavigate();

  /////// 실험 시작
  const userData = useAppSelector((state) => state.user.userData);
  /////// 실험 끝

  function AuthenticationCheck() {
    const dispatch = useAppDispatch();

    ///// 실험 시작
    let body = {
      loginSuccess: userData.loginSuccess,
    };
    //// 실험 끝

    // 백엔드에서 사용자 권한 정보를 가져옴
    useEffect(() => {
      // dispatch(authUser(null)).then((response) => {
      dispatch(authUser(body)).then((response) => {
        // 로그인 하지 않은 상태에서
        if (!response.payload?.isAuth) {
          // 로그인한 유저만 출입 가능한 페이지에 가려고 한다면
          if (option) {
            // 로그인 페이지로 보냄
            navigate("/login");
          }
        } else {
          // 로그인한 상태에서
          // adminRoute가 true인 페이지에 isAdmin이 false인 사람이 접근하려고 한다면
          if (adminRoute && !response.payload?.isAdmin) {
            navigate("/");
          } else {
            // 로그인한 유저가 출입 불가능한 페이지에 가려고 할 때
            if (option === false) {
              navigate("/");
            }
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
