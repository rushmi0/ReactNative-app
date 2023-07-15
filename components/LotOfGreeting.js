import { View, Text } from 'react-native'
import React from 'react'


const Greeting = (prop) => {
    return (
        <View>
            <Text>Hello {prop.name}</Text>
        </View>
    )
}

const LotOfGreeting = () => {
  return (
    <View style={{alignItems: 'center', top: 50}}>
        <Greeting name="Marry Christmas"/>
        <Greeting name="ชาว บินละบอง"/>
        <Greeting name="นึงแล้วมึงต้องอ่าน"/>
    </View>
  )
}

export default LotOfGreeting