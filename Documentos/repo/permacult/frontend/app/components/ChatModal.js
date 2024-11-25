"use client";

import React, { useState } from "react";
import styles from "./ChatModal.module.css";

const ChatModal = ({ story, closeChatModal }) => {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Função para enviar mensagem para o LLM
  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    setIsLoading(true);

    try {
      // Adicionar a mensagem do usuário ao histórico
      setChatHistory((prev) => [...prev, { role: "user", content: userMessage }]);

      // Chamar o endpoint de chat
      const response = await fetch(`http://localhost:9000/story/${story._id}/chat/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_message: userMessage }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch chat response.");
      }

      const data = await response.json();
      const assistantMessage = data.response || "Desculpe, não consegui processar a resposta.";

      // Adicionar a resposta do assistente ao histórico
      setChatHistory((prev) => [...prev, { role: "assistant", content: assistantMessage }]);

    } catch (error) {
      console.error("Error during chat interaction:", error);
      setChatHistory((prev) => [
        ...prev,
        { role: "error", content: "Erro ao obter resposta. Tente novamente mais tarde." },
      ]);
    } finally {
      setIsLoading(false);
      setUserMessage(""); // Limpar o campo de entrada
    }
  };

  return (
    <div className={styles.chatModalOverlay} onClick={closeChatModal}>
      <div className={styles.chatModalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeChatModal}>
          <img src="/close.svg" alt="Close" />
        </button>

        <h2 className={styles.chatModalTitle}>Interaja com a História</h2>

        <div className={styles.chatHistory}>
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={
                message.role === "user"
                  ? styles.userMessage
                  : message.role === "assistant"
                  ? styles.assistantMessage
                  : styles.errorMessage
              }
            >
              {message.content}
            </div>
          ))}
        </div>

        <div className={styles.inputContainer}>
          <textarea
            className={styles.textInput}
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
          />
          <button
            className={styles.sendButton}
            onClick={sendMessage}
            disabled={isLoading || !userMessage.trim()}
          >
            {isLoading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
