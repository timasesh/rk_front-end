import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewsScreen = () => {
  const navigation = useNavigation();

  const newsData = [
    {
      id: 1,
      title: 'Будущее ИТ-индустрии и искусственный интеллект',
      content: 'Индустрия искусственного интеллекта стремительно развивается, охватывая здравоохранение, финансы и другие сферы.'
    },
    {
      id: 2,
      title: 'Новые тренды в мобильной разработке',
      content: 'Разработка кроссплатформенных приложений с использованием Flutter и React Native набирает популярность.'
    },
    {
      id: 3,
      title: 'Развитие технологий блокчейн',
      content: 'Блокчейн используется не только для криптовалют, но и в логистике, медицине и государственном управлении.'
    },
    {
      id: 4,
      title: 'Перспективы кибербезопасности в 2025 году',
      content: 'Рост числа киберугроз требует новых подходов к защите данных и усиления мер безопасности.'
    },
    {
      id: 5,
      title: 'Роль облачных технологий в бизнесе',
      content: 'Компании активно переходят на облачные решения для повышения гибкости и сокращения затрат.'
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Новости</Text>
      {newsData.map((news) => (
        <View key={news.id} style={styles.newsItem}>
          <Text style={styles.title}>{news.title}</Text>
          <Text style={styles.content}>{news.content.substring(0, 100)}...</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('NewsDetail', { title: news.title, content: news.content })}
          >
            <Text style={styles.buttonText}>Читать далее</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  newsItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#111',
  },
  content: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default NewsScreen;
