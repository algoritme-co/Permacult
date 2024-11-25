import React from "react";
import styles from "./ModalMenu.module.css";

export default function ModalMenu({ onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.heading}>Menu</h2>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a href="/explore" className={styles.menuLink}>Explorar</a>
          </li>
          <li className={styles.menuItem}>
            <a href="/upload-story" className={styles.menuLink}>Enviar História</a>
          </li>
          <li className={styles.menuItem}>
            <a href="/settings" className={styles.menuLink}>Configurações</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
