import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { darkMode } from '../utils/theme/themeColors';

const ContactMeScreen = () => {
  const fullName = 'Frainer Alexander Encarnación';
  const email = 'fraineralex2001@gmail.com';
  const linkedIn = 'https://www.linkedin.com/in/fraineralex';
  const photo = { uri:'https://unavatar.io/fraineralex'};

  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.profilePhoto} />
      <Text style={styles.name}>{fullName}</Text>
      <Text style={styles.contactInfo}>Email: {email}</Text>
      <Text style={styles.contactInfo}>LinkedIn: {linkedIn}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkMode.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePhoto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: darkMode.secondary,
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 16,
    color: darkMode.secondary,
    marginBottom: 5,
  },
});

export default ContactMeScreen;
