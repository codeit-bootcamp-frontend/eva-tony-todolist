import React from 'react';
import ReactDOM from 'react-dom';
import styles from '@components/LoginModal.module.css';
import { IoMdCloseCircleOutline } from 'react-icons/Io';

const Backdrop = ({ onConfirm }) => {
  return <div className={styles.backdrop} onClick={onConfirm}></div>;
};

const ModalOverlay = ({ onConfirm }) => {
  return (
    <div className={styles.modal}>
      <div>
        <IoMdCloseCircleOutline
          size={'3rem'}
          onClick={onConfirm}
          style={{ cursor: 'pointer', marginBottom: '30px' }}
        />
      </div>
      <p>로그인을 해야 서비스를 이용할 수 있어요!</p>
      <button className={styles.button}>로그인 하러 가기</button>
      <p>계정이 없다면? 회원가입 하러가기</p>
    </div>
  );
};

const LoginModal = ({ onConfirm }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={onConfirm} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default LoginModal;
