import { Tabs } from 'expo-router';
import { FontAwesome, Entypo } from '@expo/vector-icons';
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
              <Entypo name="home" size={size*1.2} color={color} />
          </View>
          ),
          tabBarStyle: {borderTopWidth: 0},
          tabBarLabel: () => null,
          tabBarActiveBackgroundColor: darkMode.primary,
          headerTitle: 'Cover',
          //headerTitleStyle: {fontSize: 20},
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
          headerTitle: 'Characters',
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
