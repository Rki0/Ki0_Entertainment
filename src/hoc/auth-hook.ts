import { useState, useEffect, useCallback } from "react";

let logoutTimer: NodeJS.Timeout;

export const useAuth = () => {
  const [token, setToken] = useState<boolean | null>(false);
  const [tokenExpirationTime, setTokenExpirationTime] = useState<any>();
  const [userId, setUserId] = useState<boolean | null>(false);

  // 파라미터 타입 확정 필요
  const login = useCallback((uid: any, token: any, expirationDate: any) => {
    setToken(token);
    setUserId(uid);

    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);

    setTokenExpirationTime(tokenExpirationDate);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationTime(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && tokenExpirationTime) {
      // getTime()을 통해 밀리초 단위로 변경해서 사용한다. setTimeout은 밀리초 단위로 사용하기 때문.
      const remainingTime =
        tokenExpirationTime.getTime() - new Date().getTime();

      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationTime]);

  // useEffect는 렌더링 후에 작동된다!
  useEffect(() => {
    const gotData = localStorage.getItem("userData");

    let storedData;
    if (typeof gotData === "string") {
      storedData = JSON.parse(gotData);
    }

    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  return { token, login, logout, userId };
};
