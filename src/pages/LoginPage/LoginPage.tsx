import React, { useContext, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

import Layout from "../../Layout/Layout";
import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hoc/http-hook";
import LoadingSpinner from "../../shared/LoadingSpinner";
import Input from "../../components/Input";
import { useForm } from "../../hoc/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from "../../utils/validators";
import Modal from "../../shared/Modal";
import Button from "../../components/Button";

function LoginPage() {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_API_BASE}/users/login`,
        "POST",
        JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        { "Content-Type": "application/json" }
      );

      auth.login(responseData.userId, responseData.token);

      alert("로그인되었습니다. 메인 페이지로 이동합니다.");
      navigate("/");
    } catch (err) {
      // alert("로그인 실패");
    }
  };

  // 한번밖에 쓰이지 않는 코드이기 때문에 컴포넌트화를 하지 않음.
  const toJoinPage = useMemo(() => {
    return (
      <div className="flex flex-col items-center">
        <Link
          to="/join"
          className="border-2 border-black w-[100px] text-center mb-2 md:w-[200px] md:text-xl hover:text-white hover:bg-black"
        >
          회원가입
        </Link>
      </div>
    );
  }, []);

  return (
    <Layout>
      {error && <Modal error={error} clearModal={clearError} />}

      {isLoading && <LoadingSpinner />}

      <div className="flex flex-col items-center my-16">
        <h1 className="mb-4 md:text-xl lg:text-2xl xl:text-3xl">Login</h1>
        <form
          className="flex flex-col items-center justify-center mb-12"
          onSubmit={submitHandler}
        >
          <Input
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요"
            label="E-Mail"
            errorText="이메일을 반드시 입력해야합니다."
            validText={null}
            onInput={inputHandler}
            validators={[VALIDATOR_EMAIL()]}
          />

          <div className="relative">
            <Input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              label="Password"
              errorText="비밀번호를 반드시 입력해야합니다."
              validText={null}
              onInput={inputHandler}
              validators={[VALIDATOR_MINLENGTH(8), VALIDATOR_MAXLENGTH(12)]}
            />
          </div>

          <Button isValid={null} submitMode={true}>
            로그인
          </Button>
        </form>

        {toJoinPage}
      </div>
    </Layout>
  );
}

export default LoginPage;
