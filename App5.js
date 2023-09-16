import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function FirstScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#7DEFB7',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen name="First Page" component={FirstPage} />
        </Stack.Navigator>
    );
}

function SecondScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#7DEFB7',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen name="Second Page" component={SecondPage} />
        </Stack.Navigator>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#FAF7F0',
                    width: 240,
                },
            }}>
            <Drawer.Screen
                name="FirstDrawer"
                component={FirstScreen}
                options={{ drawerLabel: 'First Page Option' }}
            />
            <Drawer.Screen
                name="SecondDrawer"
                component={SecondScreen}
                options={{ drawerLabel: 'Second Page Option' }}
            />
        </Drawer.Navigator>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
};

export default App;
