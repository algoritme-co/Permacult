"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use o roteamento dinâmico do Next.js
import styles from "./Explore.module.css";
import FAB from "../components/FAB";

const ExplorePage = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const router = useRouter(); // Inicializa o roteador para navegação

  const tagColors = ["#f75b3c", "#008575", "#f7afad", "#c5dfe1", "#f4b50b", "#02b7d3", "#c0e189", "#efdbdd", "#c5dfe1"];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:9000/categories/");
        const data = await response.json();
        setCategories(data.categories || []);
        setFilteredCategories(data.categories || []);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSearch = () => {
    setIsSearchActive(true);
    setSearchTerm("");
    setFilteredCategories(categories);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = categories.filter((category) =>
      category._id.toLowerCase().includes(value)
    );
    setFilteredCategories(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsSearchActive(false);
    }
  };

  const closeSearch = () => {
    setIsSearchActive(false);
    setSearchTerm("");
    setFilteredCategories(categories);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.searchContainer}`)) {
        closeSearch();
      }
    };

    if (isSearchActive) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isSearchActive]);

  return (
    <div className={styles.explorePage}>
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
          Browse the categories and discover incredible stories.
        </h2>
      </header>

      {/* Nuvem de Tags */}
      <div className={styles.tagCloud}>
        {filteredCategories.map((category, index) => (
          <button
            key={category._id}
            className={styles.tag}
            style={{
              backgroundColor: tagColors[index % tagColors.length],
            }}
            onClick={() => router.push(`/stories/${category._id}`)} // Navega para a página de categoria
          >
            {category._id}
          </button>
        ))}
      </div>

      {/* Campo de Pesquisa */}
      {isSearchActive && (
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Search categories..."
            className={styles.searchInput}
          />
        </div>
      )}

      {/* FAB */}
      <FAB onSearch={handleSearch} />
    </div>
  );
};

export default ExplorePage;
