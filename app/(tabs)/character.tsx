import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { darkMode } from '../utils/theme/themeColors';
import { characters } from '../utils/characters';

const Character = ({ name, photo, detail, onPress }) => (
  <TouchableOpacity style={styles.characterContainer} onPress={onPress}>
    <Image source={photo} style={styles.characterPhoto} />
    <Text style={styles.characterName}>{name}</Text>
  </TouchableOpacity>
);

const CharactersScreen = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterPress = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
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

      <Modal visible={selectedCharacter !== null} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedCharacter && (
            <>
              <Image source={selectedCharacter.photo} style={styles.modalCharacterPhoto} />
              <Text style={styles.modalCharacterName}>{selectedCharacter.name}</Text>
              <Text style={styles.modalCharacterDetail}>{selectedCharacter.detail}</Text>
              <Button title="Close" onPress={handleCloseModal} />
            </>
          )}
        </View>
      </Modal>
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
  charactersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  characterContainer: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 20,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkMode.primary,
    paddingHorizontal: 20,
  },
  modalCharacterPhoto: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  modalCharacterName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: darkMode.secondary,
    marginTop: 20,
  },
  modalCharacterDetail: {
    fontSize: 16,
    color: darkMode.secondary,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default CharactersScreen;
