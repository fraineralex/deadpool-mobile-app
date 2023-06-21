import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { darkMode } from '../utils/theme/themeColors';

const MyLifeScreen = () => {
  const reason = `Deadpool has been a significant part of my life because it combines my love for superheroes with a unique sense of humor. The character's sarcastic remarks, fourth-wall-breaking moments, and witty one-liners always manage to bring a smile to my face. Deadpool's unconventional approach to being a hero and his ability to find humor in even the direst situations have taught me to embrace my individuality and not take life too seriously. It's a constant reminder to find joy and laughter in the midst of challenges. Deadpool has become a symbol of resilience, self-acceptance, and finding happiness in the most unexpected places for me.`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>En mi vida</Text>
      <Text style={styles.reason}>{reason}</Text>
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
  reason: {
    fontSize: 16,
    color: darkMode.secondary,
  },
});

export default MyLifeScreen;
