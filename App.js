import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TouchablePractice from './components/TouchablePractice'
import Example_useEffect from './components/Example_useEffect'
import UseEffectFlatList from './components/UseEffectFlatList'

import RandomUsersScreen from './components/RandomUsersScreen'


const App = () => {
  return (
    <View>
      {/* <TouchablePractice/> */}
      {/* <Example_useEffect/> */}
      {/* <UseEffectFlatList/> */}

      <RandomUsersScreen/>
    </View>
  )
}

export default App

