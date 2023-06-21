import { Tabs } from 'expo-router';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { darkMode } from '../utils/theme/themeColors';

export default () => {
  return (
    <Tabs
      tabBarOptions={{
        activeTintColor: darkMode.tabActive,
        inactiveTintColor: darkMode.tabInactive,
        style: {
          backgroundColor: darkMode.primary,
        },
        indicatorStyle: {
          backgroundColor: darkMode.secondary,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ marginBottom: focused ? -5 : 0 }}>
              <Entypo name="home" size={size} color={color} />
          </View>
          ),
          tabBarStyle: {borderTopWidth: 0},
          tabBarLabel: () => null,
          tabBarActiveBackgroundColor: darkMode.primary,
          tabBarInactiveBackgroundColor: darkMode.primary,
          headerTitleStyle: {fontSize: 20, fontWeight: 'bold', },
          headerTitle: 'COVER',
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: darkMode.headerBackground,
          },
          headerTintColor: darkMode.headerText,
        }}
      />
      <Tabs.Screen
        name="character"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ marginBottom: focused ? -5 : 0 }}>
              <FontAwesome name="group" size={size} color={color} />
            </View>
          ),
          tabBarStyle: {borderTopWidth: 0},
          tabBarLabel: () => null,
          tabBarActiveBackgroundColor: darkMode.primary,
          tabBarInactiveBackgroundColor: darkMode.primary,
          headerTitle: 'CHARACTERS',
          headerTitleStyle: {fontSize: 20, fontWeight: 'bold', },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: darkMode.headerBackground,
          },
          headerTintColor: darkMode.headerText,
        }}
      />
      <Tabs.Screen
        name="moments"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ marginBottom: focused ? -5 : 0 }}>
              <MaterialIcons name="movie-filter" size={size} color={color} />
            </View>
          ),
          tabBarStyle: {borderTopWidth: 0},
          tabBarLabel: () => null,
          tabBarActiveBackgroundColor: darkMode.primary,
          tabBarInactiveBackgroundColor: darkMode.primary,
          headerTitle: 'MOMENTS',
          headerTitleStyle: {fontSize: 20, fontWeight: 'bold', },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: darkMode.headerBackground,
          },
          headerTintColor: darkMode.headerText,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ marginBottom: focused ? -5 : 0 }}>
              <FontAwesome name="exclamation-circle" size={size} color={color} />
            </View>
          ),
          tabBarStyle: {borderTopWidth: 0},
          tabBarLabel: () => null,
          tabBarActiveBackgroundColor: darkMode.primary,
          tabBarInactiveBackgroundColor: darkMode.primary,
          headerTitle: 'ABOUT',
          headerTitleStyle: {fontSize: 20, fontWeight: 'bold', },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: darkMode.headerBackground,
          },
          headerTintColor: darkMode.headerText,
        }}
      />
      <Tabs.Screen
        name="life"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ marginBottom: focused ? -5 : 0 }}>
              <FontAwesome name="heart" size={size} color={color} />
            </View>
          ),
          tabBarStyle: {borderTopWidth: 0},
          tabBarLabel: () => null,
          tabBarActiveBackgroundColor: darkMode.primary,
          tabBarInactiveBackgroundColor: darkMode.primary,
          headerTitle: 'IN MY LIFE',
          headerTitleStyle: {fontSize: 20, fontWeight: 'bold', },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: darkMode.headerBackground,
          },
          headerTintColor: darkMode.headerText,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ marginBottom: focused ? -5 : 0 }}>
              <MaterialIcons name="contact-page" size={size} color={color} />
            </View>
          ),
          tabBarStyle: {borderTopWidth: 0},
          tabBarLabel: () => null,
          tabBarActiveBackgroundColor: darkMode.primary,
          tabBarInactiveBackgroundColor: darkMode.primary,
          headerTitle: 'HIRE ME',
          headerTitleStyle: {fontSize: 20, fontWeight: 'bold', },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: darkMode.headerBackground,
          },
          headerTintColor: darkMode.headerText,
        }}
      />
    </Tabs>
  );
};
