import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, {useState} from 'react'

const Form = () => {

  const [text, setText] = useState('Taylor');
  const [age, setAge] = useState(42);

  return (
    <View style={styles.container}>
        
        <TextInput
            placeholder = 'Enter Your Name'
            style={styles.textInputStyle}
            value={text}
            onChangeText={(value) => {setText(value)}}
      />
      <Text>{'\n'}</Text>

      <Button 
            title='INCREMENT'
            onPress={() => {setAge(age+1)}}
      />

<Text>{'\n\n'}Hello,{text}. You are {age}.</Text>

    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },

    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15
    }
})