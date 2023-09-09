import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'


const ViewBoxesWithColorAndText = () => {


const checkTextinput = () => {
  // Check for the Name TextInput
  if (!textInpuPass.trim()) {
      alert('Please Enter Name');
      return;
  }
  if (!textInputEmail.trim()) {
      alert('Please Enter Email');
      return;
  }
  if (!textInputEmail.trim()) {
      alert('Please Enter Email');
      return;
  }
  alert(
    'Email: ' + textInputEmail +
    '\nPassword: ' + textInpuPass
  );
}

  const [textInputEmail, setTextInputEmail] = useState('');
  const [textInpuPass, setTextInputPass] = useState('');

  return (
    <View style={styles.container}>
      {/* <Text>ViewBoxesWithColorAndText</Text> */}

      <TextInput
          placeholder='Email'
          style={styles.input}
          value={textInputEmail}
          onChangeText={ (value) => {setTextInputEmail(value)} }
      />
      <Text>{'\n'}</Text>


      <TextInput
          placeholder='Password'
          style={styles.input}
          value={textInpuPass}
          onChangeText={ (value) => {setTextInputPass(value)} }
      />
      <Text>{'\n'}</Text>


      <Button
          title='SUBMIT'
          style={styles.submitButton}
          onPress={ () => {checkTextinput()} }
      />

    </View>
  )
}

export default ViewBoxesWithColorAndText

const styles = StyleSheet.create({
    container: {
      paddingTop: 23
    },
    input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
    },
    submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40
    },
    submitButtonText: {
      color: 'white'
    }
});
