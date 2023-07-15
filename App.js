import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import ViewBoxesWithColorAndText from './components/ViewBoxesWithColorAndText';
import DisplayandImage from './components/DisplayandImage';
import LotOfGreeting from './components/LotOfGreeting';
import CustomText from './components/CustomText';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <ViewBoxesWithColorAndText/> */}
      {/* <DisplayandImage/> */}
      {/* <LotOfGreeting/> */}
      <CustomText/>
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
