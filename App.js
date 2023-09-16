import 'react-native-gesture-handler';
import React from 'react';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';

import {
    View,
    Text,
    StyleSheet,
    Linking,
    Image,
    SafeAreaView
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const CustomSideBarMenu = (props) => {
    const BASE_PATH = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* top large image */}
            <Image
                source={require("./assets/react_logo.png")}
                style={styles.sideMenuProfileIcon}
            />

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Visit us"
                    onPress={() => Linking.openURL("https://it.tni.ac.th")}
                />

                <View style={styles.customItem}>
                    <Text onPress={ () => {Linking.openURL("https://tni.ac.th")} }>
                        Website TNI
                    </Text>

                    <Image
                        source={{uri: BASE_PATH + 'star_filled.png'}}
                        style={styles.iconStyle}
                    />
                </View>

            </DrawerContentScrollView>

            <Text style={{textAlign: 'center', fontSize: 16, color: "#6e6e6e"}}>
                www.tni.ac.th
            </Text>
        </SafeAreaView>
    );
}


function FirstScreen() {
    return (
        <Stack.Navigator
            initialRouteName="FisrtPage"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="First Page" component={FirstPage}/>

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
            <Stack.Screen name="Second Page" component={SecondPage}/>
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
            }}
            drawerContent={ (props) => <CustomSideBarMenu{...props}/>  }
        >
            <Drawer.Screen
                name="FirstDrawer"
                component={FirstScreen}
                options={{drawerLabel: 'First Page Option'}}
            />
            <Drawer.Screen
                name="SecondDrawer"
                component={SecondScreen}
                options={{drawerLabel: 'Second Page Option'}}
            />
        </Drawer.Navigator>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <MyDrawer/>
        </NavigationContainer>
    );
};

export default App;


const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

