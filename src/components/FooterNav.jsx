import React from "react";
import styles from "@components/FooterNav.module.css";
import { BsCalendar2Date } from "react-icons/Bs";
import { AiOutlineUser } from "react-icons/Ai";
import LoginModal from "@components/LoginModal";

import { useNavigate } from "react-router-dom";

const FooterNav = ({ selectedTodoList, onAddItem }) => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  const goToUserInfo = () => {
    if (localStorage.getItem("accessToken")) {
      navigate("/user");
    }
  };

  return (
    <div className={styles["footer-box"]}>
      <BsCalendar2Date onClick={goToHome} style={{ cursor: "pointer" }} />
      <AiOutlineUser onClick={goToUserInfo} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default FooterNav;
