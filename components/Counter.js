import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Counter = () => {

  const [count,  setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button 
        // * ตั้งชื่อบนปุ่มกด
        title='Click Me'

        // * กำหนดการทำงานหลังจาดกดปุ่ม ให้ทำงานอย่างไร
        onPress={() => {setCount(count+1)}}
      />
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})