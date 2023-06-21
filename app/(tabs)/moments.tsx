import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Modal, Button, ScrollView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { darkMode } from '../utils/theme/themeColors';

const moments = [
  {
    id: '1',
    title: 'Moment 1',
    video: require('../assets/videos/cover.mp4'),
  },
  {
    id: '2',
    title: 'Moment 2',
    video: require('../assets/videos/cover.mp4'),
  },
  {
    id: '3',
    title: 'Moment 3',
    video: require('../assets/videos/cover.mp4'),
  },
];

const Moment = ({ title, video, onPress }) => {
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
    marginBottom: 20,
  },
  modalMomentVideo: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
});

export default MomentsScreen;
