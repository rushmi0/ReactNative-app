import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TouchablePractice from './components/TouchablePractice'
import Example_useEffect from './components/Example_useEffect'
import UseEffectFlatList from './components/UseEffectFlatList'

import RandomUsersScreen from './components/RandomUsersScreen'
import FlatList_Example1 from './components/FlatList_Example1'
import FlatListHeaderFooter from "./components/FlatList_HeaderFooter";

const App = () => {
  return (
    <View style={ {flex: 1, alignItems: "left"} }>
      {/* <TouchablePractice/> */}
      {/* <Example_useEffect/> */}
      {/* <UseEffectFlatList/> */}

      {/* <RandomUsersScreen/> */}
      {/*<FlatList_Example1/>*/}

      <FlatListHeaderFooter/>
    </View>
  )
}

export default App

