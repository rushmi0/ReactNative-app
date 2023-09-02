import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TouchablePractice from './components/TouchablePractice'
import Example_useEffect from './components/Example_useEffect'
import UseEffectFlatList from './components/UseEffectFlatList'

import RandomUsersScreen from './components/RandomUsersScreen'
import FlatList_Example1 from './components/FlatList_Example1'
import FlatListHeaderFooter from "./components/FlatList_HeaderFooter";
import FlastListApi from "./components/FlastListAPI";
import News from "./components/News";
import ProductScreen from "./components/ProductScreen";

const App = () => {
  return (
    <View style={ {flex: 1, alignItems: "left"} }>
      {/* <TouchablePractice/> */}
      {/* <Example_useEffect/> */}
      {/* <UseEffectFlatList/> */}

      {/* <RandomUsersScreen/> */}
      {/*<FlatList_Example1/>*/}

      {/*<FlatListHeaderFooter/>*/}
      {/*<FlastListApi/>*/}
      {/* <News/>*/}

        <ProductScreen/>
    </View>
  )
}

export default App

