import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
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
        Movies: {deadpoolInfo.movies} | Director: {deadpoolInfo.director}
      </Text>
      <Image source={{ uri: 'https://th.bing.com/th/id/R.6fc919e434731e38db740adb2f66cb12?rik=cHyjkzGePDtqoA&pid=ImgRaw&r=0' }} style={styles.characterPhoto} alt="Deadpool" />
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
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: darkMode.secondary,
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    color: darkMode.secondary,
    marginBottom: 40,
    textAlign: 'center',
  },
  characterPhoto: {
    width: 300,
    height: 300,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 30
  },
  description: {
    fontSize: 16,
    color: darkMode.secondary,
    textAlign: 'center',
  
  },
});

export default AboutScreen;
