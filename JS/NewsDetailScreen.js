import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { FavoritesContext } from './FavoritesContext';

const NewsDetailScreen = ({ route }) => {
  const { title, content } = route.params;
  const { addToFavorites } = useContext(FavoritesContext);

  const handleAddToFavorites = () => {
    addToFavorites({ title, content });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <Button title="Добавить в избранное" onPress={handleAddToFavorites} color="tomato" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  content: {
    fontSize: 18,
    marginBottom: 30,
  },
});

export default NewsDetailScreen;
