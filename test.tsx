import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Test() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
