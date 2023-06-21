import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { darkMode } from '../utils/theme/themeColors';

const AboutScreen = () => {
  const deadpoolInfo = {
    title: 'Deadpool',
    movies: 2,
    director: 'Tim Miller',
    description: 'Deadpool is a superhero film series based on the Marvel Comics character Deadpool. The series is known for its comedic and irreverent take on the superhero genre.',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deadpoolInfo.title}</Text>
      <Text style={styles.info}>
        Películas: {deadpoolInfo.movies} | Director: {deadpoolInfo.director}
      </Text>
      <Text style={styles.description}>{deadpoolInfo.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkMode.primary,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: darkMode.secondary,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: darkMode.secondary,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: darkMode.secondary,
  },
});

export default AboutScreen;
