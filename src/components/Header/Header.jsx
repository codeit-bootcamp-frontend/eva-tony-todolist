import React from "react";
import styles from "@components/Header/Header.module.css";
import CodoitLogo from "@assets/codoit-logo.svg";

const Header = () => {
  return (
    <div className={styles["logo-wrap"]}>
      <img className={styles.logo} src={CodoitLogo} />
    </div>
  );
};

export default Header;
