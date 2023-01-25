import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../Layout/Layout";
import Input from "../../components/Input";
import {
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_PASSWORD,
} from "../../utils/validators";
import Button from "../../components/Button";
import { useForm } from "../../hoc/form-hook";
import { useHttpClient } from "../../hoc/http-hook";
import { AuthContext } from "../../context/auth-context";

function ChangePswdPage() {
  const auth = useContext(AuthContext);
  const { sendRequest } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      currentPassword: {
        value: "",
        isValid: false,
      },
      newPassword: {
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
      formState.inputs.newPassword.value ===
      formState.inputs.currentPassword.value
    ) {
      return alert("변경된 비밀번호는 현재 비밀번호와 같을 수 없습니다.");
    }

    if (
      formState.inputs.newPassword.value !==
      formState.inputs.passwordCheck.value
    ) {
      return alert("비밀번호가 서로 일치하지 않습니다.");
    }

    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_API_BASE}/users/changePswd`,
        "POST",
        JSON.stringify({
          currentPassword: formState.inputs.currentPassword.value,
          newPassword: formState.inputs.newPassword.value,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );

      if (response.changeSuccess) {
        auth.logout();

        alert("비밀번호 변경 성공. 다시 로그인 해주세요.");

        navigate("/login");
      }
    } catch (err) {
      alert("비밀번호 변경 실패");
    }
  };

  return (
    <Layout>
      <h1 className="flex justify-center mt-10 mb-4 text-xl font-bold sm:text-2xl md:text-3xl">
        비밀번호 변경
      </h1>

      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center mb-10"
      >
        <div className="flex flex-col items-center">
          <div className="relative">
            <Input
              id="currentPassword"
              type="password"
              placeholder="현재 비밀번호를 입력해주세요."
              label="Current Password"
              errorText={null}
              validText={null}
              onInput={inputHandler}
              validators={[VALIDATOR_MINLENGTH(8), VALIDATOR_MAXLENGTH(12)]}
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            <Input
              id="newPassword"
              type="password"
              placeholder="비밀번호를 입력해주세요(8 - 12자리)"
              label="New Password"
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
                VALIDATOR_PASSWORD(formState.inputs.newPassword.value),
              ]}
            />
          </div>
        </div>

        <Button isValid={formState.isValid} submitMode={true}>
          변경하기
        </Button>
      </form>
    </Layout>
  );
}

export default ChangePswdPage;
