import React from 'react';
import styles from '@components/FooterNav.module.css';
import { BsCalendar2Date } from 'react-icons/Bs';
import { AiOutlineUser } from 'react-icons/Ai';
import AddButton from './AddButton';
import { useNavigate } from 'react-router-dom';

const FooterNav = ({ selectedTodoList, onAddItem }) => {
  const navigate = useNavigate();

  const goToUserInfo = () => {
    navigate('/user');
  };

  return (
    <div className={styles['footer-box']}>
      <div className={styles['button-box']}>
        <AddButton selectedTodoList={selectedTodoList} onAddItem={onAddItem} />
      </div>
      <BsCalendar2Date style={{ cursor: 'pointer' }} />
      <AiOutlineUser onClick={goToUserInfo} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default FooterNav;
