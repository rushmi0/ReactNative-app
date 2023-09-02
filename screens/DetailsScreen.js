import {View, Text, Button} from 'react-native'
import React from 'react'

const DetailsScreen = ({navigation}) => {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Detail Screen</Text>
            <Text>{'\n'}</Text>

            <Button
                title='Go to Details.... agian'
                onPress={ () => navigation.push('Details')}
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
