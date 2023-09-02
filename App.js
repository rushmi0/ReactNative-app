import React, {Component} from 'react'
import {StyleSheet} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

const Stack = createNativeStackNavigator();

export class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Home'
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
                    <Stack.Screen
                        name='Home'
                        component={HomeScreen}
                        options={{title:'Overview'}}
                        initialParams={{itemID: 42}}
                    />
                    <Stack.Screen
                        name='Details'
                        component={DetailsScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16
    },
})
