import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center my-16">
        <h1 className="mb-4 md:text-xl">Login</h1>

        <form className="flex flex-col items-center mb-12">
          <input
            type="email"
            className="border-2 border-black mb-2 h-12 pl-2 w-[300px] md:w-[500px] md:text-xl"
            placeholder="이메일을 입력해주세요"
          />
          <input
            type="password"
            className="border-2 border-black mb-2 h-12 pl-2 w-[300px] md:w-[500px] md:text-xl"
            placeholder="비밀번호를 입력해주세요"
          />

          <button className="border-2 border-black w-[100px] md:w-[200px] md:text-xl">
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
