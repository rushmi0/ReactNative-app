import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from "./components/Cat";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welome to อุ้ อุ้ อ๊า อ๊า อุก่ะ อุก่ะ</Text>
      <StatusBar style="auto" />
      <Cat/>
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
});
