import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '@pages/User.module.css';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [userInfo, setUserInfo] = useState();
  const ACCESS_TOKEN = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const getUser = async () => {
    const user = await axios({
      method: 'post',
      url: 'https://kapi.kakao.com/v2/user/me',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    setUserInfo(user.data);
  };

  const goToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles['btn-box']}>
        <button onClick={goToHome}>뒤로가기</button>
      </div>
      <div className={styles.profile}>
        <img src={userInfo?.properties?.profile_image} />
      </div>
      <p className={styles.nickname}>{userInfo?.properties?.nickname}</p>
    </div>
  );
};

export default User;
