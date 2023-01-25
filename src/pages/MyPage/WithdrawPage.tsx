import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../Layout/Layout";
import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hoc/http-hook";
import Modal from "../../shared/Modal";
import Button from "../../components/Button";

function WithdrawPage() {
  const [password, setPassword] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const auth = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const navigate = useNavigate();

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsOpenModal(true);
  };

  const modalHandler = () => {
    setIsOpenModal(false);
  };

  const withdrawHandler = async () => {
    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_API_BASE}/users/withdraw`,
        "POST",
        JSON.stringify({
          password,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );

      if (response.withdrawSuccess) {
        setIsOpenModal(false);

        auth.logout();

        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      {isOpenModal && (
        <Modal
          clearModal={modalHandler}
          fetchHandler={withdrawHandler}
          text="정말 회원 탈퇴를 진행하시겠습니까?"
        />
      )}

      <h1 className="flex justify-center mt-10 mb-4 text-xl font-bold sm:text-2xl md:text-3xl">
        회원 탈퇴
      </h1>

      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center mb-10"
      >
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={passwordHandler}
          className="border-2 border-black mb-2 h-12 pl-2 w-[300px] md:w-[500px] md:text-xl focus:outline-none"
        />

        <Button isValid={null} submitMode={true}>
          탈퇴하기
        </Button>
      </form>
    </Layout>
  );
}

export default WithdrawPage;
