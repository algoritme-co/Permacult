"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "./Category.module.css";
import FAB from "../../components/FAB";
import ModalStory from "../../components/ModalStory";
import ModalInsights from "../../components/ModalInsights";

const StoriesByCategory = () => {
  const { category } = useParams();
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");
  const [selectedStory, setSelectedStory] = useState(null);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isInsightsModalOpen, setIsInsightsModalOpen] = useState(false);
  const [insights, setInsights] = useState("");

  const itemsPerPage = 6;

  // Fetch stories by category
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch(
          `http://localhost:9000/categories/${category}/stories/?page=${currentPage}&limit=${itemsPerPage}`
        );
        const data = await response.json();

        if (data.stories) {
          setStories(data.stories);
          setTotalPages(data.totalPages || 1);
        } else {
          throw new Error("Failed to fetch stories.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load stories.");
      }
    };

    if (category) {
      fetchStories();
    }
  }, [category, currentPage]);

  // Fetch story details for the modal
  const handleReadMore = async (storyId) => {
    try {
      const response = await fetch(`http://localhost:9000/story/${storyId}/`);
      const data = await response.json();
      if (data.story) {
        setSelectedStory(data.story);
        setIsStoryModalOpen(true);
      } else {
        throw new Error("Failed to fetch story details.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch insights for the category
  const fetchInsights = async () => {
    try {
      const response = await fetch(
        `http://localhost:9000/analytics/categories/${category}/insights/`
      );
      const data = await response.json();
      if (data.insights) {
        setInsights(data.insights);
        setIsInsightsModalOpen(true);
      } else {
        throw new Error("Failed to fetch insights.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load insights.");
    }
  };

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.categoryPage}>
      {/* Imagens decorativas laterais */}
      <img
        src="/border-l.svg"
        alt="Moldura Lateral Esquerda"
        className={styles.borderLeft}
      />
      <img
        src="/border-r.svg"
        alt="Moldura Lateral Direita"
        className={styles.borderRight}
      />

      {/* Logo */}
      <div className={styles.logoContainer}>
        <img src="/permacult_logo-name.svg" alt="Permacult Logo" />
      </div>

      {/* Cabeçalho */}
      <header className={styles.header}>
        <h2 className={styles.sectionHeading}>
          Stories in: <span className={styles.categoryName}>{category}</span>
        </h2>
      </header>

      {/* Conteúdo */}
      <div className={styles.storiesContainer}>
        {error && <p className={styles.error}>{error}</p>}
        {stories.map((story) => (
          <div key={story._id} className={styles.storyCard}>
            <h3 className={styles.storyTitle}>{story.text_en.slice(0, 50)}...</h3>
            <button
              className={styles.readMoreButton}
              onClick={() => handleReadMore(story._id)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={styles.paginationButton}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Botão de Insights */}
      <button className={styles.infoButton} onClick={fetchInsights}>
        <img src="/info.svg" alt="Info" />
      </button>

      {/* Modal de Insights */}
      {isInsightsModalOpen && (
        <ModalInsights
          category={category}
          insightsText={insights}
          closeInsights={() => setIsInsightsModalOpen(false)}
        />
      )}

      {/* Modal de História */}
      {isStoryModalOpen && (
        <ModalStory
          story={selectedStory}
          closeModal={() => setIsStoryModalOpen(false)}
        />
      )}

      {/* FAB */}
      <FAB />
    </div>
  );
};

export default StoriesByCategory;
