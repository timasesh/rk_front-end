import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import NewsScreen from './JS/NewsScreen';
import NewsDetailScreen from './JS/NewsDetailScreen';
import FavoritesScreen from './JS/FavoritesScreen';
import { FavoritesProvider } from './JS/FavoritesContext'; // импортируем контекст

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News" component={NewsScreen} options={{ title: 'Новости' }} />
      <Stack.Screen name="NewsDetail" component={NewsDetailScreen} options={{ title: 'Детали новости' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home-outline';
              } else if (route.name === 'Favorites') {
                iconName = 'heart-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={NewsStack} options={{ headerShown: false }} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
