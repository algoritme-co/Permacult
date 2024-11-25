"use client";

import React, { useState } from "react";
import styles from "./ModalStory.module.css";
import ChatModal from "./ChatModal";

const ModalStory = ({ story, closeModal }) => {
  const [isOriginalText, setIsOriginalText] = useState(false);
  const [audio, setAudio] = useState(null); // Armazena o áudio para reprodução
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  const openChatModal = () => setIsChatModalOpen(true);
  const closeChatModal = () => setIsChatModalOpen(false);

  // Extrair título do texto, assumindo que ele está entre os primeiros "**" em text_en
  const extractTitle = (text) => {
    const match = text.match(/\*\*(.*?)\*\*/);
    return match ? match[1] : "Story Details";
  };

  // Alternar entre text_en e text
  const getTextToDisplay = () => (isOriginalText ? story.text : story.text_en);

  // Requisitar áudio do servidor
  const handleAudioRequest = async () => {
    try {
      if (audio) {
        audio.pause();
        if (audio.src) {
          URL.revokeObjectURL(audio.src); // Libera o URL anterior
        }
        setAudio(null);
      }

      const response = await fetch(
        `http://localhost:9000/story/${story._id}/audio/?language=${isOriginalText ? "original" : "en"}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch audio.");
      }

      const audioBlob = await response.blob();
      const audioURL = URL.createObjectURL(audioBlob);
      const audioElement = new Audio(audioURL);

      audioElement.addEventListener("error", (e) => {
        console.error("Audio playback error.", e);
      });

      const playPromise = audioElement.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio playback started.");
            setAudio(audioElement);
          })
          .catch((error) => {
            console.error("Audio playback failed:", error);
          });
      }
    } catch (error) {
      console.error("Error fetching or playing audio:", error);
    }
  };

  return (
    <>
      <div className={styles.modalOverlay} onClick={closeModal}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={closeModal}>
            <img src="/close.svg" alt="Close" />
          </button>

          <h2 className={styles.modalTitle}>{extractTitle(story.text_en)}</h2>

          <p>
            <strong>Author:</strong> {story.name}
          </p>
          <p>
            <strong>Age:</strong> {story.age}
          </p>
          <p>
            <strong>Location:</strong> {story.location}
          </p>
          <p>
            <strong>Language:</strong> {story.language}
          </p>
          <p>
            <strong>Content Type:</strong> {story.content_type}
          </p>

          <div className={styles.storyBody}>
            {getTextToDisplay().split("\n").map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className={styles.actionButtons}>
            <button
              className={styles.actionButton}
              onClick={() => setIsOriginalText((prev) => !prev)}
            >
              <img src="/original.svg" alt="Original" />
            </button>

            <button className={styles.actionButton} onClick={handleAudioRequest}>
              <img src="/sound.svg" alt="Sound" />
            </button>

            <button className={styles.actionButton} onClick={openChatModal}>
              <img src="/chat.svg" alt="Chat" />
            </button>

            <button className={styles.actionButton}>
              <img src="/version.svg" alt="Version" />
            </button>

            <button className={styles.actionButton}>
              <img src="/report.svg" alt="Report" />
            </button>
          </div>
        </div>
      </div>

      {isChatModalOpen && <ChatModal story={story} closeChatModal={closeChatModal} />}
    </>
  );
};

export default ModalStory;
