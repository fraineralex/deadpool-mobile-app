import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { darkMode } from '../utils/theme/themeColors';

const { width } = Dimensions.get('window');

const videos = [
  { id: '1', title: 'Deadpool', description: "This is one of the funniest movies I've ever seen in my life!", video: require('../assets/videos/cover.mp4') },
  { id: '2', title: 'Deadpool', description: "This is one of the funniest movies I've ever seen in my life!", video: require('../assets/videos/cover.mp4') },
  { id: '3', title: 'Deadpool', description: "This is one of the funniest movies I've ever seen in my life!", video: require('../assets/videos/cover.mp4') },
];

const Cover = () => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [videoStatus, setVideoStatus] = useState({});

  useEffect(() => {
    // Pausar el video anterior al cambiar de slide
    const previousVideoIndex = (activeSlide === 0 ? videos.length - 1 : activeSlide - 1);
    if (videoStatus[previousVideoIndex]) {
      videoStatus[previousVideoIndex].setStatusAsync({ shouldPlay: false });
    }

    // Reproducir el video actual al cambiar de slide
    if (videoStatus[activeSlide]) {
      videoStatus[activeSlide].setStatusAsync({ shouldPlay: true });
    }
  }, [activeSlide]);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.videoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Video
          ref={ref => {
            if (ref) {
              videoStatus[index] = ref;
            }
          }}
          style={styles.video}
          source={item.video}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          shouldPlay={index === activeSlide}
        />
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
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={videos.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
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
    marginBottom: 40,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: darkMode.secondary,
  },
});

export default Cover;
