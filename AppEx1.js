import {View, Text} from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstPage from "./pages/FirstPage";


const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='FirstPage'
                    component={FirstPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App
