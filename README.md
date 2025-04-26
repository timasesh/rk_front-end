Документация по проекту: React Native с Верхней Навигацией

Описание проекта

Это приложение представляет собой новостной агрегатор, где пользователи могут просматривать актуальные статьи и сохранять их в избранное для быстрого доступа. В проекте используется React Native для создания мобильного приложения и React Navigation для организации навигации. Реализована верхняя панель навигации с вкладками, а также контекст для управления избранными новостями, что позволяет пользователю добавлять и удалять статьи из списка избранных.

Функциональные экраны

Экран Новости (NewsScreen)

На этом экране отображаются последние новости с краткими описаниями (первые 100 символов).

Пользователь может перейти на экран с полным содержанием статьи.

Каждая новость имеет кнопку "Читать далее", которая переводит на экран с детальным описанием.

Экран Избранное (FavoritesScreen)

Этот экран показывает все статьи, которые были добавлены в избранное.

Каждая новость представлена в виде карточки, и пользователь может удалить ее из избранного.

Навигация и структура приложения

Для организации навигации и управления вкладками используется React Navigation с верхней навигацией (Material Top Tabs). Это улучшает пользовательский интерфейс, позволяя более удобно переключаться между экранами.

Навигационная панель

В отличие от предыдущих версий, навигация осуществляется через верхнюю панель вкладок. Для этого используется компонент createMaterialTopTabNavigator из React Navigation, который позволяет переключаться между экранами "Новости" и "Избранное". Вкладки расположены горизонтально, что делает интерфейс более современным и удобным.

Пример кода для настройки верхней панели:

javascript


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewsScreen from './NewsScreen';
import FavoritesScreen from './FavoritesScreen';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',  // цвет активной вкладки
        tabBarInactiveTintColor: 'gray',  // цвет неактивной вкладки
        tabBarStyle: { backgroundColor: '#fff' },  // стиль вкладок
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },  // стиль текста на вкладках
        tabBarIndicatorStyle: { backgroundColor: 'tomato' },  // цвет индикатора вкладки
      }}
    >
      <Tab.Screen name="Новости" component={NewsScreen} />
      <Tab.Screen name="Избранное" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

export default Navigation;
Использование контекста для избранных новостей

Для управления избранными новостями используется FavoritesContext. Этот контекст предоставляет функции для добавления и удаления новостей в избранное. С его помощью сохраняется состояние избранных новостей, что позволяет пользователю легко управлять своим списком.

Пример контекста для избранных новостей:

javascript


import React, { createContext, useState } from 'react';

// Контекст избранных новостей
export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (newsItem) => {
    setFavorites((prevFavorites) => [...prevFavorites, newsItem]);
  };

  const removeFavorite = (newsId) => {
    setFavorites((prevFavorites) => prevFavorites.filter(news => news.id !== newsId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
Установка зависимостей

Чтобы проект корректно работал, необходимо установить несколько зависимостей:

Основные зависимости для навигации:




npm install @react-navigation/native
npm install @react-navigation/material-top-tabs
npm install react-native-tab-view
npm install react-native-pager-view
Дополнительные библиотеки:




npm install react-native-screens
npm install react-native-safe-area-context
Для работы с контекстом и другими функциями:




npm install @react-navigation/stack
Структура проекта

App.js — основной файл, где настраиваются навигация и контекст для избранных новостей.

NewsScreen.js — экран для отображения списка новостей.

FavoritesScreen.js — экран для отображения избранных новостей.

FavoritesContext.js — файл с контекстом для работы с избранными новостями.

Перезапуск и запуск проекта

После установки всех зависимостей, можно перезапустить приложение с помощью команды:




npm start
Если используется Expo, используйте:




expo start
Примечания

В данной версии приложения реализована верхняя панель навигации, что улучшает пользовательский интерфейс и делает его более современным.

Легко добавлять новые вкладки и экраны для расширения функциональности приложения.

В будущем можно добавить интеграцию с API для загрузки новостей и добавить дополнительные функции, такие как фильтрация и сортировка новостей.
