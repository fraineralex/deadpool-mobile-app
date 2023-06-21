import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Modal, Button, ScrollView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { darkMode } from '../utils/theme/themeColors';

const moments = [
  {
    id: '1',
    title: '1. Deadpool Maximum Effort',
    video: require('../assets/videos/moment2.mp4'),
    description: 'In this intense scene, Deadpool demonstrates his maximum effort by taking down a group of bad guys in a spectacular fashion.',
  },
  {
    id: '2',
    title: '2. Deadpool vs Francis',
    video: require('../assets/videos/moment1.mp4'),
    description: 'Witness the epic showdown between Deadpool and Francis as they engage in a fierce battle filled with action and humor.',
  },
  {
    id: '3',
    title: '3. Domino vs Cable',
    video: require('../assets/videos/moment3.mp4'),
    description: 'Watch as Domino and Cable face off in a thrilling confrontation, showcasing their unique abilities and determination.',
  },
];

const Moment = ({ title, video, description, onPress }) => {
  const [isVideoPreviewReady, setIsVideoPreviewReady] = useState(false);

  const handleVideoPreviewReady = () => {
    setIsVideoPreviewReady(true);
  };

  return (
    <TouchableOpacity style={styles.momentContainer} onPress={onPress}>
      <Video
        source={video}
        style={styles.momentVideo}
        resizeMode={ResizeMode.COVER}
        shouldPlay={false}
        isLooping={false}
        useNativeControls={false}
        onLoad={handleVideoPreviewReady}
      />
      {!isVideoPreviewReady && <View style={styles.momentOverlay} />}
      <Text style={styles.momentTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const MomentsScreen = () => {
  const [selectedMoment, setSelectedMoment] = useState(null);

  const handleMomentPress = (moment) => {
    setSelectedMoment(moment);
  };

  const handleCloseModal = () => {
    setSelectedMoment(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.momentsContainer}>
          {moments.map((moment) => (
            <Moment
              key={moment.id}
              title={moment.title}
              video={moment.video}
              onPress={() => handleMomentPress(moment)}
            />
          ))}
        </View>
      </ScrollView>

      <Modal visible={selectedMoment !== null} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedMoment && (
            <>
              <Text style={styles.modalMomentTitle}>{selectedMoment.title}</Text>
              <Video
                source={selectedMoment.video}
                style={styles.modalMomentVideo}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                shouldPlay
              />
              <Text style={styles.modalMomentDescription}>{selectedMoment.description}</Text>
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
  momentsContainer: {
    marginTop: 20,
  },
  momentContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  momentVideo: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  momentOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: darkMode.primary,
    borderRadius: 8,
  },
  momentTitle: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: darkMode.secondary,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: darkMode.primary,
    padding: 20,
  },
  modalMomentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: darkMode.secondary,
    marginBottom: 10,
  },
  modalMomentVideo: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  modalMomentDescription: {
    fontSize: 16,
    color: darkMode.secondary,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default MomentsScreen;
