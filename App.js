import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {enableLatestRenderer} from 'react-native-maps';
import React from 'react';
import MapView from 'react-native-maps';

enableLatestRenderer();

export default function App() {
  return (
    <View style={styles.container}>
        <Map />
    </View>
  );
}

function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
