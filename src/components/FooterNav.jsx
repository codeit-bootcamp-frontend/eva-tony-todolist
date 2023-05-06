import React from 'react';
import styles from '@components/FooterNav.module.css';
import { BsCalendar2Date } from 'react-icons/Bs';
import { AiOutlineUser } from 'react-icons/Ai';
import AddButton from './AddButton';

const FooterNav = () => {
  return (
    <div className={styles['footer-box']}>
      <div className={styles['button-box']}>
        <AddButton />
      </div>
      <BsCalendar2Date style={{ cursor: 'pointer' }} />
      <AiOutlineUser style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default FooterNav;
