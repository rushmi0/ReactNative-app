import {View, Text, Button} from 'react-native'
import React from 'react'

const DetailsScreen = ({ route, navigation }) => {

    // 2. Get the Param
    const {itemID,  otherParm} = route.params

    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Detail Screen</Text>
            <Text>itemIDL {JSON.stringify((itemID))}</Text>
            <Text>otherParam: {JSON.stringify(otherParm)}</Text>

            <Text>{'\n'}</Text>

            <Button
                title='Go to Details.... agian'
                onPress={ () => navigation.push('Details', {
                    itemID: Math.floor(Math.random()*100),
                    otherParam: 'anything you want here'
                }) }
            />

            <Button
                title='Go to Home'
                onPress ={ ()=>navigation.navigate('Home')}
            />

            <Button
                title='Go to Back'
                onPress ={ ()=>navigation.goBack()}
            />
        </View>
    )
}
export default DetailsScreen
