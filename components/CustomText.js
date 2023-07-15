import { View, Text } from 'react-native'
import React from 'react'


const MyCustomTextWith = ({fName, lname}) => {
  return (
      <View>
          <Text>Your Frist Name is {fName} and Last name is {lname}</Text>
      </View>
  )
}



const CustomText = () => {
  return (
    <View style={{alignItems: 'center', top: 50}}>
      <MyCustomTextWith fName="วัชรพล" lname="พงษ์วิลัย"/>
      <MyCustomTextWith fName="สมชาย" lname="ใจเกเร"/>
    </View>
  )
}

export default CustomText