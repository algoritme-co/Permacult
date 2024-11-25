"use client";

import React from "react";
import styles from "./ModalInsights.module.css";

const ModalInsights = ({ insightsText, category, closeInsights }) => {
  return (
    <div className={styles.modalOverlay} onClick={closeInsights}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeInsights}>
          <img src="/close.svg" alt="Close" />
        </button>
        <h2 className={styles.modalTitle}>
          Insights for <span className={styles.categoryName}>{category}</span>
        </h2>
        <div className={styles.insightsBody}>
          {insightsText.split("\n").map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalInsights;
