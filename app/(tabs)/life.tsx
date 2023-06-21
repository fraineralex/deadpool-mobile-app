import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { darkMode } from '../utils/theme/themeColors';

const MyLifeScreen = () => {
  const reason1 = `Deadpool has been a significant part of my life because it combines my love for superheroes with a unique sense of humor. The character's sarcastic remarks, fourth-wall-breaking moments, and witty one-liners always manage to bring a smile to my face.`
  const reason2 = `Deadpool's unconventional approach to being a hero and his ability to find humor in even the direst situations have taught me to embrace my individuality and not take life too seriously.` 
  const reason3 = `It's a constant reminder to find joy and laughter in the midst of challenges. Deadpool has become a symbol of resilience, self-acceptance, and finding happiness in the most unexpected places for me.`;

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://th.bing.com/th/id/R.7b93df2d9e39a60a9e2786e13de253bd?rik=7%2bgvrgAmNn9HTA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fDeadpool-Wallpaper-00886.jpg&ehk=QwW11v%2f6VxHTZ64RKxuQTqR6o4S3TQZMKiplkIIS%2fsQ%3d&risl=&pid=ImgRaw&r=0' }} style={styles.characterPhoto} alt="Deadpool" />
      <Text style={styles.reason}>
        {reason1}
      </Text>
      <Text style={styles.reason}>
        {reason2}
      </Text>
      <Text style={styles.reason}>
        {reason3}
      </Text>
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
  characterPhoto: {
    width: 350,
    height: 250,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 30
  },
  reason: {
    fontSize: 16,
    color: darkMode.secondary,
    textAlign: 'left',
    marginBottom: 15,
  },
});

export default MyLifeScreen;
