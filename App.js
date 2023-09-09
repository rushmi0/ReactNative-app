import React, {Component} from 'react'
import {StyleSheet} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'


import IndexScreen from './screens/IndexScreen'
import CreatePostScreen from './screens/CreatePostScreen'


const Stack = createNativeStackNavigator();

export class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    mode = 'model'
                    screenOptions={{
                        headerStyle:{
                            backgroundColor:'#008b8b'
                        },
                        headerTintColor:'#ffff',
                        headerTitleStyle:{
                            fontWeight:'bold',
                        }
                    }}
                >
                    {/*<Stack.Screen*/}
                    {/*    name='Home'*/}
                    {/*    component={HomeScreen}*/}
                    {/*    options={{title:'Overview'}}*/}
                    {/*    // initialParams={{itemID: 42}}*/}
                    {/*/>*/}
                    {/*<Stack.Screen*/}
                    {/*    name='Details'*/}
                    {/*    component={DetailsScreen}*/}
                    {/*/>*/}

                    <Stack.Screen
                        name='Index'
                        component={IndexScreen}
                        options={{title: 'MainPage'}}
                    />
                    <Stack.Screen
                        name='CreatePost'
                        component={CreatePostScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default App

