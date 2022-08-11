import Layout from "../../Layout/Layout";
import { useEffect, useState } from "react";
import { EmitFlags } from "typescript";

function JoinPage() {
  // email
  const [email, setEmail] = useState<string>("");
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [isEmail, setIsEmail] = useState<boolean>(false);

  // password
  const [pswd, setPswd] = useState<string>("");
  const [pswdMessage, setPswdMessage] = useState<string>("");
  const [isPswd, setIsPswd] = useState<boolean>(false);

  // password check
  const [checkPswd, setCheckPswd] = useState<string>("");
  const [checkPswdMessage, setCheckPswdMessage] = useState<string>("");
  const [isCheckPswd, setIsCheckPswd] = useState<boolean>(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pswd !== checkPswd) {
      setCheckPswd("");
      return alert("비밀번호가 서로 일치하지 않습니다.");
    }

    let body = {
      email: email,
      password: pswd,
      check: checkPswd,
    };

    setEmail("");
    setPswd("");
    setCheckPswd("");

    console.log("body", body);
  };

  // email
  // 이 함수는 온전히 input 태그 내부의 텍스트가 변경되는 것을 구현하기 위한 것
  // 동기처리가 안되있기 때문에 state와 싱크가 안 맞음.
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // email을 동기적으로 처리하기 위해 useEffect 사용
  useEffect(() => {
    // email의 길이가 0을 넘어갔을 때부터 실행되게 함
    // 그렇지 않으면 첫 랜더링때부터 emailMessage가 보이게됨.
    if (email.length > 0) {
      setEmail((currentValue) => currentValue);

      // 정규식 표현으로 유효성 검사(Regular Expression)
      const emailRegEx = /^([a-z0-9_\.-]+)@([\da-z-]+)\.([a-z\.]{2,6})$/;

      if (!emailRegEx.test(email)) {
        setEmailMessage("이메일 형식이 틀렸습니다. 다시 입력해주세요.");
        setIsEmail(false);
      } else {
        setEmailMessage("이메일이 정상적으로 입력되었습니다.");
        setIsEmail(true);
      }
    }
  }, [email]);

  // password
  // 이 함수는 온전히 input 태그 내부의 텍스트가 변경되는 것을 구현하기 위한 것
  // 동기처리가 안되있기 때문에 state와 싱크가 안 맞음.
  const onChangePswd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPswd(e.target.value);
  };

  // password를 동기적으로 처리하기 위해 useEffect 사용
  useEffect(() => {
    // pswd의 길이가 0을 넘어갔을 때부터 실행되게 함
    // 그렇지 않으면 첫 랜더링때부터 pswdMessage가 보이게됨.
    if (pswd.length > 0) {
      setPswd((currentValue) => currentValue);

      const pswdRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^])(?=.*[0-9]).{8,25}$/;

      if (!pswdRegEx.test(pswd)) {
        setPswdMessage(
          "숫자+영문+특수문자(!,@,#,$,%,^) 조합으로 입력해주세요."
        );
        setIsPswd(false);
      } else {
        setPswdMessage("비밀번호가 정상적으로 입력되었습니다.");
        setIsPswd(true);
      }
    }
  }, [pswd]);

  // password check
  // 이 함수는 온전히 input 태그 내부의 텍스트가 변경되는 것을 구현하기 위한 것
  // 동기처리가 안되있기 때문에 state와 싱크가 안 맞음.
  const onChangeCheckPswd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPswd(e.target.value);
  };

  // password check를 동기적으로 처리하기 위해 useEffect 사용
  useEffect(() => {
    // checkPswd의 길이가 0을 넘어갔을 때부터 실행되게 함
    // 그렇지 않으면 첫 랜더링때부터 checkPswdMessage가 보이게됨.
    if (checkPswd.length > 0) {
      setCheckPswd((currentValue) => currentValue);

      if (pswd !== checkPswd) {
        setCheckPswdMessage("맞게 입력했는지 다시 확인해주세요.");
        setIsCheckPswd(false);
      } else {
        setCheckPswdMessage("비밀번호 확인이 완료되었습니다.");
        setIsCheckPswd(true);
      }
    }
  }, [checkPswd]);

  return (
    <Layout>
      <div className="flex flex-col items-center my-16">
        <h1 className="mb-4 md:text-xl">Join</h1>

        <form
          className="flex flex-col items-center mb-12"
          onSubmit={submitHandler}
        >
          <div className="flex flex-col items-center">
            <input
              type="email"
              className="border-2 border-black mb-2 h-12 pl-2 w-[300px] md:w-[500px] md:text-xl"
              placeholder="이메일을 입력해주세요"
              onChange={onChangeEmail}
              value={email}
              required
            />

            <span
              className={
                isEmail
                  ? "text-green-400 font-bold mb-2"
                  : "text-red-700 font-bold mb-2"
              }
            >
              {emailMessage}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <input
              type="password"
              className="border-2 border-black mb-2 h-12 pl-2 w-[300px] md:w-[500px] md:text-xl"
              placeholder="비밀번호를 입력해주세요(8 - 25 자리)"
              onChange={onChangePswd}
              value={pswd}
              required
            />

            <span
              className={
                isPswd
                  ? "text-green-400 font-bold mb-2"
                  : "text-red-700 font-bold mb-2 px-4 text-center"
              }
            >
              {pswdMessage}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <input
              type="password"
              className="border-2 border-black mb-2 h-12 pl-2 w-[300px] md:w-[500px] md:text-xl"
              placeholder="비밀번호를 다시 한번 입력해주세요"
              onChange={onChangeCheckPswd}
              value={checkPswd}
              required
            />

            <span
              className={
                isCheckPswd
                  ? "text-green-400 font-bold mb-2"
                  : "text-red-700 font-bold mb-2"
              }
            >
              {checkPswdMessage}
            </span>
          </div>

          <button
            className={
              isEmail && isPswd && isCheckPswd
                ? "border-2 border-black w-[100px] md:w-[200px] md:text-xl"
                : "border-2 border-black bg-black text-white w-[100px] md:w-[200px] md:text-xl"
            }
            type="submit"
            disabled={!(isEmail && isPswd && isCheckPswd)}
          >
            회원가입
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default JoinPage;
