import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { FavoritesContext } from './FavoritesContext';

const FavoritesScreen = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>Пока нет избранных новостей</Text>
      ) : (
        favorites.map((item, index) => (
          <View key={index} style={styles.newsItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
            <Button 
              title="Удалить" 
              color="red" 
              onPress={() => removeFromFavorites(item.title)} 
            />
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: 'gray',
  },
  newsItem: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default FavoritesScreen;
