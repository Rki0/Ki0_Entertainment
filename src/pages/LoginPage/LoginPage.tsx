import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { loginUser } from "../../_reducers/userSlice";

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [pswd, setPswd] = useState<string>("");
  const [showPswd, setShowPswd] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let body = {
      email: email,
      password: pswd,
    };

    dispatch(loginUser(body))
      .then((response) => {
        if (response.payload?.loginSuccess) {
          alert("로그인되었습니다. 메인 페이지로 이동합니다.");
          navigate("/");
        } else {
          alert("로그인 실패");
          alert(response.payload?.message);
        }
      })
      .catch((err) => console.log("로그인 에러", err));

    setEmail("");
    setPswd("");
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePswd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPswd(e.target.value);
  };

  const toggleShowPswd = () => {
    setShowPswd((prev) => !prev);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center my-16">
        <h1 className="mb-4 md:text-xl">Login</h1>

        <form
          className="flex flex-col items-center mb-12"
          onSubmit={submitHandler}
        >
          <input
            type="email"
            className="border-2 border-black mb-2 h-12 pl-2 w-[300px] md:w-[500px] md:text-xl focus:outline-none"
            placeholder="이메일을 입력해주세요"
            required
            value={email}
            onChange={onChangeEmail}
          />

          <div className="relative">
            <input
              type={showPswd ? "text" : "password"}
              className="border-2 border-black mb-2 h-12 pl-2 w-[300px] md:w-[500px] md:text-xl focus:outline-none"
              placeholder="비밀번호를 입력해주세요"
              required
              value={pswd}
              onChange={onChangePswd}
              minLength={8}
              maxLength={12}
            />

            <div className="absolute top-[16px] right-[20px] sm:right-[30px]">
              {showPswd ? (
                <BiShow onClick={toggleShowPswd} />
              ) : (
                <BiHide onClick={toggleShowPswd} />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="border-2 border-black w-[100px] md:w-[200px] md:text-xl"
          >
            로그인
          </button>
        </form>

        <div className="flex flex-col items-center">
          <Link
            to="/join"
            className="border-2 border-black w-[100px] text-center mb-2 md:w-[200px] md:text-xl"
          >
            회원가입
          </Link>

          <Link
            to="/findpswd"
            className="border-2 border-black w-[100px] text-center md:w-[200px] md:text-xl"
          >
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;
