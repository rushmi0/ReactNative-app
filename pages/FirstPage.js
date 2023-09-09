import {Button, Text, View, StyleSheet} from 'react-native'
import React from 'react'

const FirstPage = ({navigation}) => {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                style={styles.textStyle}
            >This is First page of the app</Text>
            <Button

                title='Go to Second Page'
                onPress={()=>(navigation.navigate('Second'))}
            />
        </View>
    )
}

export default FirstPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D3FF9B'
    },
    textStyle: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16
    },
})
