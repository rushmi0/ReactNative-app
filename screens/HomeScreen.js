import {View, Text, Button} from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            {/*<Text>Initial param : itemId - {itemID}{'\n'}</Text>*/}
            {/*<Button*/}
            {/*    title='Go to Details'*/}
            {/*    onPress={() => navigation.navigate('Details')}*/}
            {/*/>*/}

            <Text>{"\n"}</Text>
            <Button
                title='Update Param'
                onPress={ () => {
                    navigation.navigate('Details', {
                        itemID: 1088,
                        otherParm: "React Native App"
                    })
                } }
            />
        </View>
    )
}
export default HomeScreen
