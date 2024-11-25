"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Hook de navegação
import SplashScreen from "./components/SplashScreen"; // Caminho correto
import CreateModal from "./components/CreateModal"; // Importa o modal criado
import styles from "./Welcome.module.css";

const WelcomePage = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [storyCount, setStoryCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla o estado do modal
  const router = useRouter(); // Hook para navegação

  const messages = [
    "Museum for the Preservation of the Memory and Culture of Humanity.",
    "Share your Memories, Moments, Stories.",
    "Help us Perpetuate the Memory and Culture of Humanity.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchStoryCount = async () => {
      try {
        const response = await fetch("http://localhost:9000/stories/count/");
        const data = await response.json();
        setStoryCount(data.total_stories || 0);
      } catch (error) {
        console.error("Erro ao buscar o contador de histórias:", error);
      }
    };

    fetchStoryCount();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  const handleExploreClick = () => {
    router.push("/explore"); // Redireciona para a página Explore
  };

  const handleCreateClick = () => {
    setIsModalOpen(true); // Abre o modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <div className={styles.welcomePage}>
      <h1 className={styles.animatedTitle}>{messages[currentMessage]}</h1>

      <p className={styles.storyCount}>
        Current Collection: <span>{storyCount}</span> Memories
      </p>

      <div className={styles.globeContainer}>
        {/* Substituindo o mapa pela imagem */}
        <img src="/world.svg" alt="World Map" className={styles.worldImage} />
      </div>

      {/* Imagens decorativas laterais */}
      <img
        src="/border-l.svg"
        alt="Moldura Lateral Esquerda"
        className={styles.borderLeft}
      />
      <img
        src="/borders.svg"
        alt="Moldura Lateral Direita"
        className={styles.borderRight}
      />

      <div className={styles.buttonContainer}>
        <button className={styles.exploreButton} onClick={handleExploreClick}>
          Explore
        </button>
        <button className={styles.sendButton} onClick={handleCreateClick}>
          Create
        </button>
      </div>

      {/* Renderiza o modal somente se estiver aberto */}
      {isModalOpen && <CreateModal onClose={handleCloseModal} />}
    </div>
  );
};

export default WelcomePage;
