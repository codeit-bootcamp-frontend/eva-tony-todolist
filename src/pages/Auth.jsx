import React, { useEffect, useCallback } from 'react';
import qs from 'qs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const REST_API_KEY = '75796b33aac62e190e50bcc064cce581';
  const REDIRECT_URI = 'http://localhost:5173/oauth/kakao/callback';
  const CLIENT_SECRET = 'CnTc6hyr4KUvRvUXCesPDAhXXJCQszeZ';
  console.log(REST_API_KEY);
  const code = new URL(window.location.href).searchParams.get('code');

  console.log(code);
  const payload = qs.stringify({
    grant_type: 'authorization_code',
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: code,
    client_secret: CLIENT_SECRET,
  });
  console.log(payload);

  const kakaoLogin = useCallback(async () => {
    const res = await axios({
      method: 'post',
      url: `https://kauth.kakao.com/oauth/token`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      data: payload,
    });
    try {
      console.log(res);
      const ACCESS_TOKEN = res.data.access_token;
      localStorage.setItem('accessToken', ACCESS_TOKEN);
    } catch (error) {
      console.log(error);
    } finally {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    kakaoLogin();
  }, [kakaoLogin]);

  return <div></div>;
};

export default Auth;
