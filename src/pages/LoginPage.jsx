<<<<<<< HEAD
import React, { useRef } from 'react';
import styles from '@pages/LoginPage.module.css';
import logo from '@assets/codoit-logo.svg';
import kakao from '@assets/kakao.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

const cssOverride = {
  position: 'absolute',
  top: '40%',
  left: '40%',
  zIndex: '1',
=======
import React, { useRef } from "react";
import styles from "@pages/LoginPage.module.css";
import logo from "@assets/codoit-logo.svg";
import kakao from "@assets/kakao.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const cssOverride = {
  position: "absolute",
  top: "40%",
  left: "33%",
>>>>>>> 7c1df049119bbd87c84db9f82ec3c89be4eb5da6
};

const LoginPage = ({ KAKAO_REDIRECT_URI }) => {
  const idRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,20}$/;

  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const changeIdHandler = (e) => {
    setUserId(e.target.value);
  };

  const changePasswordHandler = (e) => {
    setUserPassword(e.target.value);
  };

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (idRegex.test(userId) && passwordRegex.test(userPassword)) {
      setIsLoading(true);
      setTimeout(() => {
        localStorage.setItem("accessToken", "asdfkc");
        setIsLoading(false);
        navigate("/");
      }, 30000);
    }
  };

  return (
    <div className={styles.container}>
      <ScaleLoader
        cssOverride={cssOverride}
        loading={isLoading}
<<<<<<< HEAD
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#a99bf6"
        width={10}
        height={60}
=======
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#a99bf6"
>>>>>>> 7c1df049119bbd87c84db9f82ec3c89be4eb5da6
      />
      <div className={styles["img-box"]}>
        <img src={logo} />
      </div>
      <p>
        회원이 아니신가요? <span>회원 가입하기</span>
      </p>
      <form onSubmit={onSubmitHandler}>
        <label>이메일</label>
        <input
          value={userId}
          onChange={changeIdHandler}
          placeholder="아이디를 입력해주세요"
        />
        {userId && !idRegex.test(userId) && (
          <p className={styles["p-id"]}>이메일 형식에 알맞게 작성해주세요.</p>
        )}
        <label>비밀번호</label>
        <input
          value={userPassword}
          onChange={changePasswordHandler}
          placeholder="비밀번호를 입력해주세요"
          type="password"
        />
        {userPassword && !passwordRegex.test(userPassword) && (
          <p className={styles["p-pwd"]}>
            영어와 숫자를 조합한 8글자 이상 입력해주세요.
          </p>
        )}
        <button>로그인</button>
      </form>
      <p className={styles["search-password"]}>비밀번호 찾기</p>
      <div className={styles["social-login"]}>
        <span>소셜 로그인</span>
        <a href={KAKAO_REDIRECT_URI}>
          <img src={kakao} alt="kakao" />
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
