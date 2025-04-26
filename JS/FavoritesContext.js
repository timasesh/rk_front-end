import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (newsItem) => {
    // Проверка, чтобы не добавлять одинаковые
    const exists = favorites.some(item => item.title === newsItem.title);
    if (!exists) {
      setFavorites([...favorites, newsItem]);
    }
  };

  const removeFromFavorites = (title) => {
    setFavorites(favorites.filter(item => item.title !== title));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
