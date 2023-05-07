import React, { useEffect, useCallback } from "react";
import qs from "qs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CLIENT_URL = import.meta.env.VITE_CLIENT_URL;

const REST_API_KEY = "75796b33aac62e190e50bcc064cce581";
const REDIRECT_URI = `${CLIENT_URL}oauth/kakao/callback`;
const CLIENT_SECRET = "CnTc6hyr4KUvRvUXCesPDAhXXJCQszeZ";

const Auth = ({ setUserInfo }) => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const payload = qs.stringify({
    grant_type: "authorization_code",
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: code,
    client_secret: CLIENT_SECRET,
  });
  console.log(payload);

  const kakaoLogin = useCallback(async () => {
    try {
      const res = await axios({
        method: "post",
        url: `https://kauth.kakao.com/oauth/token`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        data: payload,
      });
      const abd = 3;
      const ACCESS_TOKEN = res.data.access_token;

      localStorage.setItem("accessToken", ACCESS_TOKEN);
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    kakaoLogin();
  }, [kakaoLogin]);

  return <div></div>;
};

export default Auth;
