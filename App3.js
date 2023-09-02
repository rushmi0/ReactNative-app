import {Text, View, Button} from 'react-native'
import React, {Component} from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DetailsScreen from "./screens/DetailsScreen";
import HomeScreen from "./screens/HomeScreen";


// const HomeScreen = ({navigation}) => {
//     return (
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text>Home Screen</Text>
//             <Button
//                 title='Go to Details'
//                 onPress={ () => navigation.navigate('Details')}
//             />
//         </View>
//     )
// }
//
// const DetailScreen = () => {
//     return (
//         <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text>Detail Screen</Text>
//         </View>
//     )
// }

export class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Home'
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#008b8b'
                        },
                        headerTintColor: '#ffff',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        }
                    }}
                >


                    <Stack.Screen
                        name='Home'
                        component={HomeScreen}
                        options={{title: 'Overview'}}
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


const Stack = createNativeStackNavigator()

export default App
