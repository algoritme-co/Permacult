"use client";

import React, { useState } from "react";
import styles from "./ModalStory.module.css";

const ModalStory = ({ story, closeModal }) => {
  const [isOriginalText, setIsOriginalText] = useState(false);

  // Extrair título do texto, assumindo que ele está entre os primeiros "**" em text_en
  const extractTitle = (text) => {
    const match = text.match(/\*\*(.*?)\*\*/);
    return match ? match[1] : "Story Details";
  };

  // Alternar entre text_en e text
  const getTextToDisplay = () => (isOriginalText ? story.text : story.text_en);

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeModal}>
          <img src="/close.svg" alt="Close" />
        </button>

        {/* Exibir Título Extraído de text_en */}
        <h2 className={styles.modalTitle}>{extractTitle(story.text_en)}</h2>

        {/* Exibindo Informações do Autor e Metadados */}
        <p><strong>Author:</strong> {story.name}</p>
        <p><strong>Age:</strong> {story.age}</p>
        <p><strong>Location:</strong> {story.location}</p>
        <p><strong>Language:</strong> {story.language}</p>
        <p><strong>Content Type:</strong> {story.content_type}</p>

        {/* Renderizando o Texto Completo */}
        <div className={styles.storyBody}>
          {getTextToDisplay().split("\n").map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Botões Abaixo */}
        <div className={styles.actionButtons}>
          {/* Botão para alternar para o texto original */}
          <button
            className={styles.actionButton}
            onClick={() => setIsOriginalText((prev) => !prev)}
          >
            <img src="/original.svg" alt="Original" />
          </button>

          {/* Botão para som */}
          <button className={styles.actionButton}>
            <img src="/sound.svg" alt="Sound" />
          </button>

          {/* Botão para chat */}
          <button className={styles.actionButton}>
            <img src="/chat.svg" alt="Chat" />
          </button>

          {/* Botão para versão */}
          <button className={styles.actionButton}>
            <img src="/version.svg" alt="Version" />
          </button>

          {/* Botão para reportar */}
          <button className={styles.actionButton}>
            <img src="/report.svg" alt="Report" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalStory;
