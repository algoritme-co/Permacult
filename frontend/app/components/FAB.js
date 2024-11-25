"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Importa o roteador do Next.js
import styles from "./FAB.module.css";
import { AiOutlineSetting, AiOutlineSearch, AiOutlineFileAdd, AiOutlineHome } from "react-icons/ai";

const FAB = ({ onSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const timerRef = useRef(null);
  const router = useRouter(); // Inicializa o roteador

  const toggleFAB = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      startAutoCloseTimer();
    } else {
      clearAutoCloseTimer();
    }
  };

  const closeFAB = () => {
    setIsExpanded(false);
  };

  const startAutoCloseTimer = () => {
    clearAutoCloseTimer(); // Limpar qualquer timer existente
    timerRef.current = setTimeout(() => {
      setIsExpanded(false);
    }, 5000); // Fecha automaticamente após 5 segundos
  };

  const clearAutoCloseTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  // Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.fabContainer}`)) {
        closeFAB();
      }
    };

    if (isExpanded) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isExpanded]);

  return (
    <div className={styles.fabContainer}>
      {/* Botões Expandidos */}
      {isExpanded && (
        <div className={styles.expandedButtons}>
          <button className={styles.fabButton}>
            <AiOutlineFileAdd size={20} />
            <span>Create</span>
          </button>
          <button
            className={styles.fabButton}
            onClick={() => {
              closeFAB();
              onSearch();
            }}
          >
            <AiOutlineSearch size={20} />
            <span>Search</span>
          </button>
          <button
            className={styles.fabButton}
            onClick={() => {
              closeFAB();
              router.push("/explore"); // Redireciona para a página "Explore"
            }}
          >
            <AiOutlineHome size={20} />
            <span>Explore</span>
          </button>
          <button className={styles.fabButton}>
            <AiOutlineSetting size={20} />
            <span>Settings</span>
          </button>
        </div>
      )}

      {/* Botão Principal */}
      <button className={styles.mainFab} onClick={toggleFAB}>
        {isExpanded ? (
          <img src="/close.svg" alt="Close Icon" className={styles.icon} />
        ) : (
          <img src="/permacult-icon.svg" alt="Permacult Icon" className={styles.permacultIcon} />
        )}
      </button>
    </div>
  );
};

export default FAB;
