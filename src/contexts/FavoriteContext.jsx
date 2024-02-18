import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

export default function FavoriteProvider({ children }) {
  const storedFavorites = localStorage.getItem("favoritesList");
  const [favorite, setFavorite] = useState(
    storedFavorites ? JSON.parse(storedFavorites) : []
  );

  const addToFavorite = (movie) => {
    setFavorite((prev) => {
      if (favorite.some((item) => item.id === movie.id)) return prev;
      else return [...prev, movie];
    });
  };

  const removeFromFavorite = (movie) => {
    setFavorite(favorite.filter((item) => item.id !== movie.id));
    localStorage.setItem("favoritesList", JSON.stringify(favorite));
  };

  localStorage.setItem("favoritesList", JSON.stringify(favorite));

  const values = {
    favorite,
    addToFavorite,
    removeFromFavorite,
  };
  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  );
}
