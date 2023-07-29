import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import ViewBoxesWithColorAndText from './components/ViewBoxesWithColorAndText';
import DisplayandImage from './components/DisplayandImage';
import LotOfGreeting from './components/LotOfGreeting';
import CustomText from './components/CustomText';
import Counter from './components/Counter';
import MyInput from './components/MyInput';
import IncrementCounter from './components/IncrementCounter'
import Form from './components/Form';
import Login from './components/Login'


export default function App() {
  return (
    <View style={styles.container}>

      {/* -- การสร้าง | basic component -- */}
      {/* <ViewBoxesWithColorAndText/> */}
      {/* <DisplayandImage/> */}
      {/* <LotOfGreeting/> */}
      {/* <CustomText/> */}

      {/* -- การสร้าง | state component -- */}
      {/* <Counter/> */}
      {/* <MyInput/> */}
      {/* <IncrementCounter/> */}
      {/* <Form/> */}

      {/* <Login/> */}


      <ViewBoxesWithColorAndText/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
