import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../Layout/Layout";
import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hoc/http-hook";
import LoadingSpinner from "../../shared/LoadingSpinner";
import Input from "../../components/Input";
import { useForm } from "../../hoc/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_PASSWORD,
} from "../../utils/validators";
import Modal from "../../shared/Modal";
import Button from "../../components/Button";

function JoinPage() {
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
      passwordCheck: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formState.inputs.password.value !== formState.inputs.passwordCheck.value
    ) {
      return alert("비밀번호가 서로 일치하지 않습니다.");
    }

    try {
      const responseData = await sendRequest(
        "http://localhost:5000/api/users/signup",
        "POST",
        JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      auth.login(responseData.userId, responseData.token);

      alert("회원가입 성공. 로그인 화면으로 이동합니다.");
      navigate("/login");
    } catch (err) {
      alert("회원가입 실패");
      console.log(err);
    }
  };

  return (
    <Layout>
      {error && <Modal clearModal={clearError} error={error} />}

      {isLoading && <LoadingSpinner />}

      <div className="flex flex-col items-center my-16">
        <h1 className="mb-4 md:text-xl">Join</h1>

        <form
          className="flex flex-col items-center mb-12"
          onSubmit={submitHandler}
        >
          <div className="flex flex-col items-center">
            <Input
              id="email"
              type="email"
              placeholder="이메일을 입력해주세요"
              label="E-Mail"
              errorText="이메일 형식이 틀렸습니다. 다시 입력해주세요."
              validText="알맞은 형식의 이메일입니다."
              onInput={inputHandler}
              validators={[VALIDATOR_EMAIL()]}
            />
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <Input
                id="password"
                type="password"
                placeholder="비밀번호를 입력해주세요(8 - 12자리)"
                label="Password"
                errorText="숫자+영문+특수문자(!,@,#,$,%,^) 조합으로 입력해주세요."
                validText="알맞은 형식의 비밀번호입니다."
                onInput={inputHandler}
                validators={[VALIDATOR_MINLENGTH(8), VALIDATOR_MAXLENGTH(12)]}
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <Input
                id="passwordCheck"
                type="password"
                placeholder="비밀번호를 다시 한번 입력해주세요"
                label="Check Password"
                errorText="맞게 입력했는지 다시 확인해주세요."
                validText="비밀번호 확인이 완료되었습니다."
                onInput={inputHandler}
                validators={[
                  VALIDATOR_MINLENGTH(8),
                  VALIDATOR_MAXLENGTH(12),
                  VALIDATOR_PASSWORD(formState.inputs.password.value),
                ]}
              />
            </div>
          </div>

          <Button isValid={formState.isValid} submitMode={true}>
            회원가입
          </Button>
        </form>
      </div>
    </Layout>
  );
}

export default JoinPage;
