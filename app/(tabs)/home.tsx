import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import Carousel from 'react-native-snap-carousel';
import { darkMode } from '../utils/theme/themeColors';

const { width } = Dimensions.get('window');

const videos = [
  { id: '1', title: 'Deadpool', description: "This is one of the funniest movies I've ever seen in my life!", video: require('../assets/videos/cover.mp4') },
  { id: '2', title: 'Video 2', description: 'Description for video 2', video: require('../assets/videos/cover.mp4') },
  { id: '3', title: 'Video 3', description: 'Description for video 3', video: require('../assets/videos/cover.mp4') },
  // Agrega más objetos de video según tus necesidades
];

const Cover: React.FC = () => {
  const carouselRef = React.useRef(null);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.videoContainer}>
        <Video
          ref={video}
          style={styles.video}
          source={item.video}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          shouldPlay 
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={videos}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkMode.primary,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 360,
    height: 360,
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    color: darkMode.secondary,
    marginTop: 30,
    padding: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: darkMode.secondary,
    marginTop: 20,
  }
});

export default Cover;
