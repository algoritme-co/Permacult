import React, { useState } from "react";
import styles from "./CreateModal.module.css";

const CreateModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    location: "",
    text: "",
  });
  const [audioBlob, setAudioBlob] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null); // Persistência do MediaRecorder
  let audioChunks = [];

  // Iniciar gravação de áudio
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream); // Cria a instância do MediaRecorder
      setMediaRecorder(recorder); // Salva no estado

      recorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: "audio/ogg" });
        setAudioBlob(blob); // Define o áudio gravado
        audioChunks = []; // Limpa os chunks após salvar o blob
      };

      recorder.start(); // Inicia a gravação
      setIsRecording(true);
    } catch (error) {
      console.error("Erro ao iniciar gravação:", error);
    }
  };

  // Parar gravação de áudio
  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop(); // Para a gravação
      setIsRecording(false);
    } else {
      console.error("MediaRecorder não definido!");
    }
  };

  // Regravar áudio
  const resetAudio = () => {
    setAudioBlob(null);
    setIsRecording(false);
    setMediaRecorder(null); // Reseta o MediaRecorder
  };

  // Enviar dados de texto
  const handleTextSubmit = async () => {
    try {
      const formData = new URLSearchParams(); // Formato "application/x-www-form-urlencoded"
      formData.append("name", userData.name);
      formData.append("age", userData.age);
      formData.append("location", userData.location);
      formData.append("text", userData.text);

      const response = await fetch("http://127.0.0.1:8000/upload-text/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(), // Envia os dados como string
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erro ao enviar texto:", errorData);
        return;
      }

      const result = await response.json();
      console.log("Texto enviado com sucesso:", result);
      onClose(); // Fecha o modal após envio
    } catch (error) {
      console.error("Erro ao enviar texto:", error);
    }
  };

  // Enviar áudio
  const handleAudioSubmit = async () => {
    try {
      const formData = new FormData(); // Criação do FormData para o arquivo
      formData.append("file", audioBlob); // Adiciona o arquivo de áudio

      // Constrói os parâmetros da query
      const params = new URLSearchParams({
        name: userData.name,
        age: userData.age,
        location: userData.location,
      });

      const response = await fetch(
        `http://127.0.0.1:8000/upload-audio/?${params.toString()}`, // Inclui os parâmetros na URL
        {
          method: "POST",
          body: formData, // Envia o arquivo no corpo
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erro ao enviar áudio:", errorData);
        return;
      }

      const result = await response.json();
      console.log("Áudio enviado com sucesso:", result);
      onClose(); // Fecha o modal após envio
    } catch (error) {
      console.error("Erro ao enviar áudio:", error);
    }
  };

  return (
    <>
      {/* Fundo escurecido */}
      <div className={styles.backdrop} onClick={onClose}></div>

      {/* Modal */}
      <div className={styles.modal}>
        {step === 1 && (
          <div className={styles.stepOne}>
            <h2 className={styles.title}>Envie sua mensagem</h2>
            <input
              type="text"
              placeholder="Seu nome"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className={styles.input}
            />
            <input
              type="number"
              placeholder="Sua idade"
              value={userData.age}
              onChange={(e) =>
                setUserData({ ...userData, age: e.target.value })
              }
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Sua localização"
              value={userData.location}
              onChange={(e) =>
                setUserData({ ...userData, location: e.target.value })
              }
              className={styles.input}
            />
            <div className={styles.iconContainer}>
              <img
                src="audio.svg"
                alt="Ícone de áudio"
                className={styles.icon}
                onClick={() => setStep(2)}
              />
              <img
                src="texto.svg"
                alt="Ícone de texto"
                className={styles.icon}
                onClick={() => setStep(3)}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.stepTwo}>
            <h2 className={styles.title}>Grave sua mensagem</h2>
            {!isRecording && !audioBlob && (
              <button onClick={startRecording} className={styles.button}>
                Iniciar Gravação
              </button>
            )}
            {isRecording && (
              <button onClick={stopRecording} className={styles.button}>
                Parar Gravação
              </button>
            )}
            {audioBlob && (
              <>
                <button onClick={resetAudio} className={styles.button}>
                  Regravar
                </button>
                <button onClick={handleAudioSubmit} className={styles.button}>
                  Enviar
                </button>
              </>
            )}
          </div>
        )}

        {step === 3 && (
          <div className={styles.stepThree}>
            <h2 className={styles.title}>Escreva sua mensagem</h2>
            <textarea
              placeholder="Digite sua mensagem aqui"
              value={userData.text}
              onChange={(e) =>
                setUserData({ ...userData, text: e.target.value })
              }
              className={styles.textarea}
            />
            <div className={styles.buttonContainer}>
              <button onClick={onClose} className={styles.button}>
                Cancelar
              </button>
              <button onClick={handleTextSubmit} className={styles.button}>
                Enviar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateModal;
