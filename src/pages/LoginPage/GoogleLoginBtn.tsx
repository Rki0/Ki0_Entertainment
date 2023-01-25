import React, { useRef } from "react";
import useScript from "../../hoc/useScript";
import { useHttpClient } from "../../hoc/http-hook";

declare global {
  interface Window {
    google: any;
  }
}

export default function GoogleLogin() {
  const googleSignInButton = useRef(null);

  const { sendRequest } = useHttpClient();

  // eslint-disable-next-line no-restricted-globals
  // var fragmentString = location.hash.substring(1);

  // let params: any = {};
  // let regex = /([^&=]+)=([^&]*)/g,
  //   m;
  // while ((m = regex.exec(fragmentString))) {
  //   params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  // }
  // if (Object.keys(params).length > 0) {
  //   localStorage.setItem("oauth2-test-params", JSON.stringify(params));
  //   if (params["state"] && params["state"] == "try_sample_request") {
  //     trySampleRequest();
  //   }
  // }

  // function trySampleRequest() {
  //   const data = localStorage.getItem("oauth2-test-params");

  //   let params;
  //   if (typeof data === "string") {
  //     params = JSON.parse(data);
  //   }

  //   if (params && params["access_token"]) {
  //     let xhr = new XMLHttpRequest();
  //     xhr.open(
  //       "GET",
  //       "https://www.googleapis.com/drive/v3/about?fields=user&" +
  //         "access_token=" +
  //         params["access_token"]
  //     );
  //     xhr.onreadystatechange = function (e) {
  //       if (xhr.readyState === 4 && xhr.status === 200) {
  //         console.log(xhr.response);
  //       } else if (xhr.readyState === 4 && xhr.status === 401) {
  //         oauthSignIn();
  //       }
  //     };
  //     xhr.send(null);
  //   } else {
  //     oauthSignIn();
  //   }
  // }

  function oauthSignIn() {
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

    let form = document.createElement("form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", oauth2Endpoint);

    let params: any = {
      client_id: process.env.REACT_APP_GOOGLE_LOGIN_KEY,
      redirect_uri: process.env.REACT_APP_HOME,
      response_type: "token",
      scope: "https://www.googleapis.com/auth/userinfo.profile",
      include_granted_scopes: "true",
      state: "pass-through value",
    };

    for (let p in params) {
      let input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p);
      input.setAttribute("value", params[p]);
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  }

  const onGoogleSignIn = async (response: any) => {
    const { credential } = response;

    // trySampleRequest();
    // oauthSignIn();

    // Google OAuth로 연결되는 코드
    // sendRequest("https://accounts.google.com/o/oauth2/v2/auth", "GET");

    // // 백엔드와 연결되는 코드
    // sendRequest(
    //   `${process.env.REACT_APP_API_BASE}/users/google`,
    //   "POST",
    //   JSON.stringify({
    //     credential,
    //   }),
    //   {
    //     "Content-Type": "application/json",
    //   }
    // );

    try {
      const data = await sendRequest(
        `${process.env.REACT_APP_API_BASE}/users/google`
      );
      console.log("from server", data);
    } catch (err) {
      console.log(err);
    }
  };

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_LOGIN_KEY,
      callback: onGoogleSignIn,
    });

    window.google.accounts.id.renderButton(googleSignInButton.current, {
      width: "250",
      type: "icon",
      shape: "rectangular",
      theme: "outline",
      size: "large",
    });
  });

  return <div ref={googleSignInButton} />;
}
