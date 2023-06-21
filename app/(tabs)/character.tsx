import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { darkMode } from '../utils/theme/themeColors';

const characters = [
  {
    name: 'Deadpool',
    photo: { uri: 'https://th.bing.com/th/id/R.6fc919e434731e38db740adb2f66cb12?rik=cHyjkzGePDtqoA&pid=ImgRaw&r=0' },
    detail: 'Wade Wilson, also known as Deadpool, is a mercenary with accelerated regenerative abilities and a unique sense of humor.',
  },
  {
    name: 'Cable',
    photo: { uri: 'https://th.bing.com/th/id/R.bc1f20f3d24cabde5a76cdde35359f65?rik=4WA2sQWuwS61vw&pid=ImgRaw&r=0' },
    detail: 'Cable, whose real name is Nathan Summers, is a mutant from the future with telepathic and telekinetic abilities, as well as expertise in hand-to-hand combat.',
  },
  {
    name: 'Domino',
    photo: { uri: 'https://th.bing.com/th/id/R.899c40b8dfb280c9fdae79ebc5e5973e?rik=a9vIOdXGv4k%2baA&pid=ImgRaw&r=0' },
    detail: 'Domino, whose real name is Neena Thurman, is a mutant with the ability to alter probabilities in her favor, granting her supernatural combat and luck skills.',
  },
];

const Character = ({ name, photo, detail }) => (
  <TouchableOpacity style={styles.characterContainer}>
    <Image source={photo} style={styles.characterPhoto} />
    <Text style={styles.characterName}>{name}</Text>
  </TouchableOpacity>
);

const CharactersScreen = () => {
  const handleCharacterPress = (character) => {
    // Implement the logic to display the selected character's detail
    console.log(character);
  };

  return (
    <View style={styles.container}>
      <View style={styles.charactersContainer}>
        {characters.map((character, index) => (
          <Character
            key={index}
            name={character.name}
            photo={character.photo}
            detail={character.detail}
            onPress={() => handleCharacterPress(character)}
          />
        ))}
      </View>
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
    marginBottom: 20,
  },
  charactersContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 40,
    marginTop: 20,
  },
  characterContainer: {
    alignItems: 'center',
  },
  characterPhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  characterName: {
    fontSize: 16,
    color: darkMode.secondary,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default CharactersScreen;
