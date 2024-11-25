"use client";

import React from "react";
import styles from "./SplashScreen.module.css";

const SplashScreen = () => {
  return (
    <div className={styles.splashContainer}>
      <img
        src="/permacult_logo-name.svg"
        alt="Logo Permacult"
        className={`${styles.logo} ${styles.fadeIn}`}
      />
      <img
        src="/permacult-slogan.svg"
        alt="Slogan Permacult"
        className={`${styles.slogan} ${styles.fadeInDelay}`}
      />
    </div>
  );
};

export default SplashScreen;
